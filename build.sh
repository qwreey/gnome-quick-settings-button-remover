#!/bin/bash
schemas/build.sh
rm -rf dist 2> /dev/null
mkdir dist 2> /dev/null
mkdir dist/build 2> /dev/null
cp extension.js dist/build/
cp prefs.js dist/build/
cp metadata.json dist/build/
mkdir dist/build/schemas
cp schemas/qwreey.hide_quick_buttons.gschema.xml dist/build/schemas/
cp schemas/gschemas.compiled dist/build/schemas/
zip -r dist/output.zip dist/build
