#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Clase de Prueba Modular
Materia: Robótica
Generado por ADAI Class Builder

Clase automática usando estructura modular
"""

import cv2
import os
import time
import multiprocessing
from multiprocessing import Process, Value

# Agregar el directorio de módulos al path
import sys
current_dir = os.path.dirname(os.path.abspath(__file__))
# Los módulos están en el directorio padre (clases/modules)
parent_dir = os.path.dirname(current_dir)
modules_dir = os.path.join(parent_dir, "modules")
if modules_dir not in sys.path:
    sys.path.insert(0, modules_dir)

# Import modular functions
from modules.config import client, script_dir, faces_dir, QR_PATHS, QUESTION_BANK, QUESTION_BANK_CHEM
from modules.speech import initialize_tts, speak_with_animation, listen
from modules.camera import verify_camera_for_iriun, camera_process, identify_users, load_known_faces
from modules.qr import show_diagnostic_qr, show_final_exam_qr
from modules.slides import show_pdf_page_in_opencv, extract_text_from_pdf, explain_slides_with_random_questions, explain_slides_with_sequences
from modules.questions import RandomQuestionManager, evaluate_student_answer, process_question
from modules.esp32 import execute_esp32_sequence
from modules.utils import summarize_text, ask_openai

# ======================
#  CONFIGURACIÓN DE LA CLASE
# ======================
CLASS_CONFIG = {
    "name": "TestModularClass",
    "title": "Clase de Prueba Modular",
    "subject": "Robótica",
    "use_diagnostic": False,
    "use_pdf": False,
    "use_demo": False,
    "use_final_exam": False
}

class TestModularClass:
    """
    Clase de Prueba Modular
    
    Materia: Robótica
    Generado por ADAI Class Builder
    """
    
    def __init__(self):
        self.config = CLASS_CONFIG
        self.engine = None
        self.current_users = []
        
    def initialize_systems(self):
        """Initialize TTS and other systems"""
        print("🚀 Inicializando sistemas...")
        
        # Initialize TTS
        self.engine = initialize_tts()
        if not self.engine:
            print("❌ No se pudo inicializar el motor TTS")
            return False
            
        return True
    
    def run_test_phase(self):
        """Run a simple test phase"""
        try:
            print(f"🚀 Iniciando clase de prueba: {self.config['title']}")
            
            # Initialize systems
            if not self.initialize_systems():
                return False
            
            # Test simple
            speak_with_animation(self.engine, "Esta es una clase de prueba modular.")
            time.sleep(1)
            speak_with_animation(self.engine, "La estructura modular está funcionando correctamente.")
            time.sleep(1)
            speak_with_animation(self.engine, "Test completado exitosamente.")
            
            print("✅ Clase de prueba completada exitosamente")
            return True
            
        except Exception as e:
            print(f"❌ Error en clase de prueba: {e}")
            return False
    
    def cleanup(self):
        """Clean up resources"""
        try:
            cv2.destroyAllWindows()
            print("🧹 Recursos limpiados")
        except Exception as e:
            print(f"⚠️ Error limpiando recursos: {e}")
    
    def run_complete_class(self):
        """Run the complete class workflow"""
        try:
            print("🎓 Iniciando clase completa...")
            
            # Run test phase
            success = self.run_test_phase()
            
            if success:
                print("✅ Clase completada exitosamente")
            else:
                print("❌ Clase falló")
            
            return success
            
        except Exception as e:
            print(f"❌ Error en clase completa: {e}")
            return False
        finally:
            self.cleanup()

def main():
    """Main function to run the class"""
    try:
        # Create and run the class
        class_instance = TestModularClass()
        success = class_instance.run_complete_class()
        
        if success:
            print("✅ Test completado exitosamente")
        else:
            print("❌ Test falló")
            
    except Exception as e:
        print(f"❌ Error en main: {e}")
        return False
    finally:
        cv2.destroyAllWindows()

if __name__ == "__main__":
    multiprocessing.freeze_support()
    main()
