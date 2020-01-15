const { Router } = require("express");
const Character = require("./model");
const Damage = require("./damageModel");
const OriginPath = require("./originPathModel");
const Stats = require("./statsModel");
const Talent = require("../talents/model");
const Trait = require("../traits/model");
const router = new Router();
const Roll = require("./rollModel");
const AddToSheet = require("./sheetFunctions");
const HomeworldBonus = require("../originpath/HomeworldBonus");

async function talentSkillAdder(string, characterId) {
  if (string.startsWith("Talent:")) {
    await AddToSheet.addTalent(string, characterId);
  }

  if (string.startsWith("Trait:")) {
    await AddToSheet.addTrait(string, characterId);
  }

  if (string.startsWith("Bonus:")) {
    await AddToSheet.addBonus(string, characterId);
  }

  if (string.startsWith("Affliction") || string.startsWith("Roll")) {
    await AddToSheet.addAffliction(string, characterId);
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

  Character.create(character)
    .then(async info => {
      await Damage.create({ characterId: info.id });
      await OriginPath.create({ characterId: info.id });
      await Stats.create({ characterId: info.id });
      await Roll.create({ characterId: info.id });
      await Promise.all(
        talentTraitEtc.map(async val => await talentSkillAdder(val, info.id))
      );

      await Promise.all(
        HomeworldBonus[body.Homeworld].map(
          async val => await talentSkillAdder(val, info.id)
        )
      );

      // slapp the bonussses models through the talentSkillAdder11111
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

router.get("/character/:id/stats", async (req, res, nxt) => {
  const id = req.params.id;

  const stats = await Stats.findOne({ where: { characterId: id } });
  const rolls = await Roll.findOne({ where: { characterId: id } });

  const values = { ...stats.dataValues, ...rolls.dataValues };

  res.send(values);
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
