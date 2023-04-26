import PropTypes from "prop-types";
import style from "./Input.module.scss";
function Input({ type, name, register, errors }) {
  return (
    <div className={style["input"]}>
      <input
        type={type}
        {...register}
        className={
          errors[name]
            ? `${style["input-error"]} ${style["input-box"]}`
            : style["input-box"]
        }
      />
      {errors[name]?.type && <div className={style.errorBar}></div>}
      {errors[name] && (
        <span className={style["error"]}>{errors[name].message}</span>
      )}
    </div>
  );
}

Input.prototype = {
  type: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
};

export default Input;
