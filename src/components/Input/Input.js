import style from "./Input.module.scss";
function Input({ type, name, register, errors,value }) {
    return (
      <>
        <div className={style["input"]}>
          <input
            type={type}
            defaultValue={value}
            {...register}
            className={
              errors[name]
                ? `${style["input-error"]} ${style["input-box"]}`
                : style["input-box"]
            }
          />
          {["required", "min"].includes(errors[name]?.type) && (
            <div className={style.errorBar}></div>
          )}
          {errors[name] && (
            <span className={style["error"]}>{errors[name].message}</span>
          )}
        </div>
      </>
    );
  }
  
  export default Input;