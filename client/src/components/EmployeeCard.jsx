import React, { useContext } from "react";
import { Card, CardBody, Grid, GridItem } from "@chakra-ui/react";
import { Image, Stack, Heading, Text } from "@chakra-ui/react";
import { EmployeeContext } from "../context/employeeDetail";
import "../css/backdrop.css";
import "../css/employeecard.css";
import { AiOutlineClose } from "react-icons/ai";

const EmployeeCard = ({ setEmployeeCard, setBackdrop }) => {
  const { employee } = useContext(EmployeeContext);
  const handleClick = () => {
    setEmployeeCard(false);
    setBackdrop(false);
  };
  return (
    <div className="employee-card">
      <Card
        direction={{ base: "column", md: "column", sm: "row" }}
        variant="outline"
        id="emp-card"
        key={employee.empId}
        style={{ backgroundColor: "rgba(228, 228, 228, 0.699)" }}
      >
        <div className="close">
          <AiOutlineClose className="close-btn" onClick={handleClick} />
        </div>
        <div className="profile-image">
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px", md: "200px" }}
            src={
              employee.profileImg ??
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt="profile images"
            style={{
              borderRadius: "100%",
              width: "100px",
              height: "100px",
            }}
          />
          <div className="empname">
            <Heading size="lg">{employee.name}</Heading>{" "}
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
                <Text py="1">{employee.userId}</Text>
              </GridItem>
              <GridItem w="100%" h="100%">
                <Text py="1">
                  <strong>DESIGNATION: </strong>
                </Text>
              </GridItem>
              <GridItem w="100%" h="100%">
                <Text py="1">{employee.designation}</Text>
              </GridItem>
              <GridItem w="100%" h="100%">
                <Text py="1">
                  <strong>DOB: </strong>
                </Text>
              </GridItem>
              <GridItem w="100%" h="100%">
                <Text py="1">{employee.DOB}</Text>
              </GridItem>
              <GridItem w="100%" h="100%">
                <Text py="1">
                  <strong>TEAM NAME: </strong>
                </Text>
              </GridItem>
              <GridItem w="100%" h="100%">
                <Text py="1">{employee.teamname}</Text>
              </GridItem>
              <GridItem w="100%" h="100%">
                <Text py="1">
                  <strong>NO OF LEAVES: </strong>
                </Text>
              </GridItem>
              <GridItem w="100%" h="100%">
                <Text py="1">{employee.noOfLeaves}</Text>
              </GridItem>
              <GridItem w="100%" h="100%">
                <Text py="1">
                  <strong>PHONE NO: </strong>
                </Text>
              </GridItem>
              <GridItem w="100%" h="100%">
                <Text py="1">{employee.phone}</Text>
              </GridItem>
              <GridItem w="100%" h="100%">
                <Text py="1">
                  <strong>EMAIL: </strong>
                </Text>
              </GridItem>
              <GridItem w="100%" h="100%">
                <Text py="1">{employee.email}</Text>
              </GridItem>
            </Grid>
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
};

export default EmployeeCard;
