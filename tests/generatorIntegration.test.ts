import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getNewTsProjectActions } from "../src/plop/newTsProjectActions.js";
import { fileExists, setupMockFs, teardownMockFs } from "./fs-mock-utils.js";

describe("Generator Integration", () => {
	beforeEach(() => {
		setupMockFs();
		vi.spyOn(process, "cwd").mockReturnValue("/app/project");
	});
	afterEach(() => {
		teardownMockFs();
		vi.restoreAllMocks();
		vi.useRealTimers();
	});

	function logFileCheck(path: string) {
		return fileExists(path);
	}

	it("should generate all expected files for a new default repo project", () => {
		const answers = {
			outDir: "dist",
			projectDescription: "bar",
			projectName: "foo",
			repoType: "default-repo",
		};
		const actions = getNewTsProjectActions(answers);
		const fs = require("memfs").vol;
		const path = require("node:path");
		const projectRoot = "/Users/benmoses/Documents/code/bootstrap";
		const memfsRoot = "/app/project";
		actions.forEach((action: any) => {
			if (
				typeof action === "object" &&
				action !== null &&
				"path" in action &&
				typeof action.path === "string"
			) {
				const relPath = path.relative(projectRoot, action.path);
				const memfsPath = path.join(memfsRoot, relPath);
				fs.mkdirSync(path.dirname(memfsPath), { recursive: true });
				fs.writeFileSync(memfsPath, JSON.stringify(action.data || {}));
			}
		});

		// Check for files at the correct location in the mocked cwd (memfs)
		logFileCheck("project/package.json");
		logFileCheck("project/.gitignore");
		logFileCheck("project/README.md");

		expect(fileExists("project/package.json")).toBe(true);
		expect(fileExists("project/.gitignore")).toBe(true);
		expect(fileExists("project/README.md")).toBe(true);
	}, 10000);

	it("should generate all expected files for a new monorepo project", () => {
		const answers = {
			outDir: "dist",
			projectDescription: "bar",
			projectName: "foo",
			repoType: "default-monorepo",
		};
		const actions = getNewTsProjectActions(answers);
		const fs = require("memfs").vol;
		const path = require("node:path");
		const projectRoot = "/Users/benmoses/Documents/code/bootstrap";
		const memfsRoot = "/app/project";
		actions.forEach((action: any) => {
			if (
				typeof action === "object" &&
				action !== null &&
				"path" in action &&
				typeof action.path === "string"
			) {
				const relPath = path.relative(projectRoot, action.path);
				const memfsPath = path.join(memfsRoot, relPath);
				fs.mkdirSync(path.dirname(memfsPath), { recursive: true });
				fs.writeFileSync(memfsPath, JSON.stringify(action.data || {}));
			}
		});

		expect(fileExists("project/package.json")).toBe(true);
		expect(fileExists("project/.gitignore")).toBe(true);
		expect(fileExists("project/README.md")).toBe(true);
	}, 10000);
});
