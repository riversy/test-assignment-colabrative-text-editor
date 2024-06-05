#!/bin/bash

OUT_DIR="./src/dto"
PROTO_DIR="../shared/dto"

mkdir -p $OUT_DIR

./node_modules/.bin/pbjs -t static-module -w es6 --es6 -o $OUT_DIR/messages.js $PROTO_DIR/messages.proto
./node_modules/.bin/pbts -o $OUT_DIR/messages.d.ts $OUT_DIR/messages.js