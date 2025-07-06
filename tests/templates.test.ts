import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setupMockFs, teardownMockFs } from "./fs-mock-utils.js";

// Simulate a simple template rendering function
function renderTemplate(
	template: string,
	data: Record<string, string>,
): string {
	return template.replace(/{{\s*(\w+)\s*}}/g, (_, key) => data[key] || "");
}

describe("Template Rendering", () => {
	beforeEach(() => setupMockFs());
	afterEach(teardownMockFs);

	it("should render a template with data", () => {
		const template = "Hello, {{name}}!";
		const data = { name: "Ben" };
		const output = renderTemplate(template, data);
		expect(output).toBe("Hello, Ben!");
	});

	it("should render a template with multiple variables", () => {
		const template = "{{greeting}}, {{name}}!";
		const data = { greeting: "Hi", name: "Ben" };
		const output = renderTemplate(template, data);
		expect(output).toBe("Hi, Ben!");
	});

	it("should leave unknown variables blank", () => {
		const template = "Hello, {{name}} {{surname}}!";
		const data = { name: "Ben" };
		const output = renderTemplate(template, data);
		expect(output).toBe("Hello, Ben !");
	});
});
