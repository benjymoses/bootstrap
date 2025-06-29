import type { ActionType } from "plop";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

export const generateGitignore = (
	path: string,
	answers: BootstrapAnswers,
): ActionType => {
	return {
		data: {
			outDir: answers.outDir,
		},
		path: `${path}/.gitignore`,
		templateFile: `./templates/ts/basics/gitignore.hbs`,
		type: "add",
	};
};
