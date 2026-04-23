@echo off
chcp 65001 >nul
title Instalando Maia — Luxus O.S

echo.
echo  ==========================================
echo    Maia  ^|  Luxus O.S  ^|  Gemma E4B
echo  ==========================================
echo.

:: --- 1. Comprobar si Ollama ya esta instalado ---
where ollama >nul 2>&1
if %ERRORLEVEL% == 0 (
    echo [OK] Ollama ya esta instalado.
    goto :create_model
)

:: --- 2. Descargar e instalar Ollama ---
echo [1/3] Descargando Ollama...
powershell -Command "Invoke-WebRequest -Uri 'https://ollama.com/download/OllamaSetup.exe' -OutFile '%TEMP%\OllamaSetup.exe' -UseBasicParsing"
if %ERRORLEVEL% neq 0 (
    echo ERROR: No se pudo descargar Ollama. Comprueba tu conexion a internet.
    pause
    exit /b 1
)

echo [2/3] Instalando Ollama (puede pedir permisos de administrador)...
"%TEMP%\OllamaSetup.exe" /S
timeout /t 8 /nobreak >nul

:: Añadir al PATH para esta sesion
set PATH=%PATH%;%LOCALAPPDATA%\Programs\Ollama

:create_model
:: --- 3. Crear el modelo Maia ---
echo [3/3] Creando modelo Maia (descarga Gemma E4B ~3.3 GB la primera vez)...
echo       Esto puede tardar unos minutos segun tu conexion...
echo.

ollama pull gemma4:e4b
ollama create maia -f "%~dp0Maia\Modelfile"
if %ERRORLEVEL% neq 0 (
    echo.
    echo ERROR al crear el modelo. Asegurate de que Ollama esta corriendo.
    echo Intenta ejecutar 'ollama serve' en otra ventana y vuelve a ejecutar este script.
    pause
    exit /b 1
)

:: --- Listo ---
echo.
echo  ==========================================
echo    Maia esta lista.
echo  ==========================================
echo.
echo  Para hablar con Maia abre una terminal y escribe:
echo.
echo      ollama run maia
echo.
echo  O pulsa ENTER ahora para abrirla directamente.
echo.
pause
start cmd /k "ollama run maia"
