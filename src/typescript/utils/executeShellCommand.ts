import { exec } from "child_process";

export function executeShellCommand(command: string) {
  (async (command) => {
    try {
      await exec(command);
    } catch (e) {
      console.error(e);
    }
  })(command);
}
