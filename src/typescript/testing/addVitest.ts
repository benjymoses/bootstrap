import type { NodePlopAPI } from "plop";
import type {
  BootstrapAction,
  BootstrapActionList,
  BootstrapActionSetup,
} from "../types/bootstrapAction.js";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

import { executeShellCommand } from "../utils/executeShellCommand.js";

const ACTION_NAME = "add-vitest";

const addVitestActionSetup: BootstrapActionSetup = (plop: NodePlopAPI) => {
  return plop.setActionType(ACTION_NAME, () => {
    executeShellCommand(`npm pkg set scripts.test="vitest run"`);
    executeShellCommand(`npm pkg set scripts.test:watch="vitest" `);
    executeShellCommand(`npm pkg set scripts.test:ui="vitest --ui" `);
    executeShellCommand(
      `npm pkg set scripts.test:coverage="vitest run --coverage" `
    );
    executeShellCommand(`npm pkg set devDependencies.vitest="^3.0.7" `);
    executeShellCommand(
      `npm pkg set devDependencies.@vitest/coverage-istanbul="^3.0.7" `
    );
    executeShellCommand(`npm pkg set devDependencies.@vitest/ui="^3.2.3"`);

    return "Bringing in Vitest...";
  });
};

const addVitestActionList: BootstrapActionList = (
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
    {
      type: "add",
      path: `${path}/vitest.config.ts`,
      templateFile: `./templates/ts/testing/vitest/vitest.config.ts.hbs`,
      data: {
        outDir: answers.outDir,
      },
    },
    {
      type: "add",
      path: `${path}/tests/sampleTest.test.ts`,
      templateFile: `./templates/ts/testing/vitest/sampleTest.test.ts.hbs`,
      data: {
        outDir: answers.outDir,
      },
    },
  ];
};

export const addVitest: BootstrapAction = {
  actionsList: addVitestActionList,
  actionSetup: addVitestActionSetup,
};
