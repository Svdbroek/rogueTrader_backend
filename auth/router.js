const { Router } = require("express");
const { toJWT, toData } = require("./jwt");
const User = require("../user/model");
const bcrypt = require("bcrypt");
const router = new Router();

// define endpoints here

router.post("/login", (req, res, nxt) => {
  if (!req.body.email || !req.body.password) {
    console.log("req body", req);
    res
      .status(400)
      .send({ message: "Please supply a valid email and password" });
  } else {
    console.log("req body", req.body);

    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(entity => {
        if (!entity) {
          res.status(400).send({
            message: "User with that email does not exist"
          });
        }

        // 2. use bcrypt.compareSync to check the password against the stored hash
        else if (bcrypt.compareSync(req.body.password, entity.password)) {
          // 3. if the password is correct, return a JWT with the userId of the user (user.id)
          res.send({
            jwt: toJWT({ userId: entity.id }),
            userName: entity.name,
            userId: entity.id
          });
        } else {
          res.status(400).send({
            message: "Password was incorrect"
          });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send({
          message: "Something went wrong"
        });
      });
  }
});

router.post("/user", (req, res, nxt) => {
  if (!req.body.password) {
    throw "please supply a valid password";
  }

  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    name: req.body.name
  };
  User.create(user)
    .then(info => {
      const user = {
        email: info.email,
        name: info.name,
        profile_pic: info.profile_pic
      };
      res.send(user);
    })
    .catch(error => nxt(error));
});

module.exports = router;
