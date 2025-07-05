const repoTypePrompt = {
	choices: [
		{ name: "Default repo", value: "default-repo" },
		{ name: "Default monorepo", value: "default-monorepo" },
		{ name: "Custom repo", value: "custom-repo" },
	],
	default: "default-repo",
	message: "Pick a repo type.",
	name: "repoType",
	type: "list",
	// when: (answers: any) => answers.projectType === "new-typescript",
} as const;

const _customisationsPrompt = {
	choices: [
		{ name: "tsconfig.json", value: "generate-tsconfig" },
		{ name: "package.json", value: "generate-packagejson" },
		{ name: ".gitignore", value: "generate-gitignore" },
		// { name: "Add Vitest with defaults", value: "generate-vitest" },
	],
	message: "Which customisations do you want?",
	name: "customisations",
	type: "checkbox",
	when: (answers: any) => answers.tsoperation === "use-customised",
} as const;

const projectNameInputPrompt = {
	message: "What is the name of your project? ",
	name: "projectName",
	type: "input",
	validate: (input: string) => {
		if (input.length === 0) {
			return "A project name is required.";
		}
		if (!/^[a-zA-Z0-9-]+$/.test(input)) {
			return "Project name can only contain letters, numbers, and dashes.";
		}
		return true;
	},
} as const;

const projectDescriptionInputPrompts = {
	message: "Provide a short description of your project: ",
	name: "projectDescription",
	type: "input",
	validate: (input: string) => {
		if (input.length === 0) {
			return "A project description is required.";
		}
		if (input.length > 200) {
			return "Project description should be less than 200 characters.";
		}
		return true;
	},
} as const;

const outDirInputPrompt = {
	default: "dist",
	message: "Where do you want the output files to go? (default: dist)",
	name: "outDir",
	type: "input",
	validate: (input: string) => {
		if (input.length === 0) {
			return "An output directory is required.";
		}
		return true;
	},
} as const;

export const newTsProjectPrompts = [
	repoTypePrompt,
	projectNameInputPrompt,
	projectDescriptionInputPrompts,
	outDirInputPrompt,
];
