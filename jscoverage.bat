ECHO OFF
cls
cd %~dp0
ECHO Removing old files...
rmdir /S /Q cov\resources cov\lib\clazzy cov\lib\mizuhiki cov\lib\wi
ECHO done
ECHO.

ECHO copying resources...
xcopy /Y /E /I src\resources cov\resources
xcopy /Y src\runTests.html cov
ECHO done
ECHO.

ECHO Excluding resources, lib/dojotoolkit, lib/coffeescript, lib/less, lib/modernizr
ECHO Not instrumenting lib/soyamilk/tests, lib/wi/tests
ECHO Running JSCoverage...
tools\jscoverage-0.5.1\jscoverage -v --encoding=UTF-8 --no-instrument=tests src\lib\clazzy cov\lib\clazzy
tools\jscoverage-0.5.1\jscoverage -v --encoding=UTF-8 --no-instrument=tests src\lib\mizuhiki cov\lib\mizuhiki
tools\jscoverage-0.5.1\jscoverage -v --encoding=UTF-8 --no-instrument=tests src\lib\mylib cov\lib\mylib
ECHO done
ECHO.

ECHO copying resources...
xcopy /Y cov\lib\wi\jscoverage*.* cov
ECHO done
ECHO.
