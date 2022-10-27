

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

  if (key === "w") {                // UPDATE: above is wrong, need (key)
    connection.write("Move: up");
  }

  if (key === "a") {
    connection.write("Move: left");
  }

  if (key === "d") {
    connection.write("Move: right");
  }

  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "1") {
    connection.write("Say: hisss")
  }
  if (key === "3") {
    connection.write("Say: yummm")
  }

  if (key === `\u0003`){
    process.exit();
  }
}


module.exports = { setupInput };
