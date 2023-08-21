import React, { useState,useEffect } from "react";
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
import { Input } from "@chakra-ui/react";
import { AddIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
const Team = ({ teamdetail, setBackdrop, setShowTeam }) => {
  const handleClose = () => {
    setBackdrop(false);
    setShowTeam(false);
  };
  const [showUpdate, setShowUpdate] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [newteammate, setNewTeammate] = useState("");
  const [showErr, setShowErr] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [err, setErr] = useState("");
  const [cardContentHeight,setCardConetentHeight] = useState(0)
  useEffect(() => {
    if (teamdetail.teamMembers.length > 0) {
      setTeamMembers(teamdetail.teamMembers);
      setCardConetentHeight(teamdetail.teamMembers.length);
    }
  }, [teamdetail.teamMembers]);
  const handleAdd = () => {
    setShowUpdate(true);
    setShowInput(true);
  };
  const handleCancel = () => {
    setShowUpdate(false);
    setShowInput(false);
    setErr("");
    setShowErr(false);
  };
  const handleUpdate = () => {
    if (newteammate.length === 0) {
      setErr("Please Enter Correct Value");
      setShowErr(true);
    }
  };
  const handleDelete = (member) => {
    const updatedTeamMembers = teamdetail.teamMembers.filter(
      (item) => item.name !== member.name
    );
    setTeamMembers(updatedTeamMembers);
  };
  return (
    <div
      className="team-card"
      style={{ overflowY: cardContentHeight >= 2 ? "scroll" : "hidden" }}
    >
      <div className="close-icon">
        <CloseIcon onClick={handleClose} id="closeIcon-btn" />
      </div>
      <Card
        id="team-card"
        style={{ backgroundColor: "rgba(228, 228, 228, 0.699)" }}
        key={teamdetail.id}
      >
        <CardHeader>
          <Grid templateColumns="repeat(2, 2fr)" gap={4}>
            <GridItem w="100%" h="100%">
              <Heading size="md">Team Name:</Heading>
            </GridItem>
            <GridItem w="100%" h="100%">
              <Heading size="md"> {teamdetail.teamName}</Heading>
            </GridItem>
            <GridItem w="100%" h="100%">
              <Heading size="md">Team Lead: </Heading>
            </GridItem>
            <GridItem w="100%" h="100%">
              <Heading size="md">{teamdetail.teamLead}</Heading>
            </GridItem>
            <GridItem w="100%" h="100%">
              <Text fontSize={"lg"} fontWeight={"700"}>
                Project Name:
              </Text>
            </GridItem>
            <GridItem w="100%" h="100%">
              <Text fontSize={"md"} fontWeight={"500"}>
                {teamdetail.projectName}
              </Text>
            </GridItem>
          </Grid>
        </CardHeader>
        <CardBody>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem w="100%" h="100%">
              <Text
                style={{ marginBottom: "30px" }}
                fontSize={"lg"}
                fontWeight={"700"}
              >
                Team Members :
              </Text>
            </GridItem>
            <GridItem>
              <div className="add-icon">
                {showUpdate ? (
                  <div id="buttons">
                    <Button id="update-btn" onClick={handleUpdate}>
                      Update
                    </Button>
                    <Button id="cancel-btn" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button onClick={handleAdd} id="addicon-btn">
                    <AddIcon style={{ color: "white" }} />
                  </Button>
                )}
              </div>
            </GridItem>
          </Grid>
          {showInput && (
            <div className="add-teammate">
              <div className="input-field">
                <Text className="enter-txt">Enter the TeamMate: </Text>
                <input
                  id="input-teammate"
                  value={newteammate}
                  onChange={(e) => {
                    setNewTeammate(e.target.value);
                    setErr("");
                    setShowErr(false);
                  }}
                  style={{ width: "60%" }}
                  placeholder="Teammate"
                />
              </div>
              <div className="err-msg">{showErr && <p>{err}</p>}</div>
            </div>
          )}
          {teamMembers.map((member) => (
            <div className="team-members">
              <Text>{member.name}</Text>
              <DeleteIcon
                onClick={() => handleDelete(member)}
                className="delete-icon"
              />
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default Team;
