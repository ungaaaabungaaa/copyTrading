// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = () => {
  const { currentUser, profileComplete } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (currentUser && !profileComplete) {
    return <Navigate to="/profile" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
