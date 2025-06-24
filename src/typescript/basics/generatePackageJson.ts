import { ActionType } from "plop";
import { execSync } from "child_process";

type PackageJsonProps = {
  projectName: string;
  projectDescription: string;
  outDir?: string; // not currently used
};

// get git name from git config
function getGitName(): string {
  try {
    return execSync("git config user.name").toString().trim();
  } catch (error) {
    console.error("Error getting git user name:", error);
    return "Bootstrap User";
  }
}

export function generatePackageJson(
  path: string,
  props: PackageJsonProps
): ActionType {
  const gitName = getGitName();
  return {
    type: "add",
    path: `${path}/exampleOutput/package.json`,
    templateFile: `./templates/ts/basics/package.json.hbs`,
    data: {
      projectName: props.projectName,
      projectDescription: props.projectDescription,
      outDir: props.outDir,
      authorName: gitName,
    },
  };
}
