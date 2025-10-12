# ======================
#  CONFIGURACIÓN GLOBAL
# ======================
import os
import openai

# Ruta base del proyecto
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Directorio para almacenar caras reconocidas
FACES_DIR = os.path.join(BASE_DIR, "data", "faces")

# Configuración de OpenAI
OPENAI_API_KEY = "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"
OPENAI_CLIENT = openai.OpenAI(api_key=OPENAI_API_KEY)

# Configuración de Tesseract OCR
# Asegúrate de instalar Tesseract OCR desde https://github.com/UB-Mannheim/tesseract/wiki
TESSERACT_CMD = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Configuración de ventanas
FACE_WINDOW_NAME = "ADAI Robot Face"
FACE_WINDOW_WIDTH = 600
FACE_WINDOW_HEIGHT = 400

PRESENTATION_WINDOW_NAME = "Presentacion"
PRESENTATION_WINDOW_WIDTH = 800
PRESENTATION_WINDOW_HEIGHT = 600

CAMERA_WINDOW_NAME = "Clase Virtual"
CAMERA_WIDTH = 640
CAMERA_HEIGHT = 480

# Configuración de la cámara
CAMERA_FPS = 30
CAMERA_BUFFER_SIZE = 1
CAMERA_FOURCC = 'MJPG'

# Configuración mejorada para detección de gestos
HAND_DETECTION_CONFIDENCE = 0.85  # Aumentado para mayor precisión
HAND_TRACKING_CONFIDENCE = 0.7    # Aumentado para tracking más estable
MAX_HANDS = 4                     # Máximo 4 manos (2 estudiantes)
MAX_CONSECUTIVE_FRAMES = 8        # Frames consistentes para validar gesto
GESTURE_COOLDOWN = 3              # Segundos entre detecciones

def setup_directories():
    """
    Crea los directorios necesarios para el funcionamiento del programa.
    Esto incluye:
    - Directorio para almacenar caras reconocidas
    - Otros directorios que puedan ser necesarios en el futuro
    """
    print("🏗️ Configurando directorios del sistema...")
    
    # Directorio para caras
    if not os.path.exists(FACES_DIR):
        os.makedirs(FACES_DIR)
        print(f"✅ Creado directorio: {FACES_DIR}")
    else:
        print(f"✅ Directorio ya existe: {FACES_DIR}")
    
    # Directorio para imágenes temporales (si es necesario)
    temp_dir = os.path.join(BASE_DIR, "temp")
    if not os.path.exists(temp_dir):
        os.makedirs(temp_dir)
        print(f"✅ Creado directorio: {temp_dir}")
    else:
        print(f"✅ Directorio ya existe: {temp_dir}")
    
    print("✅ Configuración de directorios completada")
    return True