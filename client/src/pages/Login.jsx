import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Logging in user in simulation mode:", formData.email);
    
    // Set mock session details
    localStorage.setItem('token', 'interview-demo-token-active');
    if (!localStorage.getItem('username')) {
      localStorage.setItem('username', 'Developer');
    }
    
    // Redirect straight to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111827] text-white font-sans px-4">
      <div className="max-w-md w-full bg-[#1f2937] p-8 rounded-xl shadow-2xl border border-gray-700/50">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-500/10 text-teal-400 mb-3 border border-teal-500/20">
            <span className="text-xl font-bold">P</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-400">Sign in to your placement suite</p>
        </div>
        
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Email address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-[#111827] border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-[#111827] border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition-all mt-2"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-teal-400 hover:text-teal-300 transition-colors">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;