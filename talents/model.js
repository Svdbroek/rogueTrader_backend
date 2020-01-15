const Sequelize = require("sequelize");
const db = require("../db");

const Talent = db.define(
  "talent",
  {
    Name: Sequelize.STRING,
    Description: Sequelize.STRING,
    Prerequisite: Sequelize.STRING
  },
  { timestamps: false }
);

module.exports = Talent;
