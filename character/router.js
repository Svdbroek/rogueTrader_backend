const { Router } = require("express");
const Character = require("./model");
const Damage = require("./damageModel");
const OriginPath = require("./originPathModel");
const Stats = require("./statsModel");
const router = new Router();

router.post("/character", (req, res, nxt) => {
  //use auth middleware to get userID, add to character const
  const character = { ...req.body };
  console.log(character, "character");
  Character.create(character)
    .then(info => {
      res.send(info), damage.create({ characterId: info.id });
      originPath.create({ characterId: info.id });
      stats.create({ characterId: info.id });
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
