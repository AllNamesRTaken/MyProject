#!/bin/sh
cd ../release
ROOTDIR=`pwd`;

echo "minify: removing tests/ and demos/ and cruft"
rm -rf lib/dojo/tests/
rm -rf lib/dijit/demos/
rm -rf lib/dijit/bench/
#rm -rf lib/dijit/tests/
#rm -rf lib/util/resources/
#rm -rf lib/util/docscripts/
#rm -rf lib/util/doh/
#rm -rf lib/util/jsdoc/

# clean out dojox tests and demos
cd lib/dojox/
for i in *
do
  if [ -d $i ]; then
    rm -rf $i/tests/
    rm -rf $i/demos/
  fi
done
cd $ROOTDIR

find . -name *.uncompressed.js -exec rm '{}' ';'
find . -name *.consoleStripped.js -exec rm '{}' ';'

# remove the templatePath files, which are unused internally now:
rm -rf dijit/templates
rm -rf dijit/form/templates
rm -rf dijit/layout/templates

#for t in 'tundra' 'soria' 'nihilo' 'claro'
#do
#  cd $ROOTDIR/dijit/themes/$t/
#  mv $t.css $t.tmp
#  find `pwd` -name *.cs\? -exec rm '{}' ';'
#  mv $t.tmp $t.css
#done
