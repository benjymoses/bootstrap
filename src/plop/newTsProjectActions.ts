import path from "node:path";

// Actions
import {
	bootstrapBasicActions,
	bootstrapCustomActions,
	bootstrapFinalActions,
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
		for (const basicAction of Object.values(bootstrapBasicActions)) {
			actions.push(basicAction(workingPath, bootstrapAnswers));
		}

		// * Add all custom actions apart from cleanup-actions and git
		for (const customAction of Object.values(bootstrapCustomActions)) {
			actions.push(...customAction.actionsList(workingPath, bootstrapAnswers));
		}
	}

	// Default monorepo chosen
	if (answers.repoType === "default-monorepo") {
		// TODO: create mono repo actions and templates
	}

	// Custom repo chosen
	if (answers.repoType === "custom-repo") {
		// TODO: create custom repo actions and templates
	}

	// Always run cleanup and git commands last regardless of repo type
	actions.push(...bootstrapFinalActions.runCleanupCommands.actionsList());
	actions.push(...bootstrapFinalActions.runGitCommands.actionsList());

	return actions;
};
