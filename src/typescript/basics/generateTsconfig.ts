import { ActionType } from "plop";

type TsConfigProps = {
  outDir: string;
};

export function generateTsconfig(
  path: string,
  props: TsConfigProps
): ActionType {
  return {
    type: "add",
    path: `${path}/exampleOutput/tsconfig.json`,
    templateFile: `./templates/ts/basics/tsconfig.json.hbs`,
    data: {
      outDir: props.outDir,
    },
  };
}
