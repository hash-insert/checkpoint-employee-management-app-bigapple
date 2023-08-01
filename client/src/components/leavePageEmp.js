
import React from "react";
import LeaveInfoCards from "./leaveInfoCards";
import "./leaveEmp.css";

function LeavePageEmp() {
  const leaveData = [
    {
      title: "Leave 1",
      reason: "Personal reasons",
      fromDate: "2023-07-25",
      toDate: "2023-07-28",
      LeaveStatus: "Approved",
    },
    {
      title: "Leave 2",
      reason: "Vacation",
      fromDate: "2023-08-10",
      toDate: "2023-08-15",
      LeaveStatus: "Pending",
    },
    {
      title: "Leave 2",
      reason: "Vacation",
      fromDate: "2023-08-10",
      toDate: "2023-08-15",
      LeaveStatus: "Pending",
    },
    {
      title: "Leave 2",
      reason: "Vacation",
      fromDate: "2023-08-10",
      toDate: "2023-08-15",
      LeaveStatus: "Rejected",
    }
  ];

  return (
    <div>
      <div className="leave">
        <div className="leave-card">
          <h2>Apply for Leave</h2>
          <div className="input-container">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              placeholder="Enter your leave reason"
            />

            <div className="dates">
              <label htmlFor="from-date">From Date:</label>
              <input type="date" id="from-date" />

              <span className="hyphen">-</span>

              <label htmlFor="to-date">To Date:</label>
              <input type="date" id="to-date" />
            </div>

            <button className="apply-button">Apply</button>
          </div>
        </div>
      </div>
      <LeaveInfoCards leaveData={leaveData} />
    </div>
  );
}

export default LeavePageEmp;
