import React, { useState, useEffect } from 'react';
import LeaveCard from '../components/leaveadmin';
import '../css/leavePageAdmin.css';
import Navbar from "../components/Navbar/NavbarUser"
import axios from 'axios';
function LeavePageAdmin() {
  const [leaveData, setLeaveData] = useState([]);

  useEffect(() => {
    fetchPendingLeaves();
  }, []);

  const fetchPendingLeaves = () => {
    axios
      .get('http://localhost:9000/empLeave/') 
      .then((response) => {
        setLeaveData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching pending leaves:', error);
      });
  };

  const updateLeaveStatus = (id, status) => {
    axios
      .put(`http://localhost:9000/empLeave/${id}`, { LeaveStatus: status })
      .then(() => {
        console.log(`LeaveStatus updated to ${status} for userId ${id}`);
        fetchPendingLeaves();
      })
      .catch((error) => {
        console.error('Error updating LeaveStatus:', error);
      });
  };

  return (
    <>
      <Navbar/>
    <div className="leave-page-admin">
      <div className="leave-cards-container">
        <LeaveCard leaveData={leaveData} onUpdateLeaveStatus={updateLeaveStatus} />
      </div>
      </div>
      </>
  );
}

export default LeavePageAdmin;