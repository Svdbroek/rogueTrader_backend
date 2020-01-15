const Sequelize = require("sequelize");
const db = require("../db");
const damageModel = require("./damageModel");
const originPathModel = require("./originPathModel");
const statsModel = require("./statsModel");
const User = require("../user/model");
const talentModel = require("../talents/model");
const traitModel = require("../traits/model");
const rollModel = require("./rollModel");

const Character = db.define("character", {
  name: Sequelize.STRING,
  career: Sequelize.STRING,
  XP: Sequelize.INTEGER,
  XPspent: Sequelize.INTEGER
});

User.hasMany(Character);
Character.belongsTo(User);

Character.hasOne(damageModel);
damageModel.belongsTo(Character);

Character.hasOne(originPathModel);
originPathModel.belongsTo(Character);

Character.hasOne(statsModel);
statsModel.belongsTo(Character);

Character.belongsToMany(talentModel, { through: "talentAsociation" });
talentModel.belongsToMany(Character, { through: "talentAsociation" });

Character.belongsToMany(traitModel, { through: "traitAsociation" });
traitModel.belongsToMany(Character, { through: "traitAsociation" });

Character.hasOne(rollModel);
rollModel.belongsTo(Character);

module.exports = Character;
