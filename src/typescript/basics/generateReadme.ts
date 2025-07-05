import type { ActionType } from "plop";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

export const generateReadme = (
	path: string,
	answers: BootstrapAnswers,
): ActionType => {
	return {
		data: {
			outDir: answers.outDir,
			projectDescription: answers.projectDescription,
			projectName: answers.projectName,
		},
		path: `${path}/README.md`,
		templateFile: `./templates/ts/basics/readme.md.hbs`,
		type: "add",
	};
};
