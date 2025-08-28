#include <WiFi.h>
#include <WebServer.h>
#include <HardwareSerial.h>
#include <ArduinoJson.h>

// UART1 en ESP32
HardwareSerial UART1(2);
const int RX2_PIN = 16;   // ESP32 RX2 <- Mega TX2
const int TX2_PIN = 17;   // ESP32 TX2 -> Mega RX2
const long MEGA_BAUD = 115200;

// WiFi
const char* ssid = "Senpai";
const char* password = "01234567";

WebServer server(80);

#ifndef LED_BUILTIN
#define LED_BUILTIN 2
#endif

// Variables del sistema
String megaLine;
String ultimoEstadoMega = "";
String ultimoEstadoUno = "";
unsigned long lastPingMs = 0;
unsigned long lastConnectionCheck = 0;
bool modoSeguridad = true;
bool modoLento = true;
bool megaConectado = false;
bool unoConectado = false;

// Posiciones actuales de los brazos (BI, FI, HI, BD, FD, HD, PD)
int posActualBrazos[7] = {10, 80, 80, 40, 90, 80, 45};
String nombresBrazos[7] = {"Brazo Izq", "Frente Izq", "High Izq", "Brazo Der", "Frente Der", "High Der", "Pollo Der"};
// Rangos seguros según MEGA: BI(10-30), FI(60-120), HI(70-90), BD(30-55), FD(70-110), HD(70-90), PD(0-90)
int limitesBrazos[7][2] = {{10, 30}, {60, 120}, {70, 90}, {30, 55}, {70, 110}, {70, 90}, {0, 90}};

// Posiciones actuales de las manos
int posActualManos[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0}; // 5 dedos mano derecha + 5 dedos mano izquierda
String nombresDedos[10] = {"D-Pulgar", "D-Índice", "D-Medio", "D-Anular", "D-Meñique", 
                           "I-Pulgar", "I-Índice", "I-Medio", "I-Anular", "I-Meñique"};
int limitesDedos[10][2] = {{0, 120}, {0, 120}, {0, 120}, {0, 120}, {0, 120},
                           {0, 120}, {0, 120}, {0, 120}, {0, 120}, {0, 120}};

// Posiciones actuales de las muñecas
int posActualMuñecas[2] = {80, 80}; // Derecha, Izquierda
String nombresMuñecas[2] = {"Muñeca Der", "Muñeca Izq"};
int limitesMuñecas[2][2] = {{0, 160}, {0, 160}};

// Posiciones actuales del cuello (Lateral, Inferior, Superior)
int posActualCuello[3] = {155, 95, 110}; 
String nombresCuello[3] = {"Lateral", "Inferior", "Superior"};
// Rangos seguros según MEGA: L(120-160), I(60-130), S(109-110)
int limitesCuello[3][2] = {{120, 160}, {60, 130}, {109, 110}};

// Posiciones de descanso (según MEGA)
const int POS_DESCANSO_BRAZOS[7] = {10, 80, 80, 40, 90, 80, 45}; // BI, FI, HI, BD, FD, HD, PD
const int POS_DESCANSO_CUELLO[3] = {155, 95, 110}; // L, I, S

// Configuración de seguridad
const int VELOCIDAD_LENTA = 50;  // ms entre movimientos
const int VELOCIDAD_NORMAL = 20; // ms entre movimientos

// Utilidades
void sendToMega(const String &msg) {
  UART1.print(msg);
  if (!msg.endsWith("\n")) UART1.print("\n");
  Serial.print("[TX MEGA] ");
  Serial.println(msg);
}

String jsonEscape(const String &s) {
  String out;
  for (size_t i = 0; i < s.length(); i++) {
    char c = s[i];
    if (c == '\\' || c == '"') { out += '\\'; out += c; }
    else if (c == '\n') { out += "\\n"; }
    else if (c == '\r') { /* skip */ }
    else { out += c; }
  }
  return out;
}

// Comprobador de conexiones
void checkConnections() {
  if (millis() - lastConnectionCheck > 3000) {
    lastConnectionCheck = millis();
    
    // Ping al MEGA
    sendToMega("PING");
    
    // El UNO se comunica a través del MEGA
    sendToMega("UNO:PING");
  }
}

// Función para sincronizar estado de seguridad con el MEGA
void sincronizarSeguridad() {
  String comandoSeguridad = modoSeguridad ? "SEGURIDAD ON" : "SEGURIDAD OFF";
  sendToMega(comandoSeguridad);
  Serial.println("Sincronizando seguridad con MEGA: " + String(modoSeguridad ? "ACTIVADA" : "DESACTIVADA"));
}

// Función de seguridad para validar movimientos
bool validarMovimiento(const String& tipo, int valor, int min, int max) {
  if (!modoSeguridad) return true;
  
  if (valor < min || valor > max) {
    Serial.print("MOVIMIENTO BLOQUEADO: ");
    Serial.print(tipo);
    Serial.print(" = ");
    Serial.print(valor);
    Serial.print(" (rango: ");
    Serial.print(min);
    Serial.print("-");
    Serial.print(max);
    Serial.println(")");
    return false;
  }
  return true;
}

// Función para enviar comandos con modo lento
void enviarComandoLento(const String& comando) {
  if (modoLento) {
    sendToMega(comando + " VEL=" + String(VELOCIDAD_LENTA));
  } else {
    sendToMega(comando + " VEL=" + String(VELOCIDAD_NORMAL));
  }
}

// ===== FUNCIONES DE CONTROL =====

// Función de posición de descanso
void posicionDescanso() {
  Serial.println("🔄 Moviendo robot a posición de descanso...");
  
  // Mover brazos a posición de descanso
  controlarBrazos(POS_DESCANSO_BRAZOS[0], POS_DESCANSO_BRAZOS[1], POS_DESCANSO_BRAZOS[2],
                  POS_DESCANSO_BRAZOS[3], POS_DESCANSO_BRAZOS[4], POS_DESCANSO_BRAZOS[5], POS_DESCANSO_BRAZOS[6]);
  
  // Mover cuello a posición de descanso
  controlarCuello(POS_DESCANSO_CUELLO[0], POS_DESCANSO_CUELLO[1], POS_DESCANSO_CUELLO[2]);
  
  // Abrir ambas manos
  // controlarMano("ambas", "abrir");
  
  // Actualizar posiciones actuales
  for (int i = 0; i < 7; i++) {
    posActualBrazos[i] = POS_DESCANSO_BRAZOS[i];
  }
  for (int i = 0; i < 3; i++) {
    posActualCuello[i] = POS_DESCANSO_CUELLO[i];
  }
  for (int i = 0; i < 10; i++) {
    posActualManos[i] = (i < 5) ? 0 : 90; // Derecha abierta, izquierda cerrada
  }
  
  Serial.println("✅ Robot en posición de descanso");
}

// Control de Manos
void controlarMano(const String& mano, const String& accion, int angulo = -1) {
  String comando = "MANO M=" + mano + " A=" + accion;
  if (angulo >= 0) comando += " ANG=" + String(angulo);
  enviarComandoLento(comando);
  
  // Actualizar posiciones de manos según el gesto
  if (accion == "abrir") {
    if (mano == "derecha" || mano == "ambas") {
      for (int i = 0; i < 5; i++) posActualManos[i] = 0;
    }
    if (mano == "izquierda" || mano == "ambas") {
      for (int i = 5; i < 10; i++) posActualManos[i] = 120;
    }
  }
  else if (accion == "cerrar") {
    if (mano == "derecha" || mano == "ambas") {
      for (int i = 0; i < 5; i++) posActualManos[i] = 120;
    }
    if (mano == "izquierda" || mano == "ambas") {
      for (int i = 5; i < 10; i++) posActualManos[i] = 0;
    }
  }
}

