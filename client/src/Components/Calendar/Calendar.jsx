import {useState} from 'react';
import Calendar from 'react-calendar'; 
import "./calender.css"
import Header from '../Header/Header';


function GetCalendar() {
 const [date, setDate] = useState(new Date())



return (
  <>
 <Header/>

 <div className="box1">
   <h1 className="header">React Calendar</h1>
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date}/>
   </div>
   <div className="text-center">
      Selected date: {date.toDateString()}
   </div>
 </div>
 </>
  )

}

export default GetCalendar ;