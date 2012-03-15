ECHO OFF
cls
ECHO Removing old files...
rmdir /S /Q cov\resources cov\lib\mylib
ECHO done
ECHO.

ECHO copying resources...
xcopy /E /Q /I src\resources cov\resources
ECHO done
ECHO.

ECHO Excluding resources, lib/dojotoolkit, lib/coffeescript, lib/less, lib/modernizr
ECHO Not instrumenting lib/mylib/tests
ECHO Running JSCoverage...
tools\jscoverage-0.5.1\jscoverage --encoding=UTF-8 --exclude=resources --exclude=lib/dojotoolkit --exclude=lib/coffeescript --exclude=lib/less --exclude=lib/modernizr --no-instrument=lib/mylib/tests src cov
ECHO done
ECHO.