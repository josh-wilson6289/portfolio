import React from "react";
import "../index.css";

const PortfolioPiece = ({ title, image, alt, description, tech, github, deployed }) => {
  return (
    <div>
      <div className="project-box">
        <h3>{title}</h3>
          <img className="project-pic" src={image} alt={alt}></img>
        <p className="project-description">{description}</p>
        <p>Built with {tech}</p>
    <div className="buttons">
      <a className="btn" href={github} rel="noreferrer" target="_blank" role="button">GitHub Repo</a>
      <a className="btn" href={deployed} rel="noreferrer" target="_blank" role="button">Deployed Site</a>
    </div>
    </div>
    </div>
  );
};

export default PortfolioPiece;