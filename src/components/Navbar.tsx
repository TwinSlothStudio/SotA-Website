import { useState } from 'react';
import logo from '../assets/LogoTemp.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/about">About Us</Link>
        <Link to="/games">Our Games</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
