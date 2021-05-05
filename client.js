const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

 
  conn.on("connect", () => {
    conn.write("Name: KEV");
    setTimeout(() => {
      conn.write("Move: left");
    }, 320);

    setTimeout(() => {
      conn.write("Move: left");
    }, 200);

    setTimeout(() => {
      conn.write("Move: left");
    }, 200);

    setTimeout(() => {
      conn.write("Move: down");
    }, 200);

    setTimeout(() => {
      conn.write("Move: down");
    }, 200);

  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;