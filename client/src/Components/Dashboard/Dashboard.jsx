import Header from "../Header/Header";
import "./dashboard.css";
import { auth } from "../Firebase/firebase.jsx";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import team from "../../assets/team.svg";
import timesheet from "../../assets/timesheet.svg";
import tele from "../../assets/telework.svg"

function Dashboard() {
  const [authUser, setAuthUser] = useState(null);
  const [clockIn, setClockIn] = useState("00:00:00");
  const [clockout, setClockOut] = useState("00:00:00");
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();
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

  const handleClock = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let time = h + ":" + m + ":" + s;

    setClockIn(time);
    setClockOut(time);
    setToggle(!toggle);
  };

  const getTime = () => {
    let time = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[time.getDay()];
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = months[time.getMonth()];
    let date = time.getDate();
    let year = time.getFullYear();
    return [`${day} ${month} ${date},${year}`];
  };

  return (
    <div className="dash">
      <Header />
      <div className="section-1">
        <div className="namebox">
          {authUser ? (
            <>
              <p>Hello {authUser.email.split("@")[0].toUpperCase()}</p>
            </>
          ) : (
            <>{null}</>
          )}

          <div className="clock">
            <button onClick={handleClock}>
              {toggle ? "Clock out" : "ClockIN"}
            </button>
            <p>{clockIn}</p>
            <p>{clockout}</p>
          </div>
          <p>{getTime()}</p>
        </div>
        <div className="namebox">
          <img className="team" src={team} alt="teamSvg" />
          TEAM
        </div>
        <div className="namebox">No Of Leaves</div>
        <div className="namebox">No Of Projects completed</div>
      </div>
      <div className="section-2">
        <div className="timesheet">
          <img className="schedule" src={timesheet} alt="timesheet" />
          Timesheet
        </div>
        <div className="timesheet">
          <img className="pic" src={tele} alt="timesheet" />
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
