import type { NodePlopAPI } from "plop";
import type {
  BootstrapAction,
  BootstrapActionList,
  BootstrapActionSetup,
} from "../types/bootstrapAction.js";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

import { executeShellCommand } from "../utils/executeShellCommand.js";

const ACTION_NAME = "add-ts-node";

const addEsbuildActionSetup: BootstrapActionSetup = (plop: NodePlopAPI) => {
  return plop.setActionType(ACTION_NAME, () => {
    executeShellCommand(`npm pkg set devDependencies.esbuild="^0.25.5" `);
    executeShellCommand(
      `npm pkg set scripts.build="esbuild src/index.ts --bundle --outfile=dist/src.js"`
    );

    return "Bringing in ESBuild...";
  });
};

const addEsbuildActionList: BootstrapActionList = (
  path?: string,
  answers?: BootstrapAnswers
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

export const addEsbuild: BootstrapAction = {
  actionsList: addEsbuildActionList,
  actionSetup: addEsbuildActionSetup,
};
