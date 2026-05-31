import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

function ResultsAnalytics() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const totalQuestions = 5;
  const correctAnswers = 3;
  const incorrectAnswers = 2;
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  const accuracyData = [
    { name: "Correct", value: correctAnswers, color: "#10b981" },   
    { name: "Incorrect", value: incorrectAnswers, color: "#ef4444" } 
  ];

  const timeMetricsData = [
    { name: "Q1: Work", YourTime: 45, AvgTime: 60 },
    { name: "Q2: Trains", YourTime: 95, AvgTime: 70 },
    { name: "Q3: Arrays", YourTime: 120, AvgTime: 90 },
    { name: "Q4: Strings", YourTime: 30, AvgTime: 50 },
    { name: "Q5: Logics", YourTime: 75, AvgTime: 65 }
  ];

  const reviewQuestions = [
    {
      id: 1,
      topic: "Time & Work",
      status: "Correct",
      question: "A can complete a piece of work in 20 days, and B can complete the same work in 30 days. If they work together, how many days will it take them to complete the entire assignment?",
      yourAnswer: "12 days",
      correctAnswer: "12 days",
      solution: "Product-over-Sum Shortcut Rule: Total Days = (X * Y) / (X + Y) -> (20 * 30) / (20 + 30) = 600 / 50 = 12 days."
    },
    {
      id: 2,
      topic: "Speed & Distance",
      status: "Incorrect",
      question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train in meters?",
      yourAnswer: "180 meters",
      correctAnswer: "150 meters",
      solution: "Convert speed to m/s: 60 * (5/18) = 16.67 m/s. Distance = Speed * Time = 16.67 * 9 = 150 meters."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans pb-12">
      {/* GLOBAL SYSTEM BRANDING NAVBAR */}
      <header className="bg-neutral-950 border-b border-neutral-800 px-8 h-16 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-gray-400 hover:text-white transition text-sm font-medium">
            ← Return to Dashboard
          </Link>
          <div className="h-4 w-[1px] bg-neutral-800"></div>
          <h1 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
            Performance Diagnostics Console
          </h1>
        </div>
        <span className="text-xs font-mono text-gray-500">Session ID: #IP-99214</span>
      </header>

      <main className="max-w-6xl mx-auto px-6 mt-10 space-y-8">
        
        {/* STAT SCORECARD CARDS PANEL BAR */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Score Percentage</p>
            <p className="text-3xl font-extrabold text-cyan-400 mt-2">{scorePercentage}%</p>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Accuracy Mark</p>
            <p className="text-3xl font-extrabold text-emerald-400 mt-2">{correctAnswers} / {totalQuestions}</p>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Duration Engaged</p>
            <p className="text-3xl font-extrabold text-amber-400 mt-2">6m 05s</p>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Assessment Rank</p>
            <p className="text-3xl font-extrabold text-blue-500 mt-2">Intermediate</p>
          </div>
        </div>

        {/* ================= STEP 8: THE AI PERFORMANCE DIAGNOSTICS LAYER ================= */}
        <div className="relative overflow-hidden bg-gradient-to-br from-cyan-950/30 to-purple-950/20 border border-cyan-500/20 rounded-3xl p-8 shadow-xl shadow-cyan-950/10">
          {/* Subtle background neon glow element */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-500/10 text-cyan-400 p-2.5 rounded-xl border border-cyan-500/20 text-xl">
                🤖
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight text-white">AI Performance Diagnostics</h2>
                <p className="text-xs text-gray-400 font-medium mt-0.5">Automated Coaching Evaluation • Generative placement advice</p>
              </div>
            </div>
            <span className="text-[10px] bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider self-start md:self-auto">
              Active Evaluation Core
            </span>
          </div>

          <div className="mt-6 space-y-6">
            {/* The Generated Text Summary Box */}
            <div className="text-gray-300 text-sm leading-relaxed font-normal bg-neutral-950/60 border border-neutral-900 rounded-2xl p-5">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-cyan-400 block mb-2">Automated Coach Feedback:</span>
              "Excellent focus on calculation efficiency during quantitative arrays; your problem-solving velocity is outpacing the student average by 25%. However, accuracy targets dropped under the relative speed evaluations due to a breakdown in conversions. Prioritize spatial formulas to optimize threshold scores before your upcoming technical rounds."
            </div>

            {/* Action Items Column Blocks */}
            <div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-purple-400 block mb-3">Hyper-Specific Focus Targets:</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div className="bg-neutral-950/40 border border-neutral-900 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-200">1. Speed & Distance</span>
                    <span className="text-[10px] text-red-400 font-mono">Priority: High</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal">Master the 5/18 conversion matrix constraints to avoid scaling inaccuracies during execution runs.</p>
                </div>

                <div className="bg-neutral-950/40 border border-neutral-900 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-200">2. Array Index Boundaries</span>
                    <span className="text-[10px] text-amber-400 font-mono">Priority: Med</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal">Review memory pointers and sliding window constraints on target arrays to eliminate runtime errors.</p>
                </div>

                <div className="bg-neutral-950/40 border border-neutral-900 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-200">3. Time & Work Loops</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Priority: Stable</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal">Maintain consistency by applying the product-over-sum shortcuts across compound time structures.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* ================= END OF AI LAYER ================= */}

        {/* VISUAL CHARTS GRAPH SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider self-start mb-4">Response Accuracy Metrics</h3>
            <div className="w-full h-64 flex justify-center items-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={accuracyData} cx="50%" cy="50%" innerRadius={72} outerRadius={92} paddingAngle={4} dataKey="value">
                    {accuracyData.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#0a0a0a", border: "1px solid #262626", color: "#fff" }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute text-center">
                <p className="text-3xl font-black text-white">{scorePercentage}%</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Success</p>
              </div>
            </div>
            <div className="flex gap-6 mt-2 text-xs font-semibold">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-500 rounded"></div> <span className="text-gray-400">Correct ({correctAnswers})</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded"></div> <span className="text-gray-400">Incorrect ({incorrectAnswers})</span></div>
            </div>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Time Spent Analysis (Seconds)</h3>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={timeMetricsData}>
                  <XAxis dataKey="name" stroke="#525252" fontSize={11} tickLine={false} />
                  <YAxis stroke="#525252" fontSize={11} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: "#0a0a0a", border: "1px solid #262626", color: "#fff" }} />
                  <Legend wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }} />
                  <Bar dataKey="YourTime" name="Your Speed" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="AvgTime" name="Global Baseline" fill="#262626" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* REVIEW ANALYSIS ACCORDION CARD ELEMENT */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Itemized Assessment Review</h3>
          <div className="space-y-3">
            {reviewQuestions.map((item) => (
              <div key={item.id} className="border border-neutral-900 rounded-xl overflow-hidden bg-neutral-900/10">
                <button onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)} className="w-full px-5 py-4 flex justify-between items-center hover:bg-neutral-900/40 transition text-left">
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider ${item.status === "Correct" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                      {item.status}
                    </span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">{item.topic}</span>
                    <p className="text-sm font-semibold text-gray-300 line-clamp-1 hidden md:block">{item.question}</p>
                  </div>
                  <span className="text-gray-600 text-xs font-mono">{activeAccordion === item.id ? "▲" : "▼"}</span>
                </button>
                {activeAccordion === item.id && (
                  <div className="px-5 pb-5 pt-2 border-t border-neutral-900 text-sm space-y-4 bg-neutral-950/50">
                    <div className="text-gray-300 font-normal leading-relaxed mt-2">
                      <span className="text-[10px] block text-gray-500 uppercase tracking-wider font-bold mb-1">Full Challenge Text</span>
                      {item.question}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                        <span className="text-gray-500 block mb-1">Your Selected Option:</span>
                        <span className={item.status === "Correct" ? "text-emerald-400 font-bold" : "text-red-400 font-bold"}>{item.yourAnswer}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                        <span className="text-gray-500 block mb-1">Correct Answer Key:</span>
                        <span className="text-emerald-400 font-bold">{item.correctAnswer}</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-900/30 text-xs">
                      <span className="text-cyan-400 font-bold uppercase tracking-wider block mb-1">💡 Automated Solution Logic:</span>
                      <p className="text-gray-400 leading-relaxed font-sans">{item.solution}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}

export default ResultsAnalytics;