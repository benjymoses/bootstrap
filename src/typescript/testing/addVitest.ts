import type { NodePlopAPI } from "plop";
import type {
	BootstrapAction,
	BootstrapActionList,
	BootstrapActionSetup,
} from "../types/bootstrapAction.js";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

import { executeShellCommand } from "../utils/executeShellCommand.js";

const ACTION_NAME = "add-vitest";

const addVitestActionSetup: BootstrapActionSetup = (plop: NodePlopAPI) => {
	return plop.setActionType(ACTION_NAME, () => {
		executeShellCommand(`pnpm pkg set scripts.test="vitest run"`);
		executeShellCommand(`pnpm pkg set scripts.test:watch="vitest" `);
		executeShellCommand(`pnpm pkg set scripts.test:ui="vitest --ui" `);
		executeShellCommand(
			`pnpm pkg set scripts.test:coverage="vitest run --coverage" `,
		);
		executeShellCommand(`pnpm pkg set devDependencies.vitest="latest" `);
		executeShellCommand(
			`pnpm pkg set devDependencies.@vitest/coverage-istanbul="latest" `,
		);
		executeShellCommand(`pnpm pkg set devDependencies.@vitest/ui="latest"`);

		return "Bringing in Vitest...";
	});
};

const addVitestActionList: BootstrapActionList = (
	path?: string,
	answers?: BootstrapAnswers,
) => {
	if (!path || !answers) {
		return [];
	}

	return [
		{
			type: ACTION_NAME,
		},
		{
			data: {
				outDir: answers.outDir,
			},
			path: `${path}/vitest.config.ts`,
			templateFile: `./templates/ts/testing/vitest/vitest.config.ts.hbs`,
			type: "add",
		},
		{
			data: {
				outDir: answers.outDir,
			},
			path: `${path}/tests/sampleTest.test.ts`,
			templateFile: `./templates/ts/testing/vitest/sampleTest.test.ts.hbs`,
			type: "add",
		},
	];
};

export const addVitest: BootstrapAction = {
	actionSetup: addVitestActionSetup,
	actionsList: addVitestActionList,
	name: ACTION_NAME,
};
