import { defineConfig } from "vitest/config";

const baseConfig = defineConfig({
	test: {
		coverage: {
			enabled: true,
			exclude: [
				"**/vitest.config.ts",
				"./vitest.config.ts",
				"node_modules",
				"templates",
				"lib",
			],
			provider: "istanbul",
			reporter: ["html"],
			reportOnFailure: true,
		},
		exclude: ["**/vitest.config.ts", "node_modules", "templates", "lib"],
	},
});

export default baseConfig;
