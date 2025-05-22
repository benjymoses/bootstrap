import { NodePlopAPI } from "plop";
import path from "path";

import { generateTsconfig } from "./typescript/generateTsconfig.js";

const currentWorkingDirectory = process.cwd();
const pathSuffix = path.basename(currentWorkingDirectory) === "lib" ? ".." : ""; // Back to root if in lib (build) folder during development
const workingPath = path.join(currentWorkingDirectory, pathSuffix);

console.log(workingPath);

export default function (plop: NodePlopAPI) {
  plop.setWelcomeMessage("Please choose from an option below");

  plop.setGenerator("Which language are you working in?", {
    prompts: [
      {
        type: "list",
        name: "language",
        message: "Choose a language:",
        choices: [{ name: "TypeScript", value: "typescript" }],
      },
      {
        type: "list",
        name: "tsoperation",
        message: "What do you want to do?",
        choices: [{ name: "Create a tsconfig.json", value: "create-tsconfig" }],
        when: (answers) => answers.language === "typescript",
      },
      {
        type: "list",
        name: "tsconfigsource",
        message: "Pick a source for your tsconfig.json",
        choices: [
          { name: "Opinionated", value: "opinionated" },
          { name: "Base Configs LTS", value: "base-lts" },
        ],
        when: (answers) => answers.tsoperation === "create-tsconfig",
      },
    ],
    actions: (answers) => {
      const actions = [];
      if (!answers) return [{ type: "abort" }];

      if (answers.tsoperation === "create-tsconfig") {
        actions.push(generateTsconfig(workingPath, answers.tsconfigsource));
      }

      return actions;
    },
  });
}
