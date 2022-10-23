const ExtensionUtils = imports.misc.extensionUtils
const Me = ExtensionUtils.getCurrentExtension()
const { Adw, Gio, Gtk, GObject } = imports.gi

function init() {
}

function fillPreferencesWindow(window) {
    const settings = ExtensionUtils.getSettings(Me.metadata['settings-schema'])
    const widget = new Adw.PreferencesPage()
    window.add(widget)

    let allButtons = settings.get_strv("all-buttons") || []
    let removedButtons = settings.get_strv("removed-buttons") || []
    let defaultInvisibleButtons = settings.get_strv("default-invisible-buttons") || []
    let buttonsLabel
    try {
        buttonsLabel = JSON.parse(settings.get_string("buttons-label"))
    } catch {}
    buttonsLabel ||= {}

    const removeGroup = new Adw.PreferencesGroup({
        title: 'Remove button',
        description: 'List of button should be removed.'
    })
    widget.add(removeGroup)

    for (let name of allButtons) {
        const row = new Adw.ActionRow({
            title: name + (
                defaultInvisibleButtons.includes(name) ? " (invisible by system)" : ""
            ),
            subtitle: buttonsLabel[name] || null
        })
        removeGroup.add(row);

        const toggle = new Gtk.Switch({
            active: removedButtons.includes(name),
            valign: Gtk.Align.CENTER,
        });

        toggle.connect("notify::active",()=>{
            if (toggle.get_active()) {
                removedButtons.push(name)
            } else {
                while (true) {
                    let index = removedButtons.indexOf(name)
                    if (index != -1) {
                        removedButtons.splice(index,1)
                    } else break
                }
            }
            settings.set_strv("removed-buttons",removedButtons)
        })

        row.add_suffix(toggle);
        row.activatable_widget = toggle;
    }
}
