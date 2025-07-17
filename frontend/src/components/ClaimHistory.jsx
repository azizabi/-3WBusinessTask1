import React, { useEffect, useState } from 'react';
import API from '../services/api';

const ClaimHistory = () => {
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    const res = await API.get('/claim/history');
    setHistory(res.data);
  };

  useEffect(() => {
    fetchHistory();
    const interval = setInterval(fetchHistory, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded shadow-md">
      <h3 className="text-xl font-bold mb-2">🕒 Claim History</h3>
      <ul className="space-y-1 text-sm max-h-60 overflow-y-auto">
        {history.map((h, i) => (
          <li key={i} className="border-b border-gray-600 py-1">
            {h.userName} claimed {h.claimedPoints} pts — <span className="text-gray-400">{new Date(h.claimedAt).toLocaleTimeString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClaimHistory;
