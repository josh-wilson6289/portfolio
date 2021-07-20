import React from "react";
import "../index.css";
import PortfolioPiece from "../components/PortfolioPiece";

const Projects = () => {
  
  let portfolioPieces = [
    {
      title: "Texas Ball Hockey Stats",
      image: "../images/tbh.jpg",
      alt: "Texas Ball Hockey",
      description: "A MERN stack website built to display player stats for an Austin-based ball hockey league.",
      tech: "React, Express, Node, MongoDB, Mongoose, Bootsrap, Semantic-UI, Auth0.",
      github: "https:github.com/josh-wilson6289/tbh-stats",
      deployed: "https://texasballhockey-stats.com"
    },
    {
      title: "Texas Ball Hockey Stats",
      image: "../images/portfolio-pic.png",
      alt: "Texas Ball Hockey",
      description: "A MERN stack website built to display player stats for an Austin-based ball hockey league.",
      tech: "React, Express, Node, MongoDB, Mongoose, Bootsrap, Semantic-UI, Auth0.",
      github: "https:github.com/josh-wilson6289/tbh-stats",
      deployed: "https://texasballhockey-stats.com"
    }
  ]

  const portfolio = portfolioPieces.map((portfolioPiece) => {
    return (
      <PortfolioPiece
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
    <div className="container">
      {portfolio}
    </div>
  );
};

export default Projects;