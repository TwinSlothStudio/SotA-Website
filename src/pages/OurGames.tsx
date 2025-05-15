import Title from '../components/Title'; // adjust path if needed
import gameImage from '../assets/gameImages/shadow.png';
import './OurGames.css';
import { useNavigate } from 'react-router-dom';

const OurGames = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className='page-content'>
        <Title text="Our Games" />
        <h1 className="title-text">Our Games</h1>
        <p>Explore the worlds we've created.</p>
        <div className='game-list'>
          <div className="game-box" onClick={() => navigate('/sota')} style={{ cursor: 'pointer' }}>
            <img src={gameImage} alt="Shadow of the Ascendant" className="game-image" />
            <h2 className="game-title">Shadow of the Ascendant</h2>
            <p className="game-subtitle"><em>Coming not so Soon</em></p>
            <div className="store-buttons">
              <a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer" className="steam-btn">Steam</a>
              <a href="https://www.epicgames.com" target="_blank" rel="noopener noreferrer" className="epic-btn">Epic Games</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default OurGames;