// Control de Dedos
void controlarDedo(const String& mano, const String& dedo, int angulo) {
  if (!validarMovimiento("dedo", angulo, 0, 180)) return;
  
  // Actualizar posición actual del dedo
  int indice = obtenerIndiceDedo(mano, dedo);
  if (indice >= 0) {
    posActualManos[indice] = angulo;
  }
  
  String comando = "DEDO M=" + mano + " D=" + dedo + " ANG=" + String(angulo);
  enviarComandoLento(comando);
}

// Función auxiliar para obtener el índice del dedo en el array
int obtenerIndiceDedo(const String& mano, const String& dedo) {
  int base = (mano == "derecha") ? 0 : 5;
  if (dedo == "pulgar") return base + 0;
  if (dedo == "indice") return base + 1;
  if (dedo == "medio") return base + 2;
  if (dedo == "anular") return base + 3;
  if (dedo == "menique") return base + 4;
  return -1;
}

// Control de Cuello
void controlarCuello(int lateral, int inferior, int superior) {
  if (!validarMovimiento("lateral", lateral, 120, 190) ||
      !validarMovimiento("inferior", inferior, 60, 130) ||
      !validarMovimiento("superior", superior, 90, 120)) return;
  
  // Actualizar posiciones actuales
  posActualCuello[0] = lateral;
  posActualCuello[1] = inferior;
  posActualCuello[2] = superior;
  
  String comando = "CUELLO L=" + String(lateral) + " I=" + String(inferior) + " S=" + String(superior);
  enviarComandoLento(comando);
}

// Control de Muñecas
void controlarMuñeca(const String& mano, int angulo) {
  if (!validarMovimiento("muñeca", angulo, 0, 160)) return;
  
  // Actualizar posición actual de la muñeca
  int indice = (mano == "derecha") ? 0 : 1;
  posActualMuñecas[indice] = angulo;
  
  String comando = "MUNECA M=" + mano + " ANG=" + String(angulo);
  enviarComandoLento(comando);
}

// Control de Brazos
void controlarBrazos(int bi, int fi, int hi, int bd, int fd, int hd, int pd) {
  if (!validarMovimiento("brazo_izq", bi, 10, 30) ||
      !validarMovimiento("frente_izq", fi, 60, 120) ||
      !validarMovimiento("high_izq", hi, 70, 90) ||
      !validarMovimiento("brazo_der", bd, 30, 55) ||
      !validarMovimiento("frente_der", fd, 70, 110) ||
      !validarMovimiento("high_der", hd, 70, 90) ||
      !validarMovimiento("pollo_der", pd, 0, 90)) return;
  
  // Actualizar posiciones actuales
  posActualBrazos[0] = bi;
  posActualBrazos[1] = fi;
  posActualBrazos[2] = hi;
  posActualBrazos[3] = bd;
  posActualBrazos[4] = fd;
  posActualBrazos[5] = hd;
  posActualBrazos[6] = pd;
  
  String comando = "BRAZOS BI=" + String(bi) + " FI=" + String(fi) + " HI=" + String(hi) + 
                   " BD=" + String(bd) + " FD=" + String(fd) + " HD=" + String(hd) + " PD=" + String(pd);
  enviarComandoLento(comando);
}

// Gestos predefinidos
void gestoPaz(const String& mano) {
  controlarMano(mano, "PAZ");
  
  // Actualizar posiciones para gesto de paz
  if (mano == "derecha" || mano == "ambas") {
    posActualManos[0] = 0;  // Pulgar
    posActualManos[1] = 0;  // Índice
    posActualManos[2] = 180; // Medio
    posActualManos[3] = 180; // Anular
    posActualManos[4] = 180; // Meñique
  }
  if (mano == "izquierda" || mano == "ambas") {
    posActualManos[5] = 180; // Pulgar
    posActualManos[6] = 180; // Índice
    posActualManos[7] = 0;   // Medio
    posActualManos[8] = 0;   // Anular
    posActualManos[9] = 0;   // Meñique
  }
}

void gestoRock(const String& mano) {
  controlarMano(mano, "ROCK");
}

void gestoOK(const String& mano) {
  controlarMano(mano, "OK");
}

void gestoSeñalar(const String& mano) {
  controlarMano(mano, "SENALAR");
}

// ===== FUNCIONES DE CONTROL CON FLECHAS =====

// Control de brazos con flechas
void moverBrazoConFlecha(int indice, int direccion) {
  if (indice < 0 || indice >= 7) return;
  
  int nuevaPos = posActualBrazos[indice] + (direccion * 5); // Incremento de 5 grados
  int min = limitesBrazos[indice][0];
  int max = limitesBrazos[indice][1];
  
  if (nuevaPos >= min && nuevaPos <= max) {
    posActualBrazos[indice] = nuevaPos;
    controlarBrazos(posActualBrazos[0], posActualBrazos[1], posActualBrazos[2], 
                    posActualBrazos[3], posActualBrazos[4], posActualBrazos[5], posActualBrazos[6]);
  }
}

// Control de dedos con flechas
void moverDedoConFlecha(int indice, int direccion) {
  if (indice < 0 || indice >= 10) return;
  
  int nuevaPos = posActualManos[indice] + (direccion * 10); // Incremento de 10 grados
  int min = limitesDedos[indice][0];
  int max = limitesDedos[indice][1];
  
  if (nuevaPos >= min && nuevaPos <= max) {
    posActualManos[indice] = nuevaPos;
    
    // Determinar mano y dedo
    String mano = (indice < 5) ? "derecha" : "izquierda";
    String dedo;
    int dedoIndice = indice % 5;
    switch(dedoIndice) {
      case 0: dedo = "pulgar"; break;
      case 1: dedo = "indice"; break;
      case 2: dedo = "medio"; break;
      case 3: dedo = "anular"; break;
      case 4: dedo = "menique"; break;
    }
    
    controlarDedo(mano, dedo, nuevaPos);
  }
}

// Control de cuello con flechas
void moverCuelloConFlecha(int indice, int direccion) {
  if (indice < 0 || indice >= 3) return;
  
  int nuevaPos = posActualCuello[indice] + (direccion * 5); // Incremento de 5 grados
  int min = limitesCuello[indice][0];
  int max = limitesCuello[indice][1];
  
  if (nuevaPos >= min && nuevaPos <= max) {
    posActualCuello[indice] = nuevaPos;
    controlarCuello(posActualCuello[0], posActualCuello[1], posActualCuello[2]);
  }
}

// Control de muñecas con flechas
void moverMuñecaConFlecha(int indice, int direccion) {
  if (indice < 0 || indice >= 2) return;
  
  int nuevaPos = posActualMuñecas[indice] + (direccion * 10); // Incremento de 10 grados
  int min = limitesMuñecas[indice][0];
  int max = limitesMuñecas[indice][1];
  
  if (nuevaPos >= min && nuevaPos <= max) {
    posActualMuñecas[indice] = nuevaPos;
    
    // Determinar mano
    String mano = (indice == 0) ? "derecha" : "izquierda";
    controlarMuñeca(mano, nuevaPos);
  }
}

