import { useState } from "react";
import { AppConstants } from "../../constants/app-constants";
import styles from "./ConfigPages.module.scss";
import AppDetails from "../../components/app-details/AppDetails";
import ConfigRightContainer from "../../containers/cashDetails/CashDetails";
import ConfigsTabs from "../../containers/configsTabs/ConfigsTabs";

function ConfigsPage() {
  const [activeTab, setActiveTab] = useState(AppConstants.CONFIGS_TABS.SECOND_TAB);
  return (
    <>
      <div className={styles["tabs"]}>
        <ConfigsTabs
          activeTab={activeTab}
          onClick={(label) => {
            setActiveTab(label);
          }}
        />
      </div>

      <div className={styles["contents"]}>
        {activeTab === AppConstants.CONFIGS_TABS.FIRST_TAB && <AppDetails />}
        {activeTab === AppConstants.CONFIGS_TABS.SECOND_TAB && (
          <ConfigRightContainer />
        )}
      </div>
    </>
  );
}

export default ConfigsPage;
