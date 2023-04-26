import { useState } from "react";

import { AppConstants } from "../../constants/app-constants";

import styles from "./ConfigPages.module.scss";
import AppDetails from "../../components/app-details/AppDetails";

function TabContent({ label }) {
  return <div> Content for {label} tab goes here </div>;
}

function Tab({ label, activeTab, onClick }) {
  return (
    <button
      className={activeTab === label ? "active-tab" : "inactive-tab"}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

function ConfigsPage() {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const handleTabClick = (label) => {
    setActiveTab(label);
  };
  return (
    <>
      <div className={styles["configs"]}>
        <h1>CONFIGS</h1>

        <div className="tabs">
          <Tab label="Tab 1" activeTab={activeTab} onClick={handleTabClick} />
          <Tab label="Tab 2" activeTab={activeTab} onClick={handleTabClick} />
        </div>

        <div className="tab-content">
          {activeTab === "Tab 1" && <AppDetails />}
          {activeTab === "Tab 2" && <TabContent label="Tab 2" />}
        </div>
      </div>
    </>
  );
}

export default ConfigsPage;