// Función para actualizar posiciones desde respuestas del MEGA
void actualizarPosicionesDesdeRespuesta(const String& respuesta) {
  // Actualizar brazos
  if (respuesta.indexOf("BI=") >= 0) {
    int bi = extraerValor(respuesta, "BI=");
    int fi = extraerValor(respuesta, "FI=");
    int hi = extraerValor(respuesta, "HI=");
    int bd = extraerValor(respuesta, "BD=");
    int fd = extraerValor(respuesta, "FD=");
    int hd = extraerValor(respuesta, "HD=");
    int pd = extraerValor(respuesta, "PD=");
    
    if (bi >= 0) posActualBrazos[0] = bi;
    if (fi >= 0) posActualBrazos[1] = fi;
    if (hi >= 0) posActualBrazos[2] = hi;
    if (bd >= 0) posActualBrazos[3] = bd;
    if (fd >= 0) posActualBrazos[4] = fd;
    if (hd >= 0) posActualBrazos[5] = hd;
    if (pd >= 0) posActualBrazos[6] = pd;
  }
  
  // Actualizar cuello
  if (respuesta.indexOf("L=") >= 0) {
    int l = extraerValor(respuesta, "L=");
    int i = extraerValor(respuesta, "I=");
    int s = extraerValor(respuesta, "S=");
    
    if (l >= 0) posActualCuello[0] = l;
    if (i >= 0) posActualCuello[1] = i;
    if (s >= 0) posActualCuello[2] = s;
  }
}

// Función auxiliar para extraer valores de las respuestas
int extraerValor(const String& texto, const String& parametro) {
  int index = texto.indexOf(parametro);
  if (index == -1) return -1;
  
  int start = index + parametro.length();
  int end = texto.indexOf(" ", start);
  if (end == -1) end = texto.length();
  
  return texto.substring(start, end).toInt();
}

// Función para actualizar posiciones de manos desde respuestas del UNO
void actualizarPosicionesManosDesdeRespuesta(const String& respuesta) {
  // Extraer información del dedo movido
  String mano = "";
  String dedo = "";
  int angulo = -1;
  
  // Buscar mano
  if (respuesta.indexOf("mano derecha") >= 0) mano = "derecha";
  else if (respuesta.indexOf("mano izquierda") >= 0) mano = "izquierda";
  
  // Buscar dedo
  if (respuesta.indexOf("pulgar") >= 0) dedo = "pulgar";
  else if (respuesta.indexOf("indice") >= 0) dedo = "indice";
  else if (respuesta.indexOf("medio") >= 0) dedo = "medio";
  else if (respuesta.indexOf("anular") >= 0) dedo = "anular";
  else if (respuesta.indexOf("menique") >= 0) dedo = "menique";
  
  // Buscar ángulo
  int angIndex = respuesta.indexOf("a ");
  if (angIndex >= 0) {
    int endIndex = respuesta.indexOf("°", angIndex);
    if (endIndex >= 0) {
      angulo = respuesta.substring(angIndex + 2, endIndex).toInt();
    }
  }
  
  // Actualizar posición si tenemos toda la información
  if (mano.length() > 0 && dedo.length() > 0 && angulo >= 0) {
    int indice = obtenerIndiceDedo(mano, dedo);
    if (indice >= 0) {
      posActualManos[indice] = angulo;
    }
  }
}

// ===== INTERFAZ WEB =====

