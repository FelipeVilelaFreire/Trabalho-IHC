import React from 'react';
import './BottomNav.css';

/**
 * BottomNav - Barra de navegação inferior
 * Usado em todas as telas do aplicativo
 *
 * @param {string} activeScreen - Tela ativa atualmente
 * @param {function} onNavigate - Função callback para navegação
 */
const BottomNav = ({ activeScreen, onNavigate }) => {
  return (
    <div className="bottom-nav">
      <button
        className={`nav-btn ${activeScreen === 'home' ? 'active' : ''}`}
        onClick={() => onNavigate('home')}
      >
        <span className="nav-icon">🏠</span>
        <span className="nav-label">Início</span>
      </button>

      <button
        className={`nav-btn ${activeScreen === 'search' ? 'active' : ''}`}
        onClick={() => onNavigate('search')}
      >
        <span className="nav-icon">🔍</span>
        <span className="nav-label">Buscar</span>
      </button>

      <button
        className={`nav-btn ${activeScreen === 'favorites' ? 'active' : ''}`}
        onClick={() => onNavigate('favorites')}
      >
        <span className="nav-icon">❤️</span>
        <span className="nav-label">Favoritos</span>
      </button>

      <button
        className={`nav-btn ${activeScreen === 'map' ? 'active' : ''}`}
        onClick={() => onNavigate('map')}
      >
        <span className="nav-icon">🗺️</span>
        <span className="nav-label">Mapa</span>
      </button>

      <button
        className={`nav-btn ${activeScreen === 'agenda' ? 'active' : ''}`}
        onClick={() => onNavigate('agenda')}
      >
        <span className="nav-icon">📅</span>
        <span className="nav-label">Agenda</span>
      </button>
    </div>
  );
};

export default BottomNav;
