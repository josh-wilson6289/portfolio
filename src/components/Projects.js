import React from "react";
import "../index.css";
import PortfolioPiece from "../components/PortfolioPiece";
import TBHPic from "../images/tbh.jpg";
import inBloomPic from "../images/inbloom.png";
import offYourChestPic from "../images/note-wall.jpg";
import marsPic from "../images/mars1.jpg";
import sonicShowcasePic from "../images/sonicshowcase.png";
import passwordGeneratorPic from "../images/password-generator.png";

const Projects = () => {
  
  let portfolioPieces = [
    {
      id: "Sonic Showcase",
      title: "Sonic Showcase",
      image: sonicShowcasePic,
      alt: "Sonic Showcase",
      description: "Introducing Sonic Showcase, the ultimate concert companion app that brings the thrill of live music to your fingertips. Enter your zip code, and Sonic Showcase pulls a comprehensive list of concerts happening near you within the next month from Seatgeek. But it doesn't stop there. The app analyzes the concert data and creates a personalized Spotify playlist featuring all the artists performing in your area. Discover, listen, and immerse yourself in the vibrant world of live music like never before.",
      tech: "Next.js, React, Node, Seatgeek API, Spotify API, Tailwind.",
      github: "https://github.com/josh-wilson6289/sonic-showcase",
      deployed: "https://sonicshowcase.vercel.app"
    },
    {
      id: "Texas Ball Hockey Stats",
      title: "Texas Ball Hockey Stats",
      image: TBHPic,
      alt: "Texas Ball Hockey",
      description: "Texas Ball Hockey Stats is a dynamic MERN stack website designed to showcase player statistics for an Austin-based ball hockey league. Dive into the numbers and explore player performance across seasons or throughout their entire careers. With sortable fields and seamless data migration from the league's Google spreadsheet, Texas Ball Hockey Stats provides a comprehensive and user-friendly platform for tracking and analyzing player stats.",
      tech: "React, Express, Node, MongoDB, Mongoose, Bootsrap, Semantic-UI, Auth0.",
      github: "https:github.com/josh-wilson6289/tbh-stats",
      deployed: "http://texasballhockey-stats.com"
    },
    {
      id: "inBloom",
      title: "inBloom",
      image: inBloomPic,
      alt: "inBloom",
      description: "inBloom is here to take the stress away from plant care, so you can enjoy the fruits of your labor.  This full-stack web app allows users to add any plant in the world to their virtual garden. With inBloom, not only can you create your virtual garden with ease, but you can also access a wealth of plant care resources.",
      tech: "Node, Express, React, Bootstrap, Sequelize, MySQL, ScrollTrigger, GSAP, Trefle API, Google Authentication, Debounce Hook, and Adobe Illustrator.",
      github: "https://github.com/ashlinhanson/inBloom",
      deployed: "https://in-bloom.herokuapp.com"
    },
    {
      id: "Off Your Chest",
      title:"Off Your Chest",
      image: offYourChestPic,
      alt: "Off Your Chest",
      description: "Note Wall is a captivating community-driven application that provides a virtual platform for sharing anonymous notes. Step into a world where thoughts and messages come alive on a digital note wall. Each note is contributed by users and randomly distributed across the wall, creating a tapestry of diverse and intriguing content. Simply click on any note to reveal its message and immerse yourself in the collective wisdom, anecdotes, and experiences of the community. I worked as backend developer for this project, setting up the project's server, database, GitHub protocols, and deployments.",
      tech: "Anime.js, Handlebars, Sass, Node.js, MySQL, and Sequelize.",
      github: "https://github.com/Sakiskid/Note-Wall",
      deployed: "https://off-your-chest.herokuapp.com"
    },
    {
      id: "Mars Vacation Homes",
      title:"Mars Vacation Homes",
      image: marsPic,
      alt: "Mars Vacation Homes",
      description: "Embark on a thrilling extraterrestrial journey with this captivating app that offers a glimpse into what life on Mars might be like. Utilizing two powerful NASA APIs, this project brings you the latest weather data and captivating images from the Red Planet.",
      tech: "Built with NASA APIs, jQuery, HTML, CSS, JavaScript, and Node.js.",
      github: "https://github.com/josh-wilson6289/mars-vacation-homes",
      deployed: "https://josh-wilson6289.github.io/mars-vacation-homes"
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