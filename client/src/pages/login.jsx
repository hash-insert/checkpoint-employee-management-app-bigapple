import Form from "../components/Form";
import "../css/login.css";
import loginSvg from "../svgs/login.svg";
import Navbar from "../components/Navbar";
function Login(props) {
  const isLogined = props.value
  return (
    <>
      <Navbar/>
      <div className="login">
        <div className="login-container">
          <img className="loginsvg" src={loginSvg} alt="Login Svg" />
          <div className="form-container"><Form value={isLogined}/> </div>
        </div>
      </div>
    </>
  );
}
export default Login;
