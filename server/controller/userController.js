const User = require("../model/userModel");
const express = require("express");
const { hash, compare } = require("bcrypt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/create-user", async (req, res, next) => {
  try {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });

    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    } else if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(400).json({ message: "password mismatch" });
    } else {
      res.status(200).json({ user, message: "success" });
      console.log("User logged in successfully");
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
