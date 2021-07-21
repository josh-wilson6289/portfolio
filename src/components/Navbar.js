import React from "react";
import "../index.css";


const Navbar = () => {

  function responsiveNavbar() {
    const navItems = document.getElementById("nav-items")
    navItems.classList.toggle("show");
    console.log(navItems)
  }

  return (
    <div id="navbar">
    <header>
      <div className="toggle-btn" id="toggle" onClick={responsiveNavbar}>
        <i className="fas fa-bars fa-2x"></i>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="logo"><a href="index.html">Josh Wilson</a></h1>
      <nav id="nav-items">
        <ul>
          <li onClick={responsiveNavbar}><a href="#about">About</a></li>
          <li onClick={responsiveNavbar}><a href="#projects">Projects</a></li>
          <li onClick={responsiveNavbar}><a href="#contact">Contact</a></li>   
        </ul>
      </nav>
      </header>
      </div>
  );
};

export default Navbar;