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

    async getData() {
        const data = await super.getData();
        const items = Array.from(this.actor.items);
        const actorActions = {
            action: items.filter((item) => item?.system?.activation?.type === "action"),
            bonus: items.filter((item) => item?.system?.activation?.type === "bonus"),
            reaction: items.filter((item) => item?.system?.activation?.type === "reaction"),
            special: items.filter((item) => item?.system?.activation?.type === "special"),
            legendary: items.filter((item) => item?.system?.activation?.type === "legendary"),
            lair: items.filter((item) => item?.system?.activation?.type === "lair"),
            mythic: items.filter((item) => item?.system?.activation?.type === "mythic"),
        }
        data.actorActions = actorActions;
        return data;
    }
}
