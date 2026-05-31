import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminPanel() {
  const navigate = useNavigate();
  
  // Tab control: 'questions' or 'students'
  const [activeTab, setActiveTab] = useState("questions");

  // Mock initial database arrays for local operation mode
  const [questions, setQuestions] = useState([
    { id: 1, type: "Aptitude", topic: "Time & Work", level: "Easy", text: "A can do a work in 10 days and B in 15 days. How long will they take together?" },
    { id: 2, type: "Coding", topic: "Arrays", level: "Medium", text: "Given an array of integers, return indices of the two numbers such that they add up to a specific target." }
  ]);

  const [students, setStudents] = useState([
    { id: 101, name: "Rahul Sharma", email: "rahul@mbu.edu", score: "96%", tests: 4 },
    { id: 102, name: "Sneha Reddy", email: "sneha@vit.edu", score: "92%", tests: 3 },
    { id: 103, name: "Bindu", email: "bindu@mbu.edu", score: "88%", tests: 5 }
  ]);

  // Form State
  const [formData, setFormData] = useState({
    type: "Aptitude",
    topic: "",
    level: "Easy",
    text: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: ""
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      id: questions.length + 1,
      type: formData.type,
      topic: formData.topic || "General",
      level: formData.level,
      text: formData.text
    };
    
    setQuestions([newQuestion, ...questions]);
    alert("🚀 Problem successfully injected into local simulated database collection!");
    setFormData({ type: "Aptitude", topic: "", level: "Easy", text: "", optionA: "", optionB: "", optionC: "", optionD: "", correctAnswer: "" });
  };

  const handleDeleteStudent = (id) => {
    if (confirm("Are you sure you want to terminate this student profile cache record?")) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen font-sans">
      {/* Admin Navbar Header */}
      <header className="bg-black border-b border-neutral-900 px-8 h-16 flex justify-between items-center fixed top-0 w-full z-50">
        <div className="flex items-center gap-4">
          <span className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded font-black uppercase tracking-wider">
            Admin Access Mode
          </span>
          <div className="h-4 w-[1px] bg-neutral-800"></div>
          <h1 className="text-sm font-bold text-gray-200 uppercase tracking-wider">Placement Control Hub</h1>
        </div>
        <Link to="/dashboard" className="text-xs text-gray-400 hover:text-white transition font-medium">
          Exit Panel →
        </Link>
      </header>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Nav Switches */}
        <aside className="w-full md:w-56 shrink-0 space-y-2">
          <button 
            onClick={() => setActiveTab("questions")}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition border ${activeTab === "questions" ? "bg-teal-500/10 border-teal-500/30 text-teal-400" : "bg-neutral-900/40 border-transparent text-gray-400"}`}
          >
            📝 Question Manager Form
          </button>
          <button 
            onClick={() => setActiveTab("students")}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition border ${activeTab === "students" ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" : "bg-neutral-900/40 border-transparent text-gray-400"}`}
          >
            👥 Registered Student Registry
          </button>
        </aside>

        {/* Central Workspace Container */}
        <main className="flex-1 bg-neutral-900/30 border border-neutral-900 rounded-2xl p-6">
          
          {/* TAB A: QUESTION INJECTION SYSTEM */}
          {activeTab === "questions" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-base font-bold text-gray-200">Dynamic Problem Injector Engine</h2>
                <p className="text-xs text-gray-500">Insert questions instantly into active server collection routes without opening raw database tools.</p>
              </div>

              <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-medium">
                <div>
                  <label className="text-gray-400 block mb-1">Problem Category</label>
                  <select 
                    value={formData.type} 
                    onChange={e => setFormData({...formData, type: e.target.value})}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-gray-200 outline-none focus:border-teal-400"
                  >
                    <option value="Aptitude">Aptitude Logic MCQ</option>
                    <option value="Coding">Coding Sandbox Challenge</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-400 block mb-1">Topic Tag</label>
                  <input 
                    type="text" placeholder="e.g. Strings, Profit & Loss" required
                    value={formData.topic} onChange={e => setFormData({...formData, topic: e.target.value})}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-gray-200 outline-none focus:border-teal-400"
                  />
                </div>
                <div>
                  <label className="text-gray-400 block mb-1">Target Complexity</label>
                  <select 
                    value={formData.level} onChange={e => setFormData({...formData, level: e.target.value})}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-gray-200 outline-none focus:border-teal-400"
                  >
                    <option value="Easy">Easy Baseline</option>
                    <option value="Medium">Medium Benchmark</option>
                    <option value="Hard">Hard Extreme</option>
                  </select>
                </div>

                <div className="md:col-span-3">
                  <label className="text-gray-400 block mb-1">Question/Problem Context Statement</label>
                  <textarea 
                    rows="3" placeholder="Describe the structural algorithmic boundary constraints or math logic problem..." required
                    value={formData.text} onChange={e => setFormData({...formData, text: e.target.value})}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-gray-200 outline-none focus:border-teal-400 resize-none"
                  ></textarea>
                </div>

                {formData.type === "Aptitude" && (
                  <>
                    <div><label className="text-gray-500 block mb-1">Option A</label><input type="text" value={formData.optionA} onChange={e => setFormData({...formData, optionA: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-2.5 text-gray-300 outline-none" /></div>
                    <div><label className="text-gray-500 block mb-1">Option B</label><input type="text" value={formData.optionB} onChange={e => setFormData({...formData, optionB: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-2.5 text-gray-300 outline-none" /></div>
                    <div><label className="text-gray-500 block mb-1">Option C</label><input type="text" value={formData.optionC} onChange={e => setFormData({...formData, optionC: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-2.5 text-gray-300 outline-none" /></div>
                    <div className="md:col-span-3"><label className="text-teal-400 block mb-1">Correct Identity Key Answer</label><input type="text" placeholder="e.g. Option A" value={formData.correctAnswer} onChange={e => setFormData({...formData, correctAnswer: e.target.value})} className="w-full md:w-1/3 bg-neutral-950 border border-neutral-800 rounded-xl p-2.5 text-gray-300 outline-none focus:border-teal-400" /></div>
                  </>
                )}

                <button type="submit" className="md:col-span-3 mt-2 bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-bold py-3 rounded-xl transition hover:opacity-90 uppercase tracking-wider text-xs">
                  Commit Problem Script to Database Array
                </button>
              </form>

              {/* Added Problems Logs list section */}
              <div className="pt-4 border-t border-neutral-900 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Active Live Stream Questions ({questions.length})</h3>
                <div className="divide-y divide-neutral-900">
                  {questions.map(q => (
                    <div key={q.id} className="py-3 flex justify-between items-start gap-4 text-xs">
                      <div>
                        <p className="font-bold text-gray-200">{q.text}</p>
                        <span className="text-[10px] font-mono text-gray-500 mt-1 block">{q.type} • {q.topic} • Complexity: {q.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB B: STUDENT MANAGEMENT MONITOR LIST */}
          {activeTab === "students" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-base font-bold text-gray-200">Registered Student Registries</h2>
                <p className="text-xs text-gray-500">Monitor candidate evaluation parameters, check score cards, and audit profile authentications safely.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-neutral-800 text-neutral-500 font-bold uppercase tracking-wider">
                      <th className="pb-3 pl-2">ID Target</th>
                      <th className="pb-3">Candidate Name</th>
                      <th className="pb-3">Credential Route</th>
                      <th className="pb-3 text-center">Avg Rating</th>
                      <th className="pb-3 text-center">Exams Passed</th>
                      <th className="pb-3 pr-2 text-right">Action Grid</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-900 text-gray-300">
                    {students.map(student => (
                      <tr key={student.id} className="hover:bg-neutral-900/20 transition font-medium">
                        <td className="py-4 pl-2 font-mono text-gray-500">#{student.id}</td>
                        <td className="py-4 font-bold text-gray-200">{student.name}</td>
                        <td className="py-4 text-gray-400 font-mono">{student.email}</td>
                        <td className="py-4 text-center text-teal-400 font-mono font-bold">{student.score}</td>
                        <td className="py-4 text-center font-mono">{student.tests} Runs</td>
                        <td className="py-4 pr-2 text-right">
                          <button 
                            onClick={() => handleDeleteStudent(student.id)}
                            className="text-red-400 hover:bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/10 transition font-bold"
                          >
                            Terminate
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default AdminPanel;