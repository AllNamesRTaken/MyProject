#!/bin/bash
BASEDIR=$(dirname $0)
cd $BASEDIR

compileType=$1
jsFiles=`find ./src/lib/mylib/ -name *.coffee | sed 's/\.coffee/\.js/g'`

green="\x1B[1;32m"
normal="\x1B[0;0m"
for file in $jsFiles; do
	echo -e "\tRemoving ${green}$file${normal}"
	rm -f $file
done
echo "Done removing .js files! Press any key..."
read -sn 1
