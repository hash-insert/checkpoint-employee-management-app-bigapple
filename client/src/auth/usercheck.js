import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.jsx";
import { onAuthStateChanged, signOut } from "firebase/auth";

function UserCheck() {
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
  const userLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signout success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const users = authUser;

  return (
    <>
      <div>
        {authUser ? (
          <>
            <p>{authUser.email}</p>
            <button onClick={userLogOut}>Logout</button>
          </>
        ) : (
          <p>SignOut</p>
        )}
      </div>
    </>
  );
}

export default UserCheck;
