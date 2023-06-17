import React from "react";
import '../css/Mission.css';

function Mission() {
  return (
    <div className="mission-container">
      <h1 className="mission-heading">Our Mission</h1>
      <p className="mission-text">
        At My Library, our mission is to empower individuals with knowledge and foster a love for learning and reading. We are committed to creating a supportive environment that encourages curiosity, creativity, and personal growth. Through our extensive collection of educational resources and innovative programs, we aim to make learning accessible to all members of our community.
      </p>
      <div className="mission-list">
        <div className="mission-list-item">
          <h2 className="list-heading">Educational Resources</h2>
          <p className="list-text">We provide a diverse range of high-quality educational resources, including books, e-books, audiobooks, and online databases. Our collection covers various subjects, ensuring that individuals can explore their interests and expand their knowledge.</p>
        </div>
        <div className="mission-list-item">
          <h2 className="list-heading">Reading Culture</h2>
          <p className="list-text">We promote a culture of reading and lifelong learning. Our library hosts book clubs, author events, and reading challenges to encourage community engagement and inspire a love for books among readers of all ages.</p>
        </div>
        <div className="mission-list-item">
          <h2 className="list-heading">Engaging Programs</h2>
          <p className="list-text">We offer a variety of engaging programs and activities designed to enhance the learning experience. From workshops and seminars to interactive storytelling sessions and educational games, there's something for everyone to participate in and enjoy.</p>
        </div>
        <div className="mission-list-item">
          <h2 className="list-heading">Collaboration and Outreach</h2>
          <p className="list-text">We collaborate with local schools, colleges, and organizations to enhance educational opportunities and support the community. Through partnerships and outreach initiatives, we aim to make a positive impact on education and foster a love for learning beyond the library walls.</p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