void handleRoot() {
  String html = "<!DOCTYPE html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'>";
  html += "<title>Robot Control - ESP32</title>";
  html += "<style>";
  html += "body{font-family:Arial;margin:16px;background:#f5f5f5}";
  html += ".container{max-width:1200px;margin:0 auto;background:white;padding:20px;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.1)}";
  html += ".header{text-align:center;border-bottom:2px solid #007bff;padding-bottom:10px;margin-bottom:20px}";
  html += ".status{display:flex;justify-content:space-around;margin:20px 0;padding:15px;background:#f8f9fa;border-radius:8px}";
  html += ".status-item{text-align:center}";
  html += ".status-online{color:green;font-weight:bold}";
  html += ".status-offline{color:red;font-weight:bold}";
  html += ".section{background:#f8f9fa;padding:15px;margin:10px 0;border-radius:8px;border-left:4px solid #007bff}";
  html += "button{margin:4px;padding:8px 12px;border:none;border-radius:4px;cursor:pointer;background:#007bff;color:white}";
  html += "button:hover{background:#0056b3}";
  html += "button.danger{background:#dc3545}";
  html += "button.danger:hover{background:#c82333}";
  html += "button.success{background:#28a745}";
  html += "button.success:hover{background:#218838}";
  html += "input,select{margin:4px;padding:6px;border:1px solid #ddd;border-radius:4px}";
  html += ".control-group{margin:10px 0}";
  html += ".debug{background:#000;color:#0f0;padding:10px;border-radius:4px;font-family:monospace;max-height:300px;overflow-y:auto}";
  html += ".brazo-control,.cuello-control,.dedo-control{background:#f8f9fa;padding:10px;border-radius:8px;text-align:center;border:1px solid #dee2e6}";
  html += ".posicion-display{background:#007bff;color:white;padding:5px;border-radius:4px;margin:5px 0;font-weight:bold}";
  html += ".flechas{display:flex;justify-content:center;gap:5px;margin-top:5px}";
  html += ".flechas button{width:40px;height:40px;font-size:16px}";
  html += "h4,h5{margin:5px 0;color:#495057}";
  html += "</style></head><body>";
  
  html += "<div class='container'>";
  html += "<div class='header'>";
  html += "<h1>🤖 Robot Control System</h1>";
  html += "<p>IP: <b>" + WiFi.localIP().toString() + "</b> | WiFi: <b>" + (WiFi.status()==WL_CONNECTED?"Conectado":"Desconectado") + "</b></p>";
  html += "</div>";

  // Estado de conexiones
  html += "<div class='status'>";
  html += "<div class='status-item'>";
  html += "<h3>MEGA</h3>";
  html += "<span class='" + String(megaConectado ? "status-online" : "status-offline") + "'>";
  html += megaConectado ? "🟢 Conectado" : "🔴 Desconectado";
  html += "</span>";
  html += "</div>";
  html += "<div class='status-item'>";
  html += "<h3>UNO</h3>";
  html += "<span class='" + String(unoConectado ? "status-online" : "status-offline") + "'>";
  html += unoConectado ? "🟢 Conectado" : "🔴 Desconectado";
  html += "</span>";
  html += "</div>";
  html += "<div class='status-item'>";
  html += "<h3>Modo Seguridad</h3>";
  html += "<span class='" + String(modoSeguridad ? "status-online" : "status-offline") + "'>";
  html += modoSeguridad ? "🛡️ ACTIVO" : "⚠️ DESACTIVADO";
  html += "</span>";
  html += "</div>";
  html += "<div class='status-item'>";
  html += "<h3>Velocidad</h3>";
  html += "<span class='" + String(modoLento ? "status-online" : "status-offline") + "'>";
  html += modoLento ? "🐌 LENTA" : "⚡ NORMAL";
  html += "</span>";
  html += "</div>";
  html += "</div>";

  // Controles de sistema
  html += "<div class='section'>";
  html += "<h2>⚙️ Configuración del Sistema</h2>";
  html += "<button onclick='cambiarSeguridad()' class='" + String(modoSeguridad ? "danger" : "success") + "'>";
  html += modoSeguridad ? "Desactivar Seguridad" : "Activar Seguridad";
  html += "</button>";
  html += "<button onclick='cambiarVelocidad()' class='" + String(modoLento ? "success" : "danger") + "'>";
  html += modoLento ? "Velocidad Normal" : "Velocidad Lenta";
  html += "</button>";
  html += "<button onclick=fetch('/system/check')>Verificar Conexiones</button>";
  html += "<button onclick=fetch('/system/sync-security')>🔄 Sincronizar Seguridad</button>";
  html += "<button onclick=fetch('/system/descanso') class='success'>🛌 Posición Descanso</button>";
  html += "<button onclick=fetch('/system/reset') class='danger'>Reset Robot</button>";
  html += "</div>";

  // Control de Muñecas con Flechas
  html += "<div class='section'>";
  html += "<h2>🦴 Control de Muñecas con Flechas</h2>";
  html += "<div id='muñecas-container' class='control-group'>";
  html += "<div style='display:grid;grid-template-columns:repeat(2,1fr);gap:10px;'>";
  html += "<div class='brazo-control'>";
  html += "<h4>Muñeca Derecha</h4>";
  html += "<div class='posicion-display' id='muneca-0'>Posición: 80°</div>";
  html += "<div class='flechas'>";
  html += "<button onclick='moverMuñecaFlecha(0, -1)'>⬅️</button>";
  html += "<button onclick='moverMuñecaFlecha(0, 1)'>➡️</button>";
  html += "</div>";
  html += "</div>";
  html += "<div class='brazo-control'>";
  html += "<h4>Muñeca Izquierda</h4>";
  html += "<div class='posicion-display' id='muneca-1'>Posición: 80°</div>";
  html += "<div class='flechas'>";
  html += "<button onclick='moverMuñecaFlecha(1, -1)'>⬅️</button>";
  html += "<button onclick='moverMuñecaFlecha(1, 1)'>➡️</button>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  html += "<div class='control-group'>";
  html += "<button onclick=fetch('/munecas/centrar')>Centrar Muñecas</button>";
  html += "<button onclick=fetch('/munecas/aleatorio')>Aleatorio</button>";
  html += "</div>";
  html += "</div>";
  
  // Control manual de muñecas
  html += "<div class='section'>";
  html += "<h2>🦴 Control Manual de Muñecas</h2>";
  html += "<div class='control-group'>";
  html += "<label>Mano:</label><select id=mano_muneca><option value=derecha>Derecha</option><option value=izquierda>Izquierda</option><option value=ambas>Ambas</option></select>";
  html += "<label>Ángulo:</label><input id=angulo_muneca type=number value=80 min=0 max=160>";
  html += "<button onclick=moverMuñeca()>Mover Muñeca</button>";
  html += "</div>";
  html += "</div>";

  // Control de Manos con Flechas
  html += "<div class='section'>";
  html += "<h2>🤚 Control de Manos con Flechas</h2>";
  html += "<div class='control-group'>";
  html += "<select id=mano><option value=derecha>Derecha</option><option value=izquierda>Izquierda</option><option value=ambas>Ambas</option></select>";
  html += "<button onclick=gesto('paz')>✌️ Paz</button>";
  html += "<button onclick=gesto('rock')>🤘 Rock</button>";
  html += "<button onclick=gesto('ok')>👌 OK</button>";
  html += "<button onclick=gesto('senalar')>👆 Señalar</button>";
  html += "<button onclick=gesto('abrir')>🖐️ Abrir</button>";
  html += "<button onclick=gesto('cerrar')>✊ Cerrar</button>";
  html += "</div>";
  
  // Control de dedos con flechas
  html += "<div id='manos-container' class='control-group'>";
  html += "<h3>Mano Derecha</h3>";
  html += "<div style='display:grid;grid-template-columns:repeat(5,1fr);gap:5px;'>";
  html += "<div class='dedo-control'><h5>Pulgar</h5><div class='posicion-display' id='dedo-0'>0°</div><button onclick='moverDedoFlecha(0, -1)'>⬆️</button><button onclick='moverDedoFlecha(0, 1)'>⬇️</button></div>";
  html += "<div class='dedo-control'><h5>Índice</h5><div class='posicion-display' id='dedo-1'>0°</div><button onclick='moverDedoFlecha(1, -1)'>⬆️</button><button onclick='moverDedoFlecha(1, 1)'>⬇️</button></div>";
  html += "<div class='dedo-control'><h5>Medio</h5><div class='posicion-display' id='dedo-2'>0°</div><button onclick='moverDedoFlecha(2, -1)'>⬆️</button><button onclick='moverDedoFlecha(2, 1)'>⬇️</button></div>";
  html += "<div class='dedo-control'><h5>Anular</h5><div class='posicion-display' id='dedo-3'>0°</div><button onclick='moverDedoFlecha(3, -1)'>⬆️</button><button onclick='moverDedoFlecha(3, 1)'>⬇️</button></div>";
  html += "<div class='dedo-control'><h5>Meñique</h5><div class='posicion-display' id='dedo-4'>0°</div><button onclick='moverDedoFlecha(4, -1)'>⬆️</button><button onclick='moverDedoFlecha(4, 1)'>⬇️</button></div>";
  html += "</div>";
  html += "<h3>Mano Izquierda</h3>";
  html += "<div style='display:grid;grid-template-columns:repeat(5,1fr);gap:5px;'>";
  html += "<div class='dedo-control'><h5>Pulgar</h5><div class='posicion-display' id='dedo-5'>0°</div><button onclick='moverDedoFlecha(5, -1)'>⬆️</button><button onclick='moverDedoFlecha(5, 1)'>⬇️</button></div>";
  html += "<div class='dedo-control'><h5>Índice</h5><div class='posicion-display' id='dedo-6'>0°</div><button onclick='moverDedoFlecha(6, -1)'>⬆️</button><button onclick='moverDedoFlecha(6, 1)'>⬇️</button></div>";
  html += "<div class='dedo-control'><h5>Medio</h5><div class='posicion-display' id='dedo-7'>0°</div><button onclick='moverDedoFlecha(7, -1)'>⬆️</button><button onclick='moverDedoFlecha(7, 1)'>⬇️</button></div>";
  html += "<div class='dedo-control'><h5>Anular</h5><div class='posicion-display' id='dedo-8'>0°</div><button onclick='moverDedoFlecha(8, -1)'>⬆️</button><button onclick='moverDedoFlecha(8, 1)'>⬇️</button></div>";
  html += "<div class='dedo-control'><h5>Meñique</h5><div class='posicion-display' id='dedo-9'>0°</div><button onclick='moverDedoFlecha(9, -1)'>⬆️</button><button onclick='moverDedoFlecha(9, 1)'>⬇️</button></div>";
  html += "</div>";
  html += "</div>";
  
  // Control manual de dedos
  html += "<div class='control-group'>";
  html += "<label>Dedo:</label><select id=dedo><option value=pulgar>Pulgar</option><option value=indice>Índice</option><option value=medio>Medio</option><option value=anular>Anular</option><option value=menique>Meñique</option></select>";
  html += "<label>Ángulo:</label><input id=angulo_dedo type=number value=90 min=0 max=180>";
  html += "<button onclick=moverDedo()>Mover Dedo</button>";
  html += "</div>";
  html += "</div>";

  // Control de Cuello con Flechas
  html += "<div class='section'>";
  html += "<h2>🦴 Control de Cuello con Flechas</h2>";
  html += "<div id='cuello-container' class='control-group'>";
  html += "<div style='display:grid;grid-template-columns:repeat(3,1fr);gap:10px;'>";
  html += "<div class='cuello-control'>";
  html += "<h4>Lateral</h4>";
  html += "<div class='posicion-display' id='cuello-0'>Posición: 155°</div>";
  html += "<div class='flechas'>";
  html += "<button onclick='moverCuelloFlecha(0, -1)'>⬅️</button>";
  html += "<button onclick='moverCuelloFlecha(0, 1)'>➡️</button>";
  html += "</div>";
  html += "</div>";
  html += "<div class='cuello-control'>";
  html += "<h4>Inferior</h4>";
  html += "<div class='posicion-display' id='cuello-1'>Posición: 95°</div>";
  html += "<div class='flechas'>";
  html += "<button onclick='moverCuelloFlecha(1, -1)'>⬆️</button>";
  html += "<button onclick='moverCuelloFlecha(1, 1)'>⬇️</button>";
  html += "</div>";
  html += "</div>";
  html += "<div class='cuello-control'>";
  html += "<h4>Superior</h4>";
  html += "<div class='posicion-display' id='cuello-2'>Posición: 105°</div>";
  html += "<div class='flechas'>";
  html += "<button onclick='moverCuelloFlecha(2, -1)'>↩️</button>";
  html += "<button onclick='moverCuelloFlecha(2, 1)'>↪️</button>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  html += "<div class='control-group'>";
  html += "<button onclick=fetch('/cuello/centrar')>Centrar</button>";
  html += "<button onclick=fetch('/cuello/aleatorio')>Aleatorio</button>";
  html += "<button onclick=fetch('/cuello/si')>Sí</button>";
  html += "<button onclick=fetch('/cuello/no')>No</button>";
  html += "</div>";
  html += "</div>";
  
  // Control manual de cuello
  html += "<div class='section'>";
  html += "<h2>🦴 Control Manual de Cuello</h2>";
  html += "<div class='control-group'>";
  html += "<label>Lateral:</label><input id=lateral type=number value=155 min=120 max=190>";
  html += "<label>Inferior:</label><input id=inferior type=number value=95 min=60 max=130>";
  html += "<label>Superior:</label><input id=superior type=number value=105 min=90 max=120>";
  html += "<button onclick=moverCuello()>Mover Cuello</button>";
  html += "</div>";
  html += "</div>";
  
  // Control manual de brazos
  html += "<div class='section'>";
  html += "<h2>💪 Control Manual de Brazos</h2>";
  html += "<div class='control-group'>";
  html += "<label>Brazo Izq:</label><input id=bi type=number value=10 min=10 max=30>";
  html += "<label>Frente Izq:</label><input id=fi type=number value=80 min=60 max=120>";
  html += "<label>High Izq:</label><input id=hi type=number value=80 min=70 max=90>";
  html += "<label>Brazo Der:</label><input id=bd type=number value=40 min=30 max=55>";
  html += "<label>Frente Der:</label><input id=fd type=number value=90 min=70 max=110>";
  html += "<label>High Der:</label><input id=hd type=number value=80 min=70 max=90>";
  html += "<label>Pollo Der:</label><input id=pd type=number value=45 min=0 max=90>";
  html += "<button onclick=moverBrazos()>Mover Brazos</button>";
  html += "</div>";
  html += "</div>";

  // Control de Brazos con Flechas
  html += "<div class='section'>";
  html += "<h2>💪 Control de Brazos con Flechas</h2>";
  html += "<div id='brazos-container' class='control-group'>";
  html += "<div style='display:grid;grid-template-columns:repeat(4,1fr);gap:10px;'>";
  html += "<div class='brazo-control'>";
  html += "<h4>Brazo Izquierdo</h4>";
  html += "<div class='posicion-display' id='brazo-0'>Posición: 10°</div>";
  html += "<div class='flechas'>";
  html += "<button onclick='moverBrazoFlecha(0, -1)' style='grid-area:1/2/2/3;'>⬆️</button>";
  html += "<button onclick='moverBrazoFlecha(0, 1)' style='grid-area:3/2/4/3;'>⬇️</button>";
  html += "</div>";
  html += "</div>";
  html += "<div class='brazo-control'>";
  html += "<h4>Frente Izquierdo</h4>";
  html += "<div class='posicion-display' id='brazo-1'>Posición: 80°</div>";
  html += "<div class='flechas'>";
  html += "<button onclick='moverBrazoFlecha(1, -1)' style='grid-area:1/2/2/3;'>⬆️</button>";
  html += "<button onclick='moverBrazoFlecha(1, 1)' style='grid-area:3/2/4/3;'>⬇️</button>";
  html += "</div>";
  html += "</div>";
  html += "<div class='brazo-control'>";
  html += "<h4>High Izquierdo</h4>";
  html += "<div class='posicion-display' id='brazo-2'>Posición: 80°</div>";
  html += "<div class='flechas'>";
  html += "<button onclick='moverBrazoFlecha(2, -1)' style='grid-area:1/2/2/3;'>⬆️</button>";
  html += "<button onclick='moverBrazoFlecha(2, 1)' style='grid-area:3/2/4/3;'>⬇️</button>";
  html += "</div>";
  html += "</div>";
  html += "<div class='brazo-control'>";
  html += "<h4>Brazo Derecho</h4>";
  html += "<div class='posicion-display' id='brazo-3'>Posición: 40°</div>";
  html += "<div class='flechas'>";
  html += "<button onclick='moverBrazoFlecha(3, -1)' style='grid-area:1/2/2/3;'>⬆️</button>";
  html += "<button onclick='moverBrazoFlecha(3, 1)' style='grid-area:3/2/4/3;'>⬇️</button>";
  html += "</div>";
  html += "</div>";
  html += "<div class='brazo-control'>";
  html += "<h4>Frente Derecho</h4>";
  html += "<div class='posicion-display' id='brazo-4'>Posición: 90°</div>";
  html += "<div class='flechas'>";
  html += "<button onclick='moverBrazoFlecha(4, -1)' style='grid-area:1/2/2/3;'>⬆️</button>";
  html += "<button onclick='moverBrazoFlecha(4, 1)' style='grid-area:3/2/4/3;'>⬇️</button>";
  html += "</div>";
  html += "</div>";
  html += "<div class='brazo-control'>";
  html += "<h4>High Derecho</h4>";
  html += "<div class='posicion-display' id='brazo-5'>Posición: 80°</div>";
  html += "<div class='flechas'>";
  html += "<button onclick='moverBrazoFlecha(5, -1)' style='grid-area:1/2/2/3;'>⬆️</button>";
  html += "<button onclick='moverBrazoFlecha(5, 1)' style='grid-area:3/2/4/3;'>⬇️</button>";
  html += "</div>";
  html += "</div>";
  html += "<div class='brazo-control'>";
  html += "<h4>Pollo Derecho</h4>";
  html += "<div class='posicion-display' id='brazo-6'>Posición: 45°</div>";
  html += "<div class='flechas'>";
  html += "<button onclick='moverBrazoFlecha(6, -1)' style='grid-area:1/2/2/3;'>⬆️</button>";
  html += "<button onclick='moverBrazoFlecha(6, 1)' style='grid-area:3/2/4/3;'>⬇️</button>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  html += "<div class='control-group'>";
  html += "<button onclick=fetch('/brazos/descanso')>Posición Descanso</button>";
  html += "<button onclick=fetch('/brazos/saludo')>Saludo</button>";
  html += "<button onclick=fetch('/brazos/abrazar')>Abrazar</button>";
  html += "</div>";
  html += "</div>";

  // Control Directo de Servos
  html += "<div class='section'>";
  html += "<h2>🔧 Control Directo</h2>";
  html += "<div class='control-group'>";
  html += "<label>Canal:</label><input id=ch type=number value=0 min=0 max=15>";
  html += "<label>Ángulo:</label><input id=ang type=number value=90 min=0 max=180>";
  html += "<button onclick=moverServo()>Mover Servo</button>";
  html += "</div>";
  html += "<div class='control-group'>";
  html += "<label>Comando:</label><input id=cmd type=text value='PING' placeholder='Comando personalizado'>";
  html += "<button onclick=enviarCmd()>Enviar</button>";
  html += "</div>";
  html += "</div>";

  // Debug y Logs
  // Información de posiciones actuales
  html += "<div class='section'>";
  html += "<h2>📊 Posiciones Actuales</h2>";
  html += "<div id='posiciones-info' style='background:#f8f9fa;padding:15px;border-radius:8px;font-family:monospace;'>";
  html += "<h3>Brazos:</h3>";
  html += "<div id='info-brazos'>Cargando...</div>";
  html += "<h3>Manos:</h3>";
  html += "<div id='info-manos'>Cargando...</div>";
  html += "<h3>Muñecas:</h3>";
  html += "<div id='info-munecas'>Cargando...</div>";
  html += "<h3>Cuello:</h3>";
  html += "<div id='info-cuello'>Cargando...</div>";
  html += "</div>";
  html += "<button onclick=actualizarPosiciones()>Actualizar Posiciones</button>";
  html += "</div>";
  
  html += "<div class='section'>";
  html += "<h2>📊 Debug y Logs</h2>";
  html += "<div class='debug' id=log>Esperando datos...</div>";
  html += "<button onclick=limpiarLog()>Limpiar Log</button>";
  html += "<button onclick=exportarLog()>Exportar Log</button>";
  html += "<button onclick=actualizarPosiciones()>Actualizar Posiciones</button>";
  html += "</div>";

  html += "</div>"; // container

  // JavaScript
  html += "<script>";
  html += "function gesto(g){const m=document.getElementById('mano').value;fetch('/manos/gesto',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:`mano=${m}&gesto=${g}`})}\n";
  html += "function moverDedo(){const m=document.getElementById('mano').value,d=document.getElementById('dedo').value,a=document.getElementById('angulo_dedo').value;fetch('/manos/dedo',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:`mano=${m}&dedo=${d}&angulo=${a}`})}\n";
  html += "function moverCuello(){const l=document.getElementById('lateral').value,i=document.getElementById('inferior').value,s=document.getElementById('superior').value;fetch('/cuello/mover',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:`lateral=${l}&inferior=${i}&superior=${s}`})}\n";
  html += "function moverMuñeca(){const m=document.getElementById('mano_muneca').value,a=document.getElementById('angulo_muneca').value;fetch('/munecas/mover',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:`mano=${m}&angulo=${a}`})}\n";
  html += "function moverBrazos(){const bi=document.getElementById('bi').value,fi=document.getElementById('fi').value,hi=document.getElementById('hi').value,bd=document.getElementById('bd').value,fd=document.getElementById('fd').value,hd=document.getElementById('hd').value,pd=document.getElementById('pd').value;fetch('/brazos/mover',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:`bi=${bi}&fi=${fi}&hi=${hi}&bd=${bd}&fd=${fd}&hd=${hd}&pd=${pd}`})}\n";
  html += "function moverServo(){const c=document.getElementById('ch').value,a=document.getElementById('ang').value;fetch('/servo',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:`ch=${c}&ang=${a}`})}\n";
  html += "function enviarCmd(){const c=document.getElementById('cmd').value;fetch('/cmd',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:`cmd=${encodeURIComponent(c)}`})}\n";
  html += "function limpiarLog(){document.getElementById('log').innerHTML='Log limpiado'}\n";
  html += "function exportarLog(){const log=document.getElementById('log').innerText;const blob=new Blob([log],{type:'text/plain'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='robot_log.txt';a.click()}\n";
  html += "async function cambiarSeguridad(){try{const r=await fetch('/system/security?on=' + (!document.querySelector('button[onclick=\"cambiarSeguridad()\"]').classList.contains('danger') ? 'true' : 'false'));const t=await r.text();alert(t);location.reload()}catch(e){console.error(e)}}\n";
  html += "async function cambiarVelocidad(){try{const r=await fetch('/system/speed?slow=' + (!document.querySelector('button[onclick=\"cambiarVelocidad()\"]').classList.contains('success') ? 'true' : 'false'));const t=await r.text();alert(t);location.reload()}catch(e){console.error(e)}}\n";
  html += "async function poll(){try{const r=await fetch('/debug');const t=await r.text();document.getElementById('log').innerHTML=t.replace(/\\n/g,'<br>')}catch(e){}setTimeout(poll,1000)};poll();\n";
  
  // Funciones para control con flechas
  html += "async function moverBrazoFlecha(indice, direccion){try{await fetch('/brazos/flecha',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:`indice=${indice}&direccion=${direccion}`});actualizarPosiciones()}catch(e){console.error(e)}}\n";
  html += "async function moverDedoFlecha(indice, direccion){try{await fetch('/manos/flecha',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:`indice=${indice}&direccion=${direccion}`});actualizarPosiciones()}catch(e){console.error(e)}}\n";
  html += "async function moverMuñecaFlecha(indice, direccion){try{await fetch('/munecas/flecha',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:`indice=${indice}&direccion=${direccion}`});actualizarPosiciones()}catch(e){console.error(e)}}\n";
  html += "async function moverCuelloFlecha(indice, direccion){try{await fetch('/cuello/flecha',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:`indice=${indice}&direccion=${direccion}`});actualizarPosiciones()}catch(e){console.error(e)}}\n";
  html += "async function actualizarPosiciones(){try{const r=await fetch('/posiciones');const data=await r.json();actualizarDisplayBrazos(data.brazos);actualizarDisplayManos(data.manos);actualizarDisplayMunecas(data.munecas);actualizarDisplayCuello(data.cuello);actualizarInfoPosiciones(data)}catch(e){console.error(e)}}\n";
  html += "function actualizarDisplayBrazos(brazos){brazos.forEach((brazo,i)=>{const el=document.getElementById(`brazo-${i}`);if(el)el.textContent=`Posición: ${brazo.posicion}°`})}\n";
  html += "function actualizarDisplayManos(manos){manos.forEach((mano,i)=>{const el=document.getElementById(`dedo-${i}`);if(el)el.textContent=`${mano.posicion}°`})}\n";
  html += "function actualizarDisplayMunecas(munecas){munecas.forEach((m,i)=>{const el=document.getElementById(`muneca-${i}`);if(el)el.textContent=`Posición: ${m.posicion}°`})}\n";
  html += "function actualizarDisplayCuello(cuello){cuello.forEach((c,i)=>{const el=document.getElementById(`cuello-${i}`);if(el)el.textContent=`Posición: ${c.posicion}°`})}\n";
  html += "function actualizarInfoPosiciones(data){const infoBrazos=document.getElementById('info-brazos');const infoManos=document.getElementById('info-manos');const infoMunecas=document.getElementById('info-munecas');const infoCuello=document.getElementById('info-cuello');if(infoBrazos)infoBrazos.innerHTML=data.brazos.map(b=>`${b.nombre}: ${b.posicion}° (${b.min}-${b.max}°)`).join('<br>');if(infoManos)infoManos.innerHTML=data.manos.map(m=>`${m.nombre}: ${m.posicion}° (${m.min}-${m.max}°)`).join('<br>');if(infoMunecas)infoMunecas.innerHTML=data.munecas.map(m=>`${m.nombre}: ${m.posicion}° (${m.min}-${m.max}°)`).join('<br>');if(infoCuello)infoCuello.innerHTML=data.cuello.map(c=>`${c.nombre}: ${c.posicion}° (${c.min}-${c.max}°)`).join('<br>')}\n";
  html += "setInterval(actualizarPosiciones,2000);\n";
  html += "window.onload=function(){actualizarPosiciones();};\n";
  html += "</script></body></html>";

  server.send(200, "text/html", html);
}

