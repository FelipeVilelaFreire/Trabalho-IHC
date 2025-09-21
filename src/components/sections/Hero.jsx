import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import './Hero.css';

const Hero = ({ title, subtitle, ctaText, ctaLink, showScrollIndicator = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container hero-container">
        <div className={`hero-content ${isVisible ? 'hero-content-visible' : ''}`}>
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          
          {ctaText && (
            <div className="hero-cta">
              <Button 
                href={ctaLink} 
                size="large" 
                variant="primary"
                className="hero-button"
              >
                {ctaText}
              </Button>
            </div>
          )}
        </div>
        
        {showScrollIndicator && (
          <button 
            className="hero-scroll-indicator" 
            onClick={handleScroll}
            aria-label="Scroll para baixo"
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 22L8 15L9.4 13.6L15 19.2L20.6 13.6L22 15L15 22Z" fill="currentColor"/>
              <path d="M15 16L8 9L9.4 7.6L15 13.2L20.6 7.6L22 9L15 16Z" fill="currentColor" opacity="0.5"/>
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;