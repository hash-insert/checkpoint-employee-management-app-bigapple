import React, { useEffect, useState } from 'react';
import "../css/TimesheetAdmin.css";
import NavbarUser from '../components/Navbar/NavbarUser';
// import Backdrop from '@mui/material/Backdrop';
// import { Button } from '@mui/material';

const APIBASE = "http://localhost:9000";

export default function TimeSheetsAdmin(props) {
  const [resobj, setResObj] = useState([]);
  const [backdropset, setBackdrop] = useState(false);
  const [msgofpage, setMsgofpage] = useState("");
  const [screenshots, setScreenshots] = useState([]);
  const { setTimesheetsData, timesheetsdata } = props.value;
  console.log(timesheetsdata);

  useEffect(() => {
    if (timesheetsdata === "") {
      setTimesheetsData(JSON.parse(sessionStorage.getItem("timesheetsdata")));
    } else {
      window.sessionStorage.setItem("timesheetsdata", JSON.stringify(timesheetsdata));
    }
    getTimesheets();
    if (timesheetsdata === "allAcceptedTimesheets") setMsgofpage("Approved Timesheets of Employees");
    else if (timesheetsdata === "allrejectedtimesheets") setMsgofpage("Rejected Timesheets of Employees")
    else setMsgofpage(`Employees Timesheets on ${(timesheetsdata.substr(20)).split("-").reverse().join("/")}`)
  }, [timesheetsdata])

  const getTimesheets = async () => {
    const res = await fetch(APIBASE + `/auth/${timesheetsdata}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const obj = await res.json();
    setResObj(obj)
    console.log(obj)
  }
  const updatestatus = async (id, status) => {
    if (window.confirm("Are sure for the change")) {
      const res = await fetch(APIBASE + `/auth/updateTimeSheet`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "id": `${id}`,
          "status": `${status}`
        })
      })
      if (res) getTimesheets();
    }
  }
  const handlescreenshots = (shots) => {
    setScreenshots(shots);
    setBackdrop(true)
  }

  return (
    <>
      <NavbarUser />
      {backdropset ?
        <div className='Screenshotsmain'>
          <div className='screenshotback'>
            <button style={{ position: "absolute", right: 0, top: 0 }} onClick={() => setBackdrop(false)}>❌</button>
            {
              (screenshots.length === 0)?
              <div>
                The Employee didnot submit any time sheets.
              </div>:
              <div style={{height:"100%",overflowY:"scroll",padding:"1%"}}>
              {
                screenshots.map((item) =>
                  <div className='screenshotimg'>
                    <img src={item}></img>
                  </div>
                )
              }
              </div>
            }
          </div>
        </div>
        :
        ""
      }
      {(resobj.length === 0) ?
        <div className='EmptyTimesheets'>
          <h5>There are no timesheets for the time being comeback later.</h5>
          <img src='/TimesheetsSVG.svg' alt='TimesheetsSVG.svg' />
        </div>
        :
        <>
          <h5 style={{ textAlign: "center" }}>{msgofpage}</h5>
          <div className='timesheetmain'>
            {resobj.map((item) =>
              <div className='cardsheet'>
                <div className='cardheader'>
                  <h5>{(item.date).split("-").reverse().join("/")}</h5>
                  <h5>Productive Hrs:-{item.productiveHrs}</h5>
                </div>
                <div className='insidecard'>
                  <div className='tagpclass'>
                    <h5>Employee:-</h5>
                    <p>{item.empName}-{item.empId}</p>
                  </div>
                  <div className='tagpclass'>
                    <h5>Project:-</h5>
                    <p>{item.projectName}</p>
                  </div>
                  <div className='tagpclass'>
                    <h5>Feature:-</h5>
                    <p>{item.feature}</p>
                  </div>
                  <div className='tagpclass'>
                    <h5>Status:-</h5>
                    <p>{item.status}</p>
                  </div>
                  <div className='tagpclass'>
                    For timesheets screenshoots click&nbsp;
                    <button style={{ color: "#9d72b3" }} onClick={() => handlescreenshots(item.screenshots)}>view shots</button>
                  </div>
                  <div className='timeSheetbuttons'>
                    <div style={{ backgroundColor: "lightgreen", display: timesheetsdata === "allAcceptedTimesheets" ? "none" : "" }} onClick={() => updatestatus(item._id, "Approved")}>Approve</div>
                    <div style={{ backgroundColor: "#f2666c", display: timesheetsdata === "allrejectedtimesheets" ? "none" : "" }} onClick={() => updatestatus(item._id, "Rejected")}>Reject</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      }
    </>
  )
}
