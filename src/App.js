"use client";

import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Date Calculator</h1>
      <div className="app-card">
        <Counter />
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <div className="counter-container">
      <div className="step-control">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span className="step-value">Step: {step}</span>
      </div>

      <div className="counter-control">
        <button
          className="counter-button increment-button"
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="counter-input"
        />
        <button
          className="counter-button increment-button"
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
      </div>

      <p className="date-display">
        <span className="date-text">
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span className="date-value">{date.toDateString()}</span>
      </p>
      {(count !== 0 || step !== 1) && (
        <div className="reset-container">
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
