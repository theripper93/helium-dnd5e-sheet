import { HeliumActorSheet } from "./abstract/HeliumActorSheet.js";
import { MODULE_ID } from "../consts.js";

export class HeliumGroupSheet extends HeliumActorSheet {
    static get type() {
        return "group";
    }
}
