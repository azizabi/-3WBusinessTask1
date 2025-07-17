import React, { useContext, useState } from 'react';
import API from '../services/api';
import { SelectedUserContext } from '../context/SelectedUserContext';

const ClaimButton = () => {
  const { selectedUserId, fetchUsers } = useContext(SelectedUserContext);
  const [claimed, setClaimed] = useState(null);

  const handleClaim = async () => {
    if (!selectedUserId) return alert('Select a user first');
    const res = await API.post('/claim', { userId: selectedUserId });
    setClaimed(res.data.points);
    fetchUsers();
  };

  return (
    <div className="space-y-2">
      <button onClick={handleClaim} className="w-full px-4 py-2 bg-green-600 rounded hover:bg-green-700">
        Claim Points
      </button>
      {claimed && <p className="text-green-400">🎉 Claimed: {claimed} points!</p>}
    </div>
  );
};

export default ClaimButton;