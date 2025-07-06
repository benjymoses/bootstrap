import { describe, expect, it } from "vitest";
import { getNewTsProjectActions } from "../src/plop/newTsProjectActions.js";

function hasPath(a: unknown): a is { path: string } {
	return (
		typeof a === "object" &&
		a !== null &&
		"path" in a &&
		typeof (a as any).path === "string"
	);
}

describe("Action Composition", () => {
	it("should abort if required answers are missing", () => {
		const actions = getNewTsProjectActions({});
		// console.log("[Test] Actions when missing answers:", actions);
		expect(actions[0]).toEqual({ type: "abort" });
	});

	it("should compose actions for default repo", () => {
		const answers = {
			outDir: "dist",
			projectDescription: "bar",
			projectName: "foo",
			repoType: "default-repo",
		};
		const actions = getNewTsProjectActions(answers);
		// console.log("[Test] Actions for default repo:", actions);
		const fileActionsWithPath = actions.reduce<{ path: string }[]>((acc, a) => {
			if (hasPath(a)) acc.push(a);
			return acc;
		}, []);
		//
		expect(fileActionsWithPath.length).toBeGreaterThan(0);
		expect(
			fileActionsWithPath.some((a) => a.path.endsWith("package.json")),
		).toBe(true);
		expect(fileActionsWithPath.some((a) => a.path.endsWith(".gitignore"))).toBe(
			true,
		);
	});

	it("should compose actions for default monorepo", () => {
		const answers = {
			outDir: "dist",
			projectDescription: "bar",
			projectName: "foo",
			repoType: "default-monorepo",
		};
		const actions = getNewTsProjectActions(answers);
		// console.log("[Test] Actions for default monorepo:", actions);
		const fileActionsWithPath = actions.reduce<{ path: string }[]>((acc, a) => {
			if (hasPath(a)) acc.push(a);
			return acc;
		}, []);
		//
		expect(fileActionsWithPath.length).toBeGreaterThan(0);
		expect(
			fileActionsWithPath.some((a) => a.path.endsWith("package.json")),
		).toBe(true);
		expect(fileActionsWithPath.some((a) => a.path.endsWith(".gitignore"))).toBe(
			true,
		);
	});
});