// ===== HANDLERS DE ENDPOINTS =====

// Sistema
void handleSystemSecurity() {
  String onValue = server.arg("on");
  modoSeguridad = (onValue == "1" || onValue == "true");
  
  // Sincronizar con el MEGA
  String comandoSeguridad = modoSeguridad ? "SEGURIDAD ON" : "SEGURIDAD OFF";
  sendToMega(comandoSeguridad);
  
  server.send(200, "text/plain", modoSeguridad ? "Seguridad ACTIVADA" : "Seguridad DESACTIVADA");
}

void handleSystemSpeed() {
  String slowValue = server.arg("slow");
  modoLento = (slowValue == "1" || slowValue == "true");
  server.send(200, "text/plain", modoLento ? "Velocidad LENTA" : "Velocidad NORMAL");
}

void handleSystemCheck() {
  checkConnections();
  server.send(200, "text/plain", "Verificación enviada");
}

void handleSystemSyncSecurity() {
  sincronizarSeguridad();
  server.send(200, "text/plain", "Seguridad sincronizada con MEGA");
}

void handleSystemReset() {
  sendToMega("RESET");
  server.send(200, "text/plain", "Reset enviado");
}

void handleSystemDescanso() {
  posicionDescanso();
  server.send(200, "text/plain", "Robot movido a posición de descanso");
}

