
import React, { useState, useEffect } from "react";
import LeaveInfoCards from "./leaveInfoCards";
import "./leaveEmp.css";
import axios from "axios";

function LeavePageEmp() {
  const [description, setDescription] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [leaveData, setLeaveData] = useState([]);
  const userId = "64ad796d4eb2abcfcc4cd41f"; 
const base_url="http://localhost:9000"
  const fetchEmployeeLeaves = () => {
    axios
      .get(`${base_url}/empLeave/${userId}`)
      .then((response) => {
        setLeaveData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee leaves:", error);
      });
  };

  useEffect(() => {
    fetchEmployeeLeaves();
  }, []);

  const handleApplyButton = () => {
    const newLeaveRequest = {
      reason: description,
      fromDate,
      toDate,
    };
    axios
      .post(`${base_url}/empLeave/${userId}`, newLeaveRequest)
      .then((response) => {
        console.log("Leave request created:", response.data);
        fetchEmployeeLeaves();
      })
      .catch((error) => {
        console.error("Error creating leave request:", error);
      });
  };

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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your leave reason"
            />

            <div className="dates">
              <label htmlFor="from-date">From Date:</label>
              <input
                type="date"
                id="from-date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />

              <span className="hyphen">-</span>

              <label htmlFor="to-date">To Date:</label>
              <input
                type="date"
                id="to-date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>

            <button className="apply-button" onClick={handleApplyButton}>
              Apply
            </button>
          </div>
        </div>
      </div>
      <LeaveInfoCards leaveData={leaveData} />
    </div>
  );
}

export default LeavePageEmp;
