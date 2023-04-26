import { useState } from "react";
import styles from "./Tabs.module.scss";

function Tab({ lable }) {
 

  return (
    <>
      {lable.map((value, index) => {
        return (
          <button
            id={index}
            onClick={""}
          >
            {value}
          </button>
        );
      })}
    </>
  );
}

export default Tab;
