import React from "react";
import "../css/backdrop.css";
const Backdrop = ({
  setShowAddTeam,
  setShowTeam,
  setBackdrop,
  setEmployeeCard,
  setAddUserBackDrop,
  setAddUserForm,
}) => {
  const handleClick = () => {
    setBackdrop(false);
    setEmployeeCard(false);
    setAddUserBackDrop(false);
    setAddUserForm(false);
    setShowTeam(false);
    setShowAddTeam(false);
  };
  return <div className="backdrop" onClick={handleClick}></div>;
};

export default Backdrop;
