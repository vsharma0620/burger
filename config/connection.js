// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.end.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "xefi550t7t6tjn36.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "	un8ir8l4ds8p89i1",
    password: "d72h1rnxkl59064i",
    database: "tjx6fp5jqknd4f1k"
  });
};

// Export connection for our ORM to use.
module.exports = connection;