const router = require("express").Router();
const Distribution = require("../models/Distribution");

// GET all distributions
router.get("/", async (req, res) => {
  try {
    const data = await Distribution.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one by ID
router.get("/:id", async (req, res) => {
  try {
    const dist = await Distribution.findById(req.params.id);
    if (!dist) return res.status(404).json({ message: "Distribution non trouvée" });
    res.json(dist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE
router.post("/", async (req, res) => {
  try {
    const newDist = new Distribution(req.body);
    
    await newDist.save();
    res.status(201).json(newDist); // renvoyer l'objet complet avec _id
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await Distribution.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Distribution non trouvée" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Distribution.findByIdAndDelete(req.params.id);
    res.json({ message: "Distribution supprimée" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