// Manos
void handleManoGesto() {
  String mano = server.arg("mano");
  String gesto = server.arg("gesto");
  
  if (gesto == "paz") gestoPaz(mano);
  else if (gesto == "rock") gestoRock(mano);
  else if (gesto == "ok") gestoOK(mano);
  else if (gesto == "senalar") gestoSeñalar(mano);
  else controlarMano(mano, gesto);
  
  server.send(200, "text/plain", "Gesto enviado");
}

void handleManoDedo() {
  String mano = server.arg("mano");
  String dedo = server.arg("dedo");
  int angulo = server.arg("angulo").toInt();
  
  controlarDedo(mano, dedo, angulo);
  server.send(200, "text/plain", "Dedo movido");
}

void handleManoFlecha() {
  int indice = server.arg("indice").toInt();
  int direccion = server.arg("direccion").toInt();
  
  moverDedoConFlecha(indice, direccion);
  server.send(200, "text/plain", "Dedo movido con flecha");
}

// Muñecas
void handleMuñecaMover() {
  String mano = server.arg("mano");
  int angulo = server.arg("angulo").toInt();
  
  controlarMuñeca(mano, angulo);
  server.send(200, "text/plain", "Muñeca movida");
}

void handleMuñecaFlecha() {
  int indice = server.arg("indice").toInt();
  int direccion = server.arg("direccion").toInt();
  
  moverMuñecaConFlecha(indice, direccion);
  server.send(200, "text/plain", "Muñeca movida con flecha");
}

