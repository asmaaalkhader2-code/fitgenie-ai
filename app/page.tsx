"use client";

import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("Build Muscle");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    setLoading(true);

    const response = await fetch("/api/plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ age, weight, height, goal }),
    });

    const data = await response.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="text-center w-full max-w-xl">
        <h1 className="text-6xl font-bold mb-4">FitGenie AI 💪</h1>

        <p className="text-zinc-400 text-xl mb-8">Asmaa AI Gym Coach</p>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            Generate My Plan
          </button>
        ) : (
          <div className="bg-zinc-900 p-6 rounded-2xl space-y-4">
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 rounded-xl bg-zinc-800"
            />

            <input
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 rounded-xl bg-zinc-800"
            />

            <input
              type="number"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 rounded-xl bg-zinc-800"
            />

            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full p-3 rounded-xl bg-zinc-800"
            >
              <option>Build Muscle</option>
              <option>Lose Fat</option>
              <option>Stay Fit</option>
            </select>

            <button
              onClick={generatePlan}
              className="w-full bg-white text-black py-3 rounded-xl font-bold"
            >
              {loading ? "Creating..." : "Create Plan ✨"}
            </button>

            {result && (
              <div className="text-left bg-black p-4 rounded-xl whitespace-pre-wrap">
                {result}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}