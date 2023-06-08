import { HeliumActorSheet } from "./abstract/HeliumActorSheet.js";
import { MODULE_ID } from "../consts.js";

export class HeliumCharacterSheet extends HeliumActorSheet {
    static get type() {
        return "character";
    }

    /*get template(){ return "modules/helium-dnd5e-sheet/templates/sheet.hbs"; }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, { 

        });
    }*/

    async getData(options) {
        const context = await super.getData(options);
        console.log(context);
        return mergeObject(context, { });
    }

    activateListeners(html) {
		super.activateListeners(html);

    }
}
