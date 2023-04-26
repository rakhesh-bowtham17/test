import styles from "./Logout.module.scss";
import useCookie from "../../hooks/use-cookie/use-cookie";
import { useNavigate } from "react-router-dom";

/**
 * @description function to return the loged in user and logout button
 * @version 1.0.0
 * @author [Abdul Adhil]
 * @returns Logout
 */

function Logout() {
  const { clearToken, setAuthToken } = useCookie();
  const navigate = useNavigate();
  const handleLogout = () => {
    clearToken();
    setAuthToken("");
    navigate("/login");
  };
  return (
    <div className={styles["logout"]}>
      <span>Sridhar Bhaskaran</span>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}

export default Logout;
