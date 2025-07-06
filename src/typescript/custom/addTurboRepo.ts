import type { NodePlopAPI } from "plop";
import type {
	BootstrapAction,
	BootstrapActionList,
	BootstrapActionSetup,
} from "../types/bootstrapAction.js";
import type { BootstrapAnswers } from "../types/bootstrapAnswers.js";

import { executeShellCommand } from "../utils/executeShellCommand.js";

const ACTION_NAME = "add-turborepo";

const addTurboRepoActionSetup: BootstrapActionSetup = (plop: NodePlopAPI) => {
	return plop.setActionType(ACTION_NAME, () => {
		executeShellCommand(`pnpm pkg set devDependencies.@turbo/gen="latest"`);
		executeShellCommand(`pnpm pkg set devDependencies.turbo="latest"`);
		executeShellCommand(`pnpm pkg set engines.node=">=18"`);
		executeShellCommand(`pnpm pkg set packageManager="pnpm@9.0.0"`);
		executeShellCommand(`pnpm pkg set private=true`);
		executeShellCommand(`pnpm pkg set scripts.build="turbo run build"`);
		executeShellCommand(`pnpm pkg set scripts.dev="turbo run dev"`);
		executeShellCommand(`pnpm pkg set scripts.lint="turbo run lint"`);
		executeShellCommand(`pnpm pkg set scripts.lint:fix="turbo run lint:fix"`);
		executeShellCommand(`pnpm pkg set scripts.test="turbo run test"`);
		executeShellCommand(
			`pnpm pkg set scripts.test:watch="turbo run test:watch"`,
		);

		executeShellCommand(`pnpm pkg delete devDependencies.typescript`);
		executeShellCommand(`pnpm pkg delete main`);

		return "Bringing in TurboRepo...";
	});
};

const addTurboRepoActionList: BootstrapActionList = (
	path?: string,
	answers?: BootstrapAnswers,
) => {
	if (!path || !answers) {
		return [];
	}

	const turboGeneratorFiles = [
		{
			path: `${path}/turbo/generators/package.json`,
			templateFile: `./templates/ts/turbo/generators/package.json.hbs`,
			type: "copy",
		},
		{
			path: `${path}/turbo/generators/config.ts`,
			templateFile: `./templates/ts/turbo/generators/config.ts.hbs`,
			type: "copy",
		},
		{
			path: `${path}/turbo/generators/templates/package.json.hbs`,
			templateFile: `./templates/ts/turbo/generators/templates/package.json.hbs`,
			type: "copy",
		},
		{
			path: `${path}/turbo/generators/templates/tsconfig.json.hbs`,
			templateFile: `./templates/ts/turbo/generators/templates/tsconfig.json.hbs`,
			type: "copy",
		},
		{
			path: `${path}/turbo/generators/templates/readme.md.hbs`,
			templateFile: `./templates/ts/turbo/generators/templates/readme.md.hbs`,
			type: "copy",
		},
		{
			path: `${path}/turbo/generators/templates/index.ts.hbs`,
			templateFile: `./templates/ts/turbo/generators/templates/index.ts.hbs`,
			type: "copy",
		},
		{
			path: `${path}/turbo/generators/templates/sample-test.test.ts.hbs`,
			templateFile: `./templates/ts/turbo/generators/templates/sample-test.test.ts.hbs`,
			type: "copy",
		},
	];

	const tsConfigFiles = [
		{
			path: `${path}/packages/typescript-config/base.json`,
			templateFile: `./templates/ts/basics/tsconfig.json.hbs`,
			type: "add",
		},
		{
			path: `${path}/packages/typescript-config/package.json`,
			templateFile: `./templates/ts/turbo/tsconfig/package.json.hbs`,
			type: "add",
		},
	];

	const vitestFiles = [
		{
			path: `${path}/packages/vitest-config/package.json`,
			templateFile: `./templates/ts/turbo/vitest/package.json.hbs`,
			type: "add",
		},
		{
			path: `${path}/packages/vitest-config/tsconfig.json`,
			templateFile: `./templates/ts/turbo/vitest/tsconfig.json.hbs`,
			type: "add",
		},
		{
			path: `${path}/packages/vitest-config/configs/base-config.ts`,
			templateFile: `./templates/ts/turbo/vitest/base-config.ts.hbs`,
			type: "add",
		},
	];

	return [
		{
			type: ACTION_NAME,
		},
		{
			path: `${path}/turbo.json`,
			templateFile: `./templates/ts/turbo/turbo.json.hbs`,
			type: "add",
		},
		{
			path: `${path}/pnpm-workspace.yaml`,
			templateFile: `./templates/ts/turbo/pnpm-workspace.yaml.hbs`,
			type: "add",
		},
		...turboGeneratorFiles,
		...tsConfigFiles,
		...vitestFiles,
	];
};

export const addTurboRepo: BootstrapAction = {
	actionSetup: addTurboRepoActionSetup,
	actionsList: addTurboRepoActionList,
	name: ACTION_NAME,
};
