import Tab from "../../components/Tabs/Tab";
import { AppConstants } from "../../constants/app-constants";

function ConfigsTabs({activeTab, onClick}) {
  return (
    <>
      <h1>CONFIGS</h1>
      <div className="tabs">
        <Tab
          label={AppConstants.CONFIGS_TABS.FIRST_TAB}
          activeTab={activeTab}
          onClick={onClick}
        />
        <Tab
          label={AppConstants.CONFIGS_TABS.SECOND_TAB}
          activeTab={activeTab}
          onClick={onClick}
        />
      </div>
    </>
  );
}

export default ConfigsTabs;
