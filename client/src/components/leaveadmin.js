import React, { useState } from 'react';
import '../css/leaveadmin.css';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

const LeaveCard = ({ leaveData, onUpdateLeaveStatus }) => {
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectionInput, setShowRejectionInput] = useState({});
  
  const handleRejectClick = (leaveId) => {
    if (showRejectionInput[leaveId]) {
      if (rejectionReason.trim() !== '') {
        onUpdateLeaveStatus(leaveId, 'Rejected');
      }
      setShowRejectionInput(prevState => ({ ...prevState, [leaveId]: false }));
      setRejectionReason('');
    } else {
      setShowRejectionInput(prevState => ({ ...prevState, [leaveId]: true }));
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
          <p>From Date: {formatDate(leave.fromDate)}</p>
          <p>To Date: {formatDate(leave.toDate)}</p>
          <p>Leave Status: {leave.LeaveStatus}</p>
          {showRejectionInput[leave._id] && (
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
            {showRejectionInput[leave._id] ? (
              <>
                <button className="confirm-reject-button" onClick={() => handleRejectClick(leave._id)}>
                  Confirm Reject
                </button>
                <button className="cancel-reject-button" onClick={() => handleRejectClick(leave._id)}>
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
