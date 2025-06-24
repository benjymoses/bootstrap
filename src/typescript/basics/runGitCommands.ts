import type { NodePlopAPI } from "plop";
import { executeShellCommand } from "../../utils/executeShellCommand.js";

const ACTION_NAME = "run-git-commands";

export const runGitCommandsActionType = (plop: NodePlopAPI) => {
  return plop.setActionType(ACTION_NAME, () => {
    executeShellCommand(
      "git init && git add . && git commit -m 'Initial commit' --no-verify"
    );
    return "Performing initial git commit...";
  });
};

export const runGitCommandsAction = () => {
  return [
    {
      type: ACTION_NAME,
    },
  ];
};
