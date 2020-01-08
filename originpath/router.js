const { Router } = require("express");
const originPath = require("./originpath");

const router = new Router();

function numberBetween(number, lower, upper) {
  return !isNaN(number) && number > lower && number < upper;
}

router.get("/origin/:tier", (req, res, nxt) => {
  const tier = req.params.tier;
  const choice = parseInt(req.query.choice);
  console.log(choice);
  if (numberBetween(choice, -1, 6)) {
    res.send({
      [tier]: [
        originPath[tier][choice - 1],
        originPath[tier][choice],
        originPath[tier][choice + 1]
      ]
    });
  } else {
    res.send(originPath[tier]);
  }
});

router.get("/origin/option/:pick", (req, res, nxt) => {
  const pick = req.params.pick;
  res.send({ [pick]: originPath[pick] });
});
module.exports = router;
