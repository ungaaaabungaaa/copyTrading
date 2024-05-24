// PrivateRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { currentUser, profileComplete } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (currentUser && !profileComplete) {
    console.log("Profile is Not found from private Route");
    return <Navigate to="/profile" />;
  }

  return <Route {...rest} element={<Element />} />;
};

export default PrivateRoute;
