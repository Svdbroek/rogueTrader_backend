const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5430/postgres"; // probably will only use local, but good form

const db = new Sequelize(databaseUrl);

db.sync({ force: true }) // make sure db isn't overwritten
  .then(console.log("Database connected"))
  .catch(console.error);

module.exports = db;
