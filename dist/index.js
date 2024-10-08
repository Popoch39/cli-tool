#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
commander_1.program
    .version("1.0.0")
    .description("My Node CLI")
    .option("-n, --name <type>", "Add your name")
    .action((options) => {
    console.log(`Hey, ${options.name}!`);
});
commander_1.program.parse(process.argv);
