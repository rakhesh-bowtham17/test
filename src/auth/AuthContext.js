import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AuthContext = ({ children, authToken }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);

  useEffect(() => {
    setIsAuthenticated(!!authToken);
  }, [authToken]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthContext;
