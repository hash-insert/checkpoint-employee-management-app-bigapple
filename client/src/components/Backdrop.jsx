import React from "react";
import "../css/backdrop.css";
const Backdrop = ({ setBackdrop,setEmployeeCard, setAddUserBackDrop,setAddUserForm }) => {
  const handleClick = () => {
    setBackdrop(false);
    setEmployeeCard(false);
    setAddUserBackDrop(false);
    setAddUserForm(false);
  };
  return <div className="backdrop" onClick={handleClick}></div>;
};

export default Backdrop;
