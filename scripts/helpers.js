import { MODULE_ID } from "./consts.js";

export function l(key) {
    return game.i18n.localize(`${MODULE_ID}.${key}`);
}