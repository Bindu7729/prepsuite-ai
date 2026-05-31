import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-black text-white border-b border-neutral-900">
      
      <Link to="/">
        <h1 className="text-3xl font-bold text-cyan-400 cursor-pointer">
          InterviewPrep AI
        </h1>
      </Link>

      <ul className="flex gap-8 text-lg items-center">
        <li className="cursor-pointer text-gray-400 hover:text-cyan-400 transition">
          Features
        </li>
        <li className="cursor-pointer text-gray-400 hover:text-cyan-400 transition">
          About
        </li>
        <li>
          <Link to="/login" className="cursor-pointer text-gray-400 hover:text-cyan-400 transition">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-xl hover:border-cyan-400/50 transition">
            Register
          </Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;