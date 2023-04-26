import LoginForm from "../../containers/loginForm/LoginForm";
import style from "./LoginPage.module.scss";
function LoginPage() {
  return (
    <>
      <div className={style.login}>
        <div className={style.loginModal}>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
export default LoginPage;
