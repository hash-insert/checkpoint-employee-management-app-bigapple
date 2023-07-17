import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Firebase/firebase.jsx"
import { useState } from "react";


function SignUP() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
      };
      const handlePassword = (e) => {
        setPassword(e.target.value);
      };
      const handleBtn = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
          })
          .catch((error) => {
            console.log(error);
          });



          
        //   if(email && password){
        //     toast({
        //       title: 'Login Success.',
        //       // description: "We've created your account for you.",
        //       status: 'success',
        //       duration: 5000,
        //       isClosable: true,
        //     })
        //   }
         
      
          
        
      };
    return ( 
        <>
        
        <form className="form-container">
        <h1>Create</h1>
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
      <button className="btn" onClick={handleBtn}>Create</button>
    </form>
        </>
     );
}

export default SignUP;