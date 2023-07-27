import React from "react";
import "../css/backdrop.css";
const Backdrop = ({ setBackdrop,setEmployeeCard }) => {
  const handleClick = () => {
    setBackdrop(false);
    setEmployeeCard(false);
  };
  return <div className="backdrop" onClick={handleClick}></div>;
};

export default Backdrop;
