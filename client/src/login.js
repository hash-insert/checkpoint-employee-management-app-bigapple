import Form from "./components/Form";
import "./login.css";
import loginSvg from "./svgs/login.svg";

function Login() {
  return (
    <>
      <div className="main">
        <div className="login-container">
          <img className="loginsvg" src={loginSvg} alt="Login Svg" />
          <div className="form-container"><Form /> </div>
        </div>
      </div>
    </>
  );
}
export default Login;
