import { MODULE_ID } from "../../consts.js";

export class HeliumActorSheet extends ActorSheet {
    static get type() {
        return "";
    }
    static get documentClass() {
        return Actor;
    }

    static get template() {
        return `modules/${MODULE_ID}/templates/sheets/actor/${this.type}.hbs`;
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            height: 720,
            width: 800,
            template: this.template,
            id: `${MODULE_ID}-${this.type}-sheet`,
            classes: [`${MODULE_ID}`, `${MODULE_ID}-sheet`, `${MODULE_ID}-${this.type}-sheet`],
        });
    }
}
