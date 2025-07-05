// Utility to setup and teardown memfs for tests
import { vol } from "memfs";

export function setupMockFs(structure = {}) {
	vol.reset();
	vol.fromJSON(structure, "/app");
}

export function getFile(path: string): string {
	return vol.readFileSync(`/app/${path}`, "utf8").toString();
}

export function fileExists(path: string): boolean {
	try {
		vol.statSync(`/app/${path}`);
		return true;
	} catch {
		return false;
	}
}

export function teardownMockFs() {
	vol.reset();
}
