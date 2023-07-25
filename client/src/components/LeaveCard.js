import React from 'react';
import "./leaveCard.css"; 

const LeaveCard = ({ leave, onApproveReject }) => {
  const { userId, title, reason, fromDate, toDate, LeaveStatus } = leave;

  const handleApproveRejectClick = () => {
    onApproveReject(userId);
  };

  return (
    <div className="leave-card-admin">
      <h3>Title: {title}</h3>
      <p>Reason: {reason}</p>
      <p>From Date: {fromDate}</p>
      <p>To Date: {toDate}</p>
      <p>Leave Status: {LeaveStatus}</p>
      <div className="button-group">
      <button className="approve-button" onClick={handleApproveRejectClick}>Approve</button>
        <button className="reject-button" onClick={handleApproveRejectClick}>Reject</button>
      </div>
    </div>
  );
};

export default LeaveCard;
