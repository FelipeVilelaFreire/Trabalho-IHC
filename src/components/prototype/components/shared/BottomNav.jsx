import React from 'react';
import './BottomNav.css';

/**
 * BottomNav - Barra de navegação inferior do protótipo
 * Agora com apenas 4 ícones: Início, Buscar, Agenda e Perfil
 *
 * @param {string} activeScreen - Tela ativa atualmente
 * @param {function} onNavigate - Função callback para navegação
 */
const BottomNav = ({ activeScreen, onNavigate }) => {
  return (
    <div className="bottom-nav">
      {/* Início */}
      <button
        className={`nav-btn ${activeScreen === 'home' ? 'active' : ''}`}
        onClick={() => onNavigate('home')}
        aria-label="Início"
      >
        <span className="nav-icon">🏠</span>
        <span className="nav-label">Início</span>
      </button>

      {/* Buscar */}
      <button
        className={`nav-btn ${activeScreen === 'search' ? 'active' : ''}`}
        onClick={() => onNavigate('search')}
        aria-label="Buscar"
      >
        <span className="nav-icon">🔍</span>
        <span className="nav-label">Buscar</span>
      </button>

      {/* Agenda */}
      <button
        className={`nav-btn ${activeScreen === 'agenda' ? 'active' : ''}`}
        onClick={() => onNavigate('agenda')}
        aria-label="Agenda"
      >
        <span className="nav-icon">📅</span>
        <span className="nav-label">Agenda</span>
      </button>

      {/* Perfil */}
      <button
        className={`nav-btn ${activeScreen === 'profile' ? 'active' : ''}`}
        onClick={() => onNavigate('profile')}
        aria-label="Perfil"
      >
        <span className="nav-icon">👤</span>
        <span className="nav-label">Perfil</span>
      </button>
    </div>
  );
};

export default BottomNav;
