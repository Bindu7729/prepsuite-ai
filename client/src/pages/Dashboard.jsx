import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen font-sans flex overflow-hidden selection:bg-teal-500/30">
      
      {/* 🧭 ORIGINAL LEFT SIDEBAR NAVIGATION */}
      <aside className="w-64 border-r border-neutral-900 bg-neutral-950 flex flex-col justify-between flex-shrink-0">
        <div className="p-6 space-y-8">
          {/* Logo Brand Header */}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50"></div>
            <span className="font-black text-xs uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
              PrepSuite AI
            </span>
          </div>

          {/* Sidebar Links Navigation */}
          <nav className="flex flex-col gap-2">
            <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider px-3 mb-2">
              Workspace Modules
            </span>
            
            <Link to="/coding-sandbox" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-neutral-400 hover:text-white hover:bg-neutral-900 transition">
              <span>💻</span> Coding Sandbox
            </Link>

            <Link to="/aptitude-arena" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-neutral-400 hover:text-white hover:bg-neutral-900 transition">
              <span>🧠</span> Aptitude Arena
            </Link>

            {/* 🛠️ FIXED LINK: Pointing cleanly to your AI Mock Booth route */}
            <Link to="/mock-booth" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-neutral-400 hover:text-white hover:bg-neutral-900 transition border border-transparent hover:border-indigo-500/20">
              <span>🎙️</span> AI Mock Booth
            </Link>

            <Link to="/results" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-neutral-400 hover:text-white hover:bg-neutral-900 transition">
              <span>📊</span> Results Analytics
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer Console Info */}
        <div className="p-6 border-t border-neutral-900 space-y-3">
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
            <span>NODE: ACTIVE</span>
            <span className="text-teal-400">● ONLINE</span>
          </div>
          <Link to="/" className="w-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white text-center py-2 rounded-xl text-xs font-bold block transition border border-neutral-800">
            Logout →
          </Link>
        </div>
      </aside>

      {/* 🚀 MAIN CONTENT VIEW workspace space AREA */}
      <main className="flex-1 bg-neutral-950 flex flex-col h-screen overflow-y-auto">
        
        {/* Upper Top Navbar Header panel */}
        <header className="border-b border-neutral-900 h-16 flex items-center justify-between px-8 bg-neutral-950/40 backdrop-blur-md sticky top-0 z-10 flex-shrink-0">
          <div>
            <h1 className="text-sm font-black uppercase tracking-wider text-neutral-200">Candidate Dashboard</h1>
          </div>
          <span className="text-xs font-mono text-neutral-500">System Port 5000 // Active Verified Loop</span>
        </header>

        {/* Inner Content Area Box */}
        <div className="p-8 space-y-8 max-w-5xl w-full">
          
          {/* Welcome Dashboard Slate heading section banner */}
          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-tight">Welcome Back, Student</h2>
            <p className="text-xs text-neutral-500 font-mono">Select a preparation pipeline module from the left navigation pane to begin tracking execution speed loops.</p>
          </div>

          {/* 🏆 MY ACHIEVEMENTS PANEL VIEW LAYOUT */}
          <section className="bg-black border border-neutral-900 rounded-2xl p-6 space-y-6 shadow-2xl">
            <div className="border-b border-neutral-900 pb-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-neutral-400">My Achievements</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-neutral-900/40 border border-neutral-900 p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-md">⚡</div>
                <div>
                  <p className="text-xs font-bold text-white">Algorithmic Speedster</p>
                  <p className="text-[10px] text-neutral-500 font-mono">Completed code in under 15s</p>
                </div>
              </div>

              <div className="bg-neutral-900/40 border border-neutral-900 p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-md">🧠</div>
                <div>
                  <p className="text-xs font-bold text-white">Logic Master</p>
                  <p className="text-[10px] text-neutral-500 font-mono">100% score on Aptitude Matrix</p>
                </div>
              </div>

              <div className="bg-neutral-900/40 border border-neutral-900 p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 text-md">🔥</div>
                <div>
                  <p className="text-xs font-bold text-white">Continuous Dev Loop</p>
                  <p className="text-[10px] text-neutral-500 font-mono">5 consecutive compiles logged</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}

export default Dashboard;