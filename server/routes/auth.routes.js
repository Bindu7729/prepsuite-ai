const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authenticateToken, JWT_SECRET } = require("../middleware/auth");
const store = require("../data/store");

const router = express.Router();

// Register new student account
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All input fields (name, email, password) are required." });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long." });
    }

    const existingUser = store.findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: "This email address is already registered. Please log in." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: `user_${Date.now()}`,
      name: name.trim(),
      email: email.toLowerCase().trim(),
      passwordHash: hashedPassword,
      role: "student",
      streak: 1
    };

    store.addUser(newUser);

    const token = jwt.sign(
      { userId: newUser.id, role: newUser.role, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.status(201).json({
      message: "User account registered successfully.",
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        streak: newUser.streak
      }
    });
  } catch (error) {
    console.error("Auth registration error:", error);
    return res.status(500).json({ message: "Internal server error during registration." });
  }
});

// Login existing account
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide both email and password." });
    }

    const user = store.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid email credentials. Please check your email or register." });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password credentials." });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role, email: user.email },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      message: "Session authorized successfully.",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        streak: user.streak || 1
      }
    });
  } catch (error) {
    console.error("Auth login error:", error);
    return res.status(500).json({ message: "Internal server error during login." });
  }
});

// Protected: Get current user profile
router.get("/me", authenticateToken, (req, res) => {
  try {
    const user = store.findUserById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User account not found." });
    }

    return res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      streak: user.streak || 1
    });
  } catch (error) {
    console.error("Fetch profile error:", error);
    return res.status(500).json({ message: "Internal server error retrieving user profile." });
  }
});

module.exports = router;
