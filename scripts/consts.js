import {HeliumCharacterSheet} from "./sheets/character.js";
import {HeliumNpcSheet} from "./sheets/npc.js";
import {HeliumGroupSheet} from "./sheets/group.js";
import {HeliumVehicleSheet} from "./sheets/vehicle.js";

export const MODULE_ID = 'helium-dnd5e-sheet';
export const SHEETS = [HeliumCharacterSheet, HeliumNpcSheet, HeliumGroupSheet, HeliumVehicleSheet]
export const TEMPLATES = [
    "modules/helium-dnd5e-sheet/templates/sheets/actor/character.hbs",
    "modules/helium-dnd5e-sheet/templates/sheets/actor/npc.hbs",
    "modules/helium-dnd5e-sheet/templates/sheets/actor/group.hbs",
    "modules/helium-dnd5e-sheet/templates/sheets/actor/vehicle.hbs",
    "modules/helium-dnd5e-sheet/templates/sheets/actor/parts/active-effects.hbs",
    "modules/helium-dnd5e-sheet/templates/sheets/actor/parts/actor-features.hbs",
    "modules/helium-dnd5e-sheet/templates/sheets/actor/parts/actor-inventory.hbs",
    "modules/helium-dnd5e-sheet/templates/sheets/actor/parts/actor-spellbook.hbs",
    "modules/helium-dnd5e-sheet/templates/sheets/actor/parts/actor-traits.hbs",
    "modules/helium-dnd5e-sheet/templates/sheets/actor/parts/actor-warnings.hbs",
    "modules/helium-dnd5e-sheet/templates/sheets/actor/parts/actor-actions.hbs",
    "modules/helium-dnd5e-sheet/templates/sheets/actor/parts/actor-actions-item-card.hbs",
]