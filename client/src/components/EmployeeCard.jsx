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
        overflow="hidden"
        variant="outline"
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
            src={employee.profileImg}
            alt="profile images"
            style={{
              borderRadius: "100%",
              width: "180px",
              height: "180px",
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
                <Text py="1">{employee.empId}</Text>
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
            </Grid>
          </CardBody>
        </Stack>
      </Card>
    </div>
    // </div>
  );
};

export default EmployeeCard;
