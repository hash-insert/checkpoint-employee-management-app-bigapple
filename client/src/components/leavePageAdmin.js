import React, { useState,useEffect} from 'react';
import LeaveCard from './LeaveCard';
import "./leavePageAdmin.css"; 

const initialLeaveData = [
  {
    userId: "1",
    userName:"Bhoomika",
    title: "Leave 1",
    reason: "personal reason",
    fromDate: "2023-07-25",
    toDate: "2023-07-28",
    LeaveStatus: "Pending",
   
  },
  {
    userId: "3",
    userName:"Tharun",
    title: "Leave 2",
    reason: "Vacation",
    fromDate: "2023-08-10",
    toDate: "2023-08-15",
    LeaveStatus: "Pending",
  },
  {
    userId: "4",
    userName:"Nikhil",
    title: "Leave 3",
    reason: "Vacation",
    fromDate: "2023-08-10",
    toDate: "2023-08-15",
    LeaveStatus: "Pending",
  },
  {
    userId: "5",
    title: "Leave 4",
    userName:"kaushik",
    reason: "Vacation",
    fromDate: "2023-08-10",
    toDate: "2023-08-15",
    LeaveStatus: "Pending",
  },
  {
    userId: "6",
    title: "Leave 6",
    userName:"sathwik",
    reason: "Vacation",
    fromDate: "2023-08-10",
    toDate: "2023-08-15",
    LeaveStatus: "Pending",
  }
];

function LeavePageAdmin() {
  const [leaveData, setLeaveData] = useState(initialLeaveData);
  const [approvedLeaves, setApprovedLeaves] = useState([]);
  const [rejectedLeaves, setRejectedLeaves] = useState([]);
  useEffect(() => {
    console.log("Updated approvedLeaves:", approvedLeaves);
  }, [approvedLeaves]);

  useEffect(() => {
    console.log("Updated rejectedLeaves:", rejectedLeaves);
  }, [rejectedLeaves]);
  const handleApproveReject = (userId, status) => {
    const updatedLeaveData = leaveData.map((leave) => {
      if (leave.userId === userId) {
        return {
          ...leave,
          LeaveStatus: status === "Approved" ? "Approved" : "Rejected",
        };
      }
      return leave;
    });

    if (status === "Approved") {
      const approvedLeave = updatedLeaveData.find((leave) => leave.userId === userId);
      setApprovedLeaves((prevLeaves) => [...prevLeaves, approvedLeave]);
    } else if (status === "Rejected") {
      const rejectedLeave = updatedLeaveData.find((leave) => leave.userId === userId);
      setRejectedLeaves((prevLeaves) => [...prevLeaves, rejectedLeave]);
    }

    setLeaveData((prevData) => prevData.filter((leave) => leave.userId !== userId));
  };

  return (
    <div className="leave-page-admin">
      <div className="leave-cards-container">
        {leaveData.map((leave) => (
          <LeaveCard key={leave.userId} leave={leave} onApproveReject={handleApproveReject} />
        ))}
      </div>
    </div>
  );
}

export default LeavePageAdmin;
