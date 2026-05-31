import React, { useState } from "react";
import { Link } from "react-router-dom";
import Editor from "@monaco-editor/react";

function CodingSandbox() {
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("vs-dark");
  const [consoleTab, setConsoleTab] = useState("output"); // 'output' or 'testcases'
  const [terminalMessage, setTerminalMessage] = useState("// Click 'Run Code' to execute compile sequence...");

  // Default code boilerplates based on selected dropdown language
  const starterCode = {
    javascript: `function solve(arr) {\n  // Write your JavaScript code here\n  console.log("Processing array:", arr);\n  return true;\n}`,
    python: `def solve(arr):\n    # Write your Python code here\n    print(f"Processing array: {arr}")\n    return True`,
    java: `public class Solution {\n    public static boolean solve(int[] arr) {\n        // Write your Java code here\n        System.out.println("Processing array");\n        return true;\n    }\n}`
  };

  const [code, setCode] = useState(starterCode[language]);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    setCode(starterCode[lang]);
  };

  const handleRunCode = () => {
    setTerminalMessage(`[Running] executing ${language} script flags...\n\nCompilation Successful!\nOutput: Processing array: [2, 7, 11, 15]\nReturn Value: true\n\nExecution time: 14ms`);
  };

  return (
    <div className="bg-black text-white h-screen flex flex-col font-sans overflow-hidden">
      
      {/* 1. TOP INTERACTIVE NAVIGATION HEADER BAR */}
      <header className="bg-neutral-950 border-b border-neutral-800 px-6 h-14 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-6">
          <Link to="/dashboard" className="text-gray-400 hover:text-white transition flex items-center gap-2 text-sm font-medium">
            <span>←</span> Exit Workspace
          </Link>
          <div className="h-4 w-[1px] bg-neutral-800"></div>
          <h2 className="font-bold text-sm text-cyan-400 uppercase tracking-widest">Coding Arena Shell</h2>
        </div>

        {/* CONTROLS: LANGUAGE SELECTOR & ACTIONS */}
        <div className="flex items-center gap-4">
          <select 
            value={language}
            onChange={handleLanguageChange}
            className="bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-sm text-gray-200 font-medium outline-none focus:border-cyan-400 transition"
          >
            <option value="javascript">JavaScript (Node.js)</option>
            <option value="python">Python 3</option>
            <option value="java">Java (OpenJDK)</option>
          </select>

          <button 
            onClick={handleRunCode}
            className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-gray-300 px-4 py-1.5 rounded-lg text-sm font-semibold transition"
          >
            Run Code
          </button>
          <button 
            onClick={() => alert("Submit sequence trigger active! Results being sent to analytics summary module.")}
            className="bg-cyan-400 hover:bg-cyan-300 text-black px-4 py-1.5 rounded-lg text-sm font-bold transition shadow-lg shadow-cyan-400/10"
          >
            Submit Output
          </button>
        </div>
      </header>

      {/* 2. THE MAIN FULL SPLIT SCREEN PANEL VIEWPORTS */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT PANEL: LEETCODE PROBLEM DATA DESCRIPTION */}
        <div className="w-1/2 bg-neutral-950 p-6 overflow-y-auto h-full flex flex-col gap-6">
          <div>
            <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold px-2.5 py-1 rounded-full tracking-wider uppercase">
              Easy Challenge
            </span>
            <h1 className="text-2xl font-bold mt-3 tracking-tight text-gray-100">1. Two Sum Target Indices</h1>
            <p className="text-xs text-gray-500 mt-1">Target Match Algorithm • Amazon, Infosys, TCS Core Placement</p>
          </div>

          {/* PROBLEM DESCRIPTIONS */}
          <div className="text-sm text-gray-300 leading-relaxed space-y-4 font-normal border-t border-neutral-900 pt-4">
            <p>
              Given an array of integers <code className="bg-neutral-900 px-1.5 py-0.5 rounded text-cyan-400 font-mono">nums</code> and an integer <code className="bg-neutral-900 px-1.5 py-0.5 rounded text-cyan-400 font-mono">target</code>, return indices of the two numbers such that they add up to <code className="bg-neutral-900 px-1.5 py-0.5 rounded text-cyan-400 font-mono">target</code>.
            </p>
            <p>
              You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice. You can return the answer in any order.
            </p>
          </div>

          {/* EXAMPLE BLOCKS */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400">Example Input/Output Sets</h4>
            
            <div className="bg-neutral-900/40 border border-neutral-900 p-4 rounded-xl font-mono text-xs space-y-1">
              <p><span className="text-gray-500">Input:</span> nums = [2, 7, 11, 15], target = 9</p>
              <p><span className="text-gray-500">Output:</span> [0, 1]</p>
              <p><span className="text-gray-500">Explanation:</span> Because nums[0] + nums[1] == 9, we return [0, 1].</p>
            </div>
          </div>

          {/* CONSTRAINTS BLOCK */}
          <div className="border-t border-neutral-900 pt-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">Constraints & Boundary Rules</h4>
            <ul className="list-disc list-inside text-xs font-mono text-gray-400 space-y-1">
              <li>2 ≤ nums.length ≤ 10^4</li>
              <li>-10^9 ≤ nums[i] ≤ 10^9</li>
              <li>-10^9 ≤ target ≤ 10^9</li>
            </ul>
          </div>
        </div>

        {/* RIGHT PANEL: LIVE MONACO CODE EDITOR + LOWER INTEGRATED CONSOLE TERMINAL */}
        <div className="w-1/2 bg-neutral-900 flex flex-col h-full border-l border-neutral-800">
          
          {/* TOP MONACO VIEWPORT COMPONENT SURFACE */}
          <div className="flex-1 min-h-[60%] bg-neutral-950 pt-2">
            <Editor
              height="100%"
              language={language}
              theme={theme}
              value={code}
              onChange={(val) => setCode(val)}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollbar: { vertical: "visible", horizontal: "visible" },
                lineNumbers: "on",
                automaticLayout: true,
                padding: { top: 10 }
              }}
            />
          </div>

          {/* LOWER RUNTIME INTEGRATED DEBUGGER TERMINAL */}
          <div className="h-[40%] bg-neutral-950 border-t border-neutral-800 flex flex-col">
            
            {/* TERMINAL HEADER TABS */}
            <div className="bg-neutral-900 px-4 h-10 border-b border-neutral-800 flex items-center justify-between shrink-0">
              <div className="flex gap-4 text-xs font-bold tracking-wider uppercase">
                <button 
                  onClick={() => setConsoleTab("output")}
                  className={`h-10 px-2 transition border-b-2 ${consoleTab === "output" ? "border-cyan-400 text-cyan-400" : "border-transparent text-gray-400 hover:text-white"}`}
                >
                  Console Output
                </button>
                <button 
                  onClick={() => setConsoleTab("testcases")}
                  className={`h-10 px-2 transition border-b-2 ${consoleTab === "testcases" ? "border-cyan-400 text-cyan-400" : "border-transparent text-gray-400 hover:text-white"}`}
                >
                  Test Cases Run
                </button>
              </div>
            </div>

            {/* TERMINAL DISPLAY SCREEN VIEW */}
            <div className="flex-1 p-5 overflow-y-auto font-mono text-xs bg-neutral-950 text-neutral-400 leading-relaxed">
              {consoleTab === "output" ? (
                <pre className="whitespace-pre-wrap">{terminalMessage}</pre>
              ) : (
                <div className="space-y-3">
                  <p className="text-gray-500">// Static mock execution inputs configured for verification</p>
                  <p><span className="text-cyan-400">Case 1 Array:</span> [2, 7, 11, 15] | <span className="text-cyan-400">Target:</span> 9</p>
                  <p><span className="text-cyan-400">Case 2 Array:</span> [3, 2, 4] | <span className="text-cyan-400">Target:</span> 6</p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default CodingSandbox;