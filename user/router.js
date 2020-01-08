const { Router } = require("express");
const User = require("./model");
// just importing all stuff to make sure the database is configured correctly.
//might actually be usefull later

const router = new Router();

router.get("/users", (req, res, nxt) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(error => nxt(error));
});

module.exports = router;

//maybe just make one router? not sure
