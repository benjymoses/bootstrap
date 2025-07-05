// Import actions before exporting within Bootstrap action
import { generateGitignore } from "./basics/generateGitignore.js";
import { generateIndex } from "./basics/generateIndex.js";
import { generatePackageJson } from "./basics/generatePackageJson.js";
import { generateTsconfig } from "./basics/generateTsconfig.js";
import { addBiome } from "./custom/addBiome.js";
import { addEsbuild } from "./custom/addEsbuild.js";
import { addTsx } from "./custom/addTsx.js";
import { addHusky } from "./custom/generateHusky.js";
import { installPnpm } from "./custom/installPnpm.js";
import { runCleanupCommands } from "./custom/runCleanupActions.js";
import { runGitCommands } from "./custom/runGitCommands.js";
import { addVitest } from "./testing/addVitest.js";

// Basic actions that use in-built Plop functionality
export const bootstrapBasicActions = {
	generateGitignore,
	generateIndex,
	generatePackageJson,
	generateTsconfig,
} as const;

// Custom actions that require additional setup or external commands
export const bootstrapCustomActions = {
	addBiome,
	addHusky,
	addTsx,
	addVitest,
	installPnpm,
} as const;

// Additional custom actions that shouldn't be installed by default
export const bootstrapAdditionalActions = {
	addEsbuild,
} as const;

// Final actions to perform last
export const bootstrapFinalActions = {
	runCleanupCommands,
	runGitCommands,
} as const;
