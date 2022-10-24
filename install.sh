#!/bin/bash
name="quick-settings-button-remover@qwreey"
./build.sh
cp -r dist/$name ~/.local/share/gnome-shell/extensions/
