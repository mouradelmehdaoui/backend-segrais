require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// 🔥 CORS FIX FINAL (OPEN)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/distribution", require("./routes/distribution.routes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server lancé sur http://localhost:${PORT}`)
);
