#!/bin/bash
BASEDIR=$(dirname $0)
cd $BASEDIR
coffee -c src/lib/mylib
echo "Done compiling CoffeeScripts!"
