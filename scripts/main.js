import { MODULE_ID, SHEETS, TEMPLATES } from "./consts.js";
import { l } from "./helpers.js";

Hooks.on("init", () => {

    // Register sheet application classes
    SHEETS.forEach(sheet => {
        DocumentSheetConfig.registerSheet(sheet.documentClass, "helium-" + sheet.type, sheet, {
            types: [sheet.type],
            label: l("sheets." + sheet.type)
        });
    });

    // Preload templates and partials to improve performance
    const paths = {};
    for ( const path of TEMPLATES ) {
      paths[path] = path;
      paths[`${MODULE_ID}.${path.split("/").pop().replace(".hbs", "")}`] = path;
    }
    loadTemplates(paths);
});