// Basic Plop Actions

import { generateGitignore } from "./basics/generateGitignore.js";
import { generateIndex } from "./basics/generateIndex.js";
import { generatePackageJson } from "./basics/generatePackageJson.js";
import { generateTsconfig } from "./basics/generateTsconfig.js";
// Custom additional Actions
import { addEsbuild } from "./custom/addEsbuild.js";
import { addTsx } from "./custom/addTsx.js";
import { addHusky } from "./custom/generateHusky.js";
import { installPnpm } from "./custom/installPnpm.js";
// Custom Actions
import { runGitCommands } from "./custom/runGitCommands.js";
import { addVitest } from "./testing/addVitest.js";

export const bootstrapBasicActions = {
	generateGitignore,
	generateIndex,
	generatePackageJson,
	generateTsconfig,
} as const;

export const bootstrapCustomActions = {
	addHusky,
	addTsx,
	addVitest,
	installPnpm,
	runGitCommands,
} as const;

export const bootstrapAdditionalActions = {
	addEsbuild,
} as const;
