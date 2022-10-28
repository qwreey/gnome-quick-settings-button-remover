#!/bin/bash
glib-compile-schemas schemas
name="quick-settings-button-remover@qwreey"
rm -rf dist 2> /dev/null
mkdir dist 2> /dev/null
mkdir dist/$name 2> /dev/null
cp extension.js dist/$name/
cp prefs.js dist/$name/
cp metadata.json dist/$name/
mkdir dist/$name/schemas
cp schemas/org.gnome.shell.extensions.quick-settings-button-remover.gschema.xml dist/$name/schemas/
cp schemas/gschemas.compiled dist/$name/schemas/
cd dist/$name
zip -r ../output.zip ./
cd ../..
