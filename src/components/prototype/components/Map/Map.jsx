import React, { useState, useRef } from 'react';
import BottomNav from '../shared/BottomNav';
import '../shared/Shared.css';
import './Map.css';

/**
 * Map Component
 * Displays nearby activities on an interactive simulated map
 *
 * @param {Object} props - Component props
 * @param {Array} props.activities - Array of activity objects to display on map
 * @param {Function} props.handleActivityClick - Callback when an activity is clicked
 * @param {Function} props.setCurrentScreen - Function to navigate between screens
 * @param {Array} props.userHobbies - User's hobbies for recommendations
 */
const Map = ({ activities, handleActivityClick, setCurrentScreen, userHobbies }) => {
  // Mapeamento de cores por categoria
  const categoryColors = {
    'Arte': '#EC4899',
    'Esportes': '#F59E0B',
    'Música': '#8B5CF6',
    'Bem-estar': '#06B6D4'
  };

  // Prepare nearby activities with map coordinates and colors from centralized data
  const nearbyActivities = activities.map(activity => ({
    ...activity,
    color: categoryColors[activity.category] || '#667eea',
    categoryFilter: activity.category
  }));

  const [selectedMapActivity, setSelectedMapActivity] = useState(null);
  const [activeFilters, setActiveFilters] = useState(['Recomendados']);

  // Mapeia hobbies para categorias
  const hobbyToCategoryMap = {
    'Futebol': 'Esportes',
    'Música': 'Música',
    'Arte': 'Arte',
    'Fotografia': 'Arte'
  };

  // Categorias recomendadas baseadas nos hobbies do usuário
  const recommendedCategories = userHobbies
    .map(hobby => hobbyToCategoryMap[hobby.name])
    .filter((category, index, self) => category && self.indexOf(category) === index);

  // State for draggable scroll
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

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

  // Toggle filter function (multiple selection)
  const toggleFilter = (filter) => {
    // Se clicar em "Recomendados" ou "Todos", substitui todas as seleções
    if (filter === 'Recomendados' || filter === 'Todos') {
      setActiveFilters([filter]);
    } else {
      // Remove "Recomendados" e "Todos" se estiverem presentes
      let newFilters = activeFilters.filter(
        f => f !== 'Recomendados' && f !== 'Todos'
      );

      // Toggle o filtro
      if (newFilters.includes(filter)) {
        newFilters = newFilters.filter(f => f !== filter);
        // Se ficar vazio, volta para "Recomendados"
        if (newFilters.length === 0) {
          newFilters = ['Recomendados'];
        }
      } else {
        newFilters.push(filter);
      }

      setActiveFilters(newFilters);
    }
  };

  // Filter activities based on active filters
  const filteredActivities = activeFilters.includes('Todos')
    ? nearbyActivities
    : activeFilters.includes('Recomendados')
    ? nearbyActivities.filter(act => recommendedCategories.includes(act.categoryFilter))
    : nearbyActivities.filter(act => activeFilters.includes(act.categoryFilter));

  const filters = ['Recomendados', 'Todos', 'Esportes', 'Música', 'Arte', 'Bem-estar'];

  return (
    <div className="app-screen map-screen">
      {/* Header */}
      <div className="app-header map-header">
        <h2>Atividades Próximas</h2>
      </div>

      {/* Simulated Map View */}
      <div className="map-view-simulated">
        <div className="map-container-simulated">
          {/* Map Background */}
          <div className="map-background-simulated">
            {/* User Location */}
            <div className="user-location-marker" style={{ left: '50%', top: '50%' }}>
              <div className="pulse-circle"></div>
              <div className="user-dot"></div>
            </div>

            {/* Activity Pins */}
            {filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className={`activity-pin ${selectedMapActivity?.id === activity.id ? 'selected' : ''}`}
                style={{
                  left: `${activity.mapX}%`,
                  top: `${activity.mapY}%`,
                  '--pin-color': activity.color
                }}
                onClick={() => setSelectedMapActivity(activity)}
              >
                <div className="pin-marker">
                  <span className="pin-emoji">{activity.emoji}</span>
                </div>
                <div className="pin-pulse"></div>
              </div>
            ))}
          </div>

          {/* Selected Activity Card */}
          {selectedMapActivity && (
            <div
              className="map-activity-card-overlay"
              onClick={() => setSelectedMapActivity(null)}
            >
              <div
                className="activity-preview-card"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-card-btn"
                  onClick={() => setSelectedMapActivity(null)}
                >
                  ✕
                </button>
                <div className="card-image-small">
                  <img src={selectedMapActivity.image} alt={selectedMapActivity.title} />
                </div>
                <div className="card-info">
                  <h4>{selectedMapActivity.title}</h4>
                  <button
                    className="view-details-btn"
                    onClick={() => handleActivityClick(selectedMapActivity)}
                  >
                    Ver Detalhes Completos
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filter Bar */}
        <div
          className="map-filter-bar"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          style={{ cursor: isDown ? 'grabbing' : 'grab' }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilters.includes(filter) ? 'active' : ''}`}
              onClick={() => toggleFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Info Bar */}
        <div className="map-info-bottom">
          <div className="info-chip">
            <span>📍</span>
            <span>Niterói - RJ</span>
          </div>
          <div className="info-chip">
            <span>🎯</span>
            <span>{filteredActivities.length} atividades</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeScreen="map" onNavigate={setCurrentScreen} />
    </div>
  );
};

export default Map;
