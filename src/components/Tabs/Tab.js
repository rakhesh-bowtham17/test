import styles from "./Tab.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Tab({ label, activeTab, onClick }) {
  return (
    <button
      className={`${styles.tabs} ${
        activeTab === label ? styles["active-tab"] : styles["inactive-tab"]
      }`}
      onClick={() => onClick(label)}
    >
      <label>{label}</label>
      <span>{<FontAwesomeIcon icon={faChevronRight} />}</span>
    </button>
  );
}
export default Tab;
