import React from "react";
import "../index.css";


const Navbar = () => {
  return (
      <div id="navbar">     
      <h1 className="logo"><a href="index.html">Josh Wilson</a></h1>
      <ul className="nav-item">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>   
      </ul>
      </div>
  );
};

export default Navbar;