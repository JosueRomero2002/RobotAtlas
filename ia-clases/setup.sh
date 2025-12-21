#!/bin/bash
# ============================================
# Script de Setup para Linux/Mac
# RobotAtlas - Sistema de Control de Robot
# ============================================

echo ""
echo "============================================"
echo "  RobotAtlas - Configuración del Proyecto"
echo "============================================"
echo ""

# Verificar que Python esté instalado
if ! command -v python3 &> /dev/null; then
    echo "[ERROR] Python 3 no está instalado o no está en el PATH"
    echo "Por favor instala Python 3.8 o superior"
    exit 1
fi

echo "[OK] Python detectado"
python3 --version

# Verificar que pip esté instalado
if ! command -v pip3 &> /dev/null; then
    echo "[ERROR] pip3 no está disponible"
    echo "Instalando pip..."
    python3 -m ensurepip --upgrade
fi

echo "[OK] pip detectado"
echo ""

# Crear entorno virtual si no existe
if [ ! -d "venv" ]; then
    echo "[INFO] Creando entorno virtual..."
    python3 -m venv venv
    if [ $? -ne 0 ]; then
        echo "[ERROR] No se pudo crear el entorno virtual"
        exit 1
    fi
    echo "[OK] Entorno virtual creado"
else
    echo "[INFO] Entorno virtual ya existe"
fi

echo ""
echo "[INFO] Activando entorno virtual..."
source venv/bin/activate

echo ""
echo "[INFO] Actualizando pip..."
pip install --upgrade pip

echo ""
echo "[INFO] Instalando dependencias desde requirements.txt..."
pip install -r requirements.txt

if [ $? -ne 0 ]; then
    echo ""
    echo "[ERROR] Hubo errores al instalar algunas dependencias"
    echo "Algunas dependencias pueden requerir instalación manual"
    echo ""
    echo "Intentando instalar dependencias opcionales..."
    pip install ikpy --no-deps 2>/dev/null || true
else
    echo ""
    echo "[OK] Todas las dependencias instaladas correctamente"
fi

echo ""
echo "============================================"
echo "  Configuración Completada"
echo "============================================"
echo ""
echo "Para ejecutar el proyecto:"
echo "  1. Activa el entorno virtual: source venv/bin/activate"
echo "  2. Ejecuta: python robot_gui_conmodulos.py"
echo ""
echo "O usa el script run.sh"
echo ""
