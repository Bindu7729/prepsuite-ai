const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const questionsRoutes = require("./routes/questions.routes");

const app = express();

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// Service health and status
app.get("/", (req, res) => {
  res.send("PrepSuite AI Multi-Routing Engine Online.");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "HEALTHY",
    service: "prepsuite-ai-backend",
    version: "1.1.0",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Mount modular sub-routes
app.use("/api/auth", authRoutes);
app.use("/api/questions", questionsRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "API endpoint not found." });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error("Unhandled Server Error:", err);
  res.status(500).json({ message: "Internal server error." });
});

module.exports = app;
