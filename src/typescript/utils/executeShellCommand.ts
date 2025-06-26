import { execSync } from "child_process";

export function executeShellCommand(command: string) {
  (async (command) => {
    try {
      await execSync(command);
    } catch (e) {
      console.error(e);
    }
  })(command);
}
