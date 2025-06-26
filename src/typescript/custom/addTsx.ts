import type { NodePlopAPI } from "plop";
import type {
  BootstrapAction,
  BootstrapActionList,
  BootstrapActionSetup,
} from "../types/bootstrapAction.js";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

import { executeShellCommand } from "../utils/executeShellCommand.js";

const ACTION_NAME = "add-ts-node";

const addTsxActionSetup: BootstrapActionSetup = (plop: NodePlopAPI) => {
  return plop.setActionType(ACTION_NAME, () => {
    executeShellCommand(`npm pkg set devDependencies.tsx="^4.20.3" `);
    executeShellCommand(`npm pkg set scripts.start="npx tsx src/index.ts"`);

    return "Bringing in TSX...";
  });
};

const addTsxActionList: BootstrapActionList = (
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

export const addTsx: BootstrapAction = {
  actionsList: addTsxActionList,
  actionSetup: addTsxActionSetup,
};
