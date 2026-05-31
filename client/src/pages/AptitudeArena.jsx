import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Pre-loaded premium engineering mock data array
const APTITUDE_DATABASE = [
  {
    id: 1,
    question: "A data pipeline processes 1200 packets every 40 seconds. If the data volume scales up by 25%, how many packets will the pipeline process in 2 minutes at the new scaled rate?",
    options: ["3,600 packets", "4,500 packets", "5,400 packets", "4,200 packets"],
    correctAnswer: 1 // Index 1: 4,500 packets
  },
  {
    id: 2,
    question: "An automated compiler script minimizes an array tracking loop. Loop A executes in O(N) time while Loop B executes in O(log N). If N = 1024, what is the exact execution step ratio of Loop A to Loop B?",
    options: ["512 : 1", "256 : 1", "102.4 : 1", "128 : 1"],
    correctAnswer: 2 // Index 2: 102.4 : 1
  },
  {
    id: 3,
    question: "A cloud cluster distributes an assessment workload across 3 server groups. Group 1 handles 40% of the nodes, Group 2 handles 35%, and Group 3 processes the remaining 150 nodes. What is the total size of the cluster grid?",
    options: ["500 nodes", "600 nodes", "750 nodes", "450 nodes"],
    correctAnswer: 0 // Index 0: 500 nodes
  }
];

function AptitudeArena() {
  // Assessment Engine States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(45); // 45 seconds per question challenge
  const [isExamFinished, setIsExamFinished] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = APTITUDE_DATABASE[currentQuestionIndex];

  // ⏱️ High-Fidelity Countdown Core Loop Logic
  useEffect(() => {
    if (isExamFinished) return;

    if (timeLeft === 0) {
      handleNextQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isExamFinished]);

  // Handle choice updates
  const handleSelectOption = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex
    });
  };

  // Safe navigation tracking loops
  const handleNextQuestion = () => {
    if (currentQuestionIndex < APTITUDE_DATABASE.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(45); // Reset clock flag for the next node
    } else {
      calculateFinalScore();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setTimeLeft(45);
    }
  };

  // Evaluate accuracy arrays
  const calculateFinalScore = () => {
    let finalScore = 0;
    APTITUDE_DATABASE.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setIsExamFinished(true);
  };

  return (
    <div className="bg-[#03060a] text-white min-h-screen relative font-sans antialiased overflow-x-hidden flex flex-col justify-between selection:bg-teal-500/30">
      
      {/* CSS Glassmorphic Dashboard Framework Variables */}
      <style>{`
        :root {
          --glass-bg: rgba(255, 255, 255, 0.03);
          --glass-border: rgba(255, 255, 255, 0.06);
          --glass-blur: blur(12px);
          --primary-cyan: #0fffff;
          --primary-blue: #3b82f6;
        }
        .glass-panel {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: var(--glass-blur);
        }
        .page-background {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%; z-index: -1;
          background-image: radial-gradient(circle at 50% 15%, rgba(59, 130, 246, 0.06), transparent 50%);
        }
        .option-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <div className="page-background" />

      {/* 🌐 ARENA HUD HEADER HEADER */}
      <header className="pt-8 mb-12">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <Link to="/dashboard" className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2 hover:border-[#0fffff]/25 transition-all text-xs font-bold tracking-wider text-neutral-400 hover:text-white">
            ← EXIT ARENA
          </Link>
          <div className="glass-panel px-4 py-2 rounded-xl text-xs font-mono border border-yellow-500/20 text-yellow-400 tracking-widest">
            🛑 MODE: SECURE_EXAM_ENVIRONMENT
          </div>
        </div>
      </header>

      {/* 🚀 MAIN ARENA CONTROLLER HUD */}
      <main className="max-w-[900px] mx-auto px-6 flex-1 w-full pb-16">
        {!isExamFinished ? (
          <div className="space-y-8">
            
            {/* Upper Telemetry Row */}
            <div className="flex justify-between items-center bg-black/30 p-4 rounded-2xl border border-white/5">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-neutral-500 block">EVALUATION METRIC</span>
                <span className="text-sm font-bold text-neutral-200">
                  Question {currentQuestionIndex + 1} of {APTITUDE_DATABASE.length}
                </span>
              </div>
              
              {/* Ticking Clock Wrapper */}
              <div className={`px-4 py-2 rounded-xl font-mono text-sm font-bold border ${timeLeft <= 10 ? 'bg-red-950/20 border-red-500/30 text-red-400 animate-pulse' : 'bg-neutral-900/40 border-neutral-800 text-teal-400'}`}>
                ⏱️ 00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
              </div>
            </div>

            {/* Core Question Content Panel */}
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6">
              <span className="text-[10px] font-black tracking-widest text-[#0fffff] uppercase bg-[#0fffff]/5 border border-[#0fffff]/20 px-2.5 py-1 rounded-full">
                QUANTITATIVE_LOGIC_BLOCK
              </span>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-neutral-100">
                {currentQuestion.question}
              </p>
            </div>

            {/* Options Interactive Stack Grid */}
            <div className="grid grid-cols-1 gap-4">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`option-card w-full text-left p-5 rounded-xl flex items-center justify-between font-medium transition-all ${
                      isSelected 
                        ? 'border-[#0fffff]/40 bg-gradient-to-r from-[#0fffff]/5 to-[#3b82f6]/5 text-[#0fffff] shadow-lg shadow-[#0fffff]/5' 
                        : 'hover:border-white/10 hover:bg-white/5 text-neutral-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center border ${isSelected ? 'border-[#0fffff] bg-[#0fffff]/10 text-[#0fffff]' : 'border-neutral-800 bg-black/40 text-neutral-500'}`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-[15px]">{option}</span>
                    </div>
                    {isSelected && <span className="text-xs font-mono font-bold text-[#0fffff]">SELECTED ✓</span>}
                  </button>
                );
              })}
            </div>

            {/* Footer Navigation Switch Controls */}
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${currentQuestionIndex === 0 ? 'border-neutral-900 text-neutral-700 cursor-not-allowed' : 'border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900'}`}
              >
                ← Previous
              </button>
              
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-[#03060a] transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #0fffff 0%, #3b82f6 100%)" }}
              >
                {currentQuestionIndex === APTITUDE_DATABASE.length - 1 ? "Submit Assessment" : "Next Challenge →"}
              </button>
            </div>

          </div>
        ) : (
          /* 🏆 COMPREHENSIVE PERFORMANCE REVIEW PORTAL OUTCOME */
          <div className="glass-panel p-10 rounded-2xl text-center space-y-8 max-w-[600px] mx-auto border border-white/5 shadow-2xl shadow-black">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto text-xl text-teal-400">
                ✓
              </div>
              <h2 className="text-2xl font-black tracking-tight text-white pt-2">Assessment Concluded</h2>
              <p className="text-xs text-neutral-500 font-mono">COMPILATION_LOG: MATRIX_PROCESSING_COMPLETED</p>
            </div>

            <div className="py-6 bg-black/40 rounded-xl border border-neutral-900 grid grid-cols-2 gap-4 max-w-sm mx-auto divide-x divide-neutral-900">
              <div>
                <p className="text-3xl font-black font-mono text-[#0fffff]">{score} / {APTITUDE_DATABASE.length}</p>
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mt-1">Correct Choices</p>
              </div>
              <div>
                <p className="text-3xl font-black font-mono text-white">{Math.round((score / APTITUDE_DATABASE.length) * 100)}%</p>
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mt-1">Accuracy Rating</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button 
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setSelectedAnswers({});
                  setTimeLeft(45);
                  setIsExamFinished(false);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-300 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition"
              >
                🔄 Retry Test
              </button>
              <Link 
                to="/dashboard"
                className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-[#03060a] text-center flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0fffff 0%, #3b82f6 100%)" }}
              >
                RETURN TO DASHBOARD
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* 🛡️ APP LEGACY BADGE FOOTER */}
      <footer className="border-t border-white/5 bg-black/20 py-6 text-center text-[10px] font-mono text-neutral-600 tracking-wider">
        PREPSUITE AI • SECURE ENCRYPTED ASSESSMENT STREAM
      </footer>

    </div>
  );
}

export default AptitudeArena;