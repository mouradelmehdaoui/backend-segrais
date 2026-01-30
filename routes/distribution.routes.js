const router = require("express").Router();
const Distribution = require("../models/Distribution");

// GET all distributions
router.get("/", async (req, res) => {
  try {
    const data = await Distribution.find();
    res.json(data);
  } catch (err) {
   console.error("ERREUR BACKEND :", err); // <--- Très important pour les logs Render
    res.status(500).json({ error: err.message });
  }
});

// GET one by ID
router.get("/:id", async (req, res) => {
  try {
    const dist = await Distribution.findById(req.params.id);
    if (!dist) return res.status(404).json({ message: "Distribution non trouvée" });
    res.json(dist);
  } catch (err) {
   console.error("ERREUR BACKEND :", err); // <--- Très important pour les logs Render
    res.status(500).json({ error: err.message });
  }
});

// CREATE
router.post("/", async (req, res) => {
  try {
    delete req.body._id; // sécurité anti-duplicate
    const item = new Distribution(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await Distribution.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Distribution non trouvée" });
    res.json(updated);
  } catch (err) {
   console.error("ERREUR BACKEND :", err); // <--- Très important pour les logs Render
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Distribution.findByIdAndDelete(req.params.id);
    res.json({ message: "Distribution supprimée" });
  } catch (err) {
    console.error("ERREUR BACKEND :", err); // <--- Très important pour les logs Render
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
