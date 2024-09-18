const express = require("express");
const {
  signupUser,
  loginUser,
  findUser,
  getUsers,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", signupUser);

router.post("/login", loginUser);

router.get("/:id", findUser);

router.get("/", getUsers);

module.exports = router;