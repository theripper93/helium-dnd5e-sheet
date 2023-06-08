import {HeliumCharacterSheet} from "./sheets/character.js";
import {HeliumNpcSheet} from "./sheets/npc.js";
import {HeliumGroupSheet} from "./sheets/group.js";
import {HeliumVehicleSheet} from "./sheets/vehicle.js";

export const MODULE_ID = 'helium-dnd5e-sheet';
export const SHEETS = [HeliumCharacterSheet, HeliumNpcSheet, HeliumGroupSheet, HeliumVehicleSheet]