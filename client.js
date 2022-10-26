const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address
    port: 50541
  });

  //interpret incoming data as plain text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("-connected to snek game server-")
    conn.write("Name: CAE")
  });

  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
};

module.exports = { connect };