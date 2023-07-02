"use client";
import DateTime from "./DateTime";

export default function Greet() {
  return (
    <div className="flex flex-col space-y-3">
      <DateTime />
      <h1 className="text-3xl font-sans">Hello Darshan 👋 ⚡️</h1>
      <p className="text-xl font-mono">Welcome back, great to see you again.</p>
    </div>
  );
}
