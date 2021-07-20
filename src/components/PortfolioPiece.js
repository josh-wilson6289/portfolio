import React from "react";
import "../index.css";

const PortfolioPiece = ({ title, image, alt, description, tech, github, deployed }) => {
  return (
    <div className="container">
      <div id="portfolio-piece">
        <div className="portfolio-padding"></div>
        <h2>{title}</h2>
        <div className="container">
          <img className="portfolio-img" src={image} alt={alt}></img>
        </div>
      </div>
      <div className="container">
        <p className="project-description">{description}</p>
        <p>Built with {tech}</p>
      </div>
    <div className="buttons">
      <a className="btn" href={github} target="_blank" role="button">GitHub Repo</a>
      <a className="btn" href={deployed} target="_blank" role="button">Deployed Site</a>
    </div>
    </div>
  );
};

export default PortfolioPiece;