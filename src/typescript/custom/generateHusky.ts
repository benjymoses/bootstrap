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
		executeShellCommand(`pnpm pkg set devDependencies.husky="latest"`);
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
			base: "./templates/ts/husky/",
			destination: `${path}/.husky/`,
			templateFiles: `./templates/ts/husky/**/**.hbs`,
			type: "addMany",
		},
	];
};

export const addHusky: BootstrapAction = {
	actionSetup: addHuskyActionSetup,
	actionsList: addHuskyActionList,
	name: ACTION_NAME,
};
