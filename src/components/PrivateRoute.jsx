import React, { useEffect, useState } from 'react'; 
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const storedUserInfo = window.localStorage.getItem('userInfo');
    
    if (token && storedUserInfo) {
      // If token and userInfo exist, consider the user authenticated
      setIsAuthenticated(true);
    }
    setLoading(false); // Done checking token and userInfo
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading while checking authentication
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
