import path from "node:path";

// Actions
import {
	bootstrapDefaultBasicActions,
	bootstrapDefaultCustomActions,
	bootstrapFinalActions,
	bootstrapMonorepoActions,
} from "../typescript/actionsLibrary.js";

// Type for answers to prompts
import type { BootstrapAnswers } from "../typescript/types/bootstrapAnswers.js";

// Determine the working path based on the current working directory
const currentWorkingDirectory = process.cwd();
const pathSuffix = path.basename(currentWorkingDirectory) === "lib" ? ".." : "";
const workingPath = path.join(currentWorkingDirectory, pathSuffix);

export const getNewTsProjectActions = (answers: any) => {
	const actions = [];

	if (
		!answers ||
		!answers.projectName ||
		!answers.projectDescription ||
		!answers.outDir
	)
		return [{ type: "abort" }];

	const bootstrapAnswers: BootstrapAnswers = answers as BootstrapAnswers;

	// * Default repo chosen
	if (answers.repoType === "default-repo") {
		// Add all basic actions
		for (const basicAction of Object.values(bootstrapDefaultBasicActions)) {
			actions.push(basicAction(workingPath, bootstrapAnswers));
		}

		// * Add all custom actions apart from cleanup-actions and git
		for (const customAction of Object.values(bootstrapDefaultCustomActions)) {
			actions.push(...customAction.actionsList(workingPath, bootstrapAnswers));
		}
	}

	// Default monorepo chosen
	if (answers.repoType === "default-monorepo") {
		actions.push(
			bootstrapDefaultBasicActions.generateGitignore(
				workingPath,
				bootstrapAnswers,
			),
		);
		actions.push(
			bootstrapDefaultBasicActions.generatePackageJson(
				workingPath,
				bootstrapAnswers,
			),
		);
		actions.push(
			bootstrapDefaultBasicActions.generateReadme(
				workingPath,
				bootstrapAnswers,
			),
		);

		for (const monoAction of Object.values(bootstrapMonorepoActions)) {
			actions.push(...monoAction.actionsList(workingPath, bootstrapAnswers));
		}
	}

	// Custom repo chosen
	if (answers.repoType === "custom-repo") {
		// TODO: create custom repo actions and templates
	}

	// Always run cleanup and git commands last regardless of repo type
	actions.push(...bootstrapFinalActions.runCleanupCommands.actionsList());
	actions.push(...bootstrapFinalActions.runGitCommands.actionsList()); //TODO: think about echoing "turbo gen" instructions if monorepo selected

	return actions;
};
