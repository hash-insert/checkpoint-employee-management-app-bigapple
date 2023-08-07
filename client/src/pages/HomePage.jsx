import React from "react";
import "../css/homepage.css";
import Corousel from "../components/Corousel";
import working from "../svgs/working.svg"
import {FaSquareTwitter,FaSquareGithub} from "react-icons/fa6";
import {BsLinkedin} from "react-icons/bs";
import {AiFillInstagram} from 'react-icons/ai'
import Navbar from "../components/Navbar";
// import { AppContext } from "../AppProvider/Appprovider";

export const HomePage = () => {
  // const { homePage, setHomePage, loginpage, setLoginPage, contact, setContact } = React.useContext(AppContext);
  // setHomePage(true);
  // setLoginPage(false);
  // setContact(false);
  return (
    <>
    <Navbar />
    <div className="homepage-main">
      <section className="box-container">
        <div className="heading-container">
          <h5 style={{textAlign:"left"}}>EMPLOYEE MANAGEMENT APP</h5>
          <p className="content">
          Our Employee Management App is a powerful tool designed to help you streamline and organize your workforce effortlessly. With our user-friendly interface and comprehensive features, managing your employees has never been easier.
          </p>
        </div>
        <div className="svg-container">
            <img className="employeeSvg" src={working}  alt="svg not found" />
        </div>
      </section>
      <div className="carousel">
        <h5 style={{textAlign:"left"}}>Details of app components.</h5>
        <Corousel/>
      </div>
      <div className="footer">
        <h6>Contact Us</h6>
        <div className="SocialLinks">
            <FaSquareTwitter onClick={()=>{window.open('https://twitter.com/login', '_blank')}}/>
            <FaSquareGithub onClick={()=>{window.open('https://github.com/login', '_blank')}}/>
            <BsLinkedin onClick={()=>{window.open('https://linkedin.com/login', '_blank')}}/>
            <AiFillInstagram onClick={()=>{window.open('https://www.instagram.com/accounts/login/', '_blank')}}/>
        </div>
        <h6>&copy; Hashinsert Team_BIGAPPLE(2023)</h6>
      </div>
    </div>
  </>
  );
};
