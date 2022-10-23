#!/bin/bash
rm -rf dist 2> /dev/null
mkdir dist 2> /dev/null
cp extension.js dist/
cp prefs.js dist/
cp metadata.json dist/
mkdir dist/schemas
cp schemas/qwreey.hide_quick_buttons.gschema.xml dist/schemas/
cp schemas/gschemas.compiled dist/schemas/
