@echo off
REM ============================================
REM Script de Setup para Windows
REM RobotAtlas - Sistema de Control de Robot
REM ============================================

echo.
echo ============================================
echo   RobotAtlas - Configuracion del Proyecto
echo ============================================
echo.

REM Verificar que Python esté instalado
python --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Python no esta instalado o no esta en el PATH
    echo Por favor instala Python 3.8 o superior desde https://www.python.org/
    pause
    exit /b 1
)

echo [OK] Python detectado
python --version

REM Verificar que pip esté instalado
python -m pip --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] pip no esta disponible
    pause
    exit /b 1
)

echo [OK] pip detectado
echo.

REM Crear entorno virtual si no existe
if not exist "venv" (
    echo [INFO] Creando entorno virtual...
    python -m venv venv
    if errorlevel 1 (
        echo [ERROR] No se pudo crear el entorno virtual
        pause
        exit /b 1
    )
    echo [OK] Entorno virtual creado
) else (
    echo [INFO] Entorno virtual ya existe
)

echo.
echo [INFO] Activando entorno virtual...
call venv\Scripts\activate.bat

echo.
echo [INFO] Actualizando pip...
python -m pip install --upgrade pip

echo.
echo [INFO] Instalando dependencias desde requirements.txt...
python -m pip install -r requirements.txt

if errorlevel 1 (
    echo.
    echo [ERROR] Hubo errores al instalar algunas dependencias
    echo Algunas dependencias pueden requerir instalacion manual
    echo.
    echo Intentando instalar dependencias opcionales...
    python -m pip install ikpy --no-deps 2>nul
) else (
    echo.
    echo [OK] Todas las dependencias instaladas correctamente
)

echo.
echo ============================================
echo   Configuracion Completada
echo ============================================
echo.
echo Para ejecutar el proyecto:
echo   1. Activa el entorno virtual: venv\Scripts\activate
echo   2. Ejecuta: python robot_gui_conmodulos.py
echo.
echo O usa el script run.bat
echo.
pause
