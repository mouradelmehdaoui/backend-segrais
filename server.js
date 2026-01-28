require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connexion DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/distribution", require("./routes/distribution.routes"));

// Lancement serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server lancé sur http://localhost:${PORT}`));

