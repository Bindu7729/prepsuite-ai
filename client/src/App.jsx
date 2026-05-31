import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Page Views Imported Cleanly
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AptitudeArena from "./pages/AptitudeArena";
import CodingSandbox from "./pages/CodingSandbox";
import ResultsAnalytics from "./pages/ResultsAnalytics";
import Features from "./pages/Features";
import About from "./pages/About";

// Brand New Module Import
import MockBooth from "./pages/MockBooth";

function App() {
  return (
    <Router>
      <Routes>
        {/* Marketing & Structural Informational Hubs */}
        <Route path="/" element={<Landing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        
        {/* Verification Portals */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Main Application Core */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aptitude-arena" element={<AptitudeArena />} />
        <Route path="/coding-sandbox" element={<CodingSandbox />} />
        <Route path="/results" element={<ResultsAnalytics />} />
        
        {/* Dedicated AI Route Path Connection */}
        <Route path="/mock-booth" element={<MockBooth />} />

        {/* Global Catch Fallback Protection */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;