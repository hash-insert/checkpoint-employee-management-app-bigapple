import React, { useState, useEffect } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Heading,
  Button,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import "../css/addteam.css";
import { Input } from "@chakra-ui/react";
import { AddIcon, CheckIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";

const AddTeam = ({ setShowAddTeam, setBackdrop }) => {
  const [teamData, setTeamData] = useState({
    teamName: "",
    teamLead: "",
    projectName: "",
    about: "",
  });
  const [err, setErr] = useState({
    teamLeadErr: "",
    teamNameErr: "",
    projectNameErr: "",
    aboutErr: "",
    FinalErr: "",
  });
  const [showErr, setShowErr] = useState(false);
  const alphaAlphabetOnly = /^[A-Za-z]+$/;
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "teamLead") {
      if (value.trim() === "") {
        setErr({ ...err, teamLeadErr: "Field cannot be empty" });
      } else if (!alphaAlphabetOnly.test(value)) {
        setErr({ ...err, teamLeadErr: "Should contain only alphabets" });
      } else {
        setErr({ ...err, teamLeadErr: "" });
      }
    }
  
    setTeamData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setShowErr(false)
  };
  

  const handleTeamSubmit = () => {
    // check wether all the object values are not empty
    if (Object.values(teamData).some((value) => value === "")) {
      setErr({ ...err, FinalErr: "Cannot Submit Empty" });
      setShowErr(true);
    } else {
      // send the team data to the backend
      console.log(teamData);
      // set the team data to default
      setTeamData({
        teamName: "",
        teamLead: "",
        projectName: "",
        about: "",
      });
    }
  };
  const handleClose = () => {
    setShowAddTeam(false);
    setBackdrop(false);
  };
  return (
    <div className="addteam-card">
      <div className="close-icon">
        <CloseIcon onClick={handleClose} id="closeIcon-btn" />
      </div>
      <Card
        id="team-card"
        style={{ backgroundColor: "rgba(228, 228, 228, 0.699)" }}
      >
        <CardHeader>
          <Grid templateColumns="repeat(2, 2fr)" gap={4}>
            <GridItem w="100%" h="100%">
              <Heading size="md">Team Name:</Heading>
            </GridItem>
            <GridItem w="100%" h="100%">
              <input
                name="teamName"
                value={teamData.teamName}
                onChange={handleChange}
                id="teamName"
                placeholder="Team Name"
              />
            </GridItem>
            <GridItem w="100%" h="100%">
              <Heading size="md">Team Lead: </Heading>
            </GridItem>
            <GridItem w="100%" h="100%">
              <input
                name="teamLead"
                value={teamData.teamLead}
                onChange={handleChange}
                id="teamLead"
                placeholder="Team Lead"
              />
              {err.teamLeadErr.length > 0 && <p className="teamlead-err">{err.teamLeadErr}</p>}
            </GridItem>
            <GridItem w="100%" h="100%">
              <Heading size={"md"}>Project Name:</Heading>
            </GridItem>
            <GridItem w="100%" h="100%">
              <input
                name="projectName"
                value={teamData.projectName}
                onChange={handleChange}
                id="projectName"
                placeholder="Project Name"
              />
            </GridItem>
            <GridItem w="100%" h="100%">
              <Heading size={"md"}>About Project:</Heading>
            </GridItem>
          </Grid>
          <textarea
            name="about"
            value={teamData.about}
            onChange={handleChange}
            id="aboutProject"
            placeholder="About the Project"
          />
        </CardHeader>
        {showErr && <p className="add-team-err">{err.FinalErr}</p>}
        <CardFooter>
          <div className="submit-btns">
            <div>
              <Button onClick={handleTeamSubmit} id="submit-icon">
                <CheckIcon />
              </Button>
            </div>
            <div>
              <Button onClick={handleClose} id="cancelicon">
                <CloseIcon />
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddTeam;
