import React, { useEffect } from "react";
import Update from "./Update";
import { useState } from "react";
import "../css/profile.css";
const APIBASE = "http://localhost:9000";
const Profile = (props) => {
  const [userdata, setUserdata] = useState(false);
  const [userData, setUserData] = useState([]);
  const [updateData, setUpdateData] = useState({
    userName: "",
    designation: "",
    email: "",
    DOB: "",
    phone: "",
  });
  useEffect(()=>{
    getProfile();
  },[userdata]);
  const Userid = props.value;
console.log(props)
 const getProfile = async () =>{
      const res = await fetch(APIBASE+`/userById/${Userid}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      });
      const data = await res.json();
      setUserData(data);
  }
  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    setUpdate(true);
  };

  const handleCancel = () => {
    setUpdate(false);
    setUpdateData({
      userName: "",
      designation: "",
      email: "",
      DOB: "",
      phone: "",
    });
  };

  const handleSubmit = async() => {
    const newObject = Object.entries(updateData).reduce((acc, [key, value]) => {
      if (value && value.trim() !== "") {
        acc[key] = value;
      }
      return acc;
    }, {});
    const res = await fetch(APIBASE+`/updateUser/${Userid}`,{
      method : "PUT",
      headers : {
        "Content-type":"application/json"
      },
      body:JSON.stringify(newObject)
    })
    setUserdata(true);
    handleCancel();
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
        margin:"2%",
        marginTop:"2%",
        justifyContent: "center",
      }}
    >
      <section className="profile-box">
        {userData.map((user) => (
          <div key={user.userId}>
            <div className="profile-head">
            <h3 className="userId">{user.userName}-{user.userId}</h3>
            <img className="profile-img" src="https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1377d4/_orig/pixomatic_1572877223091.png" alt="Random image" />
            </div>
            {update ? (
              <div className="update-form"
              >
                <span className="staticData" style={{ textAlign: "left" }}>
                  Employee Name:
                </span>
                <input
                  className="updateData"
                  placeholder="Enter the Name"
                  name="userName"
                  value={updateData.userName}
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
                  name="DOB"
                  value={updateData.DOB}
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
              <div className="display-form">
                <span className="staticData" style={{ textAlign: "left" }}>
                  Employee Name:
                </span>
                <span className="dynamic" >
                  {user.userName}
                </span>
                <span className="staticData" style={{ textAlign: "left" }}>
                  Designation:
                </span>
                <span className="dynamic" >
                  {user.designation}
                </span>
                <span className="staticData" style={{ textAlign: "left" }}>
                  Email:
                </span>
                <span className="dynamic" >
                  {user.email}
                </span>
                <span className="staticData" style={{ textAlign: "left" }}>
                  Date of Birth:
                </span>
                <span className="dynamic" >
                  {user.DOB}
                </span>
                <span className="staticData" style={{ textAlign: "left" }}>
                  Phone number:
                </span>
                <span className="dynamic" >
                  {user.phone}
                </span>
                <span className="staticData" style={{ textAlign: "left" }}>
                  Number of Leaves:
                </span>
                <span className="dynamic" >
                  {user.noOfLeaves}
                </span>
              </div>
            )}
          </div>
        ))}
        <div className="updateProfile">
          {update ? (
            <div className="buttonContainer">
              <button className="submit" onClick={handleSubmit}>
                Submit
              </button>
              <button className="cancel" onClick={handleCancel}>
                Cancel
              </button>
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
