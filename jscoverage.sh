#! /bin/bash
command -v jscoverage >/dev/null 2>&1 || { echo >&2 "I require jscoverage but it's not installed.  Aborting."; exit 1; }

echo Removing old files...
sudo rm -fr cov/resources cov/lib/mylib
echo done
echo

echo copying resources...
sudo cp -f src/* cov/.
sudo cp -fR src/resources cov/resources
echo done
echo

echo Not instrumenting tests
echo Running JSCoverage...
sudo jscoverage --encoding=UTF-8 --no-instrument=tests src/lib/mylib cov/lib/mylib
echo done
echo

echo copying resources...
sudo cp -f cov/lib/mylib/jscoverage*.* cov/.
echo done
echo
