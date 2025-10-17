import React, { useRef } from 'react';
import './FilterModal.css';

/**
 * FilterModal - Modal de filtros avançados
 * Exibe overlay com filtros de categorias, preço, distância e data
 *
 * @param {boolean} isOpen - Se o modal está aberto
 * @param {function} onClose - Função para fechar o modal
 * @param {array} categories - Lista de categorias
 * @param {array} activeCategories - Categorias ativas
 * @param {function} toggleCategory - Função para toggle de categoria
 * @param {object} priceRange - Faixa de preço {min, max}
 * @param {function} setPriceRange - Função para definir faixa de preço
 * @param {number} maxDistance - Distância máxima
 * @param {function} setMaxDistance - Função para definir distância
 * @param {string} selectedDate - Data selecionada
 * @param {function} setSelectedDate - Função para definir data
 * @param {boolean} showPriceModal - Se modal de preço está aberto
 * @param {function} setShowPriceModal - Função para toggle modal de preço
 * @param {boolean} showDistanceModal - Se modal de distância está aberto
 * @param {function} setShowDistanceModal - Função para toggle modal de distância
 * @param {boolean} showDateModal - Se modal de data está aberto
 * @param {function} setShowDateModal - Função para toggle modal de data
 * @param {function} getPriceDisplay - Função para formatar exibição de preço
 * @param {function} getDistanceDisplay - Função para formatar exibição de distância
 */
const FilterModal = ({
  isOpen,
  onClose,
  categories,
  activeCategories,
  toggleCategory,
  priceRange,
  setPriceRange,
  maxDistance,
  setMaxDistance,
  selectedDate,
  setSelectedDate,
  showPriceModal,
  setShowPriceModal,
  showDistanceModal,
  setShowDistanceModal,
  showDateModal,
  setShowDateModal,
  getPriceDisplay,
  getDistanceDisplay
}) => {
  // State for draggable scroll
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

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

  if (!isOpen) return null;

  return (
    <>
      {/* Filter Container (Overlay) */}
      <div
        className="filter-modal-container-overlay"
        onClick={onClose}
      >
        <div
          className="filter-modal-container-content"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header do container de filtros */}
          <div className="filter-modal-container-header">
            <h2>Filtros Avançados</h2>
            <button
              className="filter-modal-close-btn"
              onClick={onClose}
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>

          {/* Filtros */}
          <div className="filter-modal-filters">
            <h3>Categorias</h3>

            {/* Category Filters */}
            <div
              className="filter-modal-chips"
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
                  className={`filter-modal-chip ${activeCategories.includes(cat) ? 'active' : ''}`}
                  onClick={() => toggleCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <h3 style={{ marginTop: '20px' }}>Filtros Detalhados</h3>

            {/* Filter Options - Inline */}
            <div className="filter-modal-options">
              <button className="filter-modal-option" onClick={() => setShowPriceModal(true)}>
                <span className="filter-modal-label">💰 Preço:</span>
                <span className="filter-modal-value">{getPriceDisplay()}</span>
              </button>
              <button className="filter-modal-option" onClick={() => setShowDistanceModal(true)}>
                <span className="filter-modal-label">📏 Distância:</span>
                <span className="filter-modal-value">{getDistanceDisplay()}</span>
              </button>
              <button className="filter-modal-option" onClick={() => setShowDateModal(true)}>
                <span className="filter-modal-label">📅 Data:</span>
                <span className="filter-modal-value">{selectedDate}</span>
              </button>
            </div>

            {/* Botão Filtrar */}
            <button className="filter-modal-apply-btn" onClick={onClose}>
              Filtrar
            </button>
          </div>
        </div>
      </div>

      {/* Price Filter Modal */}
      {showPriceModal && (
        <div className="filter-detail-modal-overlay" onClick={() => setShowPriceModal(false)}>
          <div className="filter-detail-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Filtrar por Preço</h3>
            <div className="filter-detail-range">
              <label>Preço Mínimo: R$ {priceRange.min}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
              />
            </div>
            <div className="filter-detail-range">
              <label>Preço Máximo: R$ {priceRange.max === 100 ? '100+' : priceRange.max}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
              />
            </div>
            <button className="filter-detail-apply-btn" onClick={() => setShowPriceModal(false)}>
              Aplicar
            </button>
          </div>
        </div>
      )}

      {/* Distance Filter Modal */}
      {showDistanceModal && (
        <div className="filter-detail-modal-overlay" onClick={() => setShowDistanceModal(false)}>
          <div className="filter-detail-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Filtrar por Distância</h3>
            <div className="filter-detail-range">
              <label>Distância Máxima: {maxDistance >= 10 ? 'Todas' : `${maxDistance}km`}</label>
              <input
                type="range"
                min="1"
                max="10"
                value={maxDistance}
                onChange={(e) => setMaxDistance(parseInt(e.target.value))}
              />
            </div>
            <button className="filter-detail-apply-btn" onClick={() => setShowDistanceModal(false)}>
              Aplicar
            </button>
          </div>
        </div>
      )}

      {/* Date Filter Modal */}
      {showDateModal && (
        <div className="filter-detail-modal-overlay" onClick={() => setShowDateModal(false)}>
          <div className="filter-detail-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Filtrar por Data</h3>
            <div className="filter-detail-date-options">
              {['Todas', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((day) => (
                <button
                  key={day}
                  className={`filter-detail-date-option ${selectedDate === day ? 'active' : ''}`}
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
    </>
  );
};

export default FilterModal;
