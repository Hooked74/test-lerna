"use strict";

const consola = require("consola");
const chalk = require("chalk");
const pack3 = require("test-lerna-pack3");

module.exports = pack1;

function pack1() {
  return "render-packkk1 test1";
}

console.log(pack3());
console.log(chalk.cyan("ololo"));
consola.success(chalk.blue("Built!"));
