// src/components/UserSelector.jsx
import React, { useContext, useState } from 'react';
import { SelectedUserContext } from '../context/SelectedUserContext';
import API from '../services/api';
import ClaimButton from './ClaimButton';

const UserSelector = () => {
  const { users, selectedUserId, setSelectedUserId, fetchUsers } = useContext(SelectedUserContext);



  return (
    <div className="space-y-4">
      <select
        className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
        onChange={(e) => setSelectedUserId(e.target.value)}
        value={selectedUserId}
      >
        <option value="">🎯 Select a User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>
        <ClaimButton/>
    </div>
  );
};

export default UserSelector;
