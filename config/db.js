const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // options supprimées
    console.log("MongoDB connecté avec succès ✅");
  } catch (err) {
    console.error("Erreur connexion MongoDB :", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
