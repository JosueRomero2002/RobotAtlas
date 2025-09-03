#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Test Imports
===========

Script simple para probar que las importaciones funcionan
"""

import sys
import os

# Agregar el directorio de servicios al path
sys.path.append(os.path.join(os.path.dirname(__file__), 'services'))

print("🧪 Probando importaciones...")

try:
    from esp32_services.esp32_client import ESP32Client
    print("✅ ESP32Client importado correctamente")
    
    # Probar crear una instancia
    client = ESP32Client()
    print("✅ Instancia de ESP32Client creada")
    
    # Probar métodos
    print(f"📍 Host: {client.host}")
    print(f"🔌 Puerto: {client.port}")
    
except ImportError as e:
    print(f"❌ Error importando ESP32Client: {e}")
    import traceback
    traceback.print_exc()

try:
    from esp32_services.esp32_config_binary import ESP32BinaryConfig
    print("✅ ESP32BinaryConfig importado correctamente")
    
    # Probar crear una instancia
    config = ESP32BinaryConfig()
    print("✅ Instancia de ESP32BinaryConfig creada")
    
except ImportError as e:
    print(f"❌ Error importando ESP32BinaryConfig: {e}")
    import traceback
    traceback.print_exc()

print("✅ Test de importaciones completado")
