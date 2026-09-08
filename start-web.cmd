@echo off
setlocal
cd /d "%~dp0"

echo Starting Astro dev server...
call npm run dev -- --host 127.0.0.1 --port 4321

