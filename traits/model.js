const Sequelize = require("sequelize");
const db = require("../db");

const Trait = db.define(
  "trait",
  {
    Name: Sequelize.STRING,
    Description: Sequelize.STRING
  },
  { timestamps: false }
);

module.exports = Trait;
