#!/bin/bash
#command -v less >/dev/null 2>&1 || { echo >&2 "I require less but it's not installed.  Aborting."; exit 1; }

if [ $# -eq 0 ]; then
	echo "Please supply --release or --debug as first parameter"
	exit 0
fi

compileType=$1
lessFiles=`find ./src/lib/mylib/ ./src/resources/styles -path *.less`

green="\x1B[1;32m"
normal="\x1B[0;0m"
echo "Compiling Less files to Css..."

IFS=$'\n'
for file in $lessFiles; do
	if [ $compileType = "--debug" ]; then
		echo -e "\tCompiling ${green}$file${normal} (debug)"
		./tools/less/bin/lessc --compile $file "$file.css"
	else
		echo -e "\tCompiling ${green}$file${normal}"
		./tools/less/bin/lessc --compile $file "$file.css"
	fi
done

echo "Done compiling Less files!"
