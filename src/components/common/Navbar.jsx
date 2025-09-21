import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/imersao', label: 'Imersão' },
    { path: '/solucao', label: 'Solução' },
    { path: '/pesquisa', label: 'Pesquisa' },
    { path: '/equipe', label: 'Equipe' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
            <path d="M20 10C20 10 25 15 25 20C25 25 20 30 20 30C20 30 15 25 15 20C15 15 20 10 20 10Z" fill="currentColor" opacity="0.8"/>
            <circle cx="20" cy="20" r="5" fill="white"/>
          </svg>
          <span className="navbar-logo-text">HobbyMap</span>
        </Link>

        <button
          className="navbar-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`navbar-toggle-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`navbar-toggle-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`navbar-toggle-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar-link ${location.pathname === link.path ? 'navbar-link-active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;