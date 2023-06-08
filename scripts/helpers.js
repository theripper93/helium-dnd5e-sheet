import { MODULE_ID } from "./consts.js";

export function l(key) {
    return game.i18n.localize(`${MODULE_ID}.${key}`);
}

export function mixColors(color1, color2, amount = 0.5) {
    color1 = Color.from(color1);
    color2 = Color.from(color2);
    const mixed = color1.mix(color2, amount);
    return mixed.toString()
}

export function darken(color, amount = 0.5) {
    return mixColors(color, "#000000", amount);
}

export function lighten(color, amount = 0.5) {
    return mixColors(color, "#ffffff", amount);
}

export function saturate(color, amount = 0.5) {
    color = Color.from(color);
    const hsv = color.hsv;
    hsv[1] = Math.min(1, hsv[1] + amount);
    return Color.fromHSV(...hsv).toString();
}

export function setCSSVar(name, value) {
    document.documentElement.style.setProperty(name, value);
}