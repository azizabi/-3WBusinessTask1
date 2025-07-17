import React from "react";
import UserSelector from "./components/UserSelector";
import AddUser from "./components/AddUser";
import Leaderboard from "./components/Leaderboard";
import ClaimHistory from "./components/ClaimHistory";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-urbanist py-6 relative overflow-hidden flex flex-col">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header with AddUser */}
      <header className="z-10 relative flex items-center justify-between max-w-6xl mx-auto w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 shadow-lg mb-8">
        <div className="flex items-center gap-4">
          <AddUser />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center w-full tracking-wider drop-shadow-md">
          🔥 BetChamp Leaderboard 🔥
        </h1>
      </header>

      {/* Main Content */}
<main className="flex-grow relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
  {/* Left side - UserSelector (1 column on lg) */}
  <div className="lg:col-span-1 order-2 lg:order-1">
    <GlassCard>
      <UserSelector />
    </GlassCard>
  </div>

  {/* Center - Leaderboard (3 columns on lg) */}
  <div className="lg:col-span-3 order-1 lg:order-2">
    <GlassCard className="h-full">
      <Leaderboard />
    </GlassCard>
  </div>

  {/* Right side - ClaimHistory (1 column on lg) */}
  <div className="lg:col-span-1 order-3">
    <GlassCard>
      <ClaimHistory />
    </GlassCard>
  </div>
</main>

    </div>
  );
};

// Glassmorphism Card Component
const GlassCard = ({ children, className = "" }) => (
  <div
    className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 transition hover:scale-[1.02] hover:border-white/20 duration-300 ${className}`}
  >
    {children}
  </div>
);

export default App;
