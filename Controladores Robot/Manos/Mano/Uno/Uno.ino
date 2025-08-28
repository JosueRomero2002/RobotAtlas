#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

// Configuración de servos
Adafruit_PWMServoDriver servos = Adafruit_PWMServoDriver();
unsigned int pos0 = 172;
unsigned int pos180 = 565;

// Variables del sistema
String inLine;
String ultimoComando = "";
unsigned long lastPingMs = 0;
bool modoSeguridad = true;
bool modoLento = true;
int velocidadMovimiento = 50; // ms entre movimientos

// Configuración de dedos (ajustar según tu configuración)
// Mano derecha (0° abierto, 180° cerrado)
const int D_PULGAR = 14;
const int D_INDICE = 13;
const int D_MEDIO = 12;
const int D_ANULAR = 11;
const int D_MENIQUE = 10;

// Mano izquierda (0° cerrado, 180° abierto)
const int I_PULGAR = 1;
const int I_INDICE = 2;
const int I_MEDIO = 3;
const int I_ANULAR = 4;
const int I_MENIQUE = 5;

// Configuración de muñecas
const int MUNECA_DER = 15;     // Muñeca derecha
const int MUNECA_IZQ = 0;      // Muñeca izquierda

// Rangos de seguridad para dedos
const int DEDO_MIN = 0;
const int DEDO_MAX = 180;

// Rangos de seguridad para muñecas
const int MUNECA_MIN = 0;
const int MUNECA_MAX = 160;

// Posiciones de descanso
const int MANO_DERECHA_DESCANSO = 0;  // Semi-abierta
const int MANO_IZQUIERDA_DESCANSO = 0; // Semi-abierta
const int MUNECA_DESCANSO = 80;       // Posición central

void setup() {
  Serial.begin(9600);
  
  // Inicializar servos
  servos.begin();
  servos.setPWMFreq(60);
  delay(100);

  Serial.println("🤖 Controlador UNO - Manos y Dedos");
  Serial.println("Serial=9600");
  Serial.println("Inicializando servos...");

  // Posición inicial
  posicionDescanso();
  
  Serial.println("✅ UNO listo para recibir comandos");
  
  // Enviar confirmación al MEGA
  Serial.println("UNO:Iniciado y listo");
}

void loop() {
  // Comandos desde MEGA por Serial
  if (Serial.available()) {
    String linea = Serial.readStringUntil('\n');
    linea.trim();
 Serial.println(linea);
    
     procesarComando(linea);
  }

  // Ping periódico
  if (millis() - lastPingMs > 10000) {
    lastPingMs = millis();
    Serial.println("UNO:PONG");
  }
}

// ===== FUNCIONES DE PROCESAMIENTO =====

void procesarComando(String comando) {
  ultimoComando = comando;
  Serial.print("[CMD] "); Serial.println(comando);

  // Extraer velocidad si está presente
  if (comando.indexOf("VEL=") >= 0) {
    int velIndex = comando.indexOf("VEL=");
    int velEnd = comando.indexOf(" ", velIndex);
    if (velEnd == -1) velEnd = comando.length();
    velocidadMovimiento = comando.substring(velIndex + 4, velEnd).toInt();
    comando = comando.substring(0, velIndex);
    comando.trim();
  }

  // Procesar comandos
  if (comando.startsWith("PING")) {
    Serial.println("UNO:PONG");
  }
  else if (comando.startsWith("RESET")) {
    resetManos();
  }
  else if (comando.startsWith("MANO")) {
    procesarMano(comando);
  }
  else if (comando.startsWith("DEDO")) {
    procesarDedo(comando);
  }
  else if (comando.startsWith("GESTO")) {
    procesarGesto(comando);
  }
  else if (comando.startsWith("MUÑECA") || comando.startsWith("MUNECA")) {
    procesarMuneca(comando);
  }
  else if (comando.startsWith("SERVO")) {
    procesarServoDirecto(comando);
  }
  else {
    Serial.print("Comando no reconocido: "); Serial.println(comando);
    Serial.print("UNO:ERROR - Comando no reconocido: ");
    Serial.println(comando);
  }
}

// ===== FUNCIONES DE MANOS =====

void procesarMano(String comando) {
  String mano = extraerParametroString(comando, "M=", "derecha");
  String accion = extraerParametroString(comando, "A=", "abrir");
  int angulo = extraerParametro(comando, "ANG=", -1);
  
  if (accion == "PAZ") {
    gestoPaz(mano);
  }
  else if (accion == "ROCK") {
    gestoRock(mano);
  }
  else if (accion == "OK") {
    gestoOK(mano);
  }
  else if (accion == "SENALAR") {
    gestoSenalar(mano);
  }
  else if (accion == "abrir") {
    abrirMano(mano);
  }
  else if (accion == "cerrar") {
    cerrarMano(mano);
  }
  else {
    // Acción personalizada con ángulo
    if (angulo >= 0) {
      moverManoAngulo(mano, angulo);
    } else {
      Serial.print("Acción no reconocida: "); Serial.println(accion);
    }
  }
}

void abrirMano(String mano) {
  if (mano == "derecha" || mano == "ambas") {
    setServo(D_PULGAR, 0);
    setServo(D_INDICE, 0);
    setServo(D_MEDIO, 0);
    setServo(D_ANULAR, 0);
    setServo(D_MENIQUE, 0);
  }
  
  if (mano == "izquierda" || mano == "ambas") {
    setServo(I_PULGAR, 120);
    setServo(I_INDICE, 120);
    setServo(I_MEDIO, 120);
    setServo(I_ANULAR, 120);
    setServo(I_MENIQUE, 120);
  }
  
  Serial.print("UNO:Mano "); Serial.print(mano); Serial.println(" abierta");
}

void cerrarMano(String mano) {
  if (mano == "derecha" || mano == "ambas") {
    setServo(D_PULGAR, 120);
    setServo(D_INDICE, 120);
    setServo(D_MEDIO, 120);
    setServo(D_ANULAR, 120);
    setServo(D_MENIQUE, 120);
  }
  
  if (mano == "izquierda" || mano == "ambas") {
    setServo(I_PULGAR, 0);
    setServo(I_INDICE, 0);
    setServo(I_MEDIO, 0);
    setServo(I_ANULAR, 0);
    setServo(I_MENIQUE, 0);
  }
  
  Serial.print("UNO:Mano "); Serial.print(mano); Serial.println(" cerrada");
}

void moverManoAngulo(String mano, int angulo) {
  if (!validarAngulo(angulo)) return;
  
  if (mano == "derecha" || mano == "ambas") {
    setServo(D_PULGAR, angulo);
    setServo(D_INDICE, angulo);
    setServo(D_MEDIO, angulo);
    setServo(D_ANULAR, angulo);
    setServo(D_MENIQUE, angulo);
  }
  
  if (mano == "izquierda" || mano == "ambas") {
    // Mano izquierda es inversa
    int anguloInverso = 180 - angulo;
    setServo(I_PULGAR, anguloInverso);
    setServo(I_INDICE, anguloInverso);
    setServo(I_MEDIO, anguloInverso);
    setServo(I_ANULAR, anguloInverso);
    setServo(I_MENIQUE, anguloInverso);
  }
  
  Serial.print("UNO:Mano "); Serial.print(mano);
  Serial.print(" movida a "); Serial.print(angulo); Serial.println("°");
}

// ===== FUNCIONES DE DEDOS =====

void procesarDedo(String comando) {
  String mano = extraerParametroString(comando, "M=", "derecha");
  String dedo = extraerParametroString(comando, "D=", "pulgar");
  int angulo = extraerParametro(comando, "ANG=", 90);
  
  if (!validarAngulo(angulo)) return;
  
  moverDedo(mano, dedo, angulo);
}

void moverDedo(String mano, String dedo, int angulo) {
  int canal = obtenerCanalDedo(mano, dedo);
  if (canal == -1) {
    Serial.print("UNO:ERROR - Dedo no válido: "); Serial.println(dedo);
    return;
  }
  
  // Ajustar ángulo según la mano
  int anguloAjustado = angulo;
  if (mano == "izquierda") {
    anguloAjustado = 180 - angulo; // Invertir para mano izquierda
  }
  
  setServo(canal, anguloAjustado);
  
  Serial.print("UNO:Dedo "); Serial.print(dedo);
  Serial.print(" de mano "); Serial.print(mano);
  Serial.print(" movido a "); Serial.print(angulo); Serial.println("°");
}

int obtenerCanalDedo(String mano, String dedo) {
  if (mano == "derecha") {
    if (dedo == "pulgar") return D_PULGAR;
    if (dedo == "indice") return D_INDICE;
    if (dedo == "medio") return D_MEDIO;
    if (dedo == "anular") return D_ANULAR;
    if (dedo == "menique") return D_MENIQUE;
  }
  else if (mano == "izquierda") {
    if (dedo == "pulgar") return I_PULGAR;
    if (dedo == "indice") return I_INDICE;
    if (dedo == "medio") return I_MEDIO;
    if (dedo == "anular") return I_ANULAR;
    if (dedo == "menique") return I_MENIQUE;
  }
  return -1; // Dedo no válido
}

// ===== GESTOS PREDEFINIDOS =====

void procesarGesto(String comando) {
  String mano = extraerParametroString(comando, "M=", "derecha");
  String gesto = extraerParametroString(comando, "G=", "paz");
  
  if (gesto == "PAZ") gestoPaz(mano);
  else if (gesto == "ROCK") gestoRock(mano);
  else if (gesto == "OK") gestoOK(mano);
  else if (gesto == "SENALAR") gestoSenalar(mano);
  else {
    Serial.print("UNO:ERROR - Gesto no reconocido: "); Serial.println(gesto);
  }
}

void gestoPaz(String mano) {
  if (mano == "derecha" || mano == "ambas") {
    setServo(D_PULGAR, 0);
    setServo(D_INDICE, 0);
    setServo(D_MEDIO, 180);
    setServo(D_ANULAR, 180);
    setServo(D_MENIQUE, 180);
  }
  
  if (mano == "izquierda" || mano == "ambas") {
    setServo(I_PULGAR, 180);
    setServo(I_INDICE, 180);
    setServo(I_MEDIO, 0);
    setServo(I_ANULAR, 0);
    setServo(I_MENIQUE, 0);
  }
  
  Serial.print("UNO:Gesto de paz con mano "); Serial.println(mano);
}

void gestoRock(String mano) {
  if (mano == "derecha" || mano == "ambas") {
    setServo(D_PULGAR, 0);
    setServo(D_INDICE, 180);
    setServo(D_MEDIO, 0);
    setServo(D_ANULAR, 180);
    setServo(D_MENIQUE, 180);
  }
  
  if (mano == "izquierda" || mano == "ambas") {
    setServo(I_PULGAR, 180);
    setServo(I_INDICE, 0);
    setServo(I_MEDIO, 180);
    setServo(I_ANULAR, 0);
    setServo(I_MENIQUE, 0);
  }
  
  Serial.print("UNO:Gesto de rock con mano "); Serial.println(mano);
}

void gestoOK(String mano) {
  if (mano == "derecha" || mano == "ambas") {
    setServo(D_PULGAR, 0);
    setServo(D_INDICE, 0);
    setServo(D_MEDIO, 180);
    setServo(D_ANULAR, 180);
    setServo(D_MENIQUE, 180);
  }
  
  if (mano == "izquierda" || mano == "ambas") {
    setServo(I_PULGAR, 180);
    setServo(I_INDICE, 180);
    setServo(I_MEDIO, 0);
    setServo(I_ANULAR, 0);
    setServo(I_MENIQUE, 0);
  }
  
  Serial.print("UNO:Gesto OK con mano "); Serial.println(mano);
}

void gestoSenalar(String mano) {
  if (mano == "derecha" || mano == "ambas") {
    setServo(D_PULGAR, 180);
    setServo(D_INDICE, 0);
    setServo(D_MEDIO, 180);
    setServo(D_ANULAR, 180);
    setServo(D_MENIQUE, 180);
  }
  
  if (mano == "izquierda" || mano == "ambas") {
    setServo(I_PULGAR, 0);
    setServo(I_INDICE, 180);
    setServo(I_MEDIO, 0);
    setServo(I_ANULAR, 0);
    setServo(I_MENIQUE, 0);
  }
  
  Serial.print("UNO:Gesto de señalar con mano "); Serial.println(mano);
}

// ===== FUNCIONES DE MUÑECAS =====

void procesarMuneca(String comando) {
  String mano = extraerParametroString(comando, "M=", "derecha");
  int angulo = extraerParametro(comando, "ANG=", MUNECA_DESCANSO);
  
  if (!validarMuneca(angulo)) return;
  
  if (mano == "derecha" || mano == "ambas") {
    setServo(MUNECA_DER, angulo);
    delay(velocidadMovimiento);
  }
  if (mano == "izquierda" || mano == "ambas") {
    setServo(MUNECA_IZQ, angulo);
    delay(velocidadMovimiento);
  }
  
  Serial.print("UNO:Muñeca "); Serial.print(mano); Serial.print(" movida a "); 
  Serial.print(angulo); Serial.println("°");
}

