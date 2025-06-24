import type { NodePlopAPI, ActionType } from "plop";

import { executeShellCommand } from "../../utils/executeShellCommand.js";

type VitestProps = {
  outDir: string;
};

const ACTION_NAME = "add-vitest";

export const addVitestActionType = (plop: NodePlopAPI) => {
  return plop.setActionType(ACTION_NAME, () => {
    executeShellCommand(
      `npm pkg set scripts.test="vitest run" scripts.test:watch="vitest" devDependencies.vitest="^3.0.7" devDependencies.@vitest/coverage-istanbul="^3.0.7" devDependencies.@vitest/ui="^3.2.3"`
    );
    return "Bringing in Vitest...";
  });
};

export const addVitestAction = (path: string, props: VitestProps) => {
  return [
    {
      type: ACTION_NAME,
    },
    {
      type: "add",
      path: `${path}/vitest.config.ts`,
      templateFile: `./templates/ts/testing/vitest/vitest.config.ts.hbs`,
      data: {
        outDir: props.outDir,
      },
    },
  ];
};
