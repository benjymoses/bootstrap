import { NodePlopAPI } from "plop";

// Bootstrap project actions
import {
  bootstrapBasicActions,
  bootstrapCustomActions,
} from "./typescript/actionsLibrary.js";

// Shared type for prompt answers
import type { BootstrapAnswers } from "./typescript/types/bootstrapAnswers.js";

// Set up pathing for Plop
import path from "path";
const currentWorkingDirectory = process.cwd();
const pathSuffix = path.basename(currentWorkingDirectory) === "lib" ? ".." : ""; // Back to root if in lib (build) folder during dev
const workingPath = path.join(currentWorkingDirectory, pathSuffix);

// Main Plop function for plopfile
export default function (plop: NodePlopAPI) {
  plop.setWelcomeMessage("Please choose from an option below");

  // setup custom actions
  for (const customAction of Object.values(bootstrapCustomActions)) {
    customAction.actionSetup(plop);
  }

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
        when: (answers: any) => answers.language === "typescript",
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
        when: (answers: any) => answers.tsoperation === "use-customised",
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
    actions: (answers: any) => {
      const actions = [];
      if (!answers) return [{ type: "abort" }];

      if (
        !answers.projectName ||
        !answers.projectDescription ||
        !answers.outDir
      )
        return [{ type: "abort" }];

      const bootstrapAnswers: BootstrapAnswers = answers as BootstrapAnswers;

      if (answers.tsoperation === "use-defaults") {
        // Add all basic actions
        for (const basicAction of Object.values(bootstrapBasicActions)) {
          actions.push(basicAction(workingPath, bootstrapAnswers));
        }

        // Add all custom actions apart from git which must run last
        for (const [key, customAction] of Object.entries(
          bootstrapCustomActions
        )) {
          if (key !== "runGitCommands") {
            actions.push(
              ...customAction.actionsList(workingPath, bootstrapAnswers)
            );
          }
        }
      }

      if (answers.tsoperation === "use-customised") {
        if (answers.customisations.includes("generate-tsconfig")) {
          actions.push(
            bootstrapBasicActions.generateTsconfig(
              workingPath,
              bootstrapAnswers
            )
          );
        }
        if (answers.customisations.includes("generate-packagejson")) {
          actions.push(
            bootstrapBasicActions.generatePackageJson(
              workingPath,
              bootstrapAnswers
            )
          );
        }
        if (answers.customisations.includes("generate-gitignore")) {
          actions.push(
            bootstrapBasicActions.generateGitignore(
              workingPath,
              bootstrapAnswers
            )
          );
        }
        if (answers.customisations.includes("generate-vitest")) {
          actions.push(
            ...bootstrapCustomActions.addVitest.actionsList(
              workingPath,
              bootstrapAnswers
            )
          );
        }
      }

      // Always run git commands last
      actions.push(...bootstrapCustomActions.runGitCommands.actionsList());

      // Ending reminder to run `npm install`
      actions.push("");
      actions.push("");
      actions.push("");
      actions.push("================ REMEMBER ================");
      actions.push("Run `pnpm install` to install dependencies");
      actions.push("==========================================");

      return actions;
    },
  });
}
