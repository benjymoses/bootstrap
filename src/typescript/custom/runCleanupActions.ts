import type { NodePlopAPI } from "plop";
import type {
	BootstrapAction,
	BootstrapActionList,
	BootstrapActionSetup,
} from "../types/bootstrapAction.js";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

import { executeShellCommand } from "../utils/executeShellCommand.js";

const ACTION_NAME = "run-cleanup-commands";

const runCleanupCommandsActionSetup: BootstrapActionSetup = (
	plop: NodePlopAPI,
) => {
	return plop.setActionType(ACTION_NAME, () => {
		executeShellCommand("pnpm i"); // install dependencies
		executeShellCommand(`pnpm ls --depth=0 --json | node -e '
const fs = require(\"fs");
const pkgs = JSON.parse(fs.readFileSync("package.json", "utf8"));
const installed = JSON.parse(fs.readFileSync(0, "utf8"))[0].devDependencies;
for (const dep in pkgs.devDependencies) {
  if (pkgs.devDependencies[dep] === "latest" && installed[dep] && installed[dep].version) {
    pkgs.devDependencies[dep] = "^" + installed[dep].version;
  }
}
fs.writeFileSync("package.json", JSON.stringify(pkgs, null, 2));
'`); // update package.json with installed versions (which were installed as "latest")
		executeShellCommand("biome format package.json --write"); // format package.json before initial git commit
		return "Performing cleanup actions...";
	});
};

const runCleanupCommandsActionList: BootstrapActionList = (
	_workingPath?: string,
	_answers?: BootstrapAnswers,
) => {
	return [
		{
			type: ACTION_NAME,
		},
	];
};

export const runCleanupCommands: BootstrapAction = {
	actionSetup: runCleanupCommandsActionSetup,
	actionsList: runCleanupCommandsActionList,
	name: ACTION_NAME,
};
