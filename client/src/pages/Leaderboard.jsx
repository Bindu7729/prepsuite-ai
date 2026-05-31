import React, { useState } from "react";
import { Link } from "react-router-dom";

function Leaderboard() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock global users data tracking ranking points
  const rankingsData = [
    { rank: 1, name: "Rahul Sharma", university: "MBU, Tirupati", assessmentScore: 96, solvedChallenges: 42, totalPoints: 2450, badge: "🥇 Elite" },
    { rank: 2, name: "Sneha Reddy", university: "VIT, Vellore", assessmentScore: 92, solvedChallenges: 39, totalPoints: 2210, badge: "🥈 Master" },
    { rank: 3, name: "Bindu", university: "Mohan Babu University", assessmentScore: 88, solvedChallenges: 35, totalPoints: 1980, badge: "🥉 Expert" },
    { rank: 4, name: "Amit Verma", university: "SRM, Chennai", assessmentScore: 85, solvedChallenges: 31, totalPoints: 1750, badge: "Pro" },
    { rank: 5, name: "Divya Teja", university: "KL University", assessmentScore: 82, solvedChallenges: 28, totalPoints: 1600, badge: "Pro" },
    { rank: 6, name: "Kiran Kumar", university: "JNTU, Anantapur", assessmentScore: 78, solvedChallenges: 24, totalPoints: 1420, badge: "Rising" }
  ];

  // Filtering list based on search bar string inputs
  const filteredRankings = rankingsData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Isolate top 3 items for podium rendering structures
  const topThree = rankingsData.slice(0, 3);

  return (
    <div className="bg-black text-white min-h-screen font-sans pb-12">
      {/* GLOBAL BRANDING NAVBAR */}
      <header className="bg-neutral-950 border-b border-neutral-800 px-8 h-16 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-gray-400 hover:text-white transition text-sm font-medium">
            ← Return to Dashboard
          </Link>
          <div className="h-4 w-[1px] bg-neutral-800"></div>
          <h1 className="text-sm font-bold uppercase tracking-wider text-teal-400">
            Global Placement Standings
          </h1>
        </div>
        <span className="text-xs font-mono text-gray-500">Live Updates Active</span>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-10 space-y-12">
        
        {/* SECTION 1: THE TOP 3 VISUAL PODIUM EXHIBIT */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-6 pt-6">
          
          {/* 2ND PLACE PODIUM */}
          {topThree[1] && (
            <div className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-5 flex flex-col items-center w-full md:w-56 order-2 md:order-1 h-48 justify-end relative shadow-lg">
              <div className="w-12 h-12 bg-neutral-900 border-2 border-slate-400 rounded-full flex justify-center items-center text-lg font-bold text-slate-400 shadow-md mb-2">
                2
              </div>
              <h3 className="font-bold text-sm text-gray-200">{topThree[1].name}</h3>
              <p className="text-[11px] text-gray-500">{topThree[1].university}</p>
              <span className="text-xs font-extrabold text-slate-400 mt-2">{topThree[1].totalPoints} pts</span>
            </div>
          )}

          {/* 1ST PLACE PODIUM (HIGHEST VERTICAL HEIGHT) */}
          {topThree[0] && (
            <div className="bg-neutral-950/80 border border-teal-500/30 rounded-2xl p-6 flex flex-col items-center w-full md:w-64 order-1 md:order-2 h-56 justify-end relative shadow-2xl shadow-teal-950/20">
              <div className="absolute top-4 bg-teal-500/10 border border-teal-500/30 text-[10px] text-teal-400 font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Rank Leader
              </div>
              <div className="w-16 h-16 bg-neutral-900 border-2 border-amber-400 rounded-full flex justify-center items-center text-xl font-bold text-amber-400 shadow-lg shadow-amber-400/10 mb-2">
                1
              </div>
              <h3 className="font-extrabold text-base text-white">{topThree[0].name}</h3>
              <p className="text-xs text-gray-400">{topThree[0].university}</p>
              <span className="text-sm font-black text-teal-400 mt-2">{topThree[0].totalPoints} pts</span>
            </div>
          )}

          {/* 3RD PLACE PODIUM */}
          {topThree[2] && (
            <div className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-5 flex flex-col items-center w-full md:w-56 order-3 md:order-3 h-44 justify-end relative shadow-lg">
              <div className="w-12 h-12 bg-neutral-900 border-2 border-amber-700 rounded-full flex justify-center items-center text-lg font-bold text-amber-700 shadow-md mb-2">
                3
              </div>
              <h3 className="font-bold text-sm text-gray-200">{topThree[2].name}</h3>
              <p className="text-[11px] text-gray-500">{topThree[2].university}</p>
              <span className="text-xs font-extrabold text-amber-700 mt-2">{topThree[2].totalPoints} pts</span>
            </div>
          )}

        </div>

        {/* SECTION 2: DATATABLE GRID CONTROLS & SEARCH INTERFACE */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-gray-200">Global Leaderboard Rankings</h2>
              <p className="text-xs text-gray-500 mt-0.5">Real-time aggregate data across assessments and compiler sandbox submissions</p>
            </div>
            <input
              type="text"
              placeholder="Search by student name or university..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-neutral-900 border border-neutral-800 text-sm text-gray-200 rounded-xl px-4 py-2 w-full md:w-80 outline-none focus:border-teal-400 transition font-medium"
            />
          </div>

          {/* MAIN SCROLLABLE RANK DATA TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-neutral-800 text-gray-500 text-xs font-bold uppercase tracking-wider">
                  <th className="pb-3 pl-4">Rank</th>
                  <th className="pb-3">Student Name</th>
                  <th className="pb-3">University Campus</th>
                  <th className="pb-3 text-center">Avg Score</th>
                  <th className="pb-3 text-center">Challenges</th>
                  <th className="pb-3 pr-4 text-right">Placement Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 text-gray-300 font-medium">
                {filteredRankings.map((user) => (
                  <tr 
                    key={user.rank} 
                    className={`hover:bg-neutral-900/30 transition ${user.name === "Bindu" ? "bg-teal-500/5 font-semibold text-teal-300 border-y border-teal-500/10" : ""}`}
                  >
                    <td className="py-4 pl-4 font-mono font-bold text-gray-400">
                      #{user.rank}
                    </td>
                    <td className="py-4 flex items-center gap-2">
                      <span>{user.name}</span>
                      <span className="text-[10px] bg-neutral-900 border border-neutral-800 text-gray-400 px-2 py-0.5 rounded font-mono font-bold">
                        {user.badge}
                      </span>
                    </td>
                    <td className="py-4 text-gray-400 text-xs">{user.university}</td>
                    <td className="py-4 text-center font-mono text-xs">{user.assessmentScore}%</td>
                    <td className="py-4 text-center font-mono text-xs">{user.solvedChallenges}</td>
                    <td className="py-4 pr-4 text-right font-mono text-teal-400 font-bold">
                      {user.totalPoints}
                    </td>
                  </tr>
                ))}
                {filteredRankings.length === 0 && (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-gray-500 text-xs">
                      No matching student profiles found in aggregate cache.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Leaderboard;