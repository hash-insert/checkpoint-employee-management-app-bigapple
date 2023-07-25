import React, { useState} from 'react';
import LeaveCard from './LeaveCard';
import "./leavePageAdmin.css"; 

const initialLeaveData = [
  {
    userId: "user1",
    title: "Leave 1",
    reason: "Personal reasons",
    fromDate: "2023-07-25",
    toDate: "2023-07-28",

   
  },
  {
    userId: "user3",
    title: "Leave 2",
    reason: "Vacation",
    fromDate: "2023-08-10",
    toDate: "2023-08-15",
  
  },
  {
    userId: "user4",
    title: "Leave 2",
    reason: "Vacation",
    fromDate: "2023-08-10",
    toDate: "2023-08-15",
  
  },
  {
    userId: "user5",
    title: "Leave 2",
    reason: "Vacation",
    fromDate: "2023-08-10",
    toDate: "2023-08-15",
  
  }
];

function LeavePageAdmin() {
  const [leaveData, setLeaveData] = useState(initialLeaveData);
  const handleApproveReject = (userId) => {
    setLeaveData((prevData) => prevData.filter((leave) => leave.userId !== userId));
  };

  return (
    <div className="leave-page-admin">
      <h2 style={{ marginBottom: "5%" }}>Leaves</h2>
      <div className="leave-cards-container">
        {leaveData.map((leave) => (
          <LeaveCard key={leave.userId} leave={leave} onApproveReject={handleApproveReject} />
        ))}
      </div>
    </div>
  );
}

export default LeavePageAdmin;
