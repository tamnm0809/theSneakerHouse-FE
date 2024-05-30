import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user || !user.isAdmin) {
    return <Navigate to="/the-sneaker-house/login" />;
  }

  return children;
}

export default ProtectedRoute;
