const jwt = require("jsonwebtoken");

const verifyToken = (token, secretKey) => {
  try {
    // Verify the token signature and expiration
    const decoded = jwt.verify(token, secretKey);
    return decoded; // Returns the decoded payload if valid
  } catch (error) {
    // Handle JWT verification errors (e.g., signature mismatch, expired token)
    console.error("Error verifying JWT token:", error);
    return null; // Return null if verification fails
  }
}

module.exports = verifyToken;