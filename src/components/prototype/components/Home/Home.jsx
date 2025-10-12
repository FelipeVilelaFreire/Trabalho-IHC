import React, { useState, useRef } from "react";
import BottomNav from "../shared/BottomNav";
import "../shared/Shared.css";
import "./Home.css";

/**
 * Home - Tela inicial do aplicativo
 * Exibe header, localização, busca, categorias e lista de atividades
 *
 * @param {array} categories - Lista de categorias disponíveis
 * @param {array} activeCategories - Categorias atualmente selecionadas
 * @param {function} toggleCategory - Função para toggle de categoria
 * @param {array} filteredActivities - Atividades filtradas por categoria
 * @param {function} handleActivityClick - Função para navegar para detalhes
 * @param {function} setCurrentScreen - Função para mudar de tela
 * @param {array} favorites - IDs das atividades favoritas
 * @param {function} toggleFavorite - Função para adicionar/remover favoritos
 */
const Home = ({
  categories,
  activeCategories,
  toggleCategory,
  filteredActivities,
  handleActivityClick,
  setCurrentScreen,
  favorites,
  toggleFavorite,
}) => {
  // State for draggable scroll
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

  // State for location tooltip
  const [showLocationTooltip, setShowLocationTooltip] = useState(false);

  // Draggable scroll handlers
  const handleMouseDown = (e) => {
    setIsDown(true);
    const pageX = e.pageX || e.touches?.[0]?.pageX;
    setStartX(pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const pageX = e.pageX || e.touches?.[0]?.pageX;
    const x = pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  return (
    <div className="app-screen">
      {/* Header */}
      <div className="app-header">
        <h1 className="app-logo">
          <span className="logo-icon">🎯</span>
          HobbyLocal
        </h1>
        <div className="header-icons">
          <button
            className="icon-btn notification"
            onClick={() => setCurrentScreen("notifications")}
          >
            <span className="badge-dot"></span>
            🔔
          </button>
          <button
            className="icon-btn profile"
            onClick={() => setCurrentScreen("profile")}
          >
            👤
          </button>
        </div>
      </div>

      {/* Location Bar */}
      <div
        className="location-bar"
        onMouseEnter={() => setShowLocationTooltip(true)}
        onMouseLeave={() => setShowLocationTooltip(false)}
        style={{ position: 'relative' }}
      >
        <div className="location-info">
          <span className="location-icon">📍</span>
          <span className="location-text">Icaraí - Niterói</span>
        </div>
        <button className="change-location">Mudar</button>
        {showLocationTooltip && (
          <div className="location-tooltip-home">
            Localização filtrada para o protótipo
          </div>
        )}
      </div>

      {/* Categories */}
      <div
        className="categories-scroll"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        style={{ cursor: isDown ? "grabbing" : "grab" }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-chip ${
              activeCategories.includes(cat) ? "active" : ""
            }`}
            onClick={() => toggleCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Section Header */}
      <div className="section-header">
        <h3>Perto de você</h3>
        <span className="badge-count">{filteredActivities.length}</span>
      </div>

      {/* Activities List */}
      <div className="activities-list">
        {filteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="activity-card-list"
            onClick={() => handleActivityClick(activity)}
          >
            <div className="activity-thumbnail">
              <img src={activity.image} alt={activity.title} />
            </div>
            <div className="activity-details">
              <h4>{activity.title}</h4>
              <p className="location-text">📍 {activity.distance}</p>
              <div className="meta-info">
                <span className="price-tag">{activity.price}</span>
                <span className="rating-tag">⭐ {activity.rating}</span>
                <span className="participants-tag">
                  👥 {activity.participants}/{activity.maxParticipants}
                </span>
              </div>
            </div>
            <button
              className={`favorite-btn-card ${
                favorites.includes(activity.id) ? "active" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(activity.id);
              }}
            >
              {favorites.includes(activity.id) ? "❤️" : "🤍"}
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeScreen="home" onNavigate={setCurrentScreen} />
    </div>
  );
};

export default Home;
