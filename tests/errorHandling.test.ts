import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { fileExists, setupMockFs, teardownMockFs } from "./fs-mock-utils.js";

describe("Error Handling", () => {
	beforeEach(() => setupMockFs());
	afterEach(() => {
		teardownMockFs();
		// Add any global mock cleanup here if needed
		// console.log("[Test] afterEach teardown complete (errorHandling)");
	});

	it("should handle missing template file gracefully", () => {
		const fs = require("memfs").vol;
		try {
			fs.readFileSync("/app/templates/missing.txt");
			expect(false).toBe(true);
		} catch (e: any) {
			expect(e.code).toBe("ENOENT");
		}
	});

	it("should handle fileExists on missing file", () => {
		expect(fileExists("does-not-exist.txt")).toBe(false);
	});

	it("should handle teardown without error even if already reset", () => {
		teardownMockFs();
		// Should not throw
		expect(true).toBe(true);
	});
});
