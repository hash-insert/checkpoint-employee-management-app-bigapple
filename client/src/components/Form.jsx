import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";
// import { auth } from "./firebase";

import "../login.css";

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [authUser, setAuthUser] = useState(null);
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
        }
  return (
    <div>
      <form className="card">
        <h1 className="card-header">LOGIN</h1>
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
      <h4>Couldn't login? Contact <a id="link" href="gmailto:abc@gmail.com">Admin</a> </h4> 
    </div>
  );
};

export default Form;
