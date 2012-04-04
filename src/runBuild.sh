#!/bin/sh
ROOTDIR=`pwd`;

./prebuild.sh
./build.sh --profile build.profile.js
./postbuild.sh
