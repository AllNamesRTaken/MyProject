echo OFF
cd %~dp0
tools\CoffeeCompiler.exe src\lib\mylib\ --recursive

echo "Done compiling CoffeeScripts!"
pause
echo ON
