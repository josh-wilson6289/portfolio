import React from "react";
import "../index.css";
import linkedInIcon from "../images/linkedin.png";
import gitHubIcon from "../images/GitHub.png";
import resumeIcon from "../images/resume.png";

const Footer = () => {
  return (
    <footer>
    <nav id="footer">
      <div className="container">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/joshwilson6289" rel="noreferrer" target="_blank">
          <img src={linkedInIcon} href="https://www.linkedin.com/in/joshwilson6289" alt="LinkedIn" target="_blank"></img>
        <p>LinkedIn</p>
        </a> 
        </li>
        <li>
          <a href="https://github.com/josh-wilson6289" rel="noreferrer" target="_blank">
          <img src={gitHubIcon} href="https://github.com/josh-wilson6289" alt="GitHub" rel="noreferrer" target="_blank"></img>
         <p>Github</p>
          </a> 
        </li>
        <li>
          <a href="/assets/Josh_Wilson_WebDeveloper_Resume.pdf" target="_blank">
          <img src={resumeIcon} href="/assets/Josh_Wilson_WebDeveloper_Resume.pdf" alt="Resume" target="_blank"></img>
        <p>Resume</p>
          </a> 
        </li>
      </ul>
    </div>
    </nav>
  </footer>
  );
};

export default Footer;