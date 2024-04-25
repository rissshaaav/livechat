const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const generateJWT = require("../utils/generateJWT");

const signupController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //check if any field is missing
    if (!(username && email && password)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check for existing user (email or username)
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      const conflictField = existingUser.email === email ? "email" : "username";
      return res
        .status(409)
        .json({ message: `${conflictField} already exists` });
    }

    // Hash password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create new user and save to database
    const newUser = new User({ username, email, password: encryptedPassword });
    const savedUser = await newUser.save();

    //generate token
    const token = generateJWT(savedUser);

    //send token, username & email in response and store them in cookie
    return res
      .status(201)
      .cookie(
        "livechatusercokie",
        { token, username: savedUser.username, email: savedUser.email },
        {
          httpOnly: true,
          secure: false,
          sameSite: "none",
          path: "/",
          domain: "localhost",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        }
      ).json({ message: "User created successfully", username: savedUser.username, email: savedUser.email});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = signupController;
