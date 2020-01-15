const Sequelize = require("sequelize");
const db = require("../db");

const damage = db.define("damage", {
  maxWounds: Sequelize.SMALLINT,
  currentWounds: Sequelize.SMALLINT,
  insanity: Sequelize.SMALLINT,
  corruption: Sequelize.SMALLINT,
  maxFate: Sequelize.SMALLINT,
  currentFate: Sequelize.SMALLINT
});

module.exports = damage;
