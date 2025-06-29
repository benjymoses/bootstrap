import type { NodePlopAPI } from "plop";
import type {
	BootstrapAction,
	BootstrapActionList,
	BootstrapActionSetup,
} from "../types/bootstrapAction.js";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

import { executeShellCommand } from "../utils/executeShellCommand.js";

const ACTION_NAME = "run-git-commands";

const runGitCommandsActionSetup: BootstrapActionSetup = (plop: NodePlopAPI) => {
	return plop.setActionType(ACTION_NAME, () => {
		executeShellCommand("git init");
		executeShellCommand("git add .");
		executeShellCommand("HUSKY=0 git commit -m 'Initial commit'");
		return "Performing initial git commit...";
	});
};

const runGitCommandsActionList: BootstrapActionList = (
	_workingPath?: string,
	_answers?: BootstrapAnswers,
) => {
	return [
		{
			type: ACTION_NAME,
		},
	];
};

export const runGitCommands: BootstrapAction = {
	actionSetup: runGitCommandsActionSetup,
	actionsList: runGitCommandsActionList,
	name: ACTION_NAME,
};
