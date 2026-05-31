import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// Temporary in-memory storage array to simulate a database table
const localUserDatabase = [];

// 1. BYPASS REGISTER ENDPOINT
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists in our temporary array
    const userExists = localUserDatabase.find(u => u.email === email.toLowerCase());
    if (userExists) {
      return res.status(400).json({ message: "User already exists with this email address." });
    }

    // Save user directly to our temporary runtime array
    const newUser = {
      id: Date.now().toString(),
      name,
      email: email.toLowerCase(),
      password, // Storing plain text temporarily for zero-dependency testing
      streak: 5
    };
    
    localUserDatabase.push(newUser);
    console.log("👤 New User Registered in temporary memory:", newUser);

    res.status(201).json({ message: "User registered successfully! Proceed to login." });
  } catch (error) {
    res.status(500).json({ message: "Server registration error", error: error.message });
  }
});

// 2. BYPASS LOGIN ENDPOINT
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user in our temporary array
    const user = localUserDatabase.find(u => u.email === email.toLowerCase());
    if (!user) {
      return res.status(400).json({ message: "Invalid email credentials." });
    }

    // Verify password match
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password credentials." });
    }

    // Sign session token
    const token = jwt.sign(
      { id: user.id, name: user.name },
      "supersecretkey123",
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        streak: user.streak,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server login error", error: error.message });
  }
});

export default router;