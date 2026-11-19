const bcrypt = require("bcryptjs");

const initialQuestions = [
  {
    _id: "q_01",
    questionText: "A pipe system can fill a cistern in 9 hours. Due to a leak in its bottom, it is filled in 10 hours. If the cistern is full, in how much time will the leak empty it?",
    options: ["70 Hours", "80 Hours", "90 Hours", "100 Hours"],
    correctAnswer: "90 Hours",
    topic: "Pipes & Cisterns",
    difficulty: "Medium",
    explanation: "Work done by leak in 1 hour = (1/9 - 1/10) = 1/90. Therefore, the leak empties the cistern in 90 hours."
  },
  {
    _id: "q_02",
    questionText: "A train running at a speed of 60 km/hr crosses a static pole in 9 seconds. What is the length of the train in meters?",
    options: ["120 meters", "150 meters", "180 meters", "324 meters"],
    correctAnswer: "150 meters",
    topic: "Time & Distance",
    difficulty: "Easy",
    explanation: "Speed in m/s = 60 * (5/18) = 50/3 m/s. Length of train = Speed * Time = (50/3) * 9 = 150 meters."
  },
  {
    _id: "q_03",
    questionText: "The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What is the weight of the new person?",
    options: ["76 kg", "82 kg", "85 kg", "88 kg"],
    correctAnswer: "85 kg",
    topic: "Averages",
    difficulty: "Hard",
    explanation: "Total weight increase = 8 * 2.5 = 20 kg. Weight of new person = 65 + 20 = 85 kg."
  },
  {
    _id: "q_04",
    questionText: "A sum of money at compound interest amounts to thrice itself in 3 years. In how many years will it be 9 times itself?",
    options: ["6 Years", "8 Years", "9 Years", "12 Years"],
    correctAnswer: "6 Years",
    topic: "Compound Interest",
    difficulty: "Medium",
    explanation: "Amount becomes 3^1 in 3 years. To become 9 times = 3^2, it takes 3 * 2 = 6 years."
  },
  {
    _id: "q_05",
    questionText: "A and B can complete a work in 12 days, B and C in 15 days, and C and A in 20 days. How many days will A, B, and C take working together?",
    options: ["5 Days", "10 Days", "15 Days", "20 Days"],
    correctAnswer: "10 Days",
    topic: "Time & Work",
    difficulty: "Medium",
    explanation: "2(A + B + C)'s 1 day work = 1/12 + 1/15 + 1/20 = 12/60 = 1/5. (A + B + C)'s 1 day work = 1/10. Days taken = 10 days."
  }
];

let users = [];
let questions = [...initialQuestions];

async function seedDefaultUser() {
  const hash = await bcrypt.hash("password123", 10);
  users = [
    {
      id: "user_default",
      name: "Test Student",
      email: "student@university.edu",
      passwordHash: hash,
      role: "student",
      streak: 5
    }
  ];
}

seedDefaultUser();

function resetData() {
  questions = [...initialQuestions];
  seedDefaultUser();
}

module.exports = {
  getUsers: () => users,
  addUser: (user) => users.push(user),
  findUserByEmail: (email) => users.find(u => u.email.toLowerCase() === (email || "").toLowerCase()),
  findUserById: (id) => users.find(u => u.id === id),
  getQuestions: () => questions,
  findQuestionById: (id) => questions.find(q => q._id === id),
  resetData
};
