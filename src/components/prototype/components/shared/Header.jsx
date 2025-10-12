import React from 'react';
import './Header.css';

/**
 * Header - Cabeçalho reutilizável para diferentes telas
 *
 * @param {string} title - Título do cabeçalho
 * @param {function} onBack - Função para voltar (opcional)
 * @param {function} onProfile - Função para abrir perfil (opcional)
 * @param {ReactNode} rightAction - Ação customizada no lado direito (opcional)
 * @param {boolean} showNotification - Mostrar notificação (opcional)
 */
const Header = ({ title, onBack, onProfile, rightAction, showNotification = false }) => {
  return (
    <div className="app-header">
      {onBack ? (
        <button className="back-btn" onClick={onBack}>
          ← {onBack === 'text' ? 'Voltar' : ''}
        </button>
      ) : (
        <h1 className="app-logo">
          <span className="logo-icon">🎯</span>
          {title || 'HobbyLocal'}
        </h1>
      )}

      {title && !onBack && (
        <h2 className="header-title">{title}</h2>
      )}

      <div className="header-icons">
        {showNotification && (
          <button className="icon-btn notification">
            <span className="badge-dot"></span>
            🔔
          </button>
        )}
        {onProfile && (
          <button className="icon-btn profile" onClick={onProfile}>
            👤
          </button>
        )}
        {rightAction}
      </div>
    </div>
  );
};

export default Header;
