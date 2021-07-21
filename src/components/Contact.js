import React from "react";
import "../index.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Thanks for stopping by!</h2>
        <h3>Let's get in touch</h3>
        <div className="contact-container">
        <div className="contact-box">
          <i className="fas fa-solid fa-envelope fa-3x"></i>
          <p>Email:</p>
          <p className="email">joshua.wilson6289@gmail.com</p>
          </div>
          <div className="contact-box">
            <i className="fas fa-solid fa-phone fa-3x"></i>
            <p>Phone:</p>
            <p className="phone">(978) 979-4214</p>
          </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;