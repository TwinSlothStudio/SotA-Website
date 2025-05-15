import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // assuming you moved your <nav> into a component
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurGames from './pages/OurGames';
import FontsPage from './pages/FontsPage';
import ContactUs from './pages/ContactUs';
import Sota from './pages/sota';
import './App.css';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`app-container ${isHome ? 'home' : ''}`}>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/games" element={<OurGames />} />
          <Route path="/fonts" element={<FontsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sota" element={<Sota />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
