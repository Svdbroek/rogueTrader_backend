const Sequelize = require("sequelize");
const db = require("../db");

const Rolls = db.define("roll", {
  "Corruption d5": Sequelize.SMALLINT,
  "Corruption d10": Sequelize.SMALLINT,
  "Insanity d5": Sequelize.SMALLINT,
  "Insanity d10": Sequelize.SMALLINT
});

module.exports = Rolls;
