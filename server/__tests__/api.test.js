const request = require("supertest");
const app = require("../app");
const store = require("../data/store");

describe("PrepSuite AI Backend API Test Suite", () => {
  beforeEach(() => {
    store.resetData();
  });

  describe("System Health & Root", () => {
    it("returns root operational greeting", async () => {
      const res = await request(app).get("/");
      expect(res.statusCode).toBe(200);
      expect(res.text).toContain("PrepSuite AI Multi-Routing Engine Online");
    });

    it("returns 200 with HEALTHY status from /api/health", async () => {
      const res = await request(app).get("/api/health");
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe("HEALTHY");
      expect(res.body.service).toBe("prepsuite-ai-backend");
      expect(res.body.version).toBe("1.1.0");
    });
  });

  describe("Authentication API (/api/auth)", () => {
    const validRegistration = {
      name: "Bindu Penumala",
      email: "bindu.candidate@placement.edu",
      password: "securePassword2026"
    };

    it("rejects registration when required fields are missing", async () => {
      const res = await request(app)
        .post("/api/auth/register")
        .send({ email: "incomplete@test.com" });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toContain("required");
    });

    it("rejects password shorter than 6 characters", async () => {
      const res = await request(app)
        .post("/api/auth/register")
        .send({ name: "User", email: "user@test.com", password: "123" });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toContain("at least 6 characters");
    });

    it("registers new candidate account and returns session token", async () => {
      const res = await request(app)
        .post("/api/auth/register")
        .send(validRegistration);

      expect(res.statusCode).toBe(201);
      expect(res.body.token).toBeDefined();
      expect(res.body.user.email).toBe(validRegistration.email);
      expect(res.body.user.name).toBe(validRegistration.name);
      expect(res.body.user).not.toHaveProperty("passwordHash");
    });

    it("rejects duplicate email registration with 409 Conflict", async () => {
      await request(app).post("/api/auth/register").send(validRegistration);

      const res = await request(app)
        .post("/api/auth/register")
        .send(validRegistration);

      expect(res.statusCode).toBe(409);
      expect(res.body.message).toContain("already registered");
    });

    it("authenticates existing user and issues JWT bearer token", async () => {
      await request(app).post("/api/auth/register").send(validRegistration);

      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: validRegistration.email,
          password: validRegistration.password
        });

      expect(res.statusCode).toBe(200);
      expect(res.body.token).toBeDefined();
      expect(res.body.user.email).toBe(validRegistration.email);
    });

    it("rejects login with invalid email credentials", async () => {
      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: "unknown@user.com",
          password: "password123"
        });

      expect(res.statusCode).toBe(401);
      expect(res.body.message).toContain("Invalid email");
    });

    it("rejects login with incorrect password credentials", async () => {
      await request(app).post("/api/auth/register").send(validRegistration);

      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: validRegistration.email,
          password: "wrongPassword!"
        });

      expect(res.statusCode).toBe(401);
      expect(res.body.message).toContain("Incorrect password");
    });

    it("protects /api/auth/me against unauthenticated access", async () => {
      const res = await request(app).get("/api/auth/me");
      expect(res.statusCode).toBe(401);
      expect(res.body.message).toContain("Bearer token missing");
    });

    it("returns user profile when authenticated with valid Bearer token", async () => {
      const regRes = await request(app)
        .post("/api/auth/register")
        .send(validRegistration);

      const token = regRes.body.token;

      const res = await request(app)
        .get("/api/auth/me")
        .set("Authorization", `Bearer ${token}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.email).toBe(validRegistration.email);
      expect(res.body.name).toBe(validRegistration.name);
    });
  });

  describe("Questions API (/api/questions)", () => {
    it("returns questions array with question details and options", async () => {
      const res = await request(app).get("/api/questions");

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.count).toBeGreaterThanOrEqual(4);
      expect(Array.isArray(res.body.questions)).toBe(true);
      expect(res.body.questions[0]).toHaveProperty("questionText");
      expect(res.body.questions[0]).toHaveProperty("options");
      // Sanitize: ensure correct answer is not exposed in list
      expect(res.body.questions[0]).not.toHaveProperty("correctAnswer");
    });

    it("filters questions by topic query parameter", async () => {
      const res = await request(app).get("/api/questions?topic=Averages");

      expect(res.statusCode).toBe(200);
      expect(res.body.questions.every(q => q.topic.toLowerCase() === "averages")).toBe(true);
    });

    it("returns question by ID", async () => {
      const res = await request(app).get("/api/questions/q_01");

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.question._id).toBe("q_01");
      expect(res.body.question.topic).toBe("Pipes & Cisterns");
    });

    it("returns 404 for non-existent question ID", async () => {
      const res = await request(app).get("/api/questions/non_existent_id");
      expect(res.statusCode).toBe(404);
    });

    it("evaluates correct answer on /api/questions/submit and awards points", async () => {
      const res = await request(app)
        .post("/api/questions/submit")
        .send({
          questionId: "q_02",
          selectedAnswer: "150 meters"
        });

      expect(res.statusCode).toBe(200);
      expect(res.body.isCorrect).toBe(true);
      expect(res.body.pointsEarned).toBe(10);
      expect(res.body.explanation).toContain("150 meters");
    });

    it("evaluates incorrect answer on /api/questions/submit and reveals correct answer", async () => {
      const res = await request(app)
        .post("/api/questions/submit")
        .send({
          questionId: "q_02",
          selectedAnswer: "120 meters"
        });

      expect(res.statusCode).toBe(200);
      expect(res.body.isCorrect).toBe(false);
      expect(res.body.pointsEarned).toBe(0);
      expect(res.body.correctAnswer).toBe("150 meters");
    });
  });

  describe("Unknown Route 404 Handler", () => {
    it("returns 404 json error for unmapped endpoints", async () => {
      const res = await request(app).get("/api/non-existent-endpoint");
      expect(res.statusCode).toBe(404);
      expect(res.body.message).toBe("API endpoint not found.");
    });
  });
});
