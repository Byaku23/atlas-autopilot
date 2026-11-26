@echo off
cd /d %~dp0
.venv\Scripts\python actualizar.py >> actualizar.log 2>&1
