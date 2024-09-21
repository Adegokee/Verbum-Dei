import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children }) => {
    const token = window.localStorage.getItem('token');

    if (!token) {
        // Redirect them to the login page if not logged in
        return <Navigate to="/" replace />;
    }

    return children; // Render the child components if logged in
};

export default AuthRoute;
