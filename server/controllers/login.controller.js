const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const generateJWT = require("../utils/generateJWT");

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    //check if any field is missing
    if (!(username && password)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //check if user exists
    const user = await User.findOne({ username });
    if (user) {
      //authenticate user
      if (await bcrypt.compare(password, user.password)) {
        //generate token
        const token = generateJWT(user);

        //send token, username, email in response
        return res
          .status(201)
          .cookie(
            "livechatusercokie",
            { token },
            {
              httpOnly: true,
              secure: false,
              sameSite: "none",
              path: "/",
              domain: "localhost",
              maxAge: 7 * 24 * 60 * 60 * 1000,
            }
          )
          .json({
            message: "User created successfully",
            username: user.username,
            email: user.email,
          });
      } else {
        return res.status(400).json({ message: "Invalid credentials" });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = loginController;
