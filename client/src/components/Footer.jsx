import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            PrepSuite AI
          </span>
          <p className="text-sm mt-1">Smart Placement & Interview Preparation Platform</p>
        </div>
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/questions" className="hover:text-white transition">Questions</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} PrepSuite AI. Engineered by{' '}
          <a
            href="https://github.com/Bindu7729"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            Bindu
          </a>
        </div>
      </div>
    </footer>
  );
}
