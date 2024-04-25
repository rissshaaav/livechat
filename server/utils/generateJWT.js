const jwt = require("jsonwebtoken");

const generateJWT = (user) => {
  const payload = {
      userId: user._id,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = generateJWT;