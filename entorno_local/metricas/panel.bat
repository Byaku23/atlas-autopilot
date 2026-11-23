@echo off
cd /d %~dp0
if not exist .venv (python -m venv .venv && .venv\Scripts\pip install -r requirements.txt)
.venv\Scripts\python actualizar.py
.venv\Scripts\streamlit run panel.py
