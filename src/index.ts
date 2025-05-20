#! /usr/bin/env node

// import { Plop, run } from "plop";
const { Plop, run } = await import("plop");

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

Plop.prepare(
  {
    configPath: path.join(__dirname, "./plopfile.js"),
  },
  (env) =>
    Plop.execute(env, (env) => {
      const options = {
        ...env,
        dest: process.cwd(),
      };
      return run(options, undefined, true);
    })
);
