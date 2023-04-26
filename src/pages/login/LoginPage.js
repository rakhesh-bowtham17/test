import Logo from "../../components/Logo/Logo";
import LoginForm from "../../containers/loginForm/LoginForm";
import style from "./LoginPage.module.scss";
import cdwLogo from "../../assets/logo/cdw-white-logo.svg";
function LoginPage({ setToken }) {
  return (
    <>
      <div className={style.login}>
        <div className={style.loginModal}>
          <Logo src={cdwLogo} />
          <LoginForm />
        </div>
      </div>
    </>
  );
}
export default LoginPage;
