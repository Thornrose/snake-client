// const net = require("net");

const { stdout } = require("process");
const { connect } = require("./client");


console.log("Connecting ...");
connect();

// setting up interface to handle user input from stdin

const setupInput = () => {
  const stdin = process.stdin;


  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = () => { // could also have (key) and then if (key ===...) - might be easier to read
  if (`\u0003`){
    process.exit();
  }
}

setupInput();

// going to need `\u0003` for ctrl+C