const User = require("../models/user.model");
const verifyToken = require("../utils/verifyToken.utils");

const verifyUser = async (req, res) => {
  try {
    const cookieValue = req.cookies.livechatusercookie;
    if (cookieValue) {
      const { token } = cookieValue;
      const decoded = verifyToken(token, process.env.JWT_SECRET);
      if (decoded) {
        const user = await User.findById(decoded.userId);
        return res.status(200).json({
          username: user.username,
          email: user.email,
        });
      } else {
        return res.status(403).json({ message: "Invalid Token" });
      }
    } else {
      return res.status(404).json({ message: "Token not found" });
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = verifyUser;
