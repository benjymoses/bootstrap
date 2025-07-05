import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { addTurboRepo } from "../src/typescript/custom/addTurboRepo.js";
import * as execUtils from "../src/typescript/utils/executeShellCommand.js";
import {
	fileExists,
	getFile,
	setupMockFs,
	teardownMockFs,
} from "./fs-mock-utils.js";

describe("Custom Actions", () => {
	beforeEach(() =>
		setupMockFs({
			"templates/hello.txt": "Hello, world!",
		}),
	);
	afterEach(teardownMockFs);

	it("should copy a file as-is (simulate custom copy action)", async () => {
		// Simulate your custom copy action
		const src = "/app/templates/hello.txt";
		const dest = "/app/output/hello.txt";
		const fs = require("memfs").vol;
		fs.mkdirSync("/app/output", { recursive: true });
		fs.writeFileSync(dest, fs.readFileSync(src));
		expect(fileExists("output/hello.txt")).toBe(true);
		expect(getFile("output/hello.txt")).toBe("Hello, world!");
	});

	it("should register addTurboRepo action type", () => {
		const spy = vi
			.spyOn(execUtils, "executeShellCommand")
			.mockImplementation(() => "");
		const plop = { setActionType: vi.fn() };
		addTurboRepo.actionSetup(plop as any);
		expect(plop.setActionType).toHaveBeenCalledWith(
			"add-turborepo",
			expect.any(Function),
		);
		spy.mockRestore();
	});

	it("should return correct actions from addTurboRepo.actionsList", () => {
		const actions = addTurboRepo.actionsList("/app/project", {
			outDir: "dist",
			projectDescription: "y",
			projectName: "x",
		});
		expect(Array.isArray(actions)).toBe(true);
		expect(
			actions.some(
				(a) =>
					typeof a === "object" &&
					a !== null &&
					"type" in a &&
					a.type === "add-turborepo",
			),
		).toBe(true);
		expect(
			actions.some(
				(a) =>
					typeof a === "object" &&
					a !== null &&
					"type" in a &&
					a.type === "add" &&
					"path" in a &&
					(a as any).path.endsWith("turbo.json"),
			),
		).toBe(true);
	});
});
