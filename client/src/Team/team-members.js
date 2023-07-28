import { useState } from "react";
import "./team-member.css";


// import React from 'react';

// const TeamMember = ({ name, role, photoUrl, description }) => {
//   return (
//     <div className="team-member">
//       <img src={photoUrl} alt={name} />
//       <h2>{name}</h2>
//       <h3>{role}</h3>
//       <p>{description}</p>
//     </div>
//   );
// };

// export default TeamMember;


function TeamMembers(props) {

  
  const [employees, setEmployees] = useState([
    "John",
    "Elena",
    "Zack",
    "Roonie",
    "Hailey",
  ]);

  const handleAddEmp = (value) => {
   

    setEmployees([...employees, value]);
    console.log(employees);
  };

  return (
    <>
      <div className="card">
        <h1>Team Name</h1>
        <h2>Project Name</h2>
        <h2>Team Lead</h2>
        <ul className="emp">
          {employees.map((name, i) => {
            return <li key={i}>{name}</li>;
          })}
        </ul>
      </div>
      <div className="Empbtn">
        <button onClick={handleAddEmp}>AddEmp</button>
      </div>
    </>
  );
}

export default TeamMembers;
