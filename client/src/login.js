import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "./firebase";
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
    <div>
      <img src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
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
