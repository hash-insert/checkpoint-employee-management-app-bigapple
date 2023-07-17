import React, { useState, useEffect } from "react";
import { auth } from "../Firebase/firebase.jsx";

import gif from "../../assets/UUg.gif";
import icon from "../../assets/nerd.png";

import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import SignUP from "../SignUp/SignUp.jsx";
import "./home.css";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const check = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      check();
    };
  }, []);
  // const toast = useToast();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleBtn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    if (authUser) {
      navigate("/dashboard");
    }

    // if(email && password){
    //   toast({
    //     title: 'Login Success.',
    //     // description: "We've created your account for you.",
    //     status: 'success',
    //     duration: 5000,
    //     isClosable: true,
    //   })
    // }
  };

  return (
    <div className="container">
      <div className="name">
        <img src={icon} style={{ width: "30px", height: "30px" }} />
        <h1 className="heading">BigApple</h1>
      </div>
      <div className="box">
        <img src={gif} alt="admin-pic" className="gif" />
        <form className="form-container">
          <h1>Login</h1>
          <label className="label-text">Email* </label>
          <input
            className="input-area"
            type="email"
            placeholder="enter email"
            value={email}
            onChange={handleEmail}
          />
          <label className="label-text">Password *</label>
          <input
            className="input-area"
            type="password"
            placeholder="enter password"
            value={password}
            onChange={handlePassword}
          />
          <button className="btn" onClick={handleBtn}>
            LogIn
          </button>
        </form>
        <SignUP />
      </div>
    </div>
  );
}

export default Home;
