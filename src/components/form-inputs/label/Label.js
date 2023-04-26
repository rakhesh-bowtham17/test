import PropTypes from "prop-types";
import style from "./Label.module.scss";

export const Label = ({ name }) => {
  return (
    <>
      <label htmlFor={name} className={style["label"]}>
        {name}
      </label>
    </>
  );
};

Label.prototype = {
  name: PropTypes.string.isRequired,
};
