import { ActionType } from "plop";

type GitIgnoreProps = {
  outDir: string;
};

export function generateGitignore(
  path: string,
  props: GitIgnoreProps
): ActionType {
  return {
    type: "add",
    path: `${path}/exampleOutput/.gitignore`,
    templateFile: `./templates/ts/basics/gitignore.hbs`,
    data: {
      outDir: props.outDir,
    },
  };
}
