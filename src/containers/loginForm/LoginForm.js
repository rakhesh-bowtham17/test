import { useForm } from "react-hook-form";
import style from "./LoginForm.module.scss";
import { AppConstants } from "../../constants/app-constants";
import { ErrorConstants } from "../../constants/error-constants";
import loginService from "../../services/LoginService";
import { useState } from "react";
import Button from "../../components/Button/Button";
import useCookie from "../../hooks/use-cookie/use-cookie";
import { useNavigate } from "react-router-dom";
import LabeledInput from "../formInput/LabeledInput";

function LoginForm() {
  const { NAME, PASSWORD, LOGIN_LABEL, FORGOT_PASSWORD_LABEL } =
    AppConstants.LOGIN_PAGE.USER;
  const { INVALID_USER_MSG, USERNAME_REQUIRED_MSG, PASSWORD_REQUIRED_MSG } =
    ErrorConstants.ACCOUNT;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [hidden, setHidden] = useState(false);

  const onSubmit = (data) => {
    data = {
      adminMail: data.Username,
      adminPassword: data.Password,
    };
    fetch("http://localhost:4000/admin/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.code);
        res.code !== 400 ? setHidden(false) : setHidden(true);
      });
    reset();
  };
  return (
    <>
      {hidden && <div className={style.toastMessage}>{INVALID_USER_MSG}</div>}
      <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm}>
        <LabeledInput
          type="text"
          name={NAME}
          register={register(NAME, { required: USERNAME_REQUIRED_MSG })}
          errors={errors}
        />
        <LabeledInput
          type="password"
          name={PASSWORD}
          register={register(PASSWORD, { required: PASSWORD_REQUIRED_MSG })}
          errors={errors}
        />

        <button className={style.loginButton}>{LOGIN_LABEL}</button>
        <span className={style.passwordRecovery}>{FORGOT_PASSWORD_LABEL}</span>
      </form>
    </>
  );
}

export default LoginForm;
