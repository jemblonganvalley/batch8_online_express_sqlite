//import dependencies
const path = require("path");
const db = require("knex")({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "../db.sqlite"),
  },
});

module.exports = db;
