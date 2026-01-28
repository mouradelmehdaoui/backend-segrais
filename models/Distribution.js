const mongoose = require("mongoose");

const DistributionSchema = new mongoose.Schema({
  binome: { type: String, required: true },
  adresseDistribuees: { type: String, required: true },
  statut: { type: String, enum: ["fait", "en cours", "terminé"], default: "en cours" },
  adresseNonDistribuee: String,
  datePlanification: Date,
  etatAvance: String,
  secteur: String,
}, { timestamps: true });

module.exports = mongoose.model("Distribution", DistributionSchema);
