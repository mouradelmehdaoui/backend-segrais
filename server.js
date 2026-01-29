require("dotenv").config();
const express = require("express");
const cors = require("cors"); // 1. Importe cors
const connectDB = require("./config/db");

const app = express();

// 2. Remplace ton bloc manuel par ceci :
app.use(cors({
  origin: "*", // Tu pourras restreindre à ton URL Netlify plus tard
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
}));

app.use(express.json());

// Connexion DB (ajoute un catch pour éviter que le serveur crash en silence)
connectDB().catch(err => {
    console.error("Erreur de connexion DB:", err);
});

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/distribution", require("./routes/distribution.routes"));

// 3. Port dynamique pour Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server lancé sur le port ${PORT}`)
);