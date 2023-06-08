import { SHEETS } from "./consts.js";
import { l } from "./helpers.js";

Hooks.on("init", () => {
    SHEETS.forEach(sheet => {
        DocumentSheetConfig.registerSheet(sheet.documentClass, "helium-" + sheet.type, sheet, {
            types: [sheet.type],
            label: l("sheets." + sheet.type)
        });
    });
});