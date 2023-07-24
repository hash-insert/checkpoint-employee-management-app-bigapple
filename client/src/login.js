import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "./firebase";
import img1 from "./images/undraw.svg"
import img2 from "./images/icon1.png"
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [authUser, setAuthUser] = useState(null);

  // useEffect(() => {
  //   const check = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setAuthUser(user);
  //     } else {
  //       setAuthUser(null);
  //     }
  //   });

  //   return () => {
  //     check();
  //   };
  // }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleBtn = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/login", { email, password })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="main">
    <div className="svgs-box">
<img src={img1} alt="image"  className="admin"/>
<img src={img2} alt="image"  className="emp"/>
    </div>
   
      <form className="login-page">
        <h1>Login</h1>

        <label>Email</label>
        <input type="email" onChange={handleEmail} placeholder="enter email" />
        <label>Password</label>
        <input
          type="password"
          onChange={handlePassword}
          placeholder="password"
        />
       
      
        <button onClick={handleBtn}>Login </button>
      </form>
    </div>
  );
}
export default Login;
