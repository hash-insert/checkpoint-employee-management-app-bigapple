import React from "react";
import Update from "./Update";
import { useState } from "react";
import "../css/profile.css";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [updateData, setUpdateData] = useState({
    username: "",
    designation: "",
    email: "",
    dateOfBirth: "",
    phone: "",
  });
  const [userData, setUserData] = useState([
    {
      userId: "Hash320",
      userName: "Nikhil",
      designation: "Software Engineer",
      email: "hash123@gmail.com",
      DOB: "15-09-1996",
      phone: 9496781523,
      NoOfLeaves: 0,
    },
  ]);
  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    setUpdate(true);
  };

  const handleCancel = () => {
    setUpdate(false);
    setUpdateData({
      username: "",
      designation: "",
      email: "",
      dateOfBirth: "",
      phone: "",
    });
  };

  const handleSubmit = () => {
    console.log(userName);
  };

  console.log(updateData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "2%",
        marginTop:"5%",
        justifyContent: "center",
      }}
    >
      <section
        style={{
          width: "100vw",
          height: "75vh",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 0px 15px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          borderRadius: "30px",
        }}
      >
        {userData.map((user) => (
          <div key={user.userId}>
            <h3>Hello {user.userId}</h3>
            {update ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                  columnGap: "1vw",
                  rowGap: "2vh",
                  padding: "3vw",
                }}
              >
                <span className="staticData" style={{ textAlign: "left" }}>
                  Employee Name:
                </span>
                <input
                  className="updateData"
                  placeholder="Enter the Name"
                  name="username"
                  value={updateData.username}
                  onChange={handleChange}
                />
                <span className="staticData" style={{ textAlign: "left" }}>
                  Designation:
                </span>
                <input
                  className="updateData"
                  placeholder="Enter Designation"
                  name="designation"
                  value={updateData.designation}
                  onChange={handleChange}
                />
                <span className="staticData" style={{ textAlign: "left" }}>
                  Email:
                </span>
                <input
                  className="updateData"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={updateData.email}
                  onChange={handleChange}
                />
                <span className="staticData" style={{ textAlign: "left" }}>
                  Date of Birth:
                </span>
                <input
                  type="date"
                  className="updateData"
                  name="dateOfBirth"
                  value={updateData.dateOfBirth}
                  onChange={handleChange}
                />
                <span className="staticData" style={{ textAlign: "left" }}>
                  Phone number:
                </span>
                <input
                  className="updateData"
                  type="number"
                  placeholder="Phone"
                  name="phone"
                  value={updateData.phone}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                  columnGap: "1vw",
                  rowGap: "2vh",
                  padding: "3vw",
                }}
              >
                <span className="staticData" style={{ textAlign: "left" }}>
                  Employee Name:
                </span>
                <span className="dynamic" style={{ textAlign: "left" }}>
                  {user.userName}
                </span>
                <span className="staticData" style={{ textAlign: "left" }}>
                  Designation:
                </span>
                <span className="dynamic" style={{ textAlign: "left" }}>
                  {user.designation}
                </span>
                <span className="staticData" style={{ textAlign: "left" }}>
                  Email:
                </span>
                <span className="dynamic" style={{ textAlign: "left" }}>
                  {user.email}
                </span>
                <span className="staticData" style={{ textAlign: "left" }}>
                  Date of Birth:
                </span>
                <span className="dynamic" style={{ textAlign: "left" }}>
                  {user.DOB}
                </span>
                <span className="staticData" style={{ textAlign: "left" }}>
                  Phone number:
                </span>
                <span className="dynamic" style={{ textAlign: "left" }}>
                  {user.phone}
                </span>
                <span className="staticData" style={{ textAlign: "left" }}>
                  Number of Leaves:
                </span>
                <span className="dynamic" style={{ textAlign: "left" }}>
                  {user.NoOfLeaves}
                </span>
              </div>
            )}
          </div>
        ))}
        <div className="updateProfile">
          {update ? (
            <div className="buttonContainer">
              <button className="submit" onClick={handleSubmit}>Submit</button>
              <button className="cancel" onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <button onClick={handleUpdate} className="updateButton">
              Update
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Profile;
