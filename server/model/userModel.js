const mongoose = require("mongoose");
const { hash, compare } = require("bcrypt");
const jwt = require("jsonwebtoken");

const shema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
      min: 8,
      max: 32,
    },
  },
  { timestamps: true }
);

shema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await hash(this.password, 10);
});

const User = mongoose.model("Users", shema);
module.exports = User;
