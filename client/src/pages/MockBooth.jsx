import React, { useState } from "react";
import { Link } from "react-router-dom";

function MockBooth() {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState(0);

  const mockQuestions = [
    "Tell me about a challenging full-stack project you engineered, and how you handled data persistence or performance bottlenecks.",
    "How do you approach optimizing an API endpoint that is processing heavy data analytics arrays recursively?",
    "Describe a time you had to coordinate execution strategies or split tasks under tight deadlines during a technical hackathon hack loop."
  ];

  return (
    <div className="bg-[#03060a] text-white min-h-screen relative font-sans antialiased overflow-x-hidden flex flex-col justify-between selection:bg-teal-500/30">
      
      <style>{`
        :root {
          --glass-bg: rgba(255, 255, 255, 0.03);
          --glass-border: rgba(255, 255, 255, 0.06);
          --glass-blur: blur(12px);
        }
        .glass-panel {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: var(--glass-blur);
        }
        .page-background {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%; z-index: -1;
          background-image: radial-gradient(circle at 50% 15%, rgba(147, 51, 234, 0.05), transparent 50%);
        }
      `}</style>

      <div className="page-background" />

      {/* 🌐 NAV BANNER HUD */}
      <header className="pt-8 mb-12">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <Link to="/dashboard" className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2 hover:border-indigo-500/30 transition-all text-xs font-bold tracking-wider text-neutral-400 hover:text-white">
            ← LEAVE BOOTH
          </Link>
          <div className="glass-panel px-4 py-2 rounded-xl text-xs font-mono border border-indigo-500/20 text-indigo-400 tracking-widest">
            🎙️ AI AUDIO & BEHAVIORAL DIAGNOSTICS
          </div>
        </div>
      </header>

      {/* 🚀 CORE WORKSPACE PORTAL */}
      <main className="max-w-[800px] mx-auto px-6 flex-1 w-full pb-16 flex flex-col justify-center">
        {!isSessionActive ? (
          /* Landing/Initialization Screen */
          <div className="glass-panel p-10 rounded-2xl border border-white/5 text-center space-y-6 max-w-xl mx-auto shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto text-2xl">
              🤖
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black tracking-tight text-white">AI Technical Mock Interview</h2>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                Enter an automated corporate assessment simulation. The diagnostic layer will present core technical conceptual prompts and process performance habits dynamically.
              </p>
            </div>
            <button
              onClick={() => setIsSessionActive(true)}
              style={{ background: "linear-gradient(135deg, #0fffff 0%, #3b82f6 100%)" }}
              className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest text-[#03060a] transition-all hover:opacity-95 active:scale-[0.99] cursor-pointer border-none outline-none"
            >
              Initialize Interview Stream
            </button>
          </div>
        ) : (
          /* Active Interactive Evaluation Module UI */
          <div className="space-y-6">
            <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 space-y-6 relative overflow-hidden">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase bg-indigo-950/40 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                  QUESTION NODE 0{currentPrompt + 1}
                </span>
                <span className="text-xs font-mono text-red-400 flex items-center gap-1.5 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span> REC LIVE
                </span>
              </div>
              
              <p className="text-lg md:text-xl font-medium leading-relaxed text-neutral-100">
                "{mockQuestions[currentPrompt]}"
              </p>
            </div>

            {/* Simulated Recording Control Visualizer Panel */}
            <div className="bg-black/40 border border-neutral-900 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1 items-center h-4">
                  <span className="w-1 h-3 bg-indigo-400 rounded-full animate-bounce"></span>
                  <span className="w-1 h-4 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
                  <span className="w-1 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                  <span className="w-1 h-4 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></span>
                </div>
                <span className="text-xs font-mono text-neutral-500">Processing input calibration...</span>
              </div>

              <div className="flex gap-3 w-full sm:w-auto">
                {currentPrompt < mockQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentPrompt(currentPrompt + 1)}
                    className="w-full sm:w-auto px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition text-center cursor-pointer text-white"
                  >
                    Next Prompt →
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsSessionActive(false);
                      setCurrentPrompt(0);
                    }}
                    className="w-full sm:w-auto px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-[#03060a] text-center cursor-pointer border-none outline-none"
                    style={{ background: "linear-gradient(135deg, #0fffff 0%, #3b82f6 100%)" }}
                  >
                    Complete Simulation
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 🛡️ BADGE ENVIRONMENT FOOTER */}
      <footer className="border-t border-white/5 bg-black/20 py-6 text-center text-[10px] font-mono text-neutral-600 tracking-wider">
        PREPSUITE AI • PLATFORM BEHAVIORAL INTERACTION SPACES
      </footer>

    </div>
  );
}

export default MockBooth;