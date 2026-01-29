const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { login, password } = req.body;

  console.log(login, password);
  

  if (login === "segrais" && password === "mourad") {
    const token = jwt.sign({ login }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return res.json({ token });
  }

  res.status(401).json({ message: "Login ou mot de passe incorrect" });
});

module.exports = router;
