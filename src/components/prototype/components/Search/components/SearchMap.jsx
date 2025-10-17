import React, { useState } from 'react';
import './SearchMap.css';

/**
 * SearchMap - Componente de mapa para a tela de busca
 * Exibe atividades filtradas em um mapa interativo simulado
 *
 * @param {Array} activities - Atividades filtradas para exibir no mapa
 * @param {Function} handleActivityClick - Callback ao clicar em uma atividade
 * @param {Boolean} isExpanded - Se o mapa está expandido
 */
const SearchMap = ({ activities, handleActivityClick, isExpanded }) => {
  // Mapeamento de cores por categoria
  const categoryColors = {
    'Arte': '#EC4899',
    'Esportes': '#F59E0B',
    'Música': '#8B5CF6',
    'Bem-estar': '#06B6D4'
  };

  // Prepara atividades com coordenadas e cores
  const mapActivities = activities.map(activity => ({
    ...activity,
    color: categoryColors[activity.category] || '#667eea',
    categoryFilter: activity.category
  }));

  const [selectedMapActivity, setSelectedMapActivity] = useState(null);

  return (
    <div className={`search-map-container ${isExpanded ? 'expanded' : ''}`}>
      {/* Simulated Map View */}
      <div className="search-map-view">
        {/* Map Background */}
        <div className="search-map-background">
          {/* User Location */}
          <div className="search-user-location" style={{ left: '50%', top: '50%' }}>
            <div className="search-pulse-circle"></div>
            <div className="search-user-dot"></div>
          </div>

          {/* Activity Pins */}
          {mapActivities.map((activity) => (
            <div
              key={activity.id}
              className={`search-activity-pin ${selectedMapActivity?.id === activity.id ? 'selected' : ''}`}
              style={{
                left: `${activity.mapX}%`,
                top: `${activity.mapY}%`,
                '--pin-color': activity.color
              }}
              onClick={() => setSelectedMapActivity(activity)}
            >
              <div className="search-pin-marker">
                <span className="search-pin-emoji">{activity.emoji}</span>
              </div>
              <div className="search-pin-pulse"></div>
            </div>
          ))}
        </div>

        {/* Selected Activity Card */}
        {selectedMapActivity && (
          <div
            className="search-map-card-overlay"
            onClick={() => setSelectedMapActivity(null)}
          >
            <div
              className="search-activity-preview-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="search-close-card-btn"
                onClick={() => setSelectedMapActivity(null)}
              >
                ✕
              </button>
              <div className="search-card-image">
                <img src={selectedMapActivity.image} alt={selectedMapActivity.title} />
              </div>
              <div className="search-card-info">
                <h4>{selectedMapActivity.title}</h4>
                <button
                  className="search-view-details-btn"
                  onClick={() => handleActivityClick(selectedMapActivity)}
                >
                  Ver Detalhes Completos
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Info Bar */}
      <div className="search-map-info">
        <div className="search-info-chip">
          <span>📍</span>
          <span>Icaraí - Niterói</span>
        </div>
        <div className="search-info-chip">
          <span>🎯</span>
          <span>{mapActivities.length} atividades</span>
        </div>
      </div>
    </div>
  );
};

export default SearchMap;
