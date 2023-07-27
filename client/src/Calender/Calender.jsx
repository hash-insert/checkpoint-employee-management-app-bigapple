import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "./Calender.css";


export default class Calendar extends React.Component {
  calendarComponentRef = React.createRef();
  render() {
    return (
      <div>
        <div>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }
  handleDateClick = (arg) => {
    console.log(arg.dateStr);
  };
}