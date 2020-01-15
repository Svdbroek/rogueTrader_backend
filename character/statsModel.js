const Sequelize = require("sequelize");
const db = require("../db");

const stats = db.define("characterstat", {
  "Weapon Skill": Sequelize.SMALLINT,
  "Ballistic Skill": Sequelize.SMALLINT,
  Strength: Sequelize.SMALLINT,
  Toughness: Sequelize.SMALLINT,
  Agility: Sequelize.SMALLINT,
  Intelligence: Sequelize.SMALLINT,
  Perception: Sequelize.SMALLINT,
  Willpower: Sequelize.SMALLINT,
  Fellowship: Sequelize.SMALLINT
});

module.exports = stats;
