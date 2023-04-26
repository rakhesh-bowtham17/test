import style from "./CashDetails.module.scss";
import ConfigForm from "../configForm/ConfigForm";
import Button from "../../components/Button/Button";
import { AppConstants } from "../../constants/app-constants";

function CashDetails() {
  const data = [
    {
      locationId: 1,
      locationName: "chennai",
      cashTypeId: 1,
      cashType: "cdw",
      defaultAmount: 400,
      defaultCarryOverDays: 7,
    },
    {
      locationId: 1,
      locationName: "chennai",
      cashTypeId: 2,
      cashType: "maternity",
      defaultAmount: 1000,
      defaultCarryOverDays: 0,
    },
    {
      locationId: 2,
      locationName: "bangalore",
      cashTypeId: 1,
      cashType: "cdw",
      defaultAmount: 400,
      defaultCarryOverDays: 7,
    },
    {
      locationId: 2,
      locationName: "bangalore",
      cashTypeId: 2,
      cashType: "maternity",
      defaultAmount: 1000,
      defaultCarryOverDays: 0,
    },
    {
      locationId: 3,
      locationName: "hyderabad",
      cashTypeId: 1,
      cashType: "cdw",
      defaultAmount: 400,
      defaultCarryOverDays: 7,
    },
    {
      locationId: 3,
      locationName: "hyderabad",
      cashTypeId: 2,
      cashType: "maternity",
      defaultAmount: 1000,
      defaultCarryOverDays: 0,
    },
  ];
  return (
    <div className={style["cash-modal"]}>
      <h1 className={style["cash-modal-heading"]}>CASH</h1>

      <ConfigForm data={data} filter={AppConstants.CONFIG.CDW_CASH} />

      <ConfigForm data={data} filter={AppConstants.CONFIG.MATERNITY_CASH} />
      <Button
        color={"primary"}
        size={"xxl"}
        shape={"solid"}
        label={AppConstants.CONFIG.LABEL}
        iconName=""
      />
    </div>
  );
}
export default CashDetails;
