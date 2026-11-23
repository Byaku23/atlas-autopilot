@echo off
cd /d %~dp0
.venv\Scripts\python publicar_cola.py >> cola.log 2>&1
