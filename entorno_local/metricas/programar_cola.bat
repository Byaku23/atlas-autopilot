@echo off
cd /d %~dp0
schtasks /create /tn "Atlas cola de publicacion" /tr "\"%~dp0ejecutar_cola.bat\"" /sc minute /mo 5 /f
if %errorlevel%==0 (echo. & echo Listo: cada 5 minutos se publica lo que este en la cola y ya toque.) else (echo. & echo No se pudo. Clic derecho y "Ejecutar como administrador".)
pause
