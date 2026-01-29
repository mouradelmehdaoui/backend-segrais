require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Déclaré une seule fois ici
const connectDB = require("./config/db");

const app = express();

// Configuration CORS simplifiée et robuste
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
}));

app.use(express.json());

// Connexion DB
connectDB().catch(err => {
    console.error("Erreur critique de connexion DB :", err);
});

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/distribution", require("./routes/distribution.routes"));

// Port dynamique pour Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Serveur lancé sur le port ${PORT}`)
);