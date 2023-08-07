import React, { useState } from "react";
import "../css/addUser.css";
import { AiOutlineClose } from "react-icons/ai";
import { GrFormNextLink, GrLinkNext } from "react-icons/gr";

const Adduser = ({setAddUserBackDrop,setAddUserForm}) => {
  const [userData, setUserData] = useState({
    username: "",
    designation: "",
    email: "",
    password: "",
    dateOfBirth: "",
    phone: "",
    empid: "",
    role: "",
  });
  const [err, setErr] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErr("")
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (Object.values(userData).some((value) => value === "")) {
      setErr("Cannot submit empty");
    } else {
      setErr("");
      setUserData({
        username: "",
        designation: "",
        email: "",
        password: "",
        dateOfBirth: "",
        phone: "",
        empid: "",
        role: "",
      });
      console.log(userData);
    }
  };
  const handleClose = ()=>{
    setAddUserBackDrop(false);
    setAddUserForm(false);
  }
  return (
    <div className="adduser-box">
      <div className="close">
        <AiOutlineClose onClick={handleClose} className="close-btn" />
      </div>
      <div className="add-user-form"
      >
        <span className="staticData" style={{ textAlign: "left" }}>
          Employee ID:
        </span>
        <input
          className="userData"
          placeholder="Enter the Employee ID"
          name="empid"
          value={userData.empid}
          onChange={handleChange}
        />
        <span className="staticData" style={{ textAlign: "left" }}>
          Employee Name:
        </span>
        <input
          className="userData"
          placeholder="Enter the Name"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <span className="staticData" style={{ textAlign: "left" }}>
          Employee Role:
        </span>
        <input
          className="userData"
          placeholder="Enter the Role"
          name="role"
          value={userData.role}
          onChange={handleChange}
        />
        <span className="staticData" style={{ textAlign: "left" }}>
          Designation:
        </span>
        <input
          className="userData"
          placeholder="Enter Designation"
          name="designation"
          value={userData.designation}
          onChange={handleChange}
        />
        <span className="staticData" style={{ textAlign: "left" }}>
          Email:
        </span>
        <input
          className="userData"
          type="email"
          placeholder="Enter Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <span className="staticData" style={{ textAlign: "left" }}>
          Employee Password:
        </span>
        <input
          className="userData"
          placeholder="Enter the Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <span className="staticData" style={{ textAlign: "left" }}>
          Date of Birth:
        </span>
        <input
          type="date"
          className="userData"
          name="dateOfBirth"
          value={userData.dateOfBirth}
          onChange={handleChange}
        />
        <span className="staticData" style={{ textAlign: "left" }}>
          Phone number:
        </span>
        <input
          className="userData"
          type="number"
          placeholder="Phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="button-submit">
        <button onClick={handleSubmit}>
          <GrFormNextLink className="submit-btn" />
        </button>
      </div>
      <div>
        <p style={{ color: "red" }}>{err}</p>
      </div>
    </div>
  );
};

export default Adduser;
