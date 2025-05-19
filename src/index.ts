#! /usr/bin/env node

import { Command } from "commander";

// Declare program
const program = new Command();

// Add actions to the CLI
program
  .action(() => {
    console.log("Loaded commander");
  })
  .description("Scaffolds projects with @benjymoses preferred defaults");

//Execute the CLI with the provided arguments
program.parse(process.argv);
