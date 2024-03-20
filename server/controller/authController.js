const User = require("../models/user");
const { hashPassword, comparePassword } = require("../service/authService");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.send("Testing");
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name) {
      return res.json({
        error: "Name is required!",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and it should be above 6 characters!",
      });
    }
    const checkMail = await User.findOne({ email });
    if (checkMail) {
      return res.json({
        error: "E-Mail is taken already",
      });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userDetails = await User.findOne({ email });

    if (!userDetails) {
      return res.json({
        error:
          "No user found with these credentials. Please sign up and try again.",
      });
    }

    const passwordValidation = await comparePassword(
      password,
      userDetails.password
    );
    if (!passwordValidation) {
      return res.json({
        error: "Password mismatch. Please enter the correct one and try again.",
      });
    }

    // JWT signing logic wrapped in a Promise
    const token = await new Promise((resolve, reject) => {
      jwt.sign(
        {
          email: userDetails.email,
          id: userDetails._id,
          name: userDetails.name,
        },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) reject(err);
          resolve(token);
        }
      );
    });

    // Send the JWT token along with user details
    res.cookie("token", token).json({
      message: "Login successful.",
      user: {
        _id: userDetails._id,
        email: userDetails.email,
        // Add any other user details you want to include
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

const userProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) {
        throw err;
      }
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  userProfile,
};
