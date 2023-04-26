import Button from "../Button/Button";
import styles from "./Logout.module.scss";





/**
 * @description function to return the loged in user and logout button
 * @version 1.0.0
 * @author [Abdul Adhil]
 * @returns Logout
 */
function Logout() {
  return (
    <div className={styles["logout"]}>
      <span>Sridhar Bhaskaran</span>
      <Button label={"Logout"} color={"transparent"} shape={"none"} iconName="ArrowCircleRight"/>
      {/* <button>Logout</button> */}
    </div>
  );
}

export default Logout;