void handleMuñecaCentrar() { 
  controlarMuñeca("derecha", 80);
  controlarMuñeca("izquierda", 80);
  
  // Actualizar posiciones de centrado
  posActualMuñecas[0] = 80; // Derecha
  posActualMuñecas[1] = 80; // Izquierda
  
  server.send(200, "text/plain", "Muñecas centradas"); 
}

void handleMuñecaAleatorio() { 
  int anguloDerecha = random(0, 161);
  int anguloIzquierda = random(0, 161);
  
  controlarMuñeca("derecha", anguloDerecha);
  controlarMuñeca("izquierda", anguloIzquierda);
  
  server.send(200, "text/plain", "Muñecas en posición aleatoria"); 
}

// Cuello
void handleCuelloMover() {
  int lateral = server.arg("lateral").toInt();
  int inferior = server.arg("inferior").toInt();
  int superior = server.arg("superior").toInt();
  
  controlarCuello(lateral, inferior, superior);
  server.send(200, "text/plain", "Cuello movido");
}

void handleCuelloFlecha() {
  int indice = server.arg("indice").toInt();
  int direccion = server.arg("direccion").toInt();
  
  moverCuelloConFlecha(indice, direccion);
  server.send(200, "text/plain", "Cuello movido con flecha");
}

void handleCuelloCentrar() { 
  controlarCuello(155, 95, 105); 
  
  // Actualizar posiciones de centrado
  posActualCuello[0] = 155; // Lateral
  posActualCuello[1] = 95;  // Inferior
  posActualCuello[2] = 105; // Superior
  
  server.send(200, "text/plain", "Cuello centrado"); 
}

void handleCuelloAleatorio() { 
  sendToMega("CUELLO ALEATORIO"); 
  server.send(200, "text/plain", "Cuello aleatorio"); 
}

void handleCuelloSi() { 
  sendToMega("CUELLO SI"); 
  server.send(200, "text/plain", "Cuello: Sí"); 
}

void handleCuelloNo() { 
  sendToMega("CUELLO NO"); 
  server.send(200, "text/plain", "Cuello: No"); 
}

// Brazos
void handleBrazosMover() {
  int bi = server.arg("bi").toInt();
  int fi = server.arg("fi").toInt();
  int hi = server.arg("hi").toInt();
  int bd = server.arg("bd").toInt();
  int fd = server.arg("fd").toInt();
  int hd = server.arg("hd").toInt();
  int pd = server.arg("pd").toInt();
  
  controlarBrazos(bi, fi, hi, bd, fd, hd, pd);
  server.send(200, "text/plain", "Brazos movidos");
}

void handleBrazosFlecha() {
  int indice = server.arg("indice").toInt();
  int direccion = server.arg("direccion").toInt();
  
  moverBrazoConFlecha(indice, direccion);
  server.send(200, "text/plain", "Brazo movido con flecha");
}

void handleBrazosDescanso() { 
  sendToMega("BRAZOS DESCANSO"); 
  
  // Actualizar posiciones de descanso
  posActualBrazos[0] = 10;  // BI
  posActualBrazos[1] = 80;  // FI
  posActualBrazos[2] = 80;  // HI
  posActualBrazos[3] = 40;  // BD
  posActualBrazos[4] = 90;  // FD
  posActualBrazos[5] = 80;  // HD
  posActualBrazos[6] = 45;  // PD
  
  server.send(200, "text/plain", "Brazos en descanso"); 
}

void handleBrazosSaludo() { 
  sendToMega("BRAZOS SALUDO"); 
  server.send(200, "text/plain", "Saludo enviado"); 
}

void handleBrazosAbrazar() { 
  sendToMega("BRAZOS ABRAZAR"); 
  server.send(200, "text/plain", "Abrazo enviado"); 
}

// Servo directo
void handleServoDirecto() {
  int ch = server.arg("ch").toInt();
  int ang = server.arg("ang").toInt();
  
  if (!validarMovimiento("servo", ang, 0, 180)) {
    server.send(400, "text/plain", "Ángulo fuera de rango");
    return;
  }
  
  String cmd = "SERVO CH=" + String(ch) + " ANG=" + String(ang);
  enviarComandoLento(cmd);
  server.send(200, "text/plain", "Servo movido");
}

// Comando personalizado
void handleCmd() {
  String cmd = server.arg("cmd");
  if (cmd.length() == 0) {
    server.send(400, "text/plain", "Comando vacío");
    return;
  }
  sendToMega(cmd);
  server.send(200, "text/plain", "Comando enviado");
}

