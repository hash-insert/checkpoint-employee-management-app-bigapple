import React, { useRef } from "react";
import { useNavigate } from "react-router";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "./Calender.css";

const Calendar = (props) => {
  const navigate = useNavigate();
  const calendarComponentRef = useRef(null);
  const setTimesheetsData = props.value;
  const handleDateClick = (arg) => {
    setTimesheetsData("/getTimesheetbyDate/"+arg.dateStr);
    navigate('/timesheetadmin');
    console.log(arg.dateStr);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        ref={calendarComponentRef}
        dateClick={handleDateClick}
        headerToolbar={{
          left: "title",
          right: "today prev,next prevYear,nextYear",
        }}
      />
    </div>
  );
};

export default Calendar;
