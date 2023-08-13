import React, { useEffect, useState } from 'react'
import './Timesheet.css'
import axios, { toFormData } from 'axios'
function PreviousBlocks({ setOpenModel, setObjs, userid }) {
  console.log(userid)
  const [obj, setObj] = useState([]);
  let id = 0;
  useEffect(() => {
    axios.get(`http://localhost:9000/auth/timesheet/${userid}`)
      .then((x) => { setObj(x.data); console.log(x.data, typeof x.data) })
  }, [])

  function popup(x) {
    setObjs(x);
    setOpenModel(false)
  }

  return (
    <div className='previoustimesheets'>
      {
        obj.map((obj) =>
          <div className='timesheetblock'  >
            <div className='timesheetsheader'>
              <h6>{obj.date}</h6>
              <h6 className='timesheetHrs'>Productive Hrs:-{obj.productiveHrs} </h6>
            </div>
            <div className='innerblock'>
              <div className='timesheetdetails'>
                <h6>Employee:-</h6>
                <p>{obj.empName}-{obj.empId}</p>
              </div>
              <div className='timesheetdetails'>
                <h6>Feature:-</h6>
                <p>{obj.feature} </p>
              </div>
              <div className='timesheetdetails'>
                <h6>Status:-</h6>
                <p>{obj.status} </p>
              </div>
              <p>for timesheet screenshots click <a onClick={() => popup(obj)} style={{color:"#5a2675",fontWeight:"bold"}}>here</a></p>
            </div>
          </div>
          )}
    </div>
  )
}

export default PreviousBlocks
