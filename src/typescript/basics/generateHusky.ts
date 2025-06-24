import { ActionType } from "plop";

export function generateHusky(path: string): ActionType {
  return {
    type: "addMany",
    destination: `${path}/exampleOutput/.husky/`,
    templateFiles: `./templates/husky/**.hbs`,
  };
}
