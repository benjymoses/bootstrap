// Basic Plop Actions
import { generateTsconfig } from "./basics/generateTsconfig.js";
import { generatePackageJson } from "./basics/generatePackageJson.js";
import { generateGitignore } from "./basics/generateGitignore.js";
import { generateIndex } from "./basics/generateIndex.js";

// Custom Actions
import { runGitCommands } from "./custom/runGitCommands.js";
import { addVitest } from "./testing/addVitest.js";
import { addHusky } from "./custom/generateHusky.js";
import { addTsx } from "./custom/addTsx.js";

// Custom additional Actions
import { addEsbuild } from "./custom/addEsbuild.js";
import { installPnpm } from "./custom/installPnpm.js";

export const bootstrapBasicActions = {
  generateTsconfig,
  generatePackageJson,
  generateGitignore,
  generateIndex,
} as const;

export const bootstrapCustomActions = {
  addVitest,
  runGitCommands,
  addTsx,
  addHusky,
  installPnpm,
} as const;

export const bootstrapAdditionalActions = {
  addEsbuild,
} as const;
