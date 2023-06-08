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
        const actorActionsTypes = ["action", "bonus", "reaction", "special", "legendary", "lair", "mythic"]
        const actorActions = {}
        actorActionsTypes.forEach((type) => {
            actorActions[type] = {
                items: items.filter((item) => item?.system?.activation?.type === type),
                label: CONFIG.DND5E.abilityActivationTypes[type]
            }
        });
        data.actorActions = actorActions;
        return data;
    }
}
