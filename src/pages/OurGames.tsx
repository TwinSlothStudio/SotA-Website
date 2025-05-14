import Title from '../components/Title'; // adjust path if needed
import { useState } from 'react';
import gameImage from '../assets/gameImages/shadow.png';
import './OurGames.css';
import { useEffect } from 'react';

const OurGames = () => {
  const [panelOpen, setPanelOpen] = useState(false);

  // Disable scroll when panel is open
  useEffect(() => {
    document.body.style.overflow = panelOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [panelOpen]);

  // Close panel with Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPanelOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleBoxClick = () => setPanelOpen(true);
  const handleClose = () => setPanelOpen(false);
  return (
    <>
      <div className={`page-content ${panelOpen ? 'shifted' : ''}`}>
        <Title text="Our Games" />
        <h1 className="title-text">Our Games</h1>
        <p>Explore the worlds we've created.</p>

        <div className="game-box" onClick={handleBoxClick}>
          <img src={gameImage} alt="Shadow of the Ascendant" className="game-image" />
          <h2 className="game-title">Shadow of the Ascendant</h2>
          <p className="game-subtitle"><em>Coming not so Soon</em></p>
        </div>
      </div>

      {panelOpen && (
        <>
          <div className="overlay" onClick={handleClose}></div>
          <div className={`side-panel ${panelOpen ? 'open' : ''}`}>
            <button className="close-button" onClick={handleClose}>×</button>

            <div className="side-panel-image-wrapper">
              <img src={gameImage} alt="Shadow of the Ascendant" className="side-panel-image" />
              <h2 className="side-panel-title">Shadow of the Ascendant</h2>
            </div>
            <p className="sidepanelP">
              An open-world rogue-like with realistic graphics, quality gameplay, and endless exploration potential. Don't wait—except do, because this game is still in development <em>(and will be for a long time)</em>.
            </p>
            <div className="store-buttons">
              <a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer" className="steam-btn">Steam</a>
              <a href="https://www.epicgames.com" target="_blank" rel="noopener noreferrer" className="epic-btn">Epic Games</a>
            </div>
          </div>
        </>
      )}
    </>
  );
};



export default OurGames;
