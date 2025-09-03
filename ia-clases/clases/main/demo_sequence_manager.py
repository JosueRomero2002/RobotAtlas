#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Demo Sequence Manager for Classes
=================================

Módulo para manejar demos con secuencias ESP32 durante las presentaciones.
Permite ejecutar secuencias específicas después de cada diapositiva.
"""

import json
import time
import os
import sys
from typing import Dict, Optional, Any

# Agregar el directorio de servicios ESP32 al path
esp32_services_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "services", "esp32_services")
if esp32_services_path not in sys.path:
    sys.path.append(esp32_services_path)

try:
    from esp32_config_binary import ESP32BinaryConfig
    from esp32_client import ESP32Client
    ESP32_AVAILABLE = True
except ImportError:
    ESP32_AVAILABLE = False
    print("⚠️ ESP32 services not available")

class DemoSequenceManager:
    """Gestor de secuencias para demos de clase"""
    
    def __init__(self):
        self.sequences_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "sequences")
        self.esp32_client = None
        self.connected = False
        
        # Verificar que existe el directorio de secuencias
        if not os.path.exists(self.sequences_dir):
            os.makedirs(self.sequences_dir)
            print(f"📁 Creado directorio de secuencias: {self.sequences_dir}")
    
    def connect_esp32(self) -> bool:
        """Conectar al ESP32"""
        try:
            if not ESP32_AVAILABLE:
                print("❌ ESP32 services not available")
                return False
            
            # Cargar configuración ESP32
            try:
                esp32_config = ESP32BinaryConfig()
                config_data = esp32_config.load_config()
                
                if not config_data:
                    print("⚠️ No se encontró configuración ESP32, usando valores por defecto")
                    host = "192.168.1.100"
                    port = 80
                else:
                    host = config_data.host
                    port = config_data.port
                    print(f"✅ Configuración ESP32 cargada: {host}:{port}")
                    
            except Exception as e:
                print(f"⚠️ Error cargando configuración ESP32: {e}")
                host = "192.168.1.100"
                port = 80
            
            # Conectar al ESP32
            try:
                self.esp32_client = ESP32Client()
                success = self.esp32_client.connect(host, port)
                
                if not success:
                    print(f"❌ No se pudo conectar al ESP32 en {host}:{port}")
                    return False
                
                self.connected = True
                print(f"✅ Conectado al ESP32 en {host}:{port}")
                return True
                
            except Exception as e:
                print(f"❌ Error conectando al ESP32: {e}")
                return False
                
        except Exception as e:
            print(f"❌ Error general conectando ESP32: {e}")
            return False
    
    def disconnect_esp32(self):
        """Desconectar del ESP32"""
        try:
            if self.esp32_client:
                self.esp32_client.disconnect()
                self.connected = False
                print("🔌 Desconectado del ESP32")
        except Exception as e:
            print(f"⚠️ Error desconectando del ESP32: {e}")
    
    def execute_sequence(self, sequence_name: str) -> bool:
        """
        Ejecuta una secuencia específica
        
        Args:
            sequence_name: Nombre de la secuencia a ejecutar
            
        Returns:
            bool: True si se ejecutó correctamente
        """
        try:
            print(f"🤖 Ejecutando secuencia: {sequence_name}")
            
            if not self.connected:
                print("❌ No conectado al ESP32")
                return False
            
            # Buscar archivo de secuencia
            sequence_file = None
            for file in os.listdir(self.sequences_dir):
                if file.endswith('.json') and sequence_name.lower() in file.lower():
                    sequence_file = os.path.join(self.sequences_dir, file)
                    break
            
            if not sequence_file:
                print(f"❌ No se encontró secuencia: {sequence_name}")
                return False
            
            print(f"📁 Cargando secuencia: {sequence_file}")
            
            # Cargar archivo JSON de la secuencia
            with open(sequence_file, 'r', encoding='utf-8') as f:
                sequence_data = json.load(f)
            
            print(f"✅ Secuencia cargada: {len(sequence_data.get('actions', []))} acciones")
            
            # Ejecutar la secuencia
            print("🚀 Ejecutando secuencia...")
            
            # Obtener acciones de la secuencia
            actions = sequence_data.get('actions', [])
            
            for i, action in enumerate(actions):
                print(f"   Acción {i+1}/{len(actions)}: {action.get('command', 'Unknown')}")
                
                # Ejecutar acción según el tipo
                command = action.get('command', '')
                parameters = action.get('parameters', {})
                duration = action.get('duration', 1000)
                
                if command == "BRAZOS":
                    # Comando de movimiento de brazos
                    bi = parameters.get('BI', 0)
                    bd = parameters.get('BD', 0)
                    fi = parameters.get('FI', 0)
                    fd = parameters.get('FD', 0)
                    hi = parameters.get('HI', 0)
                    hd = parameters.get('HD', 0)
                    pd = parameters.get('PD', 0)
                    
                    print(f"      Moviendo brazos: BI={bi}, BD={bd}, FI={fi}, FD={fd}, HI={hi}, HD={hd}, PD={pd}")
                    
                    # Enviar comando al ESP32
                    response = self.esp32_client.send_movement(bi, bd, fi, fd, hi, hd, pd)
                    
                    if response:
                        print(f"      ✅ Comando ejecutado")
                    else:
                        print(f"      ❌ Error ejecutando comando")
                    
                elif command == "GESTO":
                    # Comando de gesto
                    gesture = parameters.get('gesture', '')
                    print(f"      Ejecutando gesto: {gesture}")
                    
                    # Enviar comando de gesto al ESP32
                    response = self.esp32_client.send_gesture(gesture)
                    
                    if response:
                        print(f"      ✅ Gesto ejecutado")
                    else:
                        print(f"      ❌ Error ejecutando gesto")
                    
                elif command == "HABLAR":
                    # Comando de habla
                    text = parameters.get('texto', '')
                    print(f"      Hablando: {text}")
                    
                    # Enviar comando de habla al ESP32
                    response = self.esp32_client.send_speech(text)
                    
                    if response:
                        print(f"      ✅ Habla ejecutada")
                    else:
                        print(f"      ❌ Error ejecutando habla")
                    
                elif command == "ESPERAR":
                    # Comando de espera
                    wait_time = duration / 1000.0  # Convertir a segundos
                    print(f"      Esperando {wait_time} segundos...")
                    time.sleep(wait_time)
                    
                else:
                    print(f"      ⚠️ Comando no reconocido: {command}")
                
                # Pequeña pausa entre acciones
                time.sleep(0.1)
            
            print("✅ Secuencia ejecutada completamente")
            return True
            
        except Exception as e:
            print(f"❌ Error ejecutando secuencia: {e}")
            import traceback
            traceback.print_exc()
            return False
    
    def list_available_sequences(self) -> list:
        """Lista las secuencias disponibles"""
        try:
            sequences = []
            for file in os.listdir(self.sequences_dir):
                if file.endswith('.json'):
                    sequences.append(file.replace('.json', ''))
            return sequences
        except Exception as e:
            print(f"❌ Error listando secuencias: {e}")
            return []
    
    def create_sample_sequence(self, sequence_name: str) -> bool:
        """Crea una secuencia de ejemplo"""
        try:
            sample_sequence = {
                "name": sequence_name,
                "title": f"Sample {sequence_name}",
                "created_at": time.strftime("%Y-%m-%d %H:%M:%S"),
                "actions": [
                    {
                        "command": "BRAZOS",
                        "parameters": {
                            "BI": 10, "BD": 40, "FI": 80, "FD": 90, 
                            "HI": 80, "HD": 80, "PD": 45
                        },
                        "duration": 1000,
                        "description": "Home Position"
                    },
                    {
                        "command": "GESTO",
                        "parameters": {
                            "gesture": "saludo"
                        },
                        "duration": 2000,
                        "description": "Wave Gesture"
                    },
                    {
                        "command": "HABLAR",
                        "parameters": {
                            "texto": "Hola estudiantes!"
                        },
                        "duration": 3000,
                        "description": "Greeting"
                    }
                ]
            }
            
            sequence_file = os.path.join(self.sequences_dir, f"{sequence_name}.json")
            with open(sequence_file, 'w', encoding='utf-8') as f:
                json.dump(sample_sequence, f, indent=2, ensure_ascii=False)
            
            print(f"✅ Secuencia de ejemplo creada: {sequence_file}")
            return True
            
        except Exception as e:
            print(f"❌ Error creando secuencia de ejemplo: {e}")
            return False

# Funciones de conveniencia
def execute_esp32_sequence(sequence_name: str) -> bool:
    """
    Función de conveniencia para ejecutar una secuencia ESP32
    
    Args:
        sequence_name: Nombre de la secuencia a ejecutar
        
    Returns:
        bool: True si se ejecutó correctamente
    """
    manager = DemoSequenceManager()
    if manager.connect_esp32():
        try:
            return manager.execute_sequence(sequence_name)
        finally:
            manager.disconnect_esp32()
    return False

def explain_slides_with_sequences(engine, pdf_path, pdf_text, current_users,
                                 hand_raised_counter, current_slide_num, exit_flag, 
                                 known_faces, current_hand_raiser, sequence_mapping=None):
    """
    Explicación de diapositivas con secuencias ESP32 después de cada página
    
    Args:
        engine: Motor TTS
        pdf_path: Ruta al PDF
        pdf_text: Texto extraído del PDF
        current_users: Lista de usuarios actuales
        hand_raised_counter: Contador de manos levantadas
        current_slide_num: Número de diapositiva actual
        exit_flag: Bandera de salida
        known_faces: Caras conocidas
        current_hand_raiser: Quien levantó la mano
        sequence_mapping: Diccionario que mapea número de diapositiva -> nombre de secuencia
                         Ejemplo: {1: "saludo", 3: "gesto_paz", 5: "hablar"}
    """
    try:
        print("🎬 Iniciando explicación con secuencias ESP32...")
        
        # Mapeo de secuencias por defecto si no se proporciona
        if sequence_mapping is None:
            sequence_mapping = {
                1: "saludo_inicial",
                3: "gesto_paz", 
                5: "hablar_clase",
                7: "gesto_ok",
                9: "despedida"
            }
        
        print(f"📋 Mapeo de secuencias: {sequence_mapping}")
        
        # Importar funciones necesarias del main
        import cv2
        import fitz
        from main import show_pdf_page_in_opencv, speak_with_animation, process_question, summarize_text, interpret_image
        
        # Crear ventana "Presentacion" para mostrar cada página
        cv2.namedWindow("Presentacion", cv2.WINDOW_NORMAL)
        cv2.resizeWindow("Presentacion", 800, 600)

        with fitz.open(pdf_path) as doc:
            total_slides = len(doc)
            slide_num = 0
            
            while slide_num < total_slides and exit_flag.value == 0:
                current_slide_num.value = slide_num + 1
                print(f"📝 Explicando diapositiva {current_slide_num.value} de {total_slides}")
                
                # Verificar manos levantadas antes de continuar
                if hand_raised_counter.value > 0:
                    print(f"✋ Manos levantadas detectadas: {hand_raised_counter.value}")
                    process_question(engine, current_users, known_faces, pdf_text, hand_raised_counter, current_hand_raiser)
                    continue
                
                page = doc[slide_num]
                # Mostrar la imagen de la diapositiva
                page_img = show_pdf_page_in_opencv(page)
                cv2.imshow("Presentacion", page_img)
                cv2.waitKey(50)

                # Obtener texto y generar explicación
                page_text = page.get_text()

                if page_text.strip():
                    # Usar la función summarize_text del main
                    explanation = summarize_text(page_text)
                else:
                    # Si no hay texto en la página
                    script_dir = os.path.dirname(os.path.abspath(__file__))
                    image_path = os.path.join(script_dir, f"page{slide_num + 1}.png")
                    page.get_pixmap().save(image_path)
                    explanation = interpret_image(image_path)
                
                # Mensaje inicial
                slide_info = f"Diapositiva {slide_num + 1}: "
                speak_with_animation(engine, slide_info)

                # Explicación en frases
                sentences = []
                for part in explanation.split("."):
                    if part.strip():
                        sentences.append(part.strip() + ".")

                for i, sentence in enumerate(sentences):
                    if hand_raised_counter.value > 0:
                        print(f"✋ Manos levantadas detectadas: {hand_raised_counter.value}")
                        process_question(engine, current_users, known_faces, pdf_text, hand_raised_counter, current_hand_raiser)
                        continue
                    
                    if exit_flag.value != 0:
                        print("🛑 Señal de salida detectada")
                        return False
                    
                    if sentence.strip():
                        print(f"🗣️ Fragmento {i+1}/{len(sentences)}: {sentence[:30]}...")
                        speak_with_animation(engine, sentence)
                    
                    time.sleep(0.2)
                
                # *** EJECUTAR SECUENCIA ESP32 DESPUÉS DE LA DIAPOSITIVA ***
                current_slide_number = slide_num + 1
                if current_slide_number in sequence_mapping:
                    sequence_name = sequence_mapping[current_slide_number]
                    print(f"\n🤖 === EJECUTANDO SECUENCIA ESP32 (después de diapositiva {current_slide_number}) ===")
                    print(f"🎬 Secuencia: {sequence_name}")
                    
                    # Anunciar la secuencia
                    speak_with_animation(engine, f"Ahora ejecutaré una secuencia de movimientos del robot.")
                    time.sleep(1.0)
                    
                    # Ejecutar la secuencia
                    success = execute_esp32_sequence(sequence_name)
                    
                    if success:
                        print(f"✅ Secuencia '{sequence_name}' ejecutada exitosamente")
                        speak_with_animation(engine, "Secuencia completada.")
                    else:
                        print(f"❌ Error ejecutando secuencia '{sequence_name}'")
                        speak_with_animation(engine, "Hubo un problema con la secuencia, continuemos.")
                    
                    # Pausa después de la secuencia
                    time.sleep(2.0)
                    
                    print(f"🤖 === FIN DE SECUENCIA ESP32 ===\n")
                
                # Pequeña pausa
                for _ in range(5):
                    if hand_raised_counter.value > 0 or exit_flag.value != 0:
                        break
                    time.sleep(0.2)
                
                if hand_raised_counter.value > 0:
                    print(f"✋ Manos levantadas tras la diapositiva: {hand_raised_counter.value}")
                    process_question(engine, current_users, known_faces, pdf_text, hand_raised_counter, current_hand_raiser)
                    continue
                
                slide_num += 1
        
        print("✅ Explicación con secuencias completada")
        return True
        
    except Exception as e:
        print(f"❌ Error al explicar diapositivas con secuencias: {e}")
        return False

# Ejemplo de uso
if __name__ == "__main__":
    # Crear gestor de secuencias
    manager = DemoSequenceManager()
    
    # Listar secuencias disponibles
    sequences = manager.list_available_sequences()
    print(f"📋 Secuencias disponibles: {sequences}")
    
    # Crear secuencia de ejemplo si no hay ninguna
    if not sequences:
        print("📝 Creando secuencia de ejemplo...")
        manager.create_sample_sequence("saludo_inicial")
    
    # Conectar al ESP32
    if manager.connect_esp32():
        try:
            # Ejecutar secuencia de ejemplo
            manager.execute_sequence("saludo_inicial")
        finally:
            manager.disconnect_esp32()
    else:
        print("❌ No se pudo conectar al ESP32")