// Debug
void handleDebug() {
  String debug = "=== DEBUG ROBOT ===\n";
  debug += "WiFi: " + String(WiFi.status()==WL_CONNECTED ? "Conectado" : "Desconectado") + "\n";
  debug += "IP: " + WiFi.localIP().toString() + "\n";
  debug += "MEGA: " + String(megaConectado ? "Conectado" : "Desconectado") + "\n";
  debug += "UNO: " + String(unoConectado ? "Conectado" : "Desconectado") + "\n";
  debug += "Seguridad: " + String(modoSeguridad ? "ACTIVA" : "INACTIVA") + "\n";
  debug += "Velocidad: " + String(modoLento ? "LENTA" : "NORMAL") + "\n";
  debug += "Uptime: " + String(millis()/1000) + "s\n\n";
  debug += "=== ÚLTIMO ESTADO MEGA ===\n";
  debug += ultimoEstadoMega + "\n\n";
  debug += "=== ÚLTIMO ESTADO UNO ===\n";
  debug += ultimoEstadoUno + "\n";
  
  server.send(200, "text/plain", debug);
}

// Obtener posiciones actuales
void handlePosiciones() {
  String json = "{";
  json += "\"brazos\":[";
  for (int i = 0; i < 7; i++) {
    if (i > 0) json += ",";
    json += "{\"nombre\":\"" + nombresBrazos[i] + "\",\"posicion\":" + String(posActualBrazos[i]) + ",\"min\":" + String(limitesBrazos[i][0]) + ",\"max\":" + String(limitesBrazos[i][1]) + "}";
  }
  json += "],";
  json += "\"manos\":[";
  for (int i = 0; i < 10; i++) {
    if (i > 0) json += ",";
    json += "{\"nombre\":\"" + nombresDedos[i] + "\",\"posicion\":" + String(posActualManos[i]) + ",\"min\":" + String(limitesDedos[i][0]) + ",\"max\":" + String(limitesDedos[i][1]) + "}";
  }
  json += "],";
  json += "\"munecas\":[";
  for (int i = 0; i < 2; i++) {
    if (i > 0) json += ",";
    json += "{\"nombre\":\"" + nombresMuñecas[i] + "\",\"posicion\":" + String(posActualMuñecas[i]) + ",\"min\":" + String(limitesMuñecas[i][0]) + ",\"max\":" + String(limitesMuñecas[i][1]) + "}";
  }
  json += "],";
  json += "\"cuello\":[";
  for (int i = 0; i < 3; i++) {
    if (i > 0) json += ",";
    json += "{\"nombre\":\"" + nombresCuello[i] + "\",\"posicion\":" + String(posActualCuello[i]) + ",\"min\":" + String(limitesCuello[i][0]) + ",\"max\":" + String(limitesCuello[i][1]) + "}";
  }
  json += "]";
  json += "}";
  
  server.send(200, "application/json", json);
}

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);

  Serial.begin(115200);
  UART1.begin(MEGA_BAUD, SERIAL_8N1, RX2_PIN, TX2_PIN);
  Serial.println("🤖 Robot Control System - ESP32");
  Serial.println("UART1=115200 RX2=16 TX2=17");

  // Conectar WiFi
  WiFi.begin(ssid, password);
  Serial.print("Conectando a WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(400);
    Serial.print('.');
    digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
  }
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.println();
  Serial.print("IP: "); Serial.println(WiFi.localIP());

  // Configurar rutas del servidor
  server.on("/", handleRoot);
  
  // Sistema
  server.on("/system/security", handleSystemSecurity);
  server.on("/system/speed", handleSystemSpeed);
  server.on("/system/check", handleSystemCheck);
  server.on("/system/sync-security", handleSystemSyncSecurity);
  server.on("/system/descanso", handleSystemDescanso);
  server.on("/system/reset", handleSystemReset);
  
  // Manos
  server.on("/manos/gesto", HTTP_POST, handleManoGesto);
  server.on("/manos/dedo", HTTP_POST, handleManoDedo);
  server.on("/manos/flecha", HTTP_POST, handleManoFlecha);
  
  // Muñecas
  server.on("/munecas/mover", HTTP_POST, handleMuñecaMover);
  server.on("/munecas/flecha", HTTP_POST, handleMuñecaFlecha);
  server.on("/munecas/centrar", handleMuñecaCentrar);
  server.on("/munecas/aleatorio", handleMuñecaAleatorio);
  
  // Cuello
  server.on("/cuello/mover", HTTP_POST, handleCuelloMover);
  server.on("/cuello/flecha", HTTP_POST, handleCuelloFlecha);
  server.on("/cuello/centrar", handleCuelloCentrar);
  server.on("/cuello/aleatorio", handleCuelloAleatorio);
  server.on("/cuello/si", handleCuelloSi);
  server.on("/cuello/no", handleCuelloNo);
  
  // Brazos
  server.on("/brazos/mover", HTTP_POST, handleBrazosMover);
  server.on("/brazos/flecha", HTTP_POST, handleBrazosFlecha);
  server.on("/brazos/descanso", handleBrazosDescanso);
  server.on("/brazos/saludo", handleBrazosSaludo);
  server.on("/brazos/abrazar", handleBrazosAbrazar);
  
  // Control directo
  server.on("/servo", HTTP_POST, handleServoDirecto);
  server.on("/cmd", HTTP_POST, handleCmd);
  
  // Debug
  server.on("/debug", handleDebug);
  server.on("/posiciones", handlePosiciones);

  server.begin();
  Serial.println("🌐 Servidor HTTP iniciado");
  Serial.println("📱 Abre http://" + WiFi.localIP().toString() + " en tu navegador");
  
  // Mover robot a posición de descanso al inicio
  delay(2000); // Esperar a que todo se inicialice
  posicionDescanso();
  
  // Sincronizar estado de seguridad con el MEGA
  delay(1000);
  sincronizarSeguridad();
}

void loop() {
  server.handleClient();
  checkConnections();

  // Leer datos del MEGA
  while (UART1.available()) {
    char c = (char)UART1.read();
    if (c == '\r') continue;
    if (c == '\n') {
      if (megaLine.length()) {
        ultimoEstadoMega = megaLine;
        Serial.print("[MEGA] "); Serial.println(megaLine);
        
        // Detectar respuestas de ping
        if (megaLine.indexOf("MEGA:PONG") >= 0) {
          megaConectado = true;
        }
        if (megaLine.indexOf("UNO:PONG") >= 0) {
          unoConectado = true;
        }
        
        // Detectar respuestas de seguridad
        if (megaLine.indexOf("MEGA:Seguridad") >= 0) {
          Serial.println("Estado de seguridad del MEGA actualizado");
        }
        
        // Actualizar posiciones desde respuestas del MEGA
        if (megaLine.indexOf("MEGA:Brazos movidos") >= 0) {
          actualizarPosicionesDesdeRespuesta(megaLine);
        }
        if (megaLine.indexOf("MEGA:Cuello movido") >= 0) {
          actualizarPosicionesDesdeRespuesta(megaLine);
        }
        
        // Actualizar posiciones de manos desde respuestas del UNO
        if (megaLine.indexOf("UNO:Dedo") >= 0) {
          actualizarPosicionesManosDesdeRespuesta(megaLine);
        }
        
        megaLine = "";
      }
    } else {
      megaLine += c;
    }
  }

  // Ping periódico
  if (millis() - lastPingMs > 5000) {
    lastPingMs = millis();
    sendToMega("PING");
  }
}