// ===== FUNCIONES DE SERVO DIRECTO =====

void procesarServoDirecto(String comando) {
  int canal = extraerParametro(comando, "CH=", 0);
  int angulo = extraerParametro(comando, "ANG=", 90);
  
  if (!validarServo(canal, angulo)) return;
  
  setServo(canal, angulo);
  Serial.print("UNO:Servo CH="); Serial.print(canal);
  Serial.print(" ANG="); Serial.println(angulo);
}

// ===== FUNCIONES UTILITARIAS =====

int extraerParametro(String comando, String parametro, int valorDefault) {
  int index = comando.indexOf(parametro);
  if (index == -1) return valorDefault;
  
  int start = index + parametro.length();
  int end = comando.indexOf(" ", start);
  if (end == -1) end = comando.length();
  
  return comando.substring(start, end).toInt();
}

String extraerParametroString(String comando, String parametro, String valorDefault) {
  int index = comando.indexOf(parametro);
  if (index == -1) return valorDefault;
  
  int start = index + parametro.length();
  int end = comando.indexOf(" ", start);
  if (end == -1) end = comando.length();
  
  return comando.substring(start, end);
}

void setServo(uint8_t canal, int angulo) {
  int duty = map(angulo, 0, 180, pos0, pos180);
  servos.setPWM(canal, 0, duty);
  delay(velocidadMovimiento);
  
  Serial.print("Servo "); Serial.print(canal);
  Serial.print(" -> "); Serial.print(angulo);
  Serial.print("° (duty: "); Serial.print(duty);
  Serial.println(")");
}

// ===== VALIDACIONES DE SEGURIDAD =====

bool validarAngulo(int angulo) {
  if (!modoSeguridad) return true;
  
  if (angulo < DEDO_MIN || angulo > DEDO_MAX) {
    Serial.print("UNO:ERROR - Ángulo fuera de rango: ");
    Serial.print(angulo);
    Serial.print(" (rango: ");
    Serial.print(DEDO_MIN);
    Serial.print("-");
    Serial.print(DEDO_MAX);
    Serial.println(")");
    return false;
  }
  return true;
}

bool validarMuneca(int angulo) {
  if (!modoSeguridad) return true;
  
  if (angulo < MUNECA_MIN || angulo > MUNECA_MAX) {
    Serial.print("UNO:ERROR - Muñeca fuera de rango (");
    Serial.print(MUNECA_MIN); Serial.print("-"); Serial.print(MUNECA_MAX);
    Serial.print("): "); Serial.println(angulo);
    return false;
  }
  return true;
}

bool validarServo(int canal, int angulo) {
  if (!modoSeguridad) return true;
  
  if (canal < 0 || canal > 15) {
    Serial.println("UNO:ERROR - Canal fuera de rango (0-15)");
    return false;
  }
  if (angulo < 0 || angulo > 180) {
    Serial.println("UNO:ERROR - Ángulo fuera de rango (0-180)");
    return false;
  }
  return true;
}

void posicionDescanso() {
  Serial.println("Posicionando manos y muñecas en descanso...");
  
  // Mano derecha semi-abierta
  setServo(D_PULGAR, MANO_DERECHA_DESCANSO);
  setServo(D_INDICE, MANO_DERECHA_DESCANSO);
  setServo(D_MEDIO, MANO_DERECHA_DESCANSO);
  setServo(D_ANULAR, MANO_DERECHA_DESCANSO);
  setServo(D_MENIQUE, MANO_DERECHA_DESCANSO);
  
  // Mano izquierda semi-abierta
  setServo(I_PULGAR, MANO_IZQUIERDA_DESCANSO);
  setServo(I_INDICE, MANO_IZQUIERDA_DESCANSO);
  setServo(I_MEDIO, MANO_IZQUIERDA_DESCANSO);
  setServo(I_ANULAR, MANO_IZQUIERDA_DESCANSO);
  setServo(I_MENIQUE, MANO_IZQUIERDA_DESCANSO);
  
  // Muñecas en posición central
  setServo(MUNECA_DER, MUNECA_DESCANSO);
  setServo(MUNECA_IZQ, MUNECA_DESCANSO);
  
  Serial.println("UNO:Posición de descanso establecida");
}

void resetManos() {
  Serial.println("🔄 Reset de manos...");
  posicionDescanso();
  Serial.println("UNO:Reset completado");
}
