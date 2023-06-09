import { MODULE_ID } from "../consts.js";

export class HeliumCharacterSheet extends game.system.applications.actor.ActorSheet5eCharacter {
    static get type() {
        return "character";
    }

    static get documentClass() {
        return Actor;
    }

    static get template() {
        return `modules/${MODULE_ID}/templates/sheets/actor/${this.type}.hbs`;
    }

    get template() {
        return `modules/${MODULE_ID}/templates/sheets/actor/${this.constructor.type}.hbs`;
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
        const context = await super.getData();
        const items = Array.from(this.actor.items);
        const actorActionsTypes = ["action", "bonus", "reaction", "special", "legendary", "lair", "mythic"];
        const actorItemTypes = ["weapon", "equipment", "feature", "spell"]
        const actorActions = {}
        actorActionsTypes.forEach((type) => {
            const actionItems = items.filter((item) => item?.system?.activation?.type === type && actorItemTypes.includes(item.type));
            if(!actionItems.length) return;
            actorActions[type] = {
                items: actionItems,
                label: CONFIG.DND5E.abilityActivationTypes[type]
            }
        });
        context.actorActions = actorActions;
        return context;
    }

    activateListeners(html) {
		super.activateListeners(html);
        html = html[0] || html;
        html.querySelectorAll(".ability-buttons .ability-mod").forEach((element) => {
            element.addEventListener("click", (event) => {
                event.preventDefault();
                const abilityId = event.currentTarget.dataset.abilityId;
                this.actor.rollAbilityTest(abilityId, {event});
            });
        });
        html.querySelectorAll(".ability-buttons .ability-save").forEach((element) => {
            element.addEventListener("click", (event) => {
                event.preventDefault();
                const abilityId = event.currentTarget.dataset.abilityId;
                this.actor.rollAbilitySave(abilityId, {event});
            });
        });
    }
}
