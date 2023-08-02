

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "../css/login.css";
import { useNavigate } from "react-router";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();



  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleBtn = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/login", { email, password }).then((res) => {
      const { accessToken } = res.data;

      setToken(res.data)
   
      const decodedToken = jwt_decode(accessToken);
   
      const { role } = decodedToken;
console.log(role)

    
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/employee/dashboard");
      }

     
    });
  };
  

  return (
    
        <div>
          <form id="card">
            <h1 className="card-header">LOGIN</h1>
            <div className="input-icons">
              <i className="fas fa-user icon"></i>
              <input
                id="login-email"
                type="email"
                onChange={handleEmail}
                placeholder="Email"
              />
            </div>
            <div className="input-icons">
              <i className="fas fa-key icon"></i>
              <input
                type="password"
                onChange={handlePassword}
                placeholder="Password"
                id="login-password"
              />
            </div>
            <button id="login-btn" className="btn" onClick={handleBtn}>
              Login
            </button>
          </form>
          <h4 id="help-login">
            Couldn't login? Contact <a id="link" href="mailto:abc@gmail.com">Admin</a>{" "}
          </h4>
        </div>
      )

 
};

export default Form;

