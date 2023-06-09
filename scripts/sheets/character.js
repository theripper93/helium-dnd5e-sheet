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
