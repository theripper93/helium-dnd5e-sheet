import { HeliumActorSheet } from "./abstract/HeliumActorSheet.js";
import { MODULE_ID } from "../consts.js";

export class HeliumCharacterSheet extends HeliumActorSheet {
    static get type() {
        return "character";
    }

    async getData(options) {
        const context = await super.getData(options);
        console.log(context);
        return mergeObject(context, { });
    }

    activateListeners(html) {
		super.activateListeners(html);

    }
}
