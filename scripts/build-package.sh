#!/bin/bash -e

FILE="$(npm pack)"

echo "$FILE"
rm -rf tmp/package tmp/vx.zip
mkdir -p tmp
tar xvzf "$FILE" -C tmp
(cd tmp/package && zip -r ../vx.zip .)
rm "$FILE"
