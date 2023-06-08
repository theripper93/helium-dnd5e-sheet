import { HeliumCharacterSheet } from "./sheets/character.js";

Hooks.on("init", () => {
    DocumentSheetConfig.registerSheet(Actor, "helium-character", HeliumCharacterSheet, {
        types: ["character"],
        label: "Helium 5e Character Sheet",
    });
});