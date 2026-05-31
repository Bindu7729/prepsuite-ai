const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "prepsuite_placement_secret_key_2026";

// Middleware Integrations
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// =========================================================
// IN-MEMORY ACTIVE CLUSTER DATASETS
// =========================================================
const mockUsers = [
  {
    id: "user_default",
    name: "Test Student",
    email: "student@university.edu",
    passwordHash: "", 
    role: "student"
  }
];

const mockQuestions = [
  {
    _id: "q_01",
    questionText: "A pipe system can fill a cistern in 9 hours. Due to a leak in its bottom, it is filled in 10 hours. If the cistern is full, in how much time will the leak empty it?",
    options: ["70 Hours", "80 Hours", "90 Hours", "100 Hours"],
    correctAnswer: "90 Hours",
    topic: "Pipes & Cisterns",
    difficulty: "Medium"
  },
  {
    _id: "q_02",
    questionText: "A train running at a speed of 60 km/hr crosses a static pole in 9 seconds. What is the length of the train in meters?",
    options: ["120 meters", "150 meters", "180 meters", "324 meters"],
    correctAnswer: "150 meters",
    topic: "Time & Distance",
    difficulty: "Easy"
  },
  {
    _id: "q_03",
    questionText: "The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What is the weight of the new person?",
    options: ["76 kg", "82 kg", "85 kg", "88 kg"],
    correctAnswer: "85 kg",
    topic: "Averages",
    difficulty: "Hard"
  },
  {
    _id: "q_04",
    questionText: "A sum of money at compound interest amounts to thrice itself in 3 years. In how many years will it be 9 times itself?",
    options: ["6 Years", "8 Years", "9 Years", "12 Years"],
    correctAnswer: "6 Years",
    topic: "Compound Interest",
    difficulty: "Medium"
  }
];

// Initialize default profile credentials securely on bootstrap
(async () => {
  mockUsers[0].passwordHash = await bcrypt.hash("password123", 10);
})();

// =========================================================
// API CORE CONTROLLER ENDPOINTS
// =========================================================

// 🔑 ROUTE 1: REGISTRATION (Open and Dynamic)
app.post("/api/auth/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All input fields are required." });
    }

    const existingUser = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
      return res.status(400).json({ message: "This email address is already registered. Try logging in!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: `user_${Date.now()}`,
      name,
      email: email.toLowerCase(),
      passwordHash: hashedPassword,
      role: "student"
    };
    
    mockUsers.push(newUser);
    console.log(`👤 New Registration Saved: ${name} (${email})`);
    return res.status(201).json({ message: "User account created successfully in system database." });
  } catch (error) {
    console.error("Register compiler tracking break:", error);
    return res.status(500).json({ message: "Internal server error executing registration request." });
  }
});

// 🚪 ROUTE 2: LOGIN ACCESS
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide both email and password keys." });
    }

    const user = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      return res.status(400).json({ message: "No account found with this email. Please register first." });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password. Please verify your password entry." });
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "24h" });
    return res.status(200).json({
      message: "Session authorized successfully",
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    console.error("Login route runtime exception:", error);
    return res.status(500).json({ message: "Internal server error executing login request." });
  }
});

// 📝 ROUTE 3: FETCH CLUSTER QUESTIONS
app.get("/api/questions", (req, res) => {
  try {
    return res.status(200).json(mockQuestions);
  } catch (error) {
    console.error("Error sending questions vector:", error);
    return res.status(500).json({ message: "Failed to read database question matrix." });
  }
});

// GET: Server Check Root
app.get("/", (req, res) => {
  res.send("PrepSuite AI Multi-Routing Engine Online.");
});

// Server Launch Port Listener Configuration
app.listen(PORT, () => {
  console.log("\n🛸 MongoDB Connected Safely: Local_Simulation_Active (Bypass mode Enabled)");
  console.log(`⚡ Server running beautifully on port: ${PORT}\n`);
});