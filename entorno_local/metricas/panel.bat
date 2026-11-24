@echo off
cd /d %~dp0
if "%1"=="" (echo Falta el perfil. Ejemplo: %~nx0 atlas   o   %~nx0 casa_moments & pause & exit /b 1)
set ATLAS_PERFIL=%1
if not exist .venv (python -m venv .venv && .venv\Scripts\pip install -r requirements.txt)
if not exist "%USERPROFILE%\.streamlit\credentials.toml" (
  mkdir "%USERPROFILE%\.streamlit"
  (echo [general]& echo email = "") > "%USERPROFILE%\.streamlit\credentials.toml"
)
.venv\Scripts\python actualizar.py
.venv\Scripts\streamlit run panel.py --browser.gatherUsageStats false
pause
