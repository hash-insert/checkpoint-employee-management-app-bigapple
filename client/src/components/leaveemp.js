import React, { useState } from 'react';
import '../css/leaveemp.css';

const LeaveInfoCards = ({ leaveData }) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };
  return (
    <div className="leave-info-cards-container">
      {leaveData.map((leave, index) => (
        <div
          className={`leave-info-card ${index === activeCard ? 'active-card' : ''} ${getCardColorClass(leave.LeaveStatus)}`}
          key={index}
          onClick={() => handleCardClick(index)}
        >
          <h4>Title: {leave.reason}</h4>
          {index === activeCard && (
            <div className="leave-details">
              <p>Reason: {leave.reason}</p>
              <p>From Date: {formatDate(leave.fromDate)}</p>
              <p>To Date: {formatDate(leave.toDate)}</p>
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
