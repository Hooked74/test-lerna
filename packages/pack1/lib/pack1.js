"use strict";

const consola = require("consola");
const chalk = require("chalk");

module.exports = pack1;

function pack1() {
  return "render-pack1";
}

console.log(chalk.cyan("ololo"));
consola.success(chalk.blue("Built!"));
