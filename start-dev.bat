@echo off
title 🔁 Auto Refresh Dev Mode

echo 🧹 Killing Chrome...
taskkill /F /IM chrome.exe >nul 2>&1

echo 🚀 Launching Chrome with remote debug...
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" ^
  --remote-debugging-port=9222 ^
  --user-data-dir="C:\ChromeDevProfile" ^
  --new-window "https://XXX.pl/login/"

timeout /t 3 >nul

echo 🔍 Starting watcher...
node watch.js

pause
