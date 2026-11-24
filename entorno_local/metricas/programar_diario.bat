@echo off
cd /d %~dp0
if "%1"=="" (echo Falta el perfil. Ejemplo: %~nx0 atlas   o   %~nx0 casa_moments & pause & exit /b 1)
set ATLAS_PERFIL=%1
schtasks /create /tn "Metricas diario %1" /tr "\"%~dp0actualizar_diario.bat\" %1" /sc daily /st 07:00 /f
if %errorlevel%==0 (echo.& echo Listo: las metricas de %1 se actualizaran solas cada dia a las 7:00 si el PC esta encendido.) else (echo.& echo No se pudo programar. Haz clic derecho y "Ejecutar como administrador".)
pause
