import { createPackageJson } from "./createPackageJson.js";
export function tsActions(plop, data) {
    plop.setGenerator("ts-options", {
        description: "TypeScript Options",
        prompts: [
            {
                type: "list",
                name: "tsOption",
                message: "Select from the following",
                choices: ["Create package.json"],
            },
            {
                type: "input",
                name: "projectName",
                message: "What is the project name?",
                default: "TypeScript",
                when: (answers) => answers.tsOption === "Create package.json",
            },
        ],
        actions: (answers) => {
            if (answers.tsOption === "Create package.json") {
                return createPackageJson({ ...data, ...answers });
            }
            return [];
        },
    });
}
//# sourceMappingURL=index.js.map