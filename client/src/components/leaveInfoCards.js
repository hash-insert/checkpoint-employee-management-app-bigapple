import React, { useState } from 'react';
import './leaveinfo.css';

const LeaveInfoCards = ({ leaveData }) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <div className="leave-info-cards-container">
      {leaveData.map((leave, index) => (
        <div
          className={`leave-info-card ${index === activeCard ? 'active' : ''} ${getCardColorClass(leave.LeaveStatus)}`}
          key={index}
          onClick={() => handleCardClick(index)}
        >
          <h4>Title: {leave.reason}</h4>
          {index === activeCard && (
            <div className="leave-details">
              <p>Reason: {leave.reason}</p>
              <p>From Date: {leave.fromDate}</p>
              <p>To Date: {leave.toDate}</p>
              <p>Leave Status: {leave.LeaveStatus}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
const getCardColorClass = (leaveStatus) => {
  switch (leaveStatus) {
    case 'Rejected':
      return 'rejected';
    case 'pending':
      return 'pending';
    case 'Approved':
      return 'approved';
    default:
      return '';
  }
};

export default LeaveInfoCards;
