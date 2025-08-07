import React from 'react';
import './CSS/HomePage.css';
// import backgroundImage from '../../resources/Images/Homepagebg.jpg';

const HomePage = () => {
  const handleGetStarted = () => {
    // Add your navigation logic here
    console.log('Let\'s Start button clicked!');
  };

  return (
    <div className="landing-page">
      
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Your
            <span className="highlight"> Travel Adventure</span>
          </h1>
          
          <button className="cta-button" onClick={handleGetStarted}>
            Let's Start
            <span className="button-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
