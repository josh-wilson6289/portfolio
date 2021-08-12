import React from "react";
import "../index.css";
import PortfolioPiece from "../components/PortfolioPiece";
import TBHPic from "../images/tbh.jpg";
import inBloomPic from "../images/inbloom.png";
import offYourChestPic from "../images/note-wall.jpg";
import marsPic from "../images/mars1.jpg";
import dailyPlannerPic from "../images/daily-planner.png";
import passwordGeneratorPic from "../images/password-generator.png";

const Projects = () => {
  
  let portfolioPieces = [
    {
      id: "Texas Ball Hockey Stats",
      title: "Texas Ball Hockey Stats",
      image: TBHPic,
      alt: "Texas Ball Hockey",
      description: "A MERN stack website built to display player stats for an Austin-based ball hockey league.",
      tech: "React, Express, Node, MongoDB, Mongoose, Bootsrap, Semantic-UI, Auth0.",
      github: "https:github.com/josh-wilson6289/tbh-stats",
      deployed: "http://texasballhockey-stats.com"
    },
    {
      id: "inBloom",
      title: "inBloom",
      image: inBloomPic,
      alt: "inBloom",
      description: "inBloom is here to take the stress away from plant care, so you can enjoy the fruits of your labor.  This full-stack web app allows users to add any plant in the world to their virtual garden.",
      tech: "Node, Express, React, Bootstrap, Sequelize, MySQL, ScrollTrigger, GSAP, Trefle API, Google Authentication, Debounce Hook, and Adobe Illustrator.",
      github: "https://github.com/ashlinhanson/inBloom",
      deployed: "https://in-bloom.herokuapp.com"
    },
    {
      id: "Off Your Chest",
      title:"Off Your Chest",
      image: offYourChestPic,
      alt: "Off Your Chest",
      description: "A digital board to post anonymous notes, appropriate for all sentiments and occasions. This app provides an online sanctum for safe expression in written form.",
      tech: "Anime.js, Handlebars, Sass, Node.js, MySQL, and Sequelize.",
      github: "https://github.com/Sakiskid/Note-Wall",
      deployed: "https://off-your-chest.herokuapp.com"
    },
    {
      id: "Mars Vacation Homes",
      title:"Mars Vacation Homes",
      image: marsPic,
      alt: "Mars Vacation Homes",
      description: "Ever wonder what it would be like to live on Mars?  This project uses two different NASA APIs to display weather data and pictures.",
      tech: "Built with NASA APIs, jQuery, HTML, CSS, JavaScript, and Node.js.",
      github: "https://github.com/josh-wilson6289/mars-vacation-homes",
      deployed: "https://josh-wilson6289.github.io/mars-vacation-homes"
    },
    {
      id: "Daily Planner",
      title:"Daily Planner",
      image: dailyPlannerPic,
      alt: "Daily Planner",
      description: "An app built to keep the busiest person on track.  This daily planner allows users to enter, delete, and update events throughout the day.",
      tech: "JavaScript, jQuery, Moment.js, and local storage.",
      github: "https://github.com/josh-wilson6289/daily-planner",
      deployed: "https://josh-wilson6289.github.io/daily-planner"
    },
    {
      id: "Password Generator",
      title:"Password Generator",
      image: passwordGeneratorPic,
      alt: "Password Generator",
      description: "This project creates a unique, randomly-generated password given user parameters.",
      tech: "JavaScript, HTML, and CSS.",
      github: "https://github.com/josh-wilson6289/password-generator",
      deployed: "https://josh-wilson6289.github.io/password-generator"
    }

  ]

  const portfolio = portfolioPieces.map((portfolioPiece) => {
    return (
      <PortfolioPiece
      key={portfolioPiece.title}
      title={portfolioPiece.title}
      image={portfolioPiece.image}
      alt={portfolioPiece.alt}
      description={portfolioPiece.description}
      tech={portfolioPiece.tech}
      github={portfolioPiece.github}
      deployed={portfolioPiece.deployed}
      >
      </PortfolioPiece>
    )
  })    
  return (
    <section id="projects">
    <div className="container">
      <h2>Projects</h2>
      {portfolio}
    </div>
    </section>
  );
};

export default Projects;