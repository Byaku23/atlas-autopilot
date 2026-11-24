@echo off
cd /d %~dp0
if "%1"=="" (echo Falta el perfil. Ejemplo: %~nx0 atlas   o   %~nx0 casa_moments & pause & exit /b 1)
set ATLAS_PERFIL=%1
.venv\Scripts\python actualizar.py >> perfiles\%1\actualizar.log 2>&1
