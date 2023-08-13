import React from 'react'
import './Timesheet.css'
function PreviousTimesheet({objs,setOpenModel}) {
    console.log(objs.screenshots)
  return (
    <div className='Model'>
      <h3>Employee:-&nbsp;{objs.empName}-{objs.empId}</h3>
      <h3>Date:-&nbsp;{objs.date}</h3>
      <h3>Productivity:-&nbsp;{objs.productiveHrs}</h3>
      <h3>projectName:-&nbsp;{objs.projectName}</h3>
      <h3>Feature:-&nbsp;{objs.feature}</h3>
      <h3>Description:-{objs.description}</h3>
      <h3>Status:-&nbsp;{objs.status}</h3>
      {
        objs.screenshots.map((image)=>{
          console.log(image)
          return <div><img src={image} alt='screenshot' className='screenshot'></img> <br></br></div>
        })
        
      }
      <button style={{backgroundColor:"#5a2675",color:"white",padding:"10px",margin:"2%",borderRadius:"10px",alignSelf:"flex-end"}} onClick={()=>setOpenModel(true)}>Cancel</button>
    </div>
  )
}

export default PreviousTimesheet
