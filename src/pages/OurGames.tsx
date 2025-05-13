import React from 'react';
import Title from '../components/Title'; // adjust path if needed
import gameImage from '../assets/gameImages/shadow.png'; // replace with your actual image file and path
import './OurGames.css'; // if you want to style it further

const OurGames = () => (
  <div className="page-content">
    <Title text="Our Games" />
    <h1 className="title-text">Our Games</h1>
    <p>Explore the worlds we've created.</p>

    <div className="game-box">
      <img src={gameImage} alt="Shadow of the Ascendant" className="game-image" />
      <h2 className="game-title">Shadow of the Ascendant</h2>
      <p className="game-subtitle"><em>Coming not so Soon</em></p>
    </div>
  </div>
);

export default OurGames;