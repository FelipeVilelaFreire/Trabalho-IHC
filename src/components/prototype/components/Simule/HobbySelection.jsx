import React, { useState } from "react";
import "../shared/Shared.css";
import "./HobbySelection.css";

/**
 * HobbySelection - Tela de seleção de hobbies
 * Segunda etapa do fluxo "Simule você aqui"
 *
 * @param {Object} userData - Dados do usuário do formulário anterior
 * @param {Function} setCurrentScreen - Função para navegar entre telas
 * @param {Function} onComplete - Função chamada ao completar a seleção
 */
const HobbySelection = ({ userData, setCurrentScreen, onComplete }) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [showLocationTooltip, setShowLocationTooltip] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Lista expandida de hobbies disponíveis
  const availableHobbies = [
    { id: "yoga", name: "Yoga", emoji: "🧘" },
    { id: "futebol", name: "Futebol", emoji: "⚽" },
    { id: "natacao", name: "Natação", emoji: "🏊" },
    { id: "musica", name: "Música", emoji: "🎸" },
    { id: "pintura", name: "Pintura", emoji: "🎨" },
    { id: "culinaria", name: "Culinária", emoji: "👨‍🍳" },
    { id: "danca", name: "Dança", emoji: "💃" },
    { id: "fotografia", name: "Fotografia", emoji: "📸" },
    { id: "tenis", name: "Tênis", emoji: "🎾" },
    { id: "escalada", name: "Escalada", emoji: "🧗" },
    { id: "meditacao", name: "Meditação", emoji: "🧘‍♀️" },
    { id: "ciclismo", name: "Ciclismo", emoji: "🚴" },
    { id: "violao", name: "Violão", emoji: "🎸" },
    { id: "teatro", name: "Teatro", emoji: "🎭" },
    { id: "corrida", name: "Corrida", emoji: "🏃" },
    { id: "basquete", name: "Basquete", emoji: "🏀" },
    { id: "skate", name: "Skate", emoji: "🛹" },
    { id: "surf", name: "Surf", emoji: "🏄" },
    { id: "volei", name: "Vôlei", emoji: "🏐" },
    { id: "boxe", name: "Boxe", emoji: "🥊" },
    { id: "leitura", name: "Leitura", emoji: "📚" },
    { id: "jardinagem", name: "Jardinagem", emoji: "🌱" },
    { id: "xadrez", name: "Xadrez", emoji: "♟️" },
    { id: "poker", name: "Poker", emoji: "🃏" },
  ];

  // Número de hobbies a mostrar inicialmente
  const INITIAL_DISPLAY_COUNT = 12;
  const displayedHobbies = showAll ? availableHobbies : availableHobbies.slice(0, INITIAL_DISPLAY_COUNT);

  const toggleHobby = (hobbyId) => {
    if (selectedHobbies.includes(hobbyId)) {
      setSelectedHobbies(selectedHobbies.filter((id) => id !== hobbyId));
    } else {
      setSelectedHobbies([...selectedHobbies, hobbyId]);
    }
  };

  const handleSelectAll = () => {
    const allHobbyIds = availableHobbies.map(h => h.id);
    if (selectedHobbies.length === availableHobbies.length) {
      // Se todos estão selecionados, desmarca todos
      setSelectedHobbies([]);
    } else {
      // Caso contrário, seleciona todos
      setSelectedHobbies(allHobbyIds);
    }
  };

  const handleContinue = () => {
    if (selectedHobbies.length > 0) {
      onComplete({
        ...userData,
        hobbies: selectedHobbies,
      });
    }
  };

  return (
    <div className="app-screen hobby-selection-screen">
      {/* Header */}
      <div className="app-header">
        <button className="back-btn" onClick={() => setCurrentScreen("signup")}>
          ← Voltar
        </button>
        <h2>Seus Hobbies</h2>
      </div>

      <div className="hobby-selection-content">
        {/* Header */}
        <div className="hobby-header">
          <h3>Escolha seus hobbies</h3>
          <p>Selecione as atividades que você gosta ou quer experimentar</p>
        </div>

        {/* Select All Button */}
        <button className="select-all-btn" onClick={handleSelectAll}>
          <span className="checkbox-icon">
            {selectedHobbies.length === availableHobbies.length ? "☑️" : "☐"}
          </span>
          {selectedHobbies.length === availableHobbies.length ? "Desmarcar todos" : "Selecionar todos"}
        </button>

        {/* Hobbies Grid */}
        <div className="hobbies-grid">
          {displayedHobbies.map((hobby) => (
            <button
              key={hobby.id}
              className={`hobby-card ${
                selectedHobbies.includes(hobby.id) ? "selected" : ""
              }`}
              onClick={() => toggleHobby(hobby.id)}
            >
              <span className="hobby-emoji">{hobby.emoji}</span>
              <span className="hobby-name">{hobby.name}</span>
              {selectedHobbies.includes(hobby.id) && (
                <span className="hobby-check">✓</span>
              )}
            </button>
          ))}
        </div>

        {/* Show More/Less Button */}
        {availableHobbies.length > INITIAL_DISPLAY_COUNT && (
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                Ver menos ⬆️
              </>
            ) : (
              <>
                Ver mais ⬇️ ({availableHobbies.length - INITIAL_DISPLAY_COUNT} restantes)
              </>
            )}
          </button>
        )}

        {/* Location Section */}
        <div className="location-section">
          <label>Localização</label>
          <div
            className="location-input-wrapper"
            onMouseEnter={() => setShowLocationTooltip(true)}
            onMouseLeave={() => setShowLocationTooltip(false)}
          >
            <input
              type="text"
              placeholder="Icaraí - Niterói"
              disabled
              className="location-input-disabled"
            />
            <span className="location-icon">📍</span>

            {/* Tooltip */}
            {showLocationTooltip && (
              <div className="location-tooltip">
                Localização foi filtrada por ser um protótipo.
              </div>
            )}
          </div>
        </div>

        {/* Selected Count */}
        {selectedHobbies.length > 0 && (
          <div className="selected-count">
            {selectedHobbies.length}{" "}
            {selectedHobbies.length === 1
              ? "hobby selecionado"
              : "hobbies selecionados"}
          </div>
        )}

        {/* Continue Button */}
        <button
          className="hobby-continue-btn"
          onClick={handleContinue}
          disabled={selectedHobbies.length === 0}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default HobbySelection;
