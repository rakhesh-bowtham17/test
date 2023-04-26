import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/form-inputs/input/Input";
import style from "./LoginForm.module.scss";
import { AppConstants } from "../../constants/app-constants";
import { ErrorConstants } from "../../constants/error-constants";
import { loginSchema } from "../../utils/yupValidator";
import { useState } from "react";

function LoginForm() {
  const { NAME, PASSWORD, LOGIN_LABEL, FORGOT_PASSWORD_LABEL } =
    AppConstants.LOGIN_PAGE.USER;
  const { INVALID_USER_MSG } = ErrorConstants.ACCOUNT;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

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
        <Input
          type="text"
          name={NAME}
          register={register(NAME)}
          errors={errors}
        />

        <Input
          type="password"
          name={PASSWORD}
          register={register(PASSWORD)}
          errors={errors}
        />

        <button className={style.loginButton}>{LOGIN_LABEL}</button>
        <span className={style.passwordRecovery}>{FORGOT_PASSWORD_LABEL}</span>
      </form>
    </>
  );
}

export default LoginForm;
