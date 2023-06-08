import {MODULE_ID} from "./consts.js";
import {setCSSVar} from "./helpers.js";

export function registerSettings() {

    Hooks.on("renderSettingsConfig", (app, html, data) => {
        colorPicker("accentColor", html);
    });

    game.settings.register(MODULE_ID, "accentColor", {
        name: `${MODULE_ID}.settings.accentColor.name`,
        hint: `${MODULE_ID}.settings.accentColor.hint`,
        scope: "client",
        config: true,
        type: String,
        default: game.user.color,
        onChange: () => {
            setAccentColor();
        },
    });



    //set values
    setAccentColor();

}

function setAccentColor() {
    const accentColor = game.settings.get(MODULE_ID, "accentColor");
    setCSSVar(`--${MODULE_ID}-accent-color`, accentColor);
}

//Color Picker by kaelad02
//License: MIT
//Documentation: https://github.com/kaelad02/adv-reminder/blob/54207ec1ef0500439e57521f15956c07e4c02af4/src/settings.js#L91-L104

export function colorPicker(settingId, html) {
    const colorPickerElement = document.createElement("input");
    colorPickerElement.setAttribute("type", "color");
    colorPickerElement.setAttribute("data-edit", MODULE_ID + "." + settingId);
    colorPickerElement.value = game.settings.get(MODULE_ID, settingId);

    // Add color picker
    const stringInputElement = html[0].querySelector(`input[name="${MODULE_ID}.${settingId}"]`);
    stringInputElement.classList.add("color");
    stringInputElement.after(colorPickerElement);
}