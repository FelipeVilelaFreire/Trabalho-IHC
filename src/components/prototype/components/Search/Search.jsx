import React, { useState, useRef } from 'react';
import BottomNav from '../shared/BottomNav';
import '../shared/Shared.css';
import './Search.css';

/**
 * Search - Tela de busca e filtros
 * Permite pesquisar e filtrar atividades
 *
 * @param {array} categories - Lista de categorias
 * @param {array} activeCategories - Categorias ativas
 * @param {function} toggleCategory - Função para toggle de categoria
 * @param {array} filteredActivities - Atividades filtradas
 * @param {function} handleActivityClick - Função para ir para detalhes
 * @param {function} setCurrentScreen - Função para navegação
 * @param {array} favorites - IDs das atividades favoritas
 * @param {function} toggleFavorite - Função para adicionar/remover favoritos
 */
const Search = ({
  categories,
  activeCategories,
  toggleCategory,
  filteredActivities,
  handleActivityClick,
  setCurrentScreen,
  favorites,
  toggleFavorite
}) => {
  // State for draggable scroll
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

  // Search state
  const [searchText, setSearchText] = useState('');

  // Filter states
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [maxDistance, setMaxDistance] = useState(10);
  const [selectedDate, setSelectedDate] = useState('Todas');

  // Modal states
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [showDistanceModal, setShowDistanceModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);

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

  // Intelligent search function
  const searchActivities = (activities) => {
    if (!searchText.trim()) {
      return activities;
    }

    const searchLower = searchText.toLowerCase().trim();

    return activities.filter(activity => {
      // Search in multiple fields
      const titleMatch = activity.title.toLowerCase().includes(searchLower);
      const descriptionMatch = activity.description.toLowerCase().includes(searchLower);
      const categoryMatch = activity.category.toLowerCase().includes(searchLower);
      const locationMatch = activity.location.toLowerCase().includes(searchLower);
      const instructorMatch = activity.instructor.toLowerCase().includes(searchLower);
      const difficultyMatch = activity.difficulty.toLowerCase().includes(searchLower);

      // Search in what to bring items
      const whatToBringMatch = activity.whatToBring.some(item =>
        item.toLowerCase().includes(searchLower)
      );

      // Search in included items
      const includedMatch = activity.included.some(item =>
        item.toLowerCase().includes(searchLower)
      );

      // Check if price matches "gratis" or "gratuito"
      const priceMatch = (
        (searchLower.includes('gratis') || searchLower.includes('gratuito')) &&
        activity.priceValue === 0
      );

      // Return true if any field matches
      return titleMatch || descriptionMatch || categoryMatch ||
             locationMatch || instructorMatch || difficultyMatch ||
             whatToBringMatch || includedMatch || priceMatch;
    });
  };

  // Apply additional filters (price, distance, date)
  const applyFilters = (activities) => {
    return activities.filter(activity => {
      // Price filter
      const activityPrice = activity.priceValue || 0;
      if (activityPrice < priceRange.min || activityPrice > priceRange.max) {
        return false;
      }

      // Distance filter
      const distanceValue = parseFloat(activity.distance);
      if (distanceValue > maxDistance) {
        return false;
      }

      // Date filter (example with weekdays)
      if (selectedDate !== 'Todas') {
        const schedule = activity.schedule || '';
        if (!schedule.includes(selectedDate)) {
          return false;
        }
      }

      return true;
    });
  };

  // Apply search first, then other filters
  const searchedActivities = searchActivities(filteredActivities);
  const finalFilteredActivities = applyFilters(searchedActivities);

  // Clear search function
  const handleClearSearch = () => {
    setSearchText('');
  };

  // Format price display
  const getPriceDisplay = () => {
    if (priceRange.min === 0 && priceRange.max === 100) {
      return 'Todos';
    }
    if (priceRange.max === 100) {
      return `R$ ${priceRange.min}+`;
    }
    return `R$ ${priceRange.min}-${priceRange.max}`;
  };

  // Format distance display
  const getDistanceDisplay = () => {
    if (maxDistance >= 10) {
      return 'Todas';
    }
    return `até ${maxDistance}km`;
  };

  return (
    <div className="app-screen search-screen">
      {/* Header */}
      <div className="app-header">
        <button className="back-btn" onClick={() => setCurrentScreen('home')}>
          ← Voltar
        </button>
        <h2>Buscar</h2>
      </div>

      {/* Search Bar */}
      <div className="search-bar-container active">
        <div className="search-bar focused">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Digite o que você procura..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoFocus
          />
          {searchText && (
            <button className="clear-btn" onClick={handleClearSearch}>
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters-section">
        <h3>Filtros</h3>

        {/* Category Filters */}
        <div
          className="filter-chips"
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
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${activeCategories.includes(cat) ? 'active' : ''}`}
              onClick={() => toggleCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter Options - Inline */}
        <div className="filter-options-inline">
          <button className="filter-option-inline" onClick={() => setShowPriceModal(true)}>
            <span className="filter-label">💰 Preço:</span>
            <span className="filter-value">{getPriceDisplay()}</span>
          </button>
          <button className="filter-option-inline" onClick={() => setShowDistanceModal(true)}>
            <span className="filter-label">📏 Distância:</span>
            <span className="filter-value">{getDistanceDisplay()}</span>
          </button>
          <button className="filter-option-inline" onClick={() => setShowDateModal(true)}>
            <span className="filter-label">📅 Data:</span>
            <span className="filter-value">{selectedDate}</span>
          </button>
        </div>
      </div>

      {/* Price Filter Modal */}
      {showPriceModal && (
        <div className="filter-modal-overlay" onClick={() => setShowPriceModal(false)}>
          <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Filtrar por Preço</h3>
            <div className="filter-range">
              <label>Preço Mínimo: R$ {priceRange.min}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
              />
            </div>
            <div className="filter-range">
              <label>Preço Máximo: R$ {priceRange.max === 100 ? '100+' : priceRange.max}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
              />
            </div>
            <button className="filter-apply-btn" onClick={() => setShowPriceModal(false)}>
              Aplicar
            </button>
          </div>
        </div>
      )}

      {/* Distance Filter Modal */}
      {showDistanceModal && (
        <div className="filter-modal-overlay" onClick={() => setShowDistanceModal(false)}>
          <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Filtrar por Distância</h3>
            <div className="filter-range">
              <label>Distância Máxima: {maxDistance >= 10 ? 'Todas' : `${maxDistance}km`}</label>
              <input
                type="range"
                min="1"
                max="10"
                value={maxDistance}
                onChange={(e) => setMaxDistance(parseInt(e.target.value))}
              />
            </div>
            <button className="filter-apply-btn" onClick={() => setShowDistanceModal(false)}>
              Aplicar
            </button>
          </div>
        </div>
      )}

      {/* Date Filter Modal */}
      {showDateModal && (
        <div className="filter-modal-overlay" onClick={() => setShowDateModal(false)}>
          <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Filtrar por Data</h3>
            <div className="filter-date-options">
              {['Todas', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((day) => (
                <button
                  key={day}
                  className={`date-option ${selectedDate === day ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedDate(day);
                    setShowDateModal(false);
                  }}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Results */}
      <div className="search-results">
        {searchText && (
          <div className="search-query-info">
            <span>Buscando por: <strong>"{searchText}"</strong></span>
          </div>
        )}
        <h3>{finalFilteredActivities.length} atividades encontradas</h3>
        {finalFilteredActivities.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h4>Nenhum resultado encontrado</h4>
            <p>
              {searchText
                ? `Não encontramos atividades que correspondam a "${searchText}"`
                : 'Tente ajustar os filtros para ver mais resultados'}
            </p>
          </div>
        ) : (
          finalFilteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="result-card"
            onClick={() => handleActivityClick(activity)}
          >
            <div className="result-image">
              <img src={activity.image} alt={activity.title} />
              <button
                className={`favorite-btn-result ${favorites.includes(activity.id) ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(activity.id);
                }}
              >
                {favorites.includes(activity.id) ? '❤️' : '🤍'}
              </button>
            </div>
            <div className="result-info">
              <h4>{activity.title}</h4>
              <p>📍 {activity.location}</p>
              <p className="distance">{activity.distance}</p>
              <div className="result-meta">
                <span className="price">{activity.price}</span>
                <span className="rating">⭐ {activity.rating} ({activity.reviews})</span>
              </div>
            </div>
          </div>
          ))
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeScreen="search" onNavigate={setCurrentScreen} />
    </div>
  );
};

export default Search;
