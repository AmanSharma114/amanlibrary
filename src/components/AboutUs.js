// AboutUs.js

import React from 'react';
import '../css/About.css';
import serviceIcon from '../img/service-icon.png'; 


function AboutUs () {
  return (
    <div className="about-container">
      <div className="portfolio-block">
        <p className="portfolio-text">
          Check out my personal <a href="https://amansharmamudgal.netlify.app/" target="_blank" rel="noopener noreferrer" className="portfolio-link">Portfolio Website</a>
        </p>
      </div>
      <h2 className="about-title">About Us</h2>
      
      <div className="services-container">
        <h3 className="services-title">Our Services</h3>
        <div className="services">
          <div className="service-card">
            <img src={serviceIcon} alt="Service Icon" className="service-icon" />
            <div className="service-content">
              <h4 className="service-title">Extensive Book Collection</h4>
              <p className="service-description">Explore our extensive collection of books across various genres.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={serviceIcon} alt="Service Icon" className="service-icon" />
            <div className="service-content">
              <h4 className="service-title">Easy Search and Browsing</h4>
              <p className="service-description">Find books easily with our user-friendly search and browsing capabilities.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={serviceIcon} alt="Service Icon" className="service-icon" />
            <div className="service-content">
              <h4 className="service-title">Online Reservation and Renewal</h4>
              <p className="service-description">Reserve and renew books conveniently through our online platform.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={serviceIcon} alt="Service Icon" className="service-icon" />
            <div className="service-content">
              <h4 className="service-title">Personalized Recommendations</h4>
              <p className="service-description">Get personalized reading recommendations based on your preferences.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={serviceIcon} alt="Service Icon" className="service-icon" />
            <div className="service-content">
              <h4 className="service-title">Digital Resources and E-books</h4>
              <p className="service-description">Access a wide range of digital resources, including e-books, audiobooks, and online databases.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={serviceIcon} alt="Service Icon" className="service-icon" />
            <div className="service-content">
              <h4 className="service-title">Engaging Community Events</h4>
              <p className="service-description">Join our vibrant community through book clubs, author meet-ups, and other exciting events.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-content">
        <h3 className="about-subtitle">About Us</h3>
        <p className="about-description">
          Welcome to our library management website! We are dedicated to providing an excellent library experience for our users. Our mission is to connect readers with their favorite books and promote a love for reading.At My Library, our mission is to empower individuals with knowledge and foster a love for learning and reading. We are committed to creating a supportive environment that encourages curiosity, creativity, and personal growth. Through our extensive collection of educational resources and innovative programs, we aim to make learning accessible to all members of our community.
        </p>
      </div>

      <div className="about-contact">
        <h3 className="about-subtitle">Contact Us</h3>
        <div className="about-contact-info">
          <p>Email: amansharmamudgal114@gmail.com</p>
          <p>Phone: +91 87085-50386</p>
          <p>Address: Ward No. 2 , Julana , Jind , Haryana</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
