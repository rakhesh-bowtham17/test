import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useCookie from "../../hooks/use-cookie/use-cookie";
import { RouteConstants } from "../../constants/routes-constants";
import SideBar from "../../containers/sideBar/SideBar";
import styles from "./ProtectedRoutes.module.scss"
const ProtectedRoute = ({ authToken }) => {
  const { clearToken } = useCookie();
  const { LOGIN } = RouteConstants;
  const Token = true;
  return Token ? (
    <>
      <div className={styles["root-layout"]}>
        <SideBar />
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to={LOGIN} />
  );
};

export default ProtectedRoute;
