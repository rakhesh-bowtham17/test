import Input from "../../components/Input/Input";

import style from "./ConfigForm.module.scss";

import CapitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

import Capitalize from "../../utils/capitalize";

import { AppConstants } from "../../constants/app-constants";

function ConfigForm(props) {
  const filter = props.filter;

  const cashType = props.data.filter((item) => item.cashType === filter);

  return (
    <>
      <div className={style["cash-form"]}>
        <p className={style["cash-heading"]}>
          {filter === AppConstants.CONFIG.CDW_CASH
            ? Capitalize(AppConstants.CONFIG.CDW_CASH)
            : CapitalizeFirstLetter(AppConstants.CONFIG.MATERNITY_CASH)}{" "}
          Cash
        </p>

        <p className={style["cash-desc"]}>
          {filter === AppConstants.CONFIG.CDW_CASH
            ? AppConstants.CONFIG.CDW_DESC
            : AppConstants.CONFIG.MATERNITY_DESC}{" "}
        </p>

        {cashType.map((element, index) => (
          <>
            <div className={style["label"]}>
              {index === 0 ? (
                <p className={style["cash-title"]}>
                  {filter === AppConstants.CONFIG.CDW_CASH
                    ? Capitalize(AppConstants.CONFIG.CDW_CASH)
                    : CapitalizeFirstLetter(
                        AppConstants.CONFIG.MATERNITY_CASH
                      )}{" "}
                  Cash
                </p>
              ) : (
                <></>
              )}
              {element.defaultCarryOverDays !==
                AppConstants.CONFIG.NO_CARRY_OVER_DAYS && (
                <>
                  {index === 0 ? (
                    <p className={style["carry-over-label"]}>
                      {AppConstants.CONFIG.CARRY_OVER_DAYS}
                    </p>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
            <div className={style["row"]}>
              <p className={style["cash-location"]}>
                {CapitalizeFirstLetter(element.locationName)}
              </p>
              <div>
                <Input
                  type={"number"}
                  name={"cash"}
                  register={""}
                  errors={""}
                  value={element.defaultAmount}
                />
              </div>
              {element.defaultCarryOverDays !==
                AppConstants.CONFIG.NO_CARRY_OVER_DAYS && (
                <div>
                  <Input
                    type={"number"}
                    name={"cash"}
                    register={""}
                    errors={""}
                    value={element.defaultCarryOverDays}
                  />
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default ConfigForm;
