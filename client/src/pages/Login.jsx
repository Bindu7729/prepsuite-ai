import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api"; 

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setIsLoading(true);
      
      const response = await API.post("/api/auth/login", { email, password });
      
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Login authorization handshake error:", err);
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message === "Network Error") {
        setError("Network connection issue. Please make sure your backend server is running on port 5000.");
      } else {
        setError("Invalid credentials. Please verify your input parameters.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col justify-center items-center px-6 font-sans relative">
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full space-y-6 relative z-10">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-md shadow-teal-400/50"></div>
            <span className="font-black text-xs uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
              PrepSuite AI
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-gray-100">Welcome Back</h2>
          <p className="text-xs text-neutral-400 font-medium">Log in to continue your placement preparation journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-black border border-neutral-900 rounded-2xl p-8 space-y-5 shadow-2xl shadow-neutral-950/80">
          {error && <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-xs text-red-400 font-semibold animate-fade-in">⚠️ {error}</div>}

          <div className="space-y-1.5 text-xs font-bold uppercase tracking-wider">
            <label className="text-neutral-400 block">Email Address</label>
            <input 
              type="email" required placeholder="yourname@domain.com" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading}
              className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-teal-400 transition font-medium normal-case"
            />
          </div>

          <div className="space-y-1.5 text-xs font-bold uppercase tracking-wider">
            <div className="flex justify-between items-center">
              <label className="text-neutral-400">Password</label>
              <span className="text-[10px] text-neutral-500 hover:text-neutral-400 transition cursor-not-allowed normal-case font-medium">Forgot Password?</span>
            </div>
            <input 
              type="password" required placeholder="••••••••••••" value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading}
              className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-teal-400 transition font-medium normal-case"
            />
          </div>

          <button type="submit" disabled={isLoading} className="w-full mt-2 bg-gradient-to-r from-teal-500 to-indigo-600 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition hover:opacity-95 shadow-lg flex items-center justify-center gap-2">
            {isLoading ? <span className="animate-pulse">Verifying Account...</span> : <>Login to Dashboard →</>}
          </button>

          <div className="pt-4 border-t border-neutral-900 text-[11px] text-center text-neutral-500 font-medium normal-case">
            New to the suite?{" "}
            <Link to="/register" className="text-teal-400 hover:text-teal-300 font-bold transition underline underline-offset-4">Create an account here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;