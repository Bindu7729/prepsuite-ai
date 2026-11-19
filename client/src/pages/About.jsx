import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-[#03060a] text-white min-h-screen relative font-sans antialiased overflow-x-hidden flex flex-col justify-between">
      
      <style>{`
        :root {
          --bg-color: #03060a;
          --glass-bg: rgba(255, 255, 255, 0.04);
          --glass-border: rgba(255, 255, 255, 0.07);
          --glass-blur: blur(12px);
        }
        .glass-panel {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: var(--glass-blur);
          border-radius: 16px;
        }
        .page-background {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%; z-index: -1;
          background-image: radial-gradient(circle at 50% 20%, rgba(147, 51, 234, 0.07), transparent 50%);
        }
      `}</style>

      <div className="page-background" />

      {/* 🌐 SUB NAVBAR */}
      <header className="pt-[30px] mb-16">
        <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
          <Link to="/" className="glass-panel px-5 py-2 flex items-center gap-3 hover:border-[#9333ea]/30 transition-all">
            <div className="font-extrabold text-[14px] tracking-[0.5px]">← BACK TO HOME</div>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login" className="font-semibold text-white text-[15px] hover:text-[#0fffff] transition-colors">LOGIN</Link>
            <Link to="/register" style={{ background: "linear-gradient(135deg, #0fffff 0%, #3b82f6 100%)", color: "#03060a" }} className="font-bold px-5 py-2 rounded-md text-[14px] transition-all hover:opacity-90">GET STARTED</Link>
          </div>
        </div>
      </header>

      {/* 🚀 MISSION STATEMENT PROFILE */}
      <main className="max-w-[800px] mx-auto px-10 flex-1 w-full pb-20 space-y-10">
        <div className="space-y-3">
          <span className="text-[11px] font-black tracking-[2px] text-[#9333ea] uppercase bg-[#9333ea]/5 border border-[#9333ea]/20 px-3 py-1 rounded-full">MISSION PORTFOLIO</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">The PrepSuite AI Vision.</h1>
        </div>

        <div className="glass-panel p-8 space-y-6 text-sm text-[#a1a1aa] leading-relaxed font-normal">
          <p>
            Traditional placement tools are strictly built around black-and-white static outputs—they analyze if an array problem resolves successfully, but completely disregard key candidate velocity, syntax hesitation patterns, and execution performance variables.
          </p>
          <p>
            <strong className="text-white font-semibold">PrepSuite AI</strong> was engineered to bridge this explicit engineering evaluation gap. By leveraging sandboxed script execution containers and automated real-time analytics dashboards, it provides students with a holistic, metrics-driven environment to refine their programming habits.
          </p>
          <p>
            Designed with scalable micro-architecture templates, our core goal is to deliver a reliable, enterprise-ready assessment ecosystem that ensures candidates meet and exceed modern tech recruitment benchmarks.
          </p>
        </div>
      </main>

      <footer className="border-t border-white/5 bg-black/40 py-6 text-center text-[10px] font-mono text-neutral-600 tracking-wider">
        PREPSUITE AI • PLATFORM ARCHITECTURAL PILLARS
      </footer>
    </div>
  );
}

export default About;
