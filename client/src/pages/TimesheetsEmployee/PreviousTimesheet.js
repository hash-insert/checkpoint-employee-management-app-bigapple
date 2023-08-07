import React from 'react'
import './Timesheet.css'
function PreviousTimesheet({objs,setOpenModel}) {
    console.log(objs.screenshots)
  return (
    <div className='Model'>
      <h3>{objs.feature}</h3>
      <h3>{objs.description}</h3>
      {
        objs.screenshots.map((image)=>{
          console.log(image)
          return <div><img src={image} alt='screenshot' className='screenshot'></img> <br></br></div>
        })
        
      }
      <button onClick={()=>setOpenModel(true)}>Cancel</button>
    </div>
  )
}

export default PreviousTimesheet
