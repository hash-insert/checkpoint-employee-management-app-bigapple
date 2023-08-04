import React, { useState, useContext } from "react";
import { Card, CardBody, Grid, GridItem } from "@chakra-ui/react";
import { Image, Stack, Heading, Text } from "@chakra-ui/react";
import "../css/employeecard.css";
import { EmployeeContext } from "../context/employeeDetail";
import EmployeeCard from "./EmployeeCard";
import Backdrop from "./Backdrop";
import { FiSearch } from "react-icons/fi";

const EmployeesCard = () => {
  const [empDetails, setEmpDetails] = useState([
    {
      empId: "Hash310",
      name: "John",
      designation: "Software engineer",
      DOB: "23/08/1990",
      teamname: "BigApple",
      profileImg:
        "https://media.istockphoto.com/id/1355110818/photo/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=T39jUOOjC8H-Op0cfd-uiNXk1a2XBn1sXkQbKIWwY7E=",
    },
    {
      empId: "Hash3180",
      name: "Landa",
      designation: "Software engineer",
      DOB: "23/08/1990",
      teamname: "BigApple",
      profileImg:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-2381069.jpg&fm=jpg",
    },
    {
      empId: "Hash315",
      name: " Wick",
      designation: "Software engineer",
      DOB: "23/08/1990",
      teamname: "BigApple",
      profileImg:
        "https://media.istockphoto.com/id/1132793417/photo/positivity-produces-success.jpg?s=612x612&w=0&k=20&c=Vak0Cam-GSVP0AnadPtC3yb_1K1O_IaLAgcwaoOg0HQ=",
    },
    {
      empId: "Hash320",
      name: "Alesa",
      designation: "Software engineer",
      DOB: "23/08/1990",
      teamname: "BigApple",
      profileImg:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-2381069.jpg&fm=jpg",
    },
  ]);
  const { setEmployee } = useContext(EmployeeContext);
  const [backdrop, setBackdrop] = useState(false);
  const [employeeCard, setEmployeeCard] = useState(false);
  const handleClick = (item) => {
    setEmployee(item);
    setBackdrop(true);
    setEmployeeCard(true);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmpDetails, setFilteredEmpDetails] = useState(empDetails);
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredWithName = empDetails.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    const filterWithID = empDetails.filter((item) =>
      item.empId.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredEmpDetails(
      filteredWithName.length > 0 ? filteredWithName : filterWithID
    );
  };
  return (
    <>
    <div className="employees-container">
      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="search"
          value={searchTerm}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <div></div>
      </div>
      <div className="card-container">
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap={6}
        >
          {filteredEmpDetails.map((item) => (
            <Card
              direction={{ base: "column", md: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={item.empId}
              id="empcard"
              style={{ backgroundColor: "rgba(228, 228, 228, 0.699)" }}
              onClick={() => handleClick(item)}
            >
              <div className="profile-image">
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px", md: "200px" }}
                  src={item.profileImg}
                  alt="profile images"
                  style={{
                    borderRadius: "100%",
                    width: "180px",
                    height: "180px",
                  }}
                />
                <div className="empname">
                  <Heading size="lg">{item.name}</Heading>{" "}
                </div>
              </div>

              <Stack>
                <CardBody>
                  <Grid templateColumns="repeat(2, 2fr)" gap={2}>
                    <GridItem w="100%" h="100%">
                      <Text py="1">
                        <strong>EMPLOYEE ID: </strong>
                      </Text>
                    </GridItem>
                    <GridItem w="100%" h="100%">
                      <Text py="1">{item.empId}</Text>
                    </GridItem>
                    <GridItem w="100%" h="100%">
                      <Text py="1">
                        <strong>DESIGNATION: </strong>
                      </Text>
                    </GridItem>
                    <GridItem w="100%" h="100%">
                      <Text py="1">{item.designation}</Text>
                    </GridItem>
                    <GridItem w="100%" h="100%">
                      <Text py="1">
                        <strong>DOB: </strong>
                      </Text>
                    </GridItem>
                    <GridItem w="100%" h="100%">
                      <Text py="1">{item.DOB}</Text>
                    </GridItem>
                    <GridItem w="100%" h="100%">
                      <Text py="1">
                        <strong>TEAM NAME: </strong>
                      </Text>
                    </GridItem>
                    <GridItem w="100%" h="100%">
                      <Text py="1">{item.teamname}</Text>
                    </GridItem>
                  </Grid>
                </CardBody>
              </Stack>
            </Card>
          ))}
        </Grid>
        {employeeCard && (
          <EmployeeCard
            setEmployeeCard={setEmployeeCard}
            setBackdrop={setBackdrop}
          />
        )}
        {backdrop && (
          <Backdrop
            setBackdrop={setBackdrop}
            setEmployeeCard={setEmployeeCard}
          />
        )}
      </div>
    </div>
    </>
  );
};

export default EmployeesCard;
