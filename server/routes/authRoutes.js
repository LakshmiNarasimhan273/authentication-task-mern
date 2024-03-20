const express = require("express");
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  userProfile,
} = require("../controller/authController");
const router = express.Router();

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", userProfile);

module.exports = router;
