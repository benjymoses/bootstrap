import { ActionType } from "plop";

export function generateTsconfig(path: string, option: string): ActionType {
  const fileSource =
    option === "opinionated" ? "tsconfig.json.hbs" : "tsconfig.json.hbs"; // TODO: find a method to copy down the base-lts to the templates folder

  return {
    type: "add",
    path: `${path}/exampleOutput/tsconfig.json`,
    templateFile: `./templates/typescript/${fileSource}`,
  };
}
