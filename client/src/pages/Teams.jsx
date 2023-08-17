import React from "react";
import NavbarUser from "../components/Navbar/NavbarUser";
import TeamListing from "../components/TeamListing";
const Teams = () => {
  return (
    <div>
      <nav>
        <NavbarUser />
      </nav>
      <section>
        <TeamListing />
      </section>
    </div>
  );
};

export default Teams;
