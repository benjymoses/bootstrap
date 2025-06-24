import { ActionType } from "plop";

type GenerateIndexProps = {
  projectName: string;
};

export function generateIndex(
  path: string,
  props: GenerateIndexProps
): ActionType {
  return {
    type: "add",
    path: `${path}/exampleOutput/src/index.ts`,
    templateFile: `./templates/ts/basics/index.ts.hbs`,
    data: {
      projectName: props.projectName,
    },
  };
}
