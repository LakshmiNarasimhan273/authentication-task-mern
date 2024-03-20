const express = require("express");
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  userProfile,
  logoutUser,
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
router.post("/logout", logoutUser);

module.exports = router;
