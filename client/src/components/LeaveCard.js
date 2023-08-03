import React, { useState } from 'react';
import './leaveCard.css';

const LeaveCard = ({ leaveData, onUpdateLeaveStatus }) => {
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectionInput, setShowRejectionInput] = useState(false);

  const handleRejectClick = (leaveId) => {
    if (showRejectionInput) {
      if (rejectionReason.trim() !== '') {
        onUpdateLeaveStatus(leaveId, 'Rejected');
      }
      setShowRejectionInput(false);
      setRejectionReason('');
    } else {
      setShowRejectionInput(true);
    }
  };

  const handleApproveClick = (leaveId) => {
    onUpdateLeaveStatus(leaveId, 'Approved');
  };

  const handleRejectionReasonChange = (e) => {
    setRejectionReason(e.target.value);
  };

  return (
    <>
      {leaveData.map((leave) => (
        <div key={leave._id} className="leave-card-admin">
          <pre style={{ textAlign: 'center', fontFamily: "'kanit', sans-serif", fontSize: '23px', color: 'purple' }}>
            {leave.userName}{' '}
          </pre>
          <p>Reason: {leave.reason}</p>
          <p>From Date: {leave.fromDate}</p>
          <p>To Date: {leave.toDate}</p>
          <p>Leave Status: {leave.LeaveStatus}</p>
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
                <button className="confirm-reject-button" onClick={() => handleRejectClick(leave._id)}>
                  Confirm Reject
                </button>
                <button className="cancel-reject-button" onClick={handleRejectClick}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button className="approve-button" onClick={() => handleApproveClick(leave._id)}>
                  Approve
                </button>
                <button className="reject-button" onClick={() => handleRejectClick(leave._id)}>
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default LeaveCard;
