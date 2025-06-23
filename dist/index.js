#! /usr/bin/env node
import { Plop, run } from "plop";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
Plop.prepare({
    configPath: path.join(__dirname, "./plopfile.js"),
}, (env) => Plop.execute(env, (env) => {
    const options = {
        ...env,
        dest: process.cwd(),
    };
    return run(options, undefined, true);
}));
//# sourceMappingURL=index.js.map