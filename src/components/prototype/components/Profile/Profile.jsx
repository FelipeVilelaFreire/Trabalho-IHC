import React, { useState, useEffect } from 'react';
import BottomNav from '../shared/BottomNav';
import '../shared/Shared.css';
import './Profile.css';
import { availableHobbies, getCategories } from '../../../../data/hobbiesData';
import { defaultUser, loadSimulationUser } from '../../../../data/userData';

/**
 * Profile Component
 * Displays user profile information, statistics, and menu options
 *
 * @param {Object} props - Component props
 * @param {Function} props.setCurrentScreen - Function to navigate between screens
 * @param {Array} props.userHobbies - User's hobbies array
 * @param {Function} props.setUserHobbies - Function to update user's hobbies
 */
const Profile = ({ setCurrentScreen, userHobbies, setUserHobbies }) => {
  // Carrega dados da simulação se existirem
  const simulationUser = loadSimulationUser();
  const isSimulation = simulationUser !== null;

  // Usa dados da simulação se existirem, caso contrário usa dados padrão
  const userData = simulationUser
    ? {
        ...defaultUser,
        name: simulationUser.name,
        email: simulationUser.email,
        avatar: null,  // Sem avatar no modo simulação
        stats: {
          activities: 0,  // Usuário simulado começa com 0 atividades
          hours: 0        // e 0 horas
        }
      }
    : defaultUser;

  // State for delete modal
  const [selectedHobby, setSelectedHobby] = useState(null);

  // State for add hobby modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Block scroll when modal is open
  useEffect(() => {
    const phoneContent = document.querySelector('.phone-content');
    if (phoneContent) {
      if (selectedHobby || showAddModal) {
        phoneContent.style.overflow = 'hidden';
      } else {
        phoneContent.style.overflow = 'auto';
      }
    }

    // Cleanup on unmount
    return () => {
      if (phoneContent) {
        phoneContent.style.overflow = 'auto';
      }
    };
  }, [selectedHobby, showAddModal]);

  // Handle hobby click (for delete)
  const handleHobbyClick = (hobby) => {
    setSelectedHobby(hobby);
  };

  // Handle delete hobby
  const handleDeleteHobby = () => {
    setUserHobbies(prev => prev.filter(h => h.id !== selectedHobby.id));
    setSelectedHobby(null);
  };

  // Cancel delete
  const handleCancelDelete = () => {
    setSelectedHobby(null);
  };

  // Handle add hobby
  const handleAddHobby = (hobby) => {
    // Verifica se o hobby já existe
    const alreadyExists = userHobbies.some(h => h.name === hobby.name);
    if (!alreadyExists) {
      // Gera um novo ID único baseado no timestamp
      const newHobby = {
        ...hobby,
        id: Date.now()
      };
      setUserHobbies(prev => [...prev, newHobby]);
    }
    setShowAddModal(false);
    setSelectedCategory('Todos');
  };

  // Get available hobbies filtered by category and not already added
  const getFilteredAvailableHobbies = () => {
    // Fallback seguro: garante que userHobbies seja um array válido
    const safeUserHobbies = Array.isArray(userHobbies) ? userHobbies : [];
    const userHobbyNames = safeUserHobbies.filter(h => h && h.name).map(h => h.name);
    const filtered = availableHobbies.filter(h => !userHobbyNames.includes(h.name));

    if (selectedCategory === 'Todos') {
      return filtered;
    }
    return filtered.filter(h => h.category === selectedCategory);
  };

  const categories = ['Todos', ...getCategories()];

  return (
    <div className="app-screen profile-screen">
      {/* Header with back button */}
      <div className="profile-header">
        <button className="back-btn" onClick={() => setCurrentScreen('home')}>
          ←
        </button>
        <h2>Perfil</h2>
      </div>

      <div className="profile-content">
        {/* User card with avatar and basic info */}
        <div className="profile-user-card">
          <div className="user-avatar-large">
            {userData.avatar ? (
              <img src={userData.avatar} alt="Profile" />
            ) : (
              <div className="avatar-placeholder">👤</div>
            )}
          </div>
          <h3>{userData.name}</h3>
          <p className="user-email">{userData.email}</p>
        </div>

        {/* Statistics grid */}
        <div className="profile-stats-grid">
          <div className="profile-stat">
            <span className="stat-value">{userData.stats.activities}</span>
            <span className="stat-name">Atividades</span>
          </div>
          <div className="profile-stat">
            <span className="stat-value">{userData.stats.hours}h</span>
            <span className="stat-name">Horas Totais</span>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="profile-hobbies">
          <h3>Meus Hobbies</h3>
          <div className="hobbies-grid">
            {Array.isArray(userHobbies) && userHobbies.length > 0 && userHobbies.map((hobby) => (
              hobby && hobby.id ? (
                <div
                  key={hobby.id}
                  className="hobby-chip"
                  style={{ '--hobby-color': hobby.color }}
                  onClick={() => handleHobbyClick(hobby)}
                >
                  <span className="hobby-emoji">{hobby.emoji}</span>
                  <span className="hobby-name">{hobby.name}</span>
                </div>
              ) : null
            ))}
            {/* Add Hobby Button */}
            <button
              className="hobby-chip add-hobby-btn"
              onClick={() => setShowAddModal(true)}
            >
              <span className="hobby-emoji">➕</span>
            </button>
          </div>
        </div>
      </div>

      {/* Delete Hobby Modal */}
      {selectedHobby && (
        <div className="hobby-modal-overlay" onClick={handleCancelDelete}>
          <div className="hobby-modal" onClick={(e) => e.stopPropagation()}>
            <div className="hobby-modal-icon" style={{ '--hobby-color': selectedHobby.color }}>
              <span>{selectedHobby.emoji}</span>
            </div>
            <h3>{selectedHobby.name}</h3>
            <p>Deseja remover este hobby do seu perfil?</p>
            <div className="hobby-modal-actions">
              <button className="hobby-cancel-btn" onClick={handleCancelDelete}>
                Cancelar
              </button>
              <button className="hobby-delete-btn" onClick={handleDeleteHobby}>
                Remover
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Hobby Modal */}
      {showAddModal && (
        <div className="hobby-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="add-hobby-modal" onClick={(e) => e.stopPropagation()}>
            <div className="add-hobby-header">
              <h3>Adicionar Hobby</h3>
              <button
                className="close-modal-btn"
                onClick={() => setShowAddModal(false)}
              >
                ✕
              </button>
            </div>

            {/* Category Filter */}
            <div className="category-filter-scroll">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Available Hobbies Grid */}
            <div className="available-hobbies-grid">
              {getFilteredAvailableHobbies().length > 0 ? (
                getFilteredAvailableHobbies().map((hobby) => (
                  <div
                    key={hobby.id}
                    className="available-hobby-chip"
                    style={{ '--hobby-color': hobby.color }}
                    onClick={() => handleAddHobby(hobby)}
                  >
                    <span className="hobby-emoji">{hobby.emoji}</span>
                    <span className="hobby-name">{hobby.name}</span>
                  </div>
                ))
              ) : (
                <div className="no-hobbies-message">
                  <p>Nenhum hobby disponível nesta categoria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav activeScreen="" onNavigate={setCurrentScreen} />
    </div>
  );
};

export default Profile;
