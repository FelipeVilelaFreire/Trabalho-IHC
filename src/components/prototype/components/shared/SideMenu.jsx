import React from 'react';
import './SideMenu.css';

/**
 * SideMenu - Menu lateral expansível (drawer) do protótipo
 * Contém opções de navegação: Favoritos, Cupons, Comunidade e Criar Post
 *
 * @param {boolean} isOpen - Estado de abertura do menu
 * @param {function} onClose - Função para fechar o menu
 * @param {function} onNavigate - Função para navegar entre telas
 */
const SideMenu = ({ isOpen, onClose, onNavigate }) => {
  // Handler para fechar o menu ao clicar fora dele (overlay)
  const handleOverlayClick = () => {
    onClose();
  };

  // Handler para prevenir que cliques dentro do menu fechem ele
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  // Handler para navegar para uma tela e fechar o menu
  const handleNavigateAndClose = (screen) => {
    if (onNavigate) {
      onNavigate(screen);
    }
    onClose();
  };

  return (
    <>
      {/* Overlay - fundo escuro que fecha o menu ao clicar */}
      <div
        className={`side-menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={handleOverlayClick}
      />

      {/* Menu lateral */}
      <div
        className={`side-menu ${isOpen ? 'open' : ''}`}
        onClick={handleMenuClick}
      >
        {/* Header do menu com botão de fechar */}
        <div className="side-menu-header">
          <h2 className="side-menu-title">Menu</h2>
          <button
            className="side-menu-close-btn"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>

        {/* Lista de opções do menu */}
        <nav className="side-menu-nav">
          {/* Favoritos */}
          <button
            className="side-menu-item"
            onClick={() => handleNavigateAndClose('favorites')}
          >
            <span className="side-menu-icon">❤️</span>
            <span className="side-menu-label">Favoritos</span>
          </button>

          {/* Cupons */}
          <button
            className="side-menu-item"
            onClick={() => handleNavigateAndClose('cupons')}
          >
            <span className="side-menu-icon">🎟️</span>
            <span className="side-menu-label">Cupons</span>
          </button>

          {/* Comunidade */}
          <button
            className="side-menu-item"
            onClick={() => handleNavigateAndClose('comunidade')}
          >
            <span className="side-menu-icon">💬</span>
            <span className="side-menu-label">Comunidade</span>
          </button>

          {/* Upload */}
          <button
            className="side-menu-item"
            onClick={() => handleNavigateAndClose('upload')}
          >
            <span className="side-menu-icon">📤</span>
            <span className="side-menu-label">Criar Post</span>
          </button>

          {/* Achievements */}
          <button
            className="side-menu-item"
            onClick={() => handleNavigateAndClose('achievements')}
          >
            <span className="side-menu-icon">🏆</span>
            <span className="side-menu-label">Conquistas & Missões</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
