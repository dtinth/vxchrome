#!/bin/bash -e

FILE="$(npm pack)"

echo "$FILE"
rm -rf tmp/package tmp/vx.zip
mkdir -p tmp
tar xvzf "$FILE" -C tmp
mv tmp/package tmp/vx
(cd tmp/vx && zip -r ../vx.zip .)
rm "$FILE"
