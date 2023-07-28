import React, { useState } from "react";

const AddTeamMemberForm = ({ addTeamMember }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMember = {
      name,
      role,
    };

    // Pass the new team member data back to the parent component (TeamPage)
    addTeamMember(newMember);

    // Clear the form fields after submission
    setName("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      {/* <label>
        Role:
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </label> */}

      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default AddTeamMemberForm;
