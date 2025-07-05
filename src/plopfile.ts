import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NodePlopAPI } from "plop";
import { getNewTsProjectActions } from "./plop/newTsProjectActions.js";
// Prompts
import { newTsProjectPrompts } from "./plop/newTsProjectPrompts.js";
// Import Actions requiring setup
import {
	bootstrapDefaultCustomActions,
	bootstrapFinalActions,
	bootstrapMonorepoActions,
} from "./typescript/actionsLibrary.js";

// Main Plop function for plopfile
export default function (plop: NodePlopAPI) {
	plop.setWelcomeMessage(
		"Welcome to Bootstrap. Pick an action to get started.",
	);

	// Get this Plopfile directory
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	// Register a custom 'copy' action type
	plop.setActionType("copy", (answers, config, plop) => {
		const src = path.resolve(__dirname, config.templateFile);
		const dest = plop.renderString(config.path, answers);

		// Read the source file as a buffer/string
		const contents = fs.readFileSync(src);
		// Ensure the destination directory exists
		fs.mkdirSync(path.dirname(dest), { recursive: true });
		// Write the file as-is
		fs.writeFileSync(dest, contents);

		return `Copied ${dest} with handlebars escape`;
	});

	// setup custom actions so they can be selected by "ActionType"
	for (const customAction of Object.values(bootstrapDefaultCustomActions)) {
		customAction.actionSetup(plop);
	}

	// setup monorepo actions so they can be selected by "ActionType"
	for (const monoAction of Object.values(bootstrapMonorepoActions)) {
		monoAction.actionSetup(plop);
	}

	// setpu final actions so they can be selected by "ActionType"
	for (const finalAction of Object.values(bootstrapFinalActions)) {
		finalAction.actionSetup(plop);
	}

	plop.setGenerator("New TypeScript Project", {
		actions: (answers: any) => getNewTsProjectActions(answers),
		prompts: newTsProjectPrompts,
	});

	plop.setGenerator("Add to existing Project", {
		actions: undefined,
		prompts: [
			{
				message: "This generator is not yet implemented.",
				name: "notImplemented",
				type: "confirm",
			},
		],
	});
}
