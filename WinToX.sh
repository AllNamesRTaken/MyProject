#!/bin/bash
BASEDIR=$(dirname $0)
cd $BASEDIR

compileType=$1
files=`find ./src/lib/mylib -name *.coffee`

green="\x1B[1;32m"
normal="\x1B[0;0m"
for file in $files; do
	echo -e "\tFixing ${green}$file${normal}"
	sed -i "" -e 's/\r$//g' $file
done
echo "Done fixing .coffee files! Press any key..."
read -sn 1
