const Character = require("./model");
const Damage = require("./damageModel");
const OriginPath = require("./originPathModel");
const Stats = require("./statsModel");
const Talent = require("../talents/model");
const Trait = require("../traits/model");
const Roll = require("./rollModel");

async function addTalent(talentString, characterId) {
  const talentName = talentString.substr(8);
  let talentId;

  await Talent.findOne({ where: { Name: talentName } }).then(
    response => (talentId = response.id)
  );

  await Character.findByPk(characterId).then(character => {
    character.addTalent(talentId);
  });
}

async function addTrait(traitString, characterId) {
  const traitName = traitString.substr(7);
  let traitId;

  await Trait.findOne({ where: { Name: traitName } }).then(
    response => (traitId = response.id)
  );

  await Character.findByPk(characterId).then(character => {
    character.addTalent(traitId);
  });
}

async function addBonus(bonusString, characterId) {
  const bonusArray = bonusString.split(" ");
  const bonusName = bonusArray[1];

  let bonus = parseInt(bonusArray[2]);

  const statsForChar = await Stats.findOne({
    where: { characterId: characterId }
  });

  console.log("------------");
  console.log(statsForChar.dataValues[bonusName], "prev", bonus, "adds");
  console.log("------------");

  bonus = bonus + statsForChar.dataValues[bonusName];

  await Stats.update(
    { [bonusName]: bonus },
    { where: { characterId: characterId } }
  );
}

async function addAffliction(afflictionString, characterId) {
  const afflictionArray = afflictionString.split(" ");

  let diceAmount = parseInt(afflictionArray[1][0]);
  const diceType = afflictionArray[1].split("d")[1];
  const afflictionType = afflictionArray[2];

  const column = `${afflictionType} d${diceType}`;

  const rollsForChar = await Roll.findOne({
    where: { characterId: characterId }
  });

  diceAmount = rollsForChar.dataValues[column] + diceAmount;

  await Roll.update(
    { [column]: diceAmount },
    { where: { characterId: characterId } }
  );
}

module.exports = { addAffliction, addBonus, addTalent, addTalent, addTrait };
