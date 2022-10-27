const {
  MOVE_DOWN_KEY,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  HISS_KEY,
  YUMM_KEY
} = require("./constants");

// shoehorning connection - "Stores the active TCP connection object"
let connection;

// setting up interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;


  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {  // could also have (key) and then if (key ===...) - might be easier to read

  if (key === MOVE_UP_KEY) {                // UPDATE: above is wrong, need (key)
    connection.write("Move: up");
  }

  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }

  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }

  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === HISS_KEY) {
    connection.write("Say: hisss");
  }
  if (key === YUMM_KEY) {
    connection.write("Say: yummm");
  }

  if (key === `\u0003`) {
    process.exit();
  }
};


module.exports = { setupInput };
