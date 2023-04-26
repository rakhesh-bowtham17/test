import { RouteConstants } from "./constants/routes-constants";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import useCookie from "./hooks/use-cookie/use-cookie";
import "./styles/scss/global.module.scss";
import LoginPage from "./pages/login/LoginPage";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const { setTokenState, authToken } = useCookie();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setTokenState(token);
    }
  }, [setTokenState]);
  const {
    HOME,
    LOGIN,
    REPORTS,
    DASH_BOARD,
    STATS,
    USERS,
    ADD_MONEY,
    EVENTS,
    CONFIGS,
  } = RouteConstants;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route element={<ProtectedRoute authToken={authToken} />}>
          <Route path={HOME} element={<Navigate to={DASH_BOARD} />} />
          {/* <Route path={REPORTS} element={<Reports />} /> */}
          <Route path={DASH_BOARD} element={<Dashboard />} />
          {/*<Route path={STATS} element={<Stats />} />
          <Route path={USERS} element={<Users />} />
          <Route path={ADD_MONEY} element={<Addmoney />} />
          <Route path={EVENTS} element={<Events />} /> 
          <Route path={CONFIGS} element={<Configs />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
