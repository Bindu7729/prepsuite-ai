import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const sampleQuestions = [
      {
        _id: "q1",
        questionText: "A can complete a piece of work in 20 days, and B can complete the same work in 30 days. If they work together, how many days will it take them to complete the entire assignment?",
        options: [
          { id: "A", text: "15 days" },
          { id: "B", text: "12 days" },
          { id: "C", text: "10 days" },
          { id: "D", text: "8 days" }
        ],
        correctAnswer: "B",
        category: "Time & Work",
        shortcut: "Product-over-Sum Shortcut Rule: Total Days = (X * Y) / (X + Y) -> (20 * 30) / (20 + 30) = 600 / 50 = 12 days!"
      },
      {
        _id: "q2",
        questionText: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train in meters?",
        options: [
          { id: "A", text: "120 meters" },
          { id: "B", text: "180 meters" },
          { id: "C", text: "150 meters" },
          { id: "D", text: "324 meters" }
        ],
        correctAnswer: "C",
        category: "Speed & Distance",
        shortcut: "Convert speed to m/s by multiplying with 5/18: 60 * (5/18) = 16.67 m/s. Distance = Speed * Time = 16.67 * 9 = 150 meters!"
      }
    ];

    console.log("📡 Serving aptitude questions from bypass memory storage!");
    res.json(sampleQuestions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions", error: error.message });
  }
});

export default router;