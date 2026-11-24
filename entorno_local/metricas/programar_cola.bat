@echo off
cd /d %~dp0
if "%1"=="" (echo Falta el perfil. Ejemplo: %~nx0 atlas   o   %~nx0 casa_moments & pause & exit /b 1)
set ATLAS_PERFIL=%1
schtasks /create /tn "Cola de publicacion %1" /tr "\"%~dp0ejecutar_cola.bat\" %1" /sc minute /mo 5 /f
if %errorlevel%==0 (echo. & echo Listo: cada 5 minutos se publica lo que este en la cola de %1 y ya toque.) else (echo. & echo No se pudo. Clic derecho y "Ejecutar como administrador".)
pause
