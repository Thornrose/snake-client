// const net = require("net");

const { builtinModules } = require("module");
const { connect } = require("./client");
const { setupInput } = require("./input");


console.log("Connecting ...");


setupInput(connect());
