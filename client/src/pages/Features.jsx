import React from "react";
import { Link } from "react-router-dom";

function Features() {
  return (
    <div className="bg-[#03060a] text-white min-h-screen relative font-sans antialiased overflow-x-hidden flex flex-col justify-between selection:bg-teal-500/30">
      
      {/* 🎨 Pure CSS Glowing Topography Wave Background Setup */}
      <style>{`
        :root {
          --bg-color: #03060a;
          --glass-bg: rgba(255, 255, 255, 0.03);
          --glass-border: rgba(255, 255, 255, 0.06);
          --glass-blur: blur(12px);
          --primary-cyan: #0fffff;
          --primary-blue: #3b82f6;
          --primary-purple: #9333ea;
          --primary-green-glow: #00ffbf;
        }

        .glass-panel {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: var(--glass-blur);
          border-radius: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .page-background {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%; z-index: -1; overflow: hidden;
          background-color: var(--bg-color);
          background-image: 
            radial-gradient(ellipse at 50% -10%, rgba(15, 255, 255, 0.08), transparent 60%),
            radial-gradient(ellipse at 80% 40%, rgba(59, 130, 246, 0.05), transparent 50%);
        }
        .page-background::after {
          content: ''; position: absolute; top: -100px; left: -100px; width: 120%; height: 1200px;
          background-image: url("data:image/svg+xml,%3Csvg width='1600' height='1200' viewBox='0 0 1600 1200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.5 1196C513.5 1196 669.5 700 1191.5 700C1713.5 700 1787.5 1060 1795.5 1196' stroke='%230FFFFF' stroke-opacity='0.15' stroke-width='2' stroke-dasharray='12 12'/%3E%3Cpath d='M-10 1020C484 1020 638 610 1147 610C1656 610 1729 910 1737 1020' stroke='%233B82F6' stroke-opacity='0.12' stroke-width='1.5' stroke-dasharray='8 8'/%3E%3Cpath d='M100 850C570 850 720 500 1210 500C1700 500 1770 750 1780 850' stroke='%230FFFFF' stroke-opacity='0.08' stroke-width='1' stroke-dasharray='4 4'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-size: cover; opacity: 0.85; filter: blur(1px);
        }

        .feature-icon-box {
          width: 48px; height: 48px; border-radius: 12px; display: flex; justify-content: center; items-center;
          background: rgba(255, 255, 255, 0.01); border: 1px solid rgba(255, 255, 255, 0.05);
          margin-bottom: 24px;
        }

        .card-monaco:hover { border-color: rgba(15, 255, 255, 0.25); box-shadow: 0 10px 30px -10px rgba(15, 255, 255, 0.1); transform: translateY(-4px); }
        .card-aptitude:hover { border-color: rgba(59, 130, 246, 0.25); box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.1); transform: translateY(-4px); }
        .card-analytics:hover { border-color: rgba(147, 51, 234, 0.25); box-shadow: 0 10px 30px -10px rgba(147, 51, 234, 0.1); transform: translateY(-4px); }
        .card-feedback:hover { border-color: rgba(0, 255, 191, 0.25); box-shadow: 0 10px 30px -10px rgba(0, 255, 191, 0.1); transform: translateY(-4px); }
        .card-telemetry:hover { border-color: rgba(15, 255, 255, 0.2); box-shadow: 0 15px 35px -15px rgba(15, 255, 255, 0.15); transform: translateY(-2px); }

        .btn-gradient-small {
          background: linear-gradient(135deg, var(--primary-cyan) 0%, var(--primary-blue) 100%);
          color: #03060a; font-weight: 700; padding: 10px 22px; border-radius: 8px; font-size: 13px; letter-spacing: 0.5px;
          transition: all 0.2s ease; display: inline-block;
        }
        .btn-gradient-small:hover { opacity: 0.95; transform: scale(1.02); }
      `}</style>

      <div className="page-background" />

      {/* 🌐 HEADER NAV-BAR */}
      <header className="pt-[35px] mb-16">
        <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
          <Link to="/" className="glass-panel px-5 py-2.5 flex items-center gap-2.5 hover:border-[#0fffff]/20 transition-all font-semibold text-[13px] tracking-[0.5px]">
            <svg style={{ width: "12px", height: "12px", fill: "#ffffff" }} viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32L109.2 224 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
            </svg>
            BACK TO HOME
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/login" className="font-semibold text-white text-[14px] hover:text-[#0fffff] transition-colors tracking-wide">LOGIN</Link>
            <Link to="/register" className="btn-gradient-small">GET STARTED</Link>
          </div>
        </div>
      </header>

      {/* 🚀 ELITE CORE ARCHITECTURE HEADLINE TITLES */}
      <main className="max-w-[1400px] mx-auto px-10 w-full flex-1 mb-16">
        <div className="mb-14 space-y-4">
          <div className="inline-block px-3.5 py-1.5 bg-[#00ffca]/5 border border-[#00ffca]/20 text-[#00ffca] rounded-full text-[11px] font-bold tracking-widest uppercase">
            SYSTEM ENGINE
          </div>
          {/* 🛠️ FIXED: Removed trailing dot right here */}
          <h1 className="text-4xl md:text-[52px] font-extrabold tracking-tight leading-none text-white">
            Platform Capabilities
          </h1>
          <p className="text-[#a1aab5] text-[15px] max-w-2xl leading-relaxed font-normal">
            An enterprise-level technical breakdown of the architectural frameworks, isolated compilation pipelines, and metric analytics handling real-time candidate evaluations.
          </p>
        </div>

        {/* 🎴 GRID SYSTEMS HUB */}
        <div className="space-y-[30px]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            
            {/* Card 1: Monaco IDE */}
            <div className="glass-panel card-monaco p-8 md:p-10 flex flex-col items-start">
              <div className="feature-icon-box">
                <svg className="w-6 h-6" style={{ fill: "#0fffff" }} viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline style={{ fill: "none", stroke: "#0fffff", strokeWidth: "2" }} points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line style={{ fill: "none", stroke: "#0fffff", strokeWidth: "2" }} x1="12" y1="12" x2="12" y2="22"></line></svg>
              </div>
              <h3 className="text-[21px] font-bold mb-3 tracking-tight text-white">Monaco Code Sandbox Workspace</h3>
              <p className="text-[#a1aab5] text-[13.5px] leading-relaxed font-normal">
                An isolated, low-latency deployment space featuring full-scale algorithmic code compilation engines. Integrates multiple language runtimes, precise script validation stacks, and real-time execution feedback loops designed to replicate corporate-level programming evaluations under dynamic conditions.
              </p>
            </div>

            {/* Card 2: Aptitude Arena */}
            <div className="glass-panel card-aptitude p-8 md:p-10 flex flex-col items-start">
              <div className="feature-icon-box">
                <svg className="w-6 h-6" style={{ fill: "#3b82f6" }} viewBox="0 0 24 24"><circle style={{ fill: "none", stroke: "#3b82f6", strokeWidth: "2" }} cx="12" cy="12" r="10"></circle><polyline style={{ fill: "none", stroke: "#3b82f6", strokeWidth: "2" }} points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="text-[21px] font-bold mb-3 tracking-tight text-white">Adaptive Aptitude Assessment Engine</h3>
              <p className="text-[#a1aab5] text-[13.5px] leading-relaxed font-normal">
                A highly secure testing matrix distributing randomized, rigorous quantitative and analytical logic clusters. Synchronized continuously with algorithmic background timers and custom countdown thresholds to capture response velocity and problem-solving parameters accurately.
              </p>
            </div>

            {/* Card 3: Diagnostic Analytics */}
            <div className="glass-panel card-analytics p-8 md:p-10 flex flex-col items-start">
              <div className="feature-icon-box">
                <svg className="w-6 h-6" viewBox="0 0 24 24"><rect style={{ fill: "#9333ea" }} x="2" y="10" width="4" height="12" rx="1"/><rect style={{ fill: "#3b82f6" }} x="7.33" y="14" width="4" height="8" rx="1"/><rect style={{ fill: "#a78bfa" }} x="12.67" y="17" width="4" height="5" rx="1"/><rect style={{ fill: "#ef4444" }} x="18" y="2" width="4" height="20" rx="1"/></svg>
              </div>
              <h3 className="text-[21px] font-bold mb-3 tracking-tight text-white">Diagnostic Velocity Analytics Dashboard</h3>
              <p className="text-[#a1aab5] text-[13.5px] leading-relaxed font-normal">
                Automated telemetry tracing modules evaluating execution timeframes and runtime performance curves. Aggregates multi-dimensional code submissions to calculate readiness indicators, historical accuracy vectors, and pinpoint hidden problem-solving bottlenecks.
              </p>
            </div>

            {/* Card 4: Feedback Layer */}
            <div className="glass-panel card-feedback p-8 md:p-10 flex flex-col items-start">
              <div className="feature-icon-box">
                <svg className="w-6 h-6" style={{ fill: "#00ffbf" }} viewBox="0 0 24 24"><path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zM12 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-4 9.5c0-1.67 2.67-2.5 4-2.5s4 .83 4 2.5v.5H8v-.5z"/></svg>
              </div>
              <h3 className="text-[21px] font-bold mb-3 tracking-tight text-white">Automated AI Diagnostic Evaluation Layer</h3>
              <p className="text-[#a1aab5] text-[13.5px] leading-relaxed font-normal">
                An advanced, server-side parsing engine that tracks code behaviors and execution patterns instantly. Formulates granular, contextual logic reviews and syntax recommendations to empower candidates to correct optimization deficiencies securely.
              </p>
            </div>

          </div>

          {/* Full Width Telemetry Card */}
          <div className="glass-panel card-telemetry p-8 md:p-10 w-full flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="feature-icon-box sm:mb-0 flex-shrink-0">
              <svg className="w-7 h-7" style={{ fill: "none", stroke: "#0fffff", strokeWidth: "1.5" }} viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M12 16V8"/><path d="M8 14V10"/><path d="M16 13V11"/></svg>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-[19px] font-bold text-white tracking-tight">Real-Time Integrated Telemetry Pipeline</h3>
              <p className="text-[#a1aab5] text-[13px] leading-relaxed font-normal">
                Continuous, centralized data pipeline running concurrently across all platform sandboxes. Aggregates deep execution logs from active user spaces to construct high-fidelity readiness indicators and provide comprehensive system orchestration matrices.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* 🛡️ FOOTER METRICS BADGE */}
      <footer className="border-t border-white/5 bg-black/30 py-6 text-center text-[10px] font-mono text-neutral-600 tracking-wider">
        PREPSUITE AI • CORE PLACEMENT INFRASTRUCTURE ARCHITECTURE
      </footer>

    </div>
  );
}

export default Features;