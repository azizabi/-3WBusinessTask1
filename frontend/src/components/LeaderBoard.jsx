import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Trophy } from "lucide-react";

const Leaderboard = () => {
  const [data, setData] = useState([]);

  const fetchLeaderboard = async () => {
    const res = await API.get("/users/leaderboard");
    setData(res.data);
  };

  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 5000);
    return () => clearInterval(interval);
  }, []);

  const topThree = data.slice(0, 3);
  const others = data.slice(3);

  return (
    <div className="w-full text-white space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 text-black rounded-2xl px-6 py-4 shadow-lg text-center relative overflow-hidden">
        <h2 className="text-2xl font-extrabold flex justify-center items-center gap-2">
          <Trophy size={28} className="text-yellow-300 drop-shadow" />
          Weekly Contribution Ranking
        </h2>
        <p className="text-sm text-black/80 mt-1 font-semibold">
          Settlement time: <span className="font-bold">2 days 01:45:29</span>
        </p>
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 rounded-2xl pointer-events-none" />
      </div>

      {/* Podium Section */}

<div className="flex justify-center items-end gap-4 px-4 py-6 bg-gradient-to-br from-[#FFE6B7] to-[#FFB347] rounded-2xl shadow-lg">
  {[
    { position: 2, size: "w-24 h-24", mt: "mt-6" },
    { position: 1, size: "w-28 h-28", mt: "mt-0" },
    { position: 3, size: "w-24 h-24", mt: "mt-6" },
  ].map((pos, idx) => {
    const user = topThree.find((u) => u.rank === pos.position);
    if (!user) return null;

    return (
      <div
        key={user.rank}
        className={`flex flex-col items-center bg-white rounded-xl px-4 py-4 ${pos.mt} shadow-md w-28`}
      >
        {/* Avatar + Crown */}
        <div className="relative">
          <img
            src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
            alt={user.name}
            className={`rounded-full border-2 border-yellow-400 shadow-lg object-cover ${pos.size}`}
          />
          {user.rank === 1 && (
            <span className="absolute -top-2 -right-2 text-xl">👑</span>
          )}
        </div>

        {/* Name */}
        <p className="text-[13px] font-semibold text-center mt-2 text-gray-800 truncate w-full">
          {user.name}
        </p>

        {/* Points */}
        <div className="flex items-center gap-1 mt-1">
          <img src="/trophy.png" alt="Trophy" className="w-4 h-4" />
          <span className="text-sm font-bold text-yellow-600">
            {user.totalPoints.toLocaleString()}
          </span>
        </div>

        {/* Rank Number */}
        <span className="text-xs text-gray-500 mt-1">#{user.rank}</span>
      </div>
    );
  })}
</div>



      {/* Remaining Rankings */}
      <div className="bg-gradient-to-br from-[#FFE6B7] to-[#FFB347] rounded-2xl overflow-hidden shadow-lg max-h-[400px] overflow-y-auto divide-y divide-gray-800">
        {others.map((user) => (
          <div
            key={user.rank}
            className="flex items-center justify-between px-6 py-4 hover:bg-[#1e1e1e] transition-all"
          >
            <div className="flex items-center gap-4">
              <img
                src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                alt={user.name}
                className="w-10 h-10 rounded-full border border-gray-700 shadow"
              />
              <div>
                <p className="font-semibold text-white">{user.name}</p>
                <p className="text-xs text-gray-500">#{user.rank}</p>
              </div>
            </div>
            <div className="text-yellow-400 font-bold text-sm">{user.totalPoints}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
