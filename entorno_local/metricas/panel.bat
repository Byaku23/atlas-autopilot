@echo off
cd /d %~dp0
if not exist .venv (python -m venv .venv && .venv\Scripts\pip install -r requirements.txt)
if not exist "%USERPROFILE%\.streamlit\credentials.toml" (
  mkdir "%USERPROFILE%\.streamlit"
  (echo [general]& echo email = "") > "%USERPROFILE%\.streamlit\credentials.toml"
)
.venv\Scripts\python actualizar.py
.venv\Scripts\streamlit run panel.py --browser.gatherUsageStats false
pause
