import type { NodePlopAPI } from "plop";
import { getNewTsProjectActions } from "./plop/newTsProjectActions.js";
// Prompts
import { newTsProjectPrompts } from "./plop/newTsProjectPrompts.js";
// Import Actions requiring setup
import {
	bootstrapCustomActions,
	bootstrapFinalActions,
} from "./typescript/actionsLibrary.js";

// Main Plop function for plopfile
export default function (plop: NodePlopAPI) {
	plop.setWelcomeMessage(
		"Welcome to Bootstrap. Pick an action to get started.",
	);

	// setup custom actions so they can be selected by "ActionType"
	for (const customAction of Object.values(bootstrapCustomActions)) {
		customAction.actionSetup(plop);
	}

	// setpu final actions so they can be selected by "ActionType"
	for (const finalAction of Object.values(bootstrapFinalActions)) {
		finalAction.actionSetup(plop);
	}

	plop.setGenerator("New TypeScript Project", {
		actions: (answers: any) => getNewTsProjectActions(answers),
		prompts: newTsProjectPrompts,
	});
}
