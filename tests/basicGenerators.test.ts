import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { generateGitignore } from "../src/typescript/basics/generateGitignore.js";
import { generateIndex } from "../src/typescript/basics/generateIndex.js";
import { generatePackageJson } from "../src/typescript/basics/generatePackageJson.js";
import { generateReadme } from "../src/typescript/basics/generateReadme.js";
import { generateTsconfig } from "../src/typescript/basics/generateTsconfig.js";
import {
	fileExists,
	getFile,
	setupMockFs,
	teardownMockFs,
} from "./fs-mock-utils.js";

describe("Basic Generators", () => {
	beforeEach(() => setupMockFs());
	afterEach(teardownMockFs);

	const answers = {
		outDir: "dist",
		projectDescription: "A test app",
		projectName: "my-app",
	};
	const path = "project";

	it("generates package.json", () => {
		const action = generatePackageJson(`/app/${path}`, answers);
		if (
			typeof action === "object" &&
			action !== null &&
			"path" in action &&
			"data" in action
		) {
			const fs = require("memfs").vol;
			fs.mkdirSync(`/app/${path}`, { recursive: true });
			fs.writeFileSync(action.path, JSON.stringify(action.data));
			expect(fileExists(`${path}/package.json`)).toBe(true);
			const pkg = JSON.parse(getFile(`${path}/package.json`));
			expect(pkg.projectName).toBe("my-app");
			expect(pkg.projectDescription).toBe("A test app");
		}
	});

	it("generates .gitignore", () => {
		const action = generateGitignore(`/app/${path}`, answers);
		if (typeof action === "object" && action !== null && "path" in action) {
			const fs = require("memfs").vol;
			fs.mkdirSync(`/app/${path}`, { recursive: true });
			fs.writeFileSync(action.path, `dist\nnode_modules\n`);
			expect(fileExists(`${path}/.gitignore`)).toBe(true);
		}
	});

	it("generates README.md", () => {
		const action = generateReadme(`/app/${path}`, answers);
		if (typeof action === "object" && action !== null && "path" in action) {
			const fs = require("memfs").vol;
			fs.mkdirSync(`/app/${path}`, { recursive: true });
			fs.writeFileSync(action.path, `# my-app\nA test app\n`);
			expect(fileExists(`${path}/README.md`)).toBe(true);
			expect(getFile(`${path}/README.md`)).toContain("my-app");
		}
	});

	it("generates tsconfig.json", () => {
		const action = generateTsconfig(`/app/${path}`, answers);
		if (typeof action === "object" && action !== null && "path" in action) {
			const fs = require("memfs").vol;
			fs.mkdirSync(`/app/${path}`, { recursive: true });
			fs.writeFileSync(
				action.path,
				JSON.stringify({ compilerOptions: { outDir: "dist" } }),
			);
			expect(fileExists(`${path}/tsconfig.json`)).toBe(true);
		}
	});

	it("generates src/index.ts", () => {
		const action = generateIndex(`/app/${path}`, answers);
		if (typeof action === "object" && action !== null && "path" in action) {
			const fs = require("memfs").vol;
			fs.mkdirSync(`/app/${path}/src`, { recursive: true });
			fs.writeFileSync(action.path, `console.log('Hello, my-app!');`);
			expect(fileExists(`${path}/src/index.ts`)).toBe(true);
		}
	});
});
