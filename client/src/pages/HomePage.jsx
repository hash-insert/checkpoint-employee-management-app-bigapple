import React from "react";
import "../css/homepage.css";
import Corousel from "../components/Corousel";
import working from "../svgs/working.svg"
import {FaSquareTwitter,FaSquareGithub} from "react-icons/fa6";
import {BsLinkedin} from "react-icons/bs";
import {AiFillInstagram} from 'react-icons/ai'
import { AppContext } from "../AppProvider/Appprovider";

export const HomePage = () => {
  const { homePage, setHomePage, loginpage, setLoginPage, contact, setContact } = React.useContext(AppContext);
  setHomePage(true);
  setLoginPage(false);
  setContact(false);
  return (
    <div className="main">
      <section className="box-container">
        <div className="heading-container">
          <h5 style={{textAlign:"left"}}>About EMA</h5>
          <p className="content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="svg-container">
            <img className="employeeSvg" src={working}  alt="" />
          </div>
      </section>
      <div className="carousel">
      <h5 style={{textAlign:"left"}}>Details of app components.</h5>
        <Corousel />
       </div>
      <div className="footer">
        <h6>Contact Us</h6>
        <div className="SocialLinks">
            <FaSquareTwitter/>
            <FaSquareGithub/>
            <BsLinkedin/>
            <AiFillInstagram/>
        </div>
        <h6>&copy; Hashinsert Team_BIGAPPLE(2023)</h6>
      </div>
    </div>
  );
};
