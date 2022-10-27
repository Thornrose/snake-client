const net = require("net");
const { IP, PORT, PLAYER_NAME } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP, // IP address
    port: PORT
  });

  //interpret incoming data as plain text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("-connected to snek game server-");
    conn.write(`Name: ${PLAYER_NAME}`);
  });


  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
