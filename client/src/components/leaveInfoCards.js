import React, { useState } from 'react';
import "./leaveinfo.css";

const LeaveInfoCards = ({ leaveData }) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <div className="leave-info-cards-container">
      <h2>Previous Leaves</h2>
      {leaveData.map((leave, index) => (
        <div
          className={`leave-info-card ${index === activeCard ? 'active' : ''}`}
          key={index}
          onClick={() => handleCardClick(index)}
        >
          <h4>Title: {leave.title}</h4>
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

export default LeaveInfoCards;
