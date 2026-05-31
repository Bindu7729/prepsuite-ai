import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Landing() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const canvasRef = useRef(null);

  // 🎨 High-Tech Animated Matrix Engine for the Demo Player Modal
  useEffect(() => {
    if (!isVideoOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    canvas.width = 800;
    canvas.height = 450;

    const nodes = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 2 + 1,
    }));

    const render = () => {
      ctx.fillStyle = "#03060a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(15, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(15, 255, 255, 0.6)";
        ctx.fill();
      });

      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist / 120)})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.font = "11px monospace";
      ctx.fillStyle = "rgba(15, 255, 255, 0.8)";
      ctx.fillText(`📡 ENG_CORE_STATUS: ACTIVE_EMULATION_RUN`, 40, 60);
      ctx.fillStyle = "rgba(59, 130, 246, 0.8)";
      ctx.fillText(`⚡ INTERACTION SANDBOX MODEL: ONLINE`, 40, 85);
      
      ctx.fillStyle = "rgba(161, 161, 170, 0.4)";
      ctx.fillText(`> compiling sandbox compilation metrics... 100%`, 40, 130);
      ctx.fillText(`> synchronizing adaptive aptitude matrix database... OK`, 40, 155);
      ctx.fillText(`> system verification sequence running on port 5000...`, 40, 180);

      const time = Date.now() * 0.002;
      const progressWidth = ((time % 10) / 10) * (canvas.width - 80);
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(40, 380, canvas.width - 80, 6);
      ctx.fillStyle = "#0fffff";
      ctx.fillRect(40, 380, progressWidth, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVideoOpen]);

  return (
    <div className="bg-[#03060a] text-white min-h-screen relative font-sans antialiased overflow-x-hidden">
      
      <style>{`
        :root {
          --bg-color: #03060a;
          --text-white: #ffffff;
          --text-grey: #a1a1aa;
          --primary-cyan: #0fffff;
          --primary-blue: #3b82f6;
          --primary-purple: #9333ea;
          --primary-green-glow: #00ffbf;
          --glass-bg: rgba(255, 255, 255, 0.05);
          --glass-border: rgba(255, 255, 255, 0.08);
          --glass-blur: blur(10px);
        }

        .glass-panel {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: var(--glass-blur);
          border-radius: 12px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .glass-panel:hover { border-color: rgba(255, 255, 255, 0.15); }

        .btn-gradient {
          background: linear-gradient(135deg, var(--primary-cyan) 0%, var(--primary-blue) 100%);
          color: var(--bg-color);
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 16px;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          display: inline-block;
        }
        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 20px 2px rgba(15, 255, 255, 0.5);
        }

        .btn-outline {
          color: var(--text-white);
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          border: 1px solid transparent;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .btn-gradient-small {
          background: linear-gradient(135deg, var(--primary-cyan) 0%, var(--primary-blue) 100%);
          color: var(--bg-color);
          font-weight: 700;
          padding: 8px 20px;
          border-radius: 6px;
          font-size: 14px;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .btn-gradient-small:hover { opacity: 0.95; transform: scale(1.02); }

        .page-background {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%; z-index: -1; overflow: hidden;
          background-color: var(--bg-color);
          background-image: 
            radial-gradient(ellipse at 50% -20%, rgba(15, 255, 255, 0.1), transparent 70%),
            radial-gradient(ellipse at 80% 30%, rgba(59, 130, 246, 0.1), transparent 50%),
            radial-gradient(ellipse at 20% 70%, rgba(147, 51, 234, 0.1), transparent 50%);
        }
        .page-background::after {
          content: ''; position: absolute; top: -200px; left: -100px; width: 120%; height: 1400px;
          background-image: url("data:image/svg+xml,%3Csvg width='1600' height='1200' viewBox='0 0 1600 1200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.5 1196C513.5 1196 669.5 700 1191.5 700C1713.5 700 1787.5 1060 1795.5 1196' stroke='%230FFFFF' stroke-opacity='0.25' stroke-width='2' stroke-dasharray='12 12'/%3E%3Cpath d='M-10 1020C484 1020 638 610 1147 610C1656 610 1729 910 1737 1020' stroke='%233B82F6' stroke-opacity='0.2' stroke-width='1.5' stroke-dasharray='8 8'/%3E%3Cpath d='M100 850C570 850 720 500 1210 500C1700 500 1770 750 1780 850' stroke='%230FFFFF' stroke-opacity='0.15' stroke-width='1' stroke-dasharray='4 4'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-size: cover; opacity: 0.8; filter: blur(2px);
        }

        .logo-chip {
          width: 32px; height: 32px; border: 2px solid var(--primary-cyan); border-radius: 6px; position: relative; background-color: var(--bg-color); box-shadow: 0 0 10px 1px rgba(15, 255, 255, 0.4);
        }
        .logo-chip::after {
          content: ''; position: absolute; top: 6px; left: 6px; width: 16px; height: 16px; background-color: var(--primary-cyan); border-radius: 2px;
        }

        .hero-tag {
          display: inline-block; border: 1px solid rgba(0, 255, 191, 0.3); border-radius: 100px; padding: 6px 16px; background-color: rgba(0, 255, 191, 0.05); margin-bottom: 25px; position: relative;
        }
        .hero-tag::after {
          content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: calc(100% + 15px); height: calc(100% + 15px); border-radius: 100px; box-shadow: 0 0 25px 2px rgba(0, 255, 191, 0.15); z-index: -1;
        }

        .play-icon {
          display: inline-block; width: 10px; height: 12px; background-color: var(--primary-blue); clip-path: polygon(100% 50%, 0 0, 0 100%); margin-right: 12px; margin-bottom: -1px; vertical-align: middle;
        }

        .stat-value {
          font-size: 46px; font-weight: 800; margin-bottom: 10px; letter-spacing: -1.5px;
          background: linear-gradient(135deg, var(--text-white) 30%, var(--primary-blue) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-fill-color: transparent;
        }

        .svg-icon { fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .ds-icon { stroke: var(--primary-cyan); }
        .algo-icon { stroke: var(--primary-blue); }
        .sd-icon { stroke: var(--primary-purple); }
        .apti-icon { stroke: var(--primary-green-glow); }
      `}</style>

      <div className="page-background" />

      {/* 🌐 HEADER NAVBAR NAVIGATION */}
      <header className="pt-[30px] mb-20">
        <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
          <div className="header-logo-container glass-panel px-5 py-2 flex items-center gap-3">
            <div className="logo-chip" />
            <div className="font-extrabold text-[20px] tracking-[0.5px]">PREPSUITE <span className="text-[#3b82f6]">AI</span></div>
          </div>
          <div className="header-nav glass-panel px-[30px] py-2 flex items-center gap-[25px]">
            <ul className="flex gap-[25px]">
              <li><Link to="/features" className="text-[15px] font-medium text-white hover:text-[#0fffff] transition-colors">Features</Link></li>
              <li><Link to="/about" className="text-[15px] font-medium text-white hover:text-[#0fffff] transition-colors">About</Link></li>
            </ul>
            <div className="w-[1px] h-5 bg-white/15" />
            <Link to="/login" className="font-semibold text-white mr-2.5 text-[15px] hover:text-[#0fffff] transition-colors">LOGIN</Link>
            <Link to="/register" className="btn-gradient-small text-center flex items-center justify-center">REGISTER</Link>
          </div>
        </div>
      </header>

      {/* 🚀 MAIN HERO TITLE AREA */}
      <section className="max-w-[1400px] mx-auto px-10 text-center mb-[120px]">
        <div className="hero-tag">
          <span className="text-[13px] font-bold tracking-[1px] text-[#00ffbf] uppercase">NEXT-GEN PLACEMENT SUITE</span>
        </div>
        
        <h1 className="text-[40px] md:text-[66px] font-extrabold leading-[1.1] mb-6 tracking-[-2px] text-white">
          Crack Your Next Interview<br />Just Got{" "}
          <span style={{
            background: "linear-gradient(135deg, #0fffff 0%, #3b82f6 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block"
          }}>
            Smarter.
          </span>
        </h1>

        <p className="max-w-[800px] mx-auto text-[#a1a1aa] text-[18px] leading-[1.7] mb-[50px]">
          An immersive corporate-grade ecosystem packed with LeetCode-style sandboxes, adaptive aptitude paths, and automated diagnostic analytics feedback loop structures.
        </p>
        <div className="flex justify-center gap-5 items-center">
          <Link to="/register" className="btn-gradient">Get Started for Free</Link>
          <button onClick={() => setIsVideoOpen(true)} className="btn-outline glass-panel flex items-center justify-center cursor-pointer">
            <span className="play-icon" />
            Watch Demo Video
          </button>
        </div>
      </section>

      {/* 📈 SINGLE ROW STATS METRIC GRID */}
      <section className="max-w-[1400px] mx-auto px-10 mb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          <div className="stats-card glass-panel p-[30px] px-10 text-left">
            <div className="stat-value">10K+</div>
            <div className="text-[14px] font-bold tracking-[1px] text-[#a1a1aa] uppercase">TESTS EVALUATED</div>
          </div>
          <div className="stats-card glass-panel p-[30px] px-10 text-left">
            <div className="stat-value">50K+</div>
            <div className="text-[14px] font-bold tracking-[1px] text-[#a1a1aa] uppercase">CODE SUBMISSIONS</div>
          </div>
          <div className="stats-card glass-panel p-[30px] px-10 text-left">
            <div className="stat-value">99.4%</div>
            <div className="text-[14px] font-bold tracking-[1px] text-[#a1a1aa] uppercase">SERVER UPTIME</div>
          </div>
        </div>
      </section>

      {/* 🛠️ STATIC SKILL PATHS AND TESTIMONIAL VIEW GRIDS */}
      <section className="max-w-[1400px] mx-auto px-10 pb-[80px]">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[50px]">
          
          <div className="skill-paths">
            <h3 className="text-[20px] font-bold text-white mb-6">Comprehensive Skill Paths</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-5">
              <div className="skill-item flex items-start gap-[15px]">
                <div className="skill-icon-container ds w-[38px] h-[38px] rounded-8 flex justify-center items-center flex-shrink-0 mt-0.5">
                  <svg className="skill-icon ds-icon svg-icon w-5 h-5" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-white mb-1">Data Structures</span>
                  <p className="text-[13px] text-[#a1a1aa] leading-[1.4]">Master arrays, lists, trees, and graphs for algorithmic efficiency.</p>
                </div>
              </div>

              <div className="skill-item flex items-start gap-[15px]">
                <div className="skill-icon-container algo w-[38px] h-[38px] rounded-8 flex justify-center items-center flex-shrink-0 mt-0.5">
                  <svg className="skill-icon algo-icon svg-icon w-5 h-5" viewBox="0 0 24 24"><path d="M12 2v10"></path><path d="M18.4 4.6 14.5 12"></path><path d="M22 12h-8"></path><path d="M18.4 19.4 14.5 12"></path><path d="M12 22V12"></path><path d="M5.6 19.4 9.5 12"></path><path d="M2 12h8"></path><path d="M5.6 4.6 9.5 12"></path></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-white mb-1">Algorithms</span>
                  <p className="text-[13px] text-[#a1a1aa] leading-[1.4]">From sorting to dynamic programming, optimize your problem-solving flow.</p>
                </div>
              </div>

              <div className="skill-item flex items-start gap-[15px]">
                <div className="skill-icon-container sd w-[38px] h-[38px] rounded-8 flex justify-center items-center flex-shrink-0 mt-0.5">
                  <svg className="skill-icon sd-icon svg-icon w-5 h-5" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-white mb-1">System Design</span>
                  <p className="text-[13px] text-[#a1a1aa] leading-[1.4]">Learn scalable architecture, database sharding, and caching strategies.</p>
                </div>
              </div>

              <div className="skill-item flex items-start gap-[15px]">
                <div className="skill-icon-container apti w-[38px] h-[38px] rounded-8 flex justify-center items-center flex-shrink-0 mt-0.5">
                  <svg className="skill-icon apti-icon svg-icon w-5 h-5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-white mb-1">Aptitude</span>
                  <p className="text-[13px] text-[#a1a1aa] leading-[1.4]">Practice numerical reasoning, logical flow, and verbal ability tests.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials xl:col-span-2">
            <h3 className="text-[20px] font-bold text-white mb-6 text-center">What Our Users Say</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-[30px]">
              <div className="testimonial-card glass-panel p-6 flex items-start gap-5 flex-1 max-w-[400px]">
                <img src="https://i.pravatar.cc/150?u=jane" alt="Jane" className="w-[50px] h-[50px] rounded-full border border-white/10 object-cover flex-shrink-0" />
                <div className="flex flex-col gap-[15px]">
                  <p className="text-[14px] text-[#a1a1aa] leading-[1.6] italic">"The structured curriculum and diagnostic feedback loops helped me identify and bridge critical gaps in my algorithmic knowledge."</p>
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-[14px] font-semibold text-white">Jane Doe</span>
                    <span className="text-[13px] text-[#a1a1aa]">Software Engineer @ Google</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card glass-panel p-6 flex items-start gap-5 flex-1 max-w-[400px]">
                <img src="https://i.pravatar.cc/150?u=mike" alt="Mike" className="w-[50px] h-[50px] rounded-full border border-white/10 object-cover flex-shrink-0" />
                <div className="flex flex-col gap-[15px]">
                  <p className="text-[14px] text-[#a1a1aa] leading-[1.6] italic">"PrepSuite's immersive sandbox environment allowed me to practice large-scale system design scenarios I never encountered before."</p>
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-[14px] font-semibold text-white">Mike Smith</span>
                    <span className="text-[13px] text-[#a1a1aa]">SDE II @ Amazon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 🎬 LIVE SIMULATOR MODAL POPUP ================= */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4">
          <div className="max-w-4xl w-full flex justify-between items-center mb-3">
            <span className="text-xs font-mono text-neutral-400">🎬 Platform Walkthrough Demonstration</span>
            <button onClick={() => setIsVideoOpen(false)} className="text-neutral-400 hover:text-white transition text-xs font-mono bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-xl cursor-pointer">
              ✕ Close Player
            </button>
          </div>

          <div className="max-w-4xl w-full bg-[#03060a] aspect-video rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl relative flex items-center justify-center">
            <canvas ref={canvasRef} className="w-full h-full block" />
            <div className="absolute top-6 left-6 font-mono text-[11px] text-[#0fffff] bg-black/80 border border-neutral-800 px-3 py-1.5 rounded-lg pointer-events-none space-y-1 shadow-lg">
              <div>🔄 MODEL_STREAM: INTEL_ACTIVE_LOOP</div>
              <div>⚡ STATUS_MATRIX: EMULATION_ONLINE</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Landing;