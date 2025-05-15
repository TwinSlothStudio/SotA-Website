import Title from '../components/Title';
import './Home.css';
import { useEffect, useRef, useState } from 'react';
import personImageAlex from '../assets/peopleImages/alex.jpg';
import personImageAlex1 from '../assets/peopleImages/alex1bg.jpg';
import personImageAlex2 from '../assets/peopleImages/alex2bg.jpg';
import personImageAlex3 from '../assets/peopleImages/alex3bg.jpg';
import personImageEgor from '../assets/peopleImages/egor.jpg';
import personImageEgor1 from '../assets/peopleImages/egor1bg.jpg';
import personImageEgorAlex from '../assets/peopleImages/e+abg1.jpg';
import personImageEgorAlexE1 from '../assets/peopleImages/ebg.jpg';
import personImageEgorAlexA1 from '../assets/peopleImages/abg.jpg';

const Home = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const images = [personImageAlex1, personImageAlex2, personImageAlex3, personImageEgor1, personImageEgorAlex, personImageEgorAlexA1, personImageEgorAlexE1];
  const [currentImage, setCurrentImage] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<null | 'alex' | 'egor'>(null);


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

  const handleBoxClick = (person: 'alex' | 'egor') => {
    setSelectedPerson(person);
    setPanelOpen(true);
  };
  const handleClose = () => {
    setPanelOpen(false);
    setSelectedPerson(null);
  };

  useEffect(() => {
    // Set interval to cycle through the background images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 900000); 

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY * 0.3;
      const opacity = Math.max(1 - scrollY / 400, 0);

      const titleElement = titleRef.current?.querySelector('.hero-title') as HTMLElement;
      if (titleRef.current && titleElement) {
        titleRef.current.style.transform = `translateY(${offset}px)`;
        titleElement.style.opacity = opacity.toString(); // apply to the text
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Max scroll before zoom stops (you can tweak this)
      const maxScroll = 1000;

      // Clamp scroll between 0 and maxScroll
      const clampedScroll = Math.min(scrollY, maxScroll);

      // For mobile screens, use a higher initial zoom level (e.g., scale(2))
      const startScale = window.innerWidth < 768 ? 4 : 1.2; // Zoom more on narrow screens
      const endScale = 1; // End at 1x zoom
      const progress = clampedScroll / maxScroll;
      const scale = startScale - (startScale - endScale) * progress;

      const bg = document.getElementById('zoom-bg');
      if (bg) {
        bg.style.transform = `scale(${scale})`; // Apply the scroll-based zoom effect
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Loop through each fadeable element
      document.querySelectorAll('.fade-content').forEach((el) => {
        // Type assertion to let TypeScript know the element is an HTMLElement
        const element = el as HTMLElement;

        const rect = element.getBoundingClientRect(); // Get element's position and size

        const elementHeight = rect.height;
        const elementTop = rect.top + scrollY; // Distance from top of the document to the element

        // Delay the start of the fade by increasing the threshold (e.g., element height * 2)
        const fadeStartThreshold = elementTop + elementHeight / 50; // Fade starts after the element is a bit further in the scroll
        const offset = scrollY - fadeStartThreshold; // Only fade after the element has passed the threshold

        // If the scroll has passed the fade start threshold, calculate opacity
        if (offset > 0) {
          const fadeOutSpeed = Math.min(1, offset / (elementHeight * 1)); // Use larger divisor to slow down fading

          // Apply opacity based on how far the element has scrolled up
          element.style.opacity = Math.max(1 - fadeOutSpeed, 0).toString(); // Fade out to zero as it moves up
        } else {
          // Ensure opacity stays at 1 before the element reaches the fade threshold
          element.style.opacity = '1';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Title text="Twin Sloth Studio" />
      <div className="page-wrapper">
        <div
          id="zoom-bg"
          style={{
            backgroundImage: `url(${images[currentImage]})`, // Dynamically set the background image
          }}
        />
        <div className="hero-section" />
        
        {/* Title container (parallax effect) */}
        <div className="hero-title-container" ref={titleRef}>
          <h1 className="hero-title">Twin Sloth Studio</h1>
        </div>

        <div className="content-section">
          <div className="fade-content">
            <p>We make games... and this website... I think</p>
          </div>
        </div>
        <div style= {{height:'50px', background:'#f8eec1'}}></div>
        <div className={`briefAbout ${panelOpen ? 'shifted' : ''}`}>
          <div className="fade-content">
            <h1 className="subTitle">Our Team</h1>
            <p>We consist of just two personell, two friends from high school who are both passionate about games and computers. What better way to indulge in this passion than to create our own studio?</p>
          </div>
          
          <div className="personBox-container">
            <div className="fade-content">
              <div className="personBox" onClick={() => handleBoxClick('alex')}>
                <img src={personImageAlex} alt="Co-founder Alex" className="personImage" />
                <h2 className="personTitle">Alexander</h2>
                <p className="personSubtitle"><em>Co-Founder | Lead Programmer</em></p>
              </div>
            </div>
            <div className="fade-content">
              <div className="personBox" onClick={() => handleBoxClick('egor')}>
                <img src={personImageEgor} alt="Co-founder Egor" className="personImage" />
                <h2 className="personTitle">Egor</h2>
                <p className="personSubtitle"><em>Co-Founder | Lead Designer</em></p>
              </div>
            </div>
          </div>
        </div>

        {panelOpen && (
          <>
            <div className="overlay" onClick={handleClose}></div>
            <div className={`side-panel ${panelOpen ? 'open' : ''}`}>
              <button className="close-button" onClick={handleClose}>×</button>

              {selectedPerson === 'alex' && (
                <>
                  <div className="side-panel-image-wrapper">
                    <img src={personImageAlex} alt="Co-founder Alex" className="sidepanelImage" />
                    <h2 className="side-panel-title">Alexander Parry-Ernst</h2>
                  </div>
                  <p className="sidepanelP">Lead programmer</p>
                </>
              )}

              {selectedPerson === 'egor' && (
                <>
                  <div className="side-panel-image-wrapper">
                    <img src={personImageEgor} alt="Co-founder Egor" className="sidepanelImage" />
                    <h2 className="side-panel-title">Egor Shefer</h2>
                  </div>
                  <p className="sidepanelP">Lead Designer</p>
                </>
              )}
              <div className="socialButtons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instaBtn">Instagram</a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="twitBtn">X</a>
              </div>
            </div>
          </>
        )}
        <div className="current-projectWrapper fade-content">
          <div className="current-project">
            <h1 className="subTitle">Current Project</h1>
            <p className="project-overview">
              <strong>Shadow of the Ascendant</strong> is an open world roguelike with realistic textures, challenging gameplay, and plenty of exploration potential. Get lost in a dynamic world where every run feels fresh.
            </p>
            <div className="trailer-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
                title="Shadow of the Ascendant Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
