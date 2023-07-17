import { useEffect, useState } from "react";
import "./header.css";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.jsx";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  setInterval(digitalClock, 1000);
  function digitalClock() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    document.getElementById("timer").innerHTML = h + ":" + m + ":" + s;
  }



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
  const userLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signout success");
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/")
  };

  return (
    <div className="header">
      <ul className="list">
        <li>
         <Link to="/dashboard"> <h1>BigApple</h1></Link>
        </li>
       <Link to="/timesheet"><li>Timesheets</li></Link> 
       <Link> <li>Leave-page</li></Link>
       <li id="timer"></li>
        <li>
          {" "}
          <div>
            {authUser ? (
              <>
                <p>{authUser.email.split("@")[0]}</p>
                <button onClick={userLogOut}>Logout</button>
              </>
            ) : (
              <p>SignOut</p>
            )}
          </div>{" "}
        </li>
     
      </ul>
    </div>
  );
}

export default Header;


