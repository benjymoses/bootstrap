import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  plop.setWelcomeMessage("Please choose from an option below");

  plop.setGenerator("Create LTS 'tsconfig.json'", {
    description:
      "Uses https://github.com/tsconfig/bases node-lts template for tsconfig.json",
    prompts: [],
    actions: [
      {
        type: "TBD",
      },
    ],
  });

  plop.setGenerator("Create 'package.json'", {
    description: "Creates a skeleton package.json",
    prompts: [],
    actions: [
      {
        type: "TBD",
      },
    ],
  });

  plop.setGenerator("Set up git", {
    description:
      "Creates a skeleton .gitignore and initialises a new git repository",
    prompts: [],
    actions: [
      {
        type: "TBD",
      },
    ],
  });

  plop.setGenerator("Set up eslint", {
    description: "Sets up eslint with defaults",
    prompts: [],
    actions: [
      {
        type: "TBD",
      },
    ],
  });

  plop.setGenerator("Set up Prettier", {
    description: "Sets up Prettier with defaults",
    prompts: [],
    actions: [
      {
        type: "TBD",
      },
    ],
  });

  plop.setGenerator("Set up Jest", {
    description: "Sets up Jest with sensible TS defaults",
    prompts: [],
    actions: [
      {
        type: "TBD",
      },
    ],
  });
}
