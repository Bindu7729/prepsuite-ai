# PrepSuite AI 🚀

> **AI-Powered Placement Preparation & Candidate Diagnostic Platform**
>
> A comprehensive, full-stack candidate evaluation platform engineered to simulate high-fidelity technical screening pipelines. Combines algorithmic sandboxes, quantitative logic evaluations, and real-time competency analytics into a cohesive, distraction-free candidate workflow.

---

<p align="center">
  <a href="https://github.com/Bindu7729/prepsuite-ai/actions/workflows/ci.yml">
    <img src="https://github.com/Bindu7729/prepsuite-ai/actions/workflows/ci.yml/badge.svg" alt="CI Pipeline" />
  </a>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Express-4.19-000000?logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Vitest-5.1-729B1B?logo=vitest&logoColor=white" alt="Vitest" />
  <img src="https://img.shields.io/badge/Jest-30.5-C21325?logo=jest&logoColor=white" alt="Jest" />
  <a href="https://prepsuite-ai-byyu-eight.vercel.app">
    <img src="https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
</p>

## 📖 Project Overview

**PrepSuite AI** is a full-stack candidate screening ecosystem engineered for collegiate students and technical job applicants. It provides:
1. **Coding Sandbox:** Multi-language execution sandbox with editor controls and syntax validation.
2. **Aptitude Arena:** Time-pressured quantitative reasoning tests with instant answer feedback and step-by-step mathematical explanations.
3. **AI Mock Booth:** Situational interview evaluation and recruitment response tracking.
4. **Competency Analytics:** Visualized candidate performance metrics, daily streaks, and topic mastery.

---

## ✨ Key Features

* 🔐 **Secure JWT Authentication:** Full authentication lifecycle with bcrypt password hashing, session tokens, and route protection.
* 🧠 **Aptitude Evaluation Engine:** Instant answer validation, detailed formula shortcuts, and scoring telemetry.
* 💻 **Interactive Code Sandbox:** Code editing powered by Monaco Editor supporting runtime speed benchmarks.
* 📊 **Telemetry & Analytics:** Real-time dashboards monitoring candidate progress, streaks, and competency milestones.
* 🛡️ **Defensive Fallback Design:** Offline-resilient client capable of running in simulation mode if backend services are offline.
* 🧪 **Automated Testing Suites:** Vitest unit test coverage on frontend components + Jest Supertest API endpoint validation on backend.

---

## 🛠️ Technology Stack

### Frontend
* **React 19** & **Vite 8** (High-speed build tool and UI runtime)
* **Tailwind CSS 4** (Modern utility styling and responsive dark theme)
* **React Router 7** (Client-side routing architecture)
* **Monaco Editor** (High-fidelity code editor)
* **Vitest & React Testing Library** (Automated UI test suite)

### Backend
* **Node.js** & **Express 4** (RESTful API micro-services)
* **JSON Web Tokens (JWT)** (Session authorization and bearer tokens)
* **bcryptjs** (Cryptographic password hashing)
* **Jest & Supertest** (End-to-end HTTP endpoint test automation)

---

## 🏗️ Architecture

```
prepsuite-ai/
├── client/
│   ├── src/
│   │   ├── api.js                # Axios interceptor with bearer token injection
│   │   ├── components/           # Reusable UI elements (Navbar, Shell)
│   │   │   └── __tests__/        # Vitest component test suites
│   │   ├── pages/                # Route views (Dashboard, AptitudeArena, Login, Register, About)
│   │   │   └── __tests__/        # Vitest page view test suites
│   │   ├── App.jsx               # Application routes
│   │   └── main.jsx              # React DOM mounting
│   ├── vitest.config.js          # Vitest client configuration
│   └── package.json
│
├── server/
│   ├── __tests__/                # Supertest API endpoint integration tests
│   ├── data/
│   │   └── store.js              # State management and question catalog
│   ├── middleware/
│   │   └── auth.js               # JWT bearer token verification
│   ├── routes/
│   │   ├── auth.routes.js        # /api/auth (register, login, me)
│   │   └── questions.routes.js   # /api/questions (list, filter, submit)
│   ├── app.js                    # Express application factory
│   ├── index.js                  # Service entrypoint
│   └── package.json
│
├── .github/workflows/ci.yml      # Continuous integration matrix
└── package.json                  # Root monorepo workspace configuration
```

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have Node.js (v18+) and npm installed.

### 2. Clone the Repository
```bash
git clone https://github.com/Bindu7729/prepsuite-ai.git
cd prepsuite-ai
```

### 3. Install Monorepo Dependencies
```bash
npm install
```

### 4. Run Development Servers
Start both the client and server concurrently:
```bash
# Run client (http://localhost:5173)
npm run dev:client

# Run server (http://localhost:5000)
npm run dev:server
```

---

## 🧪 Testing

```bash
# Run all tests (Client Vitest + Server Jest)
npm test

# Run client tests only
npm run test:client

# Run server tests only
npm run test:server

# Build production client bundle
npm run build:client
```

---

## 🔌 API Reference

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Service health status and uptime | No |
| `POST` | `/api/auth/register` | Register new student candidate account | No |
| `POST` | `/api/auth/login` | Authenticate credentials and receive JWT | No |
| `GET` | `/api/auth/me` | Retrieve profile of authenticated user | Yes (Bearer) |
| `GET` | `/api/questions` | List questions (supports `?topic=` and `?difficulty=`) | No |
| `GET` | `/api/questions/:id` | Fetch single question details | No |
| `POST` | `/api/questions/submit` | Submit answer evaluation and calculate score | No |

---

## 📄 License
This project is developed for educational and portfolio demonstration purposes.

---
<p align="center">
  <b>PrepSuite AI &copy; 2026</b>
</p>