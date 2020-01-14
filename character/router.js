const { Router } = require("express");
const Character = require("./model");
const Damage = require("./damageModel");
const OriginPath = require("./originPathModel");
const Stats = require("./statsModel");
const Talent = require("../talents/model");
const Trait = require("../traits/model");
const router = new Router();
const Roll = require("./rollModel");

async function talentSkillAdder(string, characterId) {
  if (string.startsWith("Talent:")) {
    const talentName = string.substr(8);
    let talentId;

    await Talent.findOne({ where: { Name: talentName } }).then(
      response => (talentId = response.id)
    );

    Character.findByPk(characterId).then(character => {
      character.addTalent(talentId);
    });
  }

  if (string.startsWith("Trait:")) {
    const traitName = string.substr(7);
    let traitId;

    await Trait.findOne({ where: { Name: traitName } }).then(
      response => (traitId = response.id)
    );

    await Character.findByPk(characterId).then(character => {
      character.addTalent(traitId);
    });
  }

  if (string.startsWith("Bonus:")) {
    const bonusArray = string.split(" ");
    const bonusName = bonusArray[1];
    console.log(bonusName, "bonusName");

    let bonus = parseInt(bonusArray[2]);
    console.log(bonus);
    const statsForChar = await Stats.findOne({
      where: { characterId: characterId }
    });
    bonus = bonus + statsForChar.dataValues[bonusName];

    await Stats.update(
      { [bonusName]: bonus },
      { where: { characterId: characterId } }
    );
  }

  if (string.startsWith("Affliction")) {
    const afflictionArray = string.split(" ");

    let diceAmount = parseInt(afflictionArray[1][0]);
    const diceType = afflictionArray[1][2];
    const afflictionType = afflictionArray[2];

    console.log(diceType, "d-type");
    console.log(diceAmount, "d-amount");
    console.log(afflictionType, "a-type");

    const column = `${afflictionType} d${diceType}`;
    console.log(column, "COLUMN");

    const rollsForChar = await Roll.findOne({
      where: { characterId: characterId }
    });
    console.log(rollsForChar.dataValues["Corruption d5"], "DATA VALUES");
    diceAmount = rollsForChar.dataValues[column] + diceAmount;
    console.log(diceAmount, "NEW diceAmount");

    await Roll.update(
      { [column]: diceAmount },
      { where: { characterId: characterId } }
    );
  }
}

router.post("/character/new", (req, res, nxt) => {
  //use auth middleware to get userID, add to character const
  const body = { ...req.body };

  //expected data:
  /* 
    Name,
    Homeworld,
    Birthright,
    Lure,
    Trails,
    Motivation,
    Career,
    Lure-Sub,

    unknown keys with property: 
    "Talent: ..." or
    "Bonus: ..." or
    "Affliction: ..." or
    "Trait: ..."
  */

  const character = {
    name: body.name,
    career: body.career,
    XP: 500,
    XPspent: 4500
  };

  const originPath = {
    Homeworld: body.Homeworld,
    Birthright: body.Birthright,
    Lure: body.Lure,
    "Lure-sub": body["Lure-sub"],
    Trails: body.Trails,
    Motivation: body.Motivation
  };

  const talentKeys = Object.keys(body);

  const talentTraitEtc = talentKeys.reduce((acc, val, idx, arr) => {
    // gets the relevant keys from the body
    const knowns = [
      "name",
      "Homeworld",
      "Birthright",
      "Lure",
      "Lure-sub",
      "Trails",
      "Motivation",
      "Career"
    ];
    if (!knowns.includes(val)) {
      acc = acc.concat(body[val]);
    }
    return acc;
  }, []);

  console.log(talentTraitEtc);

  Character.create(character)
    .then(async info => {
      await Damage.create({ characterId: info.id });
      await OriginPath.create({ characterId: info.id });
      await Stats.create({ characterId: info.id });
      await Roll.create({ characterId: info.id });
      talentTraitEtc.forEach(val => talentSkillAdder(val, info.id));
      res.send(info);
    })
    .catch(console.error);
});

router.put("/character", (req, res, nxt) => {
  //use auth middleware to get userID, add to character const
  const character = { ...req.body };
  Character.update(character, { where: { id: character.id } })
    .then(info => res.send(info))
    .catch(console.error);
});

router.get("/character/:id", (req, res, nxt) => {
  Character.findByPk(req.params.id, {
    include: [{ model: damage }, { model: originPath }, { model: stats }]
  })
    .then(info => res.send(info))
    .catch(console.error);
});

// add authentication for everything below here at somepoint

router.put("/character/:id/stats", (req, res, nxt) => {
  const stats = { ...req.body };
  Stats.update(stats, { where: { id: character.id } })
    .then(info => res.send(info))
    .catch(console.error);
});

router.put("/character/:id/damage", (req, res, nxt) => {
  const damage = { ...req.body };

  Damage.update(damage, { where: { id: character.id } })
    .then(info => res.send(info))
    .catch(console.error);
});

router.put("/character/:id/origin", (req, res, nxt) => {
  const origin = { ...req.body };

  OriginPath.update(origin, { where: { id: character.id } })
    .then(info => res.send(info))
    .catch(console.error);
});

module.exports = router;
