import type { ActionType } from "plop";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

export const generateIndex = (
	path: string,
	answers: BootstrapAnswers,
): ActionType => {
	return {
		type: "add",
		path: `${path}/src/index.ts`,
		templateFile: `./templates/ts/basics/index.ts.hbs`,
		data: {
			projectName: answers.projectName,
		},
	};
};
