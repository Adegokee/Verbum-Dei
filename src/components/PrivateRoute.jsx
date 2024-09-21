import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state to handle async check

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      // You can add a token validation or expiry check here if needed
      setIsAuthenticated(true);
    }
    setLoading(false); // Done checking token
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading while checking authentication
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
