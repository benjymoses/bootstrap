import type { ActionType } from "plop";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

export const generateIndex = (
	path: string,
	answers: BootstrapAnswers,
): ActionType => {
	return {
		data: {
			projectName: answers.projectName,
		},
		path: `${path}/src/index.ts`,
		templateFile: `./templates/ts/basics/index.ts.hbs`,
		type: "add",
	};
};
