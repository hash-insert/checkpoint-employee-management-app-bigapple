import { Link } from "react-router-dom";
import "./team.css";
import { useState } from "react";
import Card from "./card";
import AddTeamModal from "./addteamModal";

function TeamPage() {
  const [showModal, setShowModal] = useState(false);

  const data = [
    {
      Team: "Requirements Gathering and Analysis",
      desc: "This initial stage involves understanding the needs and expectations of the application's stakeholders, such as clients, users, or business owners. The development team interacts with the stakeholders to gather requirements, analyze them, and define the scope of the project. The goal is to clearly identify what the application should do and the problems it needs to solve.",
    },
    {
      Team: "Design and Planning",
      desc: "In this stage, the development team creates a detailed plan for the application. They design the architecture, database schema, user interface, and the overall system. The team decides on the technologies, programming languages, and frameworks that will be used in the development process. The planning stage aims to provide a clear roadmap for the development phase.",
    },
    {
      Team: "Development and Implementation",
      desc: "The development stage is where the actual coding of the application takes place. Developers write the source code based on the design specifications. They follow coding standards, conduct code reviews, and perform unit testing to ensure that individual components work as intended. This stage is iterative, with developers continuously adding new features and fixing bugs.",
    },
    {
      Team: "Testing and Quality Assurance",
      desc: "During this phase, the application is thoroughly tested to identify and fix any defects or issues. Various testing techniques are used, including unit testing, integration testing, system testing, and user acceptance testing. Quality assurance ensures that the application meets the defined requirements and functions correctly in different scenarios.",
    },
    {
      Team: "Deployment and Maintenance",
      desc: "Once the application has passed all tests and is ready for release, it is deployed to the production environment, making it available to users. Deployment might involve setting up servers, databases, and other necessary infrastructure. After deployment, the application enters the maintenance phase, where developers continue to support, monitor, and update the application as needed. Maintenance includes bug fixes, security updates, and adding new features to meet changing requirements.",
    },
  ];
  const [team, setTeams] = useState(data);

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    let value = e.target.value;

    setSearch(value);
  };
  const filteredteams = team.filter((item) => item.Team.indexOf(search) > -1);

  const addTeam = (newTeam) => {
    setTeams([...team, newTeam]);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="searchbox">
        <input
          value={search}
          onChange={handleSearch}
          placeholder="Search Teams"
        />
        {/* <i className="fa fa-search"></i>{" "} */}

        <button className="team-btn" onClick={openModal}>
          Add a Team
        </button>
      </div>
      <div className="container">
        <ul className="boxes">
          {filteredteams.length > 0 ? (
            filteredteams.map((data, i) => {
              return (
                <li key={i}>
                  <Card name={data.Team} desc={data.desc} />
                </li>
              );
            })
          ) : (
            <div>
              <p>No results found</p>{" "}
            </div>
          )}
        </ul>
      </div>
      <AddTeamModal
        showModal={showModal}
        closeModal={closeModal}
        addTeam={addTeam}
      />
    </>
  );
}

export default TeamPage;
