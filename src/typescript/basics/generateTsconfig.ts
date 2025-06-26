import type { ActionType } from "plop";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

export const generateTsconfig = (
  path: string,
  answers: BootstrapAnswers
): ActionType => {
  return {
    type: "add",
    path: `${path}/tsconfig.json`,
    templateFile: `./templates/ts/basics/tsconfig.json.hbs`,
    data: {
      outDir: answers.outDir,
    },
  };
};
