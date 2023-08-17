import React, { useState } from "react";
import Backdrop from "./Backdrop";
import { FiSearch } from "react-icons/fi";
import "../css/Teams.css";
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
} from "@chakra-ui/react";
import Team from "./Team";
import { MdGroupAdd } from "react-icons/md";
import AddTeam from "./AddTeam";
const TeamListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [backdrop, setBackdrop] = useState(false);
  const [teamDetails, setTeamDetails] = useState({});
  const [showTeam, setShowTeam] = useState(false);
  const [showAddteam, setShowAddTeam] = useState(false);
  const [employeeCard, setEmployeeCard] = useState(false);
  const [addUserBackDrop, setAddUserBackDrop] = useState(false);
  const [addUserForm, setAddUserForm] = useState(false);
  const [teams, setTeams] = useState([
    {
      id: "1",
      teamName: "BigApple",
      projectName: "Employee Management app",
      description:
        "Working on Employee APP,with the technologies called React,Node,Firebase",
      teamLead: "Bhargav",
      teamMembers: [
        { name: "Nikhil" },
        { name: "Tharun" },
        { name: "Tharun" },
        { name: "Tharun" },
      ],
    },
    {
      id: "2",
      teamName: "BigApple",
      projectName: "Movie app",
      description:
        "Working on Employee APP,with the technologies called React,Node,Firebase",
      teamLead: "Nikhil",
      teamMembers: [],
    },
    {
      id: "3",
      teamName: "BigApple",
      projectName: "Recipe app",
      description:
        "Working on Employee APP,with the technologies called React,Node,Firebase",
      teamLead: "Tharun",
      teamMembers: [],
    },
  ]);
  const [filtered, setFiltered] = useState(teams);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setFiltered(
      teams.filter(
        (item) =>
          item.teamLead.toLowerCase().includes(value.toLowerCase()) ||
          item.teamName.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleTeam = (teamdetails) => {
    setTeamDetails(teamdetails);
    setBackdrop(true);
    setShowTeam(true);
  };
  const handleAddTeam = () => {
    setBackdrop(true);
    setShowAddTeam(true);
  };
  return (
    <div className="team-list">
      <div className="search-team">
        <div className="searchbar">
          <FiSearch className="searchicon" />
          <input
            className="search-bar"
            type="text"
            placeholder="Search Team"
            value={searchTerm}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
        <div className="add-team">
          <MdGroupAdd
            onClick={handleAddTeam}
            className="add-team-icon"
            color="#5a2675"
          />
        </div>
      </div>
      <div className="teams">
        <SimpleGrid
          width={"100%"}
          spacing={4}
          templateColumns={{
            base: "repeat(auto-fill, minmax(200px, 2fr))",
            md: "repeat(3, 1fr)",
          }}
        >
          {filtered.map((item) => (
            <Card
              style={{ backgroundColor: "rgba(228, 228, 228, 0.699)" }}
              key={item.id}
            >
              <CardHeader>
                <Grid templateColumns="repeat(2, 2fr)" gap={4}>
                  <GridItem w="100%" h="100%">
                    <Heading size="md">Team Name:</Heading>
                  </GridItem>
                  <GridItem w="100%" h="100%">
                    <Heading size="md"> {item.teamName}</Heading>
                  </GridItem>
                  <GridItem w="100%" h="100%">
                    <Heading size="md">Team Lead: </Heading>
                  </GridItem>
                  <GridItem w="100%" h="100%">
                    <Heading size="md">{item.teamLead}</Heading>
                  </GridItem>
                  <GridItem w="100%" h="100%">
                    <Text fontSize={"lg"} fontWeight={"700"}>
                      Project Name:
                    </Text>
                  </GridItem>
                  <GridItem w="100%" h="100%">
                    <Text fontSize={"md"} fontWeight={"500"}>
                      {item.projectName}
                    </Text>
                  </GridItem>
                </Grid>
              </CardHeader>
              <CardBody>
                <Grid>
                  <GridItem w="100%" h="100%">
                    <Text fontSize={"lg"} fontWeight={"700"}>
                      About Project :
                    </Text>
                  </GridItem>
                </Grid>
                <Text>{item.description}</Text>
              </CardBody>
              <CardFooter className="card-footer">
                <div className="team-next">
                  <Button onClick={() => handleTeam(item)} id="next-btn">
                    <ArrowForwardIcon id="right-arrow" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
          {showTeam && (
            <Team
              setBackdrop={setBackdrop}
              setShowTeam={setShowTeam}
              teamdetail={teamDetails}
            />
          )}
          {showAddteam && (
            <AddTeam
              setBackdrop={setBackdrop}
              setShowAddTeam={setShowAddTeam}
            />
          )}
          {backdrop && (
            <Backdrop
              setBackdrop={setBackdrop}
              setEmployeeCard={setEmployeeCard}
              setAddUserBackDrop={setAddUserBackDrop}
              setAddUserForm={setAddUserForm}
              setShowTeam={setShowTeam}
              setShowAddTeam={setShowAddTeam}
            />
          )}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default TeamListing;
