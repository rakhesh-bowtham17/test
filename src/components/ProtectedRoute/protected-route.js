import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { RouteConstants } from "../../constants/routes-constants";
import SideBar from "../../containers/sideBar/SideBar";
const ProtectedRoute = ({ authToken }) => {
  const { LOGIN } = RouteConstants;
  return authToken ? (
    <>
      <SideBar />
      <Outlet />
    </>
  ) : authToken ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to={LOGIN} />
  );
};

export default ProtectedRoute;
