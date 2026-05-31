import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api"; // Sourced central live local URL routing config

function Register() {
  const navigate = useNavigate();
  
  // Tracking structural form input matrices
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle live state changes across the inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Dispatch details to your local API server on form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setSuccess("");
      setIsLoading(true);
      
      // Submit registration structures directly to your centralized api configuration file
      const response = await API.post("/api/auth/register", formData);
      
      setSuccess("Account profile registered successfully! Redirecting to login portal...");
      
      // Delay navigation slightly so the student can see the gorgeous success alert banner
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      console.error("Registration loop handshake breakdown:", err);
      
      // Capture error states safely from your backend or network channels
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message === "Network Error") {
        setError("Network connection issue. Please make sure your local backend process is active on port 5000.");
      } else {
        setError("Registration failed. Please double-check your profile details.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col justify-center items-center px-6 font-sans relative selection:bg-teal-500/30">
      
      {/* Decorative corporate atmospheric glow rings */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full space-y-6 relative z-10">
        
        {/* Upper Branding Emblem Layout */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-md shadow-teal-400/50"></div>
            <span className="font-black text-xs uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
              PrepSuite AI
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-gray-100">Create Account</h2>
          <p className="text-xs text-neutral-400 font-medium">Join thousands of students acing placements.</p>
        </div>

        {/* Core Entry Form Card */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-black border border-neutral-900 rounded-2xl p-8 space-y-5 shadow-2xl shadow-neutral-950/80"
        >
          
          {/* Dynamic Error Alert Block Box */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-xs text-red-400 font-semibold leading-normal animate-fade-in">
              ⚠️ {error}
            </div>
          )}

          {/* Dynamic Success Alert Block Box */}
          {success && (
            <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-3 text-xs text-teal-400 font-semibold leading-normal animate-fade-in">
              🎉 {success}
            </div>
          )}

          {/* Full Name Input Container */}
          <div className="space-y-1.5 text-xs font-bold uppercase tracking-wider">
            <label className="text-neutral-400 block">Full Name</label>
            <input 
              type="text"
              name="name"
              required
              placeholder="Bindu"
              value={formData.name}
              onChange={handleInputChange}
              disabled={isLoading}
              className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-teal-400 transition font-medium normal-case"
            />
          </div>

          {/* Email Input Container */}
          <div className="space-y-1.5 text-xs font-bold uppercase tracking-wider">
            <label className="text-neutral-400 block">Email Address</label>
            <input 
              type="email"
              name="email"
              required
              placeholder="yourname@domain.com"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isLoading}
              className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-teal-400 transition font-medium normal-case"
            />
          </div>

          {/* Password Input Container */}
          <div className="space-y-1.5 text-xs font-bold uppercase tracking-wider">
            <label className="text-neutral-400 block">Password</label>
            <input 
              type="password"
              name="password"
              required
              placeholder="••••••••••••"
              value={formData.password}
              onChange={handleInputChange}
              disabled={isLoading}
              className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-teal-400 transition font-medium normal-case"
            />
          </div>

          {/* Action Trigger Button Module */}
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 bg-gradient-to-r from-teal-500 to-indigo-600 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition hover:opacity-95 shadow-lg shadow-teal-500/10 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span className="animate-pulse">Registering Profile...</span>
            ) : (
              <>Register Account →</>
            )}
          </button>

          {/* Bottom Onboarding Conversion Helper Line */}
          <div className="pt-4 border-t border-neutral-900 text-[11px] text-center text-neutral-500 font-medium normal-case tracking-normal">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-400 hover:text-teal-300 font-bold transition underline underline-offset-4">
              Login here
            </Link>
          </div>

        </form>

        {/* Global Protection Footnote Layout */}
        <p className="text-[10px] text-center text-neutral-700 font-mono font-medium tracking-wide">
          Secure Placement Training Environment
        </p>

      </div>
    </div>
  );
}

export default Register;