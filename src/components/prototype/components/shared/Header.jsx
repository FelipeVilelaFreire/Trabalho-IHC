import React from "react";
import "./Header.css";

/**
 * Header - Cabeçalho reutilizável para diferentes telas do protótipo
 * Agora com ícone de menu (hamburger) à esquerda e notificação à direita
 *
 * @param {string} title - Título do cabeçalho
 * @param {function} onBack - Função para voltar (opcional)
 * @param {function} onMenuClick - Função para abrir o menu lateral
 * @param {function} onNotificationClick - Função para abrir notificações
 * @param {ReactNode} rightAction - Ação customizada no lado direito (opcional)
 * @param {boolean} showNotification - Mostrar notificação (opcional)
 */
const Header = ({
  title,
  onBack,
  onMenuClick,
  onNotificationClick,
  rightAction,
  showNotification = false,
}) => {
  return (
    <div className="app-header">
      {/* Botão de voltar OU ícone de menu */}
      {onBack ? (
        <button className="back-btn" onClick={onBack}>
          ← {onBack === "text" ? "Voltar" : ""}
        </button>
      ) : (
        <i className="fa-solid fa-bars" onClick={onMenuClick} style={{ cursor: 'pointer', fontSize: '24px', marginRight: '16px' }}></i>
      )}

      {/* Título/Logo centralizado */}
      {title && !onBack && (
        <h1 className="app-logo">
          {title || "HobbyLocal"}
        </h1>
      )}

      {title && onBack && <h2 className="header-title">{title}</h2>}

      {/* Ações à direita */}
      <div className="header-icons">
        {showNotification && (
          <button
            className="icon-btn notification"
            onClick={onNotificationClick}
            aria-label="Notificações"
          >
            🔔
            <span className="badge-dot"></span>
          </button>
        )}
        {rightAction}
      </div>
    </div>
  );
};

export default Header;
