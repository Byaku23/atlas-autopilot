@echo off
cd /d %~dp0
rem Mueve lo que ya tenias de Atlas del saber a perfiles\atlas (se hace UNA sola vez; no borra nada, solo mueve)
if not exist perfiles\atlas mkdir perfiles\atlas
for %%F in (config.toml metricas.db) do if exist %%F move %%F perfiles\atlas\
for %%D in (cola tiktok videos) do if exist %%D move %%D perfiles\atlas\
for %%F in (perfiles\atlas\cola\pendientes\*.json) do powershell -NoProfile -Command "$t=Get-Content -Raw '%%F'; if($t -notmatch '\"perfil\"'){ $t=$t -replace '^\s*\{','{\"perfil\":\"atlas\",'; Set-Content -NoNewline -Encoding UTF8 '%%F' $t }"
echo Listo. Atlas del saber ahora vive en perfiles\atlas. Las tareas viejas de Windows hay que volver a crearlas con programar_cola.bat atlas y programar_diario.bat atlas
pause
