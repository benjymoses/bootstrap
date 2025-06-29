import type { NodePlopAPI } from "plop";
import type {
	BootstrapAction,
	BootstrapActionList,
	BootstrapActionSetup,
} from "../types/bootstrapAction.js";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

import { executeShellCommand } from "../utils/executeShellCommand.js";
import { execSync } from "node:child_process";

const ACTION_NAME = "install PNPM";

// check if pnpm is installed
function pnpmIsInstalled(): boolean {
	try {
		return !execSync("which pnpm").toString().includes("not found");
	} catch (error) {
		console.error("Error getting git user name:", error);
		return true; // If the command fails, assume pnpm is not installed
	}
}

const installPnpmActionSetup: BootstrapActionSetup = (plop: NodePlopAPI) => {
	return plop.setActionType(ACTION_NAME, () => {
		if (pnpmIsInstalled()) {
			return "(skipping) PNPM is already installed";
		}

		executeShellCommand(`wget -qO- https://get.pnpm.io/install.sh | sh -`);

		return "Bringing in PNPM...";
	});
};

const installPnpmActionList: BootstrapActionList = (
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
	];
};

export const installPnpm: BootstrapAction = {
	actionsList: installPnpmActionList,
	actionSetup: installPnpmActionSetup,
	name: ACTION_NAME,
};
