const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({
      message: "Login et mot de passe requis"
    });
  }

  // ⚠️ Login temporaire (hardcodé)
  if (login === "segrais" && password === "mourad") {
    const token = jwt.sign(
      { login },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({ token });
  }

  return res.status(401).json({
    message: "Login ou mot de passe incorrect"
  });
});

module.exports = router;
