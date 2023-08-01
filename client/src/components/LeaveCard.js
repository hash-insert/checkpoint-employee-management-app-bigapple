import React, { useState } from 'react';
import "./leaveCard.css"; 


const LeaveCard = ({ leave, onApproveReject }) => {
  const { userId, title,userName, reason, fromDate, toDate, LeaveStatus } = leave;
  const [rejectionReason, setRejectionReason] = useState("");
  const [showRejectionInput, setShowRejectionInput] = useState(false);



  const handleRejectClick = () => {
    if (showRejectionInput) {
      if (rejectionReason.trim() !== '') {
        onApproveReject(userId,"Rejected");
      }
      setShowRejectionInput(false);
      setRejectionReason("");
    } else {
      // Show Rejection Input
      setShowRejectionInput(true);
    }
  };
  const handleApproveClick = () => {
    onApproveReject(userId,"Approved");
}
  const handleRejectionReasonChange = (e) => {
    setRejectionReason(e.target.value);
  };

  return (
    <div className="leave-card-admin">
      <pre style={{ textAlign: "center", fontFamily: "'kanit', sans-serif", fontSize: "23px", color: "purple" }}>{userName}  </pre>
      <p>Reason: {reason}</p>
      <p>From Date: {fromDate}</p>
      <p>To Date: {toDate}</p>
      <p>Leave Status: {LeaveStatus}</p>
      {showRejectionInput && (
        <div className="rejection-input">
          <input
            type="text"
            value={rejectionReason}
            onChange={handleRejectionReasonChange}
            placeholder="Enter reason for rejection"
          />
        </div>
      )}
      <div className="button-group">
        {showRejectionInput ? (
          <>
            <button className="confirm-reject-button" onClick={handleRejectClick}>
              Confirm Reject
            </button>
            <button className="cancel-reject-button" onClick={handleRejectClick}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="approve-button" onClick={handleApproveClick}>
              Approve
            </button>
            <button className="reject-button" onClick={handleRejectClick}>
              Reject
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default LeaveCard;
