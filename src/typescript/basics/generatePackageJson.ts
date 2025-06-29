import type { ActionType } from "plop";
import { execSync } from "node:child_process";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

// get git name from git config
function getGitName(): string {
	try {
		return execSync("git config user.name").toString().trim();
	} catch (error) {
		console.error("Error getting git user name:", error);
		return "Bootstrap User";
	}
}

export const generatePackageJson = (
	path: string,
	answers: BootstrapAnswers,
): ActionType => {
	const gitName = getGitName();
	return {
		type: "add",
		path: `${path}/package.json`,
		templateFile: `./templates/ts/basics/package.json.hbs`,
		data: {
			projectName: answers.projectName,
			projectDescription: answers.projectDescription,
			outDir: answers.outDir,
			authorName: gitName,
		},
	};
};
