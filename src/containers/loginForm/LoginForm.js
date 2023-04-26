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
  const navigate = useNavigate();
  const { setToken } = useCookie();
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

  const onSubmit = async (data) => {
    const userCreds = {
      adminMail: data.Username,
      adminPassword: data.Password,
    };
    const response = await loginService(userCreds);
    if (response.status === 200) {
      setHidden(false);
      setToken(response.data.data);
      navigate("/dashboard");
    } else {
      setHidden(true);
    }
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
        <Button
          color={"primary"}
          size={"xxl"}
          shape={"solid"}
          label={LOGIN_LABEL}
          iconName=""
        />
        <span className={style.passwordRecovery}>{FORGOT_PASSWORD_LABEL}</span>
      </form>
    </>
  );
}

export default LoginForm;
