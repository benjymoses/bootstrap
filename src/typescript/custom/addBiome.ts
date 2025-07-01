import type { NodePlopAPI } from "plop";
import type {
	BootstrapAction,
	BootstrapActionList,
	BootstrapActionSetup,
} from "../types/bootstrapAction.js";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

import { executeShellCommand } from "../utils/executeShellCommand.js";

const ACTION_NAME = "add-biome";

const addBiomeActionSetup: BootstrapActionSetup = (plop: NodePlopAPI) => {
	return plop.setActionType(ACTION_NAME, () => {
		executeShellCommand(`pnpm pkg set devDependencies.@biomejs/biome="latest"`);
		executeShellCommand(
			`pnpm pkg set scripts.lint="biome check --write --unsafe --no-errors-on-unmatched"`,
		);
		executeShellCommand(
			`pnpm pkg set scripts.lint:lint="biome lint --write --unsafe --no-errors-on-unmatched"`,
		);
		executeShellCommand(
			`pnpm pkg set scripts.lint:format="biome format --write --unsafe --no-errors-on-unmatched"`,
		);

		return "Bringing in Biome...";
	});
};

const addBiomeActionList: BootstrapActionList = (
	path?: string,
	answers?: BootstrapAnswers,
) => {
	if (!path || !answers) {
		return [];
	}

	return [
		{
			type: ACTION_NAME,
		},
		{
			path: `${path}/biome.jsonc`,
			templateFile: `./templates/ts/linting/biome.jsonc.hbs`,
			type: "add",
		},
		{
			path: `${path}/.vscode/settings.json`,
			templateFile: `./templates/ts/linting/settings.json.hbs`,
			type: "add",
		},
	];
};

export const addBiome: BootstrapAction = {
	actionSetup: addBiomeActionSetup,
	actionsList: addBiomeActionList,
	name: ACTION_NAME,
};
