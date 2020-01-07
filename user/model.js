const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
    validate: {
      notEmpty: {
        msg: "The name is required."
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true },

    unique: { args: true, msg: "Email address already in use!" }
  },
  password: { type: Sequelize.STRING, allowNull: false },
  profile_pic: { type: Sequelize.STRING }
});

module.exports = User;
