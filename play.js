const net = require("net");

// establishing a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address
    port: 50541
  });

  //interpret incoming data as plain text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("-connected-")
  });

  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
};

console.log("Connecting ...");
connect();

