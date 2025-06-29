import type { NodePlopAPI } from "plop";
import type {
	BootstrapAction,
	BootstrapActionList,
	BootstrapActionSetup,
} from "../types/bootstrapAction.js";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

import { executeShellCommand } from "../utils/executeShellCommand.js";

const ACTION_NAME = "add-husky";

const addHuskyActionSetup: BootstrapActionSetup = (plop: NodePlopAPI) => {
	return plop.setActionType(ACTION_NAME, () => {
		executeShellCommand(`pnpm pkg set devDependencies.husky="^9.1.7"`);
		executeShellCommand(`pnpm pkg set scripts.prepare="husky"`);
		executeShellCommand(
			`pnpm pkg set husky.hooks.prepare-commit-msg="exec < /dev/tty && pnpx cz --hook || true"`,
		);

		return "Bringing in Husky...";
	});
};

const addHuskyActionList: BootstrapActionList = (
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
			type: "addMany",
			destination: `${path}/.husky/`,
			templateFiles: `./templates/ts/husky/**/**.hbs`,
			base: "./templates/ts/husky/",
		},
	];
};

export const addHusky: BootstrapAction = {
	actionSetup: addHuskyActionSetup,
	actionsList: addHuskyActionList,
	name: ACTION_NAME,
};
