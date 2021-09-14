"use strict";

module.exports = pack2;

function pack2() {
  return require("test-lerna-pack1")();
}

console.log(pack2(), "pack2");
