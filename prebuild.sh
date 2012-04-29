#!/bin/sh
ROOTDIR=`pwd`;

#pre-clean

if [ -d $ROOTDIR/../release ]; then
  rm -rf $ROOTDIR/../release
fi
