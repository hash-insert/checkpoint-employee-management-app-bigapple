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
    <>
   
      <div className="main">
       
     
        <form className="card">
          <h1 className="card-header"> Login</h1>

          <div className="input-icons">
         
              <i className="fas fa-user icon"></i>
           
            <input type="email" onChange={handleEmail} placeholder="Email" />
          </div>
          <div className="input-icons">
          
              <i className="fas fa-key icon"></i>
           
            <input
              type="password"
              onChange={handlePassword}
              placeholder="Password"
            />
          </div>
          <button className="btn" onClick={handleBtn}>
            Login
          </button>
        </form>
       
      </div>
      <h3>Couldn't login? Contact <a>Admin</a></h3>
    </>
  );
}
export default Login;
