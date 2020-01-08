const Sequelize = require("sequelize");
const db = require("../db");

const stats = db.define("characterstat", {
  WS: Sequelize.SMALLINT,
  BS: Sequelize.SMALLINT,
  S: Sequelize.SMALLINT,
  T: Sequelize.SMALLINT,
  Ag: Sequelize.SMALLINT,
  int: Sequelize.SMALLINT,
  per: Sequelize.SMALLINT,
  WP: Sequelize.SMALLINT,
  fel: Sequelize.SMALLINT
});

module.exports = stats;
