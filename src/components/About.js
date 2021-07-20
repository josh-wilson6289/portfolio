import React from "react";
import PortfolioPic from "../images/portfolio-pic.png";
import "../index.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About</h2>
        <img id="portfolio-pic" src={PortfolioPic} alt="Josh Wilson"></img>
        <p>
        I'm a self-motivated full-stack web developer with proficiency in JavaScript, React, HTML, and CSS. One of my
        greatest strengths is my willingness to adapt and work with a team, while learning new skills quickly to
        accomplish the task at hand. I graduated from the University of Texas Coding Bootcamp, and bring over a decade
        of experience as an Audio Engineer for film, television, and advertising. Sorry for any of the annoying
        commercials I helped produce over the years. In my spare time, I enjoy homebrewing, playing hockey, and adopting
        way too many pets.
      </p>
      <h3 id="tech">Technologies Used</h3>
        <p>JavaScript, ES6, React, Node, Express, MongoDB, Mongoose, 
          MySQL, Sequelize, HTML, CSS, Bootstrap, Semantic-UI, jQuery, 
          Auth0, RESTful APIs, Axios, Git, GitHub, Heroku.</p>
      </div>
    </section>
  );
};

export default About;