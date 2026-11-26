@echo off
cd /d %~dp0
schtasks /create /tn "Atlas metricas diario" /tr "\"%~dp0actualizar_diario.bat\"" /sc daily /st 07:00 /f
if %errorlevel%==0 (echo.& echo Listo: las metricas se actualizaran solas cada dia a las 7:00 si el PC esta encendido.) else (echo.& echo No se pudo programar. Haz clic derecho en este archivo y elige "Ejecutar como administrador".)
pause
