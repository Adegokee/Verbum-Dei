import React, { useEffect, useState } from 'react'; 
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const storedUserInfo = window.localStorage.getItem('userInfo');
    
    if (token && storedUserInfo) {
     
      setIsAuthenticated(true);
    }
    setLoading(false); 
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
