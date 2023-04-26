import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { RouteConstants } from "../../constants/routes-constants";
import SideBar from "../../containers/sideBar/SideBar";
const ProtectedRoute = ({ authToken }) => {
  const { LOGIN } = RouteConstants;
  const {DASH_BOARD} = RouteConstants;
  return authToken ? (
    <>
      <SideBar />
      <Outlet />
    </>
  ) :  (
    <Navigate to={LOGIN} />
  ) 
};

export default ProtectedRoute;
