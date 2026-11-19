const express = require("express");
const store = require("../data/store");

const router = express.Router();

// List questions with optional query filters (topic, difficulty)
router.get("/", (req, res) => {
  try {
    let list = store.getQuestions();
    const { topic, difficulty } = req.query;

    if (topic) {
      list = list.filter(q => q.topic.toLowerCase() === topic.toLowerCase());
    }

    if (difficulty) {
      list = list.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase());
    }

    // Return sanitized questions without revealing correct answer directly on fetch
    const sanitized = list.map(q => ({
      _id: q._id,
      questionText: q.questionText,
      options: q.options,
      topic: q.topic,
      difficulty: q.difficulty
    }));

    return res.status(200).json({
      success: true,
      count: sanitized.length,
      questions: sanitized
    });
  } catch (error) {
    console.error("Fetch questions error:", error);
    return res.status(500).json({ message: "Failed to retrieve aptitude questions." });
  }
});

// Single question details
router.get("/:id", (req, res) => {
  try {
    const question = store.findQuestionById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: `Question with id '${req.params.id}' not found.` });
    }

    return res.status(200).json({
      success: true,
      question: {
        _id: question._id,
        questionText: question.questionText,
        options: question.options,
        topic: question.topic,
        difficulty: question.difficulty
      }
    });
  } catch (error) {
    console.error("Fetch question by id error:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// Submit answer evaluation
router.post("/submit", (req, res) => {
  const { questionId, selectedAnswer } = req.body;

  try {
    if (!questionId || selectedAnswer === undefined) {
      return res.status(400).json({ message: "questionId and selectedAnswer are required." });
    }

    const question = store.findQuestionById(questionId);
    if (!question) {
      return res.status(404).json({ message: `Question with id '${questionId}' not found.` });
    }

    const isCorrect = String(question.correctAnswer).trim().toLowerCase() === String(selectedAnswer).trim().toLowerCase();

    return res.status(200).json({
      success: true,
      questionId,
      isCorrect,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      pointsEarned: isCorrect ? 10 : 0
    });
  } catch (error) {
    console.error("Question answer evaluation error:", error);
    return res.status(500).json({ message: "Internal server error during evaluation." });
  }
});

module.exports = router;
