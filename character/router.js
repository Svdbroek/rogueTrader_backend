const { Router } = require("express");
const Character = require("./model");

const router = new Router();

router.post("/character", (req, res, nxt) => {
  //use auth middleware to get userID, add to character const
  const character = { ...req.body };
  console.log(character, "character");
  Character.create(character)
    .then(info => res.send(info))
    .catch(console.error);
});

module.exports = router;
