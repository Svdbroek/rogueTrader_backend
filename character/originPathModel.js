const Sequelize = require("sequelize");
const db = require("../db");

const OriginPath = db.define("originpath", {
  Homeworld: Sequelize.STRING,
  Birthright: Sequelize.STRING,
  Lure: Sequelize.STRING,
  "Lure-sub": Sequelize.STRING,
  Trails: Sequelize.STRING,
  Motivation: Sequelize.STRING
});

module.exports = OriginPath;
