import { useState } from "react";
import "./team-member.css";

function TeamMembers(props) {
  const [employees, setEmployees] = useState([]);
  const [addEmp, setAddEmp] = useState("");
  const[teamName,setTeamName]=useState("")

  const handleAddEmp = () => {
    setEmployees([...employees, addEmp]);
  };
  const removeEmp = (index) => {
    const remove = employees.filter((ele, i) => i !== index);
    setEmployees(remove);
  };

  return (
    <div className="card-container">
      <div className="team-card">
        <h1>{props.team}</h1>
        <div className="proj-lead">
          <h2>Project Name</h2>
          <h2>Team Lead</h2>
        </div>
        <ul className="emp">
          {employees.map((name, i) => {
            return (
              <li key={i}>
                {name}
                <button className="x-btn" onClick={() => removeEmp(i)}>
                  X
                </button>
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
    </div>
  );
}

export default TeamMembers;
