import { Outlet } from "react-router-dom";
import SideBar from "../containers/sideBar/SideBar";
import styles from "./Route.module.scss";

function Root() {
  return (
    <>
      <div className={styles["rout-layout"]}>
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default Root;
