const { Router } = require("express");
const originPath = require("./originpath");

const router = new Router();

router.get("/origin/:tier", (req, res, nxt) => {
  const tier = req.params.tier;
  const choise = parseInt(req.query.choise);
  console.log(choise);
  if (choise == true || choise === 0) {
    res.send([
      originPath[tier][choise - 1],
      originPath[tier][choise],
      originPath[tier][choise + 1]
    ]);
  } else {
    res.send(originPath[tier]);
  }
});

module.exports = router;
