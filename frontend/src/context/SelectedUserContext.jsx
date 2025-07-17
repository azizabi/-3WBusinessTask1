// src/context/SelectedUserContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import API from '../services/api';

export const SelectedUserContext = createContext();

export const SelectedUserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');

  const fetchUsers = async () => {
    const res = await API.get('/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <SelectedUserContext.Provider value={{ users, selectedUserId, setSelectedUserId, fetchUsers }}>
      {children}
    </SelectedUserContext.Provider>
  );
};
