import { useState } from "react";



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

  
  const [employees, setEmployees] = useState([]);
  const[addEmp,setAddEmp]=useState("")


  const handleAddEmp = () => {
    setEmployees([...employees, addEmp]);
  
  };
  const removeEmp = (index) => {
    const remove = employees.filter((ele, i) => i !== index);
    setEmployees(remove);
  };


  return (
    <>
  <div className="card">
              <h1>Team</h1>
              <h2>Project Name</h2>
              <h2>Team Lead</h2>
              <ul className="emp">
                {employees.map((name, i) => {
                  return (
                    <li key={i}>
                      {name}
                      <button onClick={() => removeEmp(i)}>remove</button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="Empbtn">
              <input
                value={addEmp}
                onChange={(e) => {
                  setAddEmp(e.target.value);
                }}
              />
              <button onClick={handleAddEmp}>AddEmp</button>
            </div>
        
        
    </>
  )
   
              }


export default TeamMembers;
