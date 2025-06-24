import { NodePlopAPI } from "plop";
import path from "path";

import { generateTsconfig } from "./typescript/basics/generateTsconfig.js";
import { generatePackageJson } from "./typescript/basics/generatePackageJson.js";
import { generateGitignore } from "./typescript/basics/generateGitignore.js";
import { generateIndex } from "./typescript/basics/generateIndex.js";
import { generateHusky } from "./typescript/basics/generateHusky.js";
// import { generateVitest } from "";

import {
  runGitCommandsAction,
  runGitCommandsActionType,
} from "./typescript/basics/runGitCommands.js";

import {
  addVitestAction,
  addVitestActionType,
} from "./typescript/testing/generateVitest.js";

const currentWorkingDirectory = process.cwd();
const pathSuffix = path.basename(currentWorkingDirectory) === "lib" ? ".." : ""; // Back to root if in lib (build) folder during dev
const workingPath = path.join(currentWorkingDirectory, pathSuffix);

export default function (plop: NodePlopAPI) {
  plop.setWelcomeMessage("Please choose from an option below");

  // plop.load("plop-pack-git-init");

  // setup custom actions
  runGitCommandsActionType(plop);
  addVitestActionType(plop);

  plop.setGenerator("Which language are you working in?", {
    prompts: [
      {
        type: "list",
        name: "language",
        message: "Choose a language:",
        choices: [{ name: "TypeScript", value: "typescript" }],
        default: "typescript",
      },
      {
        type: "list",
        name: "tsoperation",
        message: "What do you want to do?",
        choices: [
          { name: "Use recommended defaults", value: "use-defaults" },
          { name: "Select task stacks", value: "use-customised" },
        ],
        when: (answers) => answers.language === "typescript",
      },
      {
        type: "checkbox",
        name: "customisations",
        message: "Which customisations do you want?",
        choices: [
          { name: "tsconfig.json", value: "generate-tsconfig" },
          { name: "package.json", value: "generate-packagejson" },
          { name: ".gitignore", value: "generate-gitignore" },
          // { name: "Add Vitest with defaults", value: "generate-vitest" },
        ],
        when: (answers) => answers.tsoperation === "use-customised",
      },
      {
        type: "input",
        name: "projectName",
        message: "What is the name of your project? ", //TODO: consider what validation is needed
      },
      {
        type: "input",
        name: "projectDescription",
        message: "Provide a short description of your project: ", //TODO: consider what validation is needed,
      },
      {
        type: "input",
        name: "outDir",
        message: "Where do you want the output files to go? (default: dist)",
        default: "dist",
      },
    ],
    actions: (answers) => {
      const actions = [];
      if (!answers) return [{ type: "abort" }];

      if (
        !answers.projectName ||
        !answers.projectDescription ||
        !answers.outDir
      )
        return [{ type: "abort" }];

      const { projectName, projectDescription, outDir } = answers;

      if (answers.tsoperation === "use-defaults") {
        actions.push(
          generateTsconfig(workingPath, {
            outDir,
          })
        );
        actions.push(
          generatePackageJson(workingPath, {
            projectName,
            projectDescription,
            outDir,
          })
        );
        actions.push(generateGitignore(workingPath, { outDir }));
        actions.push(...addVitestAction(workingPath, outDir));
      }

      if (answers.tsoperation === "use-customised") {
        if (answers.customisations.includes("generate-tsconfig")) {
          actions.push(
            generateTsconfig(workingPath, {
              outDir,
            })
          );
        }
        if (answers.customisations.includes("generate-packagejson")) {
          actions.push(
            generatePackageJson(workingPath, {
              projectName,
              projectDescription,
              outDir,
            })
          );
        }
        if (answers.customisations.includes("generate-gitignore")) {
          actions.push(generateGitignore(workingPath, { outDir }));
        }
        if (answers.customisations.includes("generate-vitest")) {
          actions.push(...addVitestAction(workingPath, outDir));
        }
      }

      // Always generate an index, run git actions, then add Husky
      actions.push(generateIndex(workingPath, { projectName }));
      actions.push(generateHusky(workingPath));
      actions.push(...runGitCommandsAction());

      return actions;
    },
  });
}
