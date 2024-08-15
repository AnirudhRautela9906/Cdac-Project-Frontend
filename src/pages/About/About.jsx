import React from "react";
import './About.scss'
import Footer from '../../components/footer/Footer.jsx'
const About = () => {
  return (
    <div className="about-page">
      <header className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>We are committed to innovation and excellence.</p>
        </div>
      </header>
      <section className="about-section">
        <div className="container">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to deliver outstanding solutions that drive success and 
              make a meaningful difference. We prioritize creativity, quality, and 
              integrity in every project we undertake.
            </p>
          </div>
          <div className="about-image">
            <img src="https://via.placeholder.com/800x400" alt="Our Team" />
          </div>
        </div>
      </section>
      {/* <section className="team-section">
        <div className="container">
          <h2>Meet the Team</h2>
          <div className="team-cards">
            <div className="team-card">
              <img src="https://via.placeholder.com/150" alt="Team Member" />
              <h3>Jane Doe</h3>
              <p>CEO</p>
            </div>

            <div className="team-card">
              <img src="https://via.placeholder.com/150" alt="Team Member" />
              <h3>JAYANT RAOO</h3>
              <p>CTO</p>
            </div>
            <div className="team-card">
              <img src="https://via.placeholder.com/150" alt="Team Member" />
              <h3>AYUSH KUMAR</h3>
              <p>Creative Director</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="about-footer">
        <div className="container">
          <p>&copy; 2024 SEEKERS. All rights reserved.</p>
        </div>
      </footer> */}
      <Footer/>
    </div>
  );
};

export default About