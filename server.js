require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// 🔐 CORS (OBLIGATOIRE POUR NETLIFY)
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://segrais-groupe6.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware
app.use(express.json());

// Connexion DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/distribution", require("./routes/distribution.routes"));

// Lancement serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server lancé sur http://localhost:${PORT}`)
);
