import React, { useEffect } from "react";
import { data } from "../../data/data";
import "./credits.css";
import {Link} from 'react-router-dom';

export const Credits = () => {
  useEffect(() => {
    document.title = "Credits - Weather App";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="Credits">
      <div className="credits-container">
          <h1>Thanks For Using Weather App</h1>
        <div className="wrapper">
          <div className="img-section">
            <img src={data.profilePic} alt="Rishabh Profile Pic" />
          </div>
          <h2>Rishabh Singh</h2>
          <div className="social">
            <a target="_blank" href="https://www.instagram.com/thefrontendrish/">
              {" "}
              <i className="bx bxl-instagram"></i>
            </a>
            <a target="_blank" href="https://github.com/thisisrishabh22">
              <i className="bx bxl-github"></i>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/rishabhh-singh/">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <a
            className="about"
            target="_blank"
            href="https:\\thefrontendrish.tech"
          >
            About Me
          </a>
        </div>
        
        <Link to="/"><p className="navigator">Go Back To Weather App</p></Link>
      </div>
    </div>
  );
};

export default Credits;
