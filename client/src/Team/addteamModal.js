import React, { useState } from "react";
import "./teamModel.css";

const AddTeamModal = ({ showModal, closeModal, addTeam }) => {
  const [teamName, setTeamName] = useState("");
  const [teamDesc, setTeamDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (teamName && teamDesc) {
      const newTeam = {
        Team: teamName,
        desc: teamDesc,
      };
      addTeam(newTeam);
    }
    closeModal();
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-content">
    
      <form className="form-box" onSubmit={handleSubmit}>
      <div className="close" onClick={closeModal}>
        &times;
      </div>
        <label>
          Team Name:
          <input
            type="text"
            value={teamName}
            className="team-input"
            onChange={(e) => setTeamName(e.target.value)}
          />
        </label>
        <label>
          Team Description:
          <textarea
            value={teamDesc}
            className="text-input"
            onChange={(e) => setTeamDesc(e.target.value)}
          />
        </label>
        <button type="submit">Add Team</button>
      </form>
    </div>
  );
};

export default AddTeamModal;
