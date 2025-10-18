import React, { useState, useEffect } from 'react';
import BottomNav from '../shared/BottomNav';
import ProgressBar from '../../../ProgressBar';
import '../shared/Shared.css';
import './Profile.css';
import { availableHobbies, getCategories } from '../../../../data/hobbiesData';
import { defaultUser, loadSimulationUser, updateUserProfile, loadUserProfile } from '../../../../data/userData';
import { loadUserPosts, saveUserPosts } from '../../../../data/comunidadeData';

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

  // Carrega perfil salvo
  const savedProfile = loadUserProfile();

  // State para dados do usuário (permite atualização em tempo real)
  const [userData, setUserData] = useState(() => {
    if (simulationUser) {
      return {
        ...defaultUser,
        name: simulationUser.name || defaultUser.name,
        email: simulationUser.email || defaultUser.email,
        avatar: simulationUser.avatar || null,
        stats: {
          activities: 0,
          hours: 0
        }
      };
    } else {
      // Usuário padrão com possíveis alterações salvas
      return {
        ...defaultUser,
        ...(savedProfile || {})
      };
    }
  });

  // Gamification data - Different values based on user type
  const getGamificationData = () => {
    // defaultUser (Felipe Silva) - valores arbitrários maiores
    if (userData.name === "Felipe Silva") {
      return {
        level: userData.level || 3,
        currentXP: userData.currentXP || 450,
        nextLevelXP: userData.nextLevelXP || 600
      };
    }

    // Outros usuários (incluindo modo simulação "Felipe da Silva") - tudo zerado
    return {
      level: 1,
      currentXP: 0,
      nextLevelXP: 100
    };
  };

  const gamificationData = getGamificationData();
  const xpRemaining = gamificationData.nextLevelXP - gamificationData.currentXP;
  const progressPercentage = (gamificationData.currentXP / gamificationData.nextLevelXP) * 100;

  // State for delete modal
  const [selectedHobby, setSelectedHobby] = useState(null);

  // State for add hobby modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // State for edit profile modal
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: userData.name,
    email: userData.email,
    avatar: userData.avatar
  });

  // Ref for drag scroll
  const scrollRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  // Block scroll when modal is open
  useEffect(() => {
    const phoneContent = document.querySelector('.phone-content');
    if (phoneContent) {
      if (selectedHobby || showAddModal || showEditModal) {
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
  }, [selectedHobby, showAddModal, showEditModal]);

  // Helper function to scroll to top and then execute callback
  const scrollToTopThen = (callback) => {
    // O elemento que tem overflow-y: auto é o .app-screen (profile-screen)
    const profileScreen = document.querySelector('.profile-screen');

    if (profileScreen) {
      // Força o scroll para o topo
      profileScreen.scrollTop = 0;
      profileScreen.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Aguarda o scroll completar antes de abrir o modal
    setTimeout(callback, 10);
  };

  // Handle hobby click (for delete)
  const handleHobbyClick = (hobby) => {
    scrollToTopThen(() => setSelectedHobby(hobby));
  };

  // Handle add hobby button click
  const handleAddHobbyClick = () => {
    scrollToTopThen(() => setShowAddModal(true));
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

  // Handle edit profile
  const handleEditProfile = () => {
    setEditFormData({
      name: userData.name,
      email: userData.email,
      avatar: userData.avatar
    });
    setShowEditModal(true);
  };

  // Handle save profile
  const handleSaveProfile = () => {
    // Salva os dados no localStorage
    updateUserProfile({
      name: editFormData.name,
      email: editFormData.email,
      avatar: editFormData.avatar
    });

    // Atualiza os posts do usuário com o novo nome e avatar
    const userPosts = loadUserPosts();
    if (userPosts.length > 0) {
      const updatedPosts = userPosts.map(post => ({
        ...post,
        usuario: {
          ...post.usuario,
          nome: editFormData.name,
          avatarUrl: editFormData.avatar
        }
      }));
      saveUserPosts(updatedPosts);
    }

    // Atualiza o estado local para refletir as mudanças imediatamente
    setUserData(prev => ({
      ...prev,
      name: editFormData.name,
      email: editFormData.email,
      avatar: editFormData.avatar
    }));

    // Fecha o modal
    setShowEditModal(false);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Drag to scroll handlers
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className={`app-screen profile-screen ${selectedHobby || showAddModal || showEditModal ? 'no-scroll' : ''}`}>
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
          <button className="edit-profile-btn" onClick={handleEditProfile}>
            ✏️ Editar Perfil
          </button>
        </div>

        {/* Gamification Section */}
        <div className="gamification-section">
          <div className="level-badge">
            <span className="level-icon">⭐</span>
            <span className="level-text">Nível {gamificationData.level}</span>
          </div>

          <div className="xp-info">
            <p className="xp-current">
              <strong>{gamificationData.currentXP} XP</strong> / {gamificationData.nextLevelXP} XP
            </p>
          </div>

          <ProgressBar
            currentValue={gamificationData.currentXP}
            maxValue={gamificationData.nextLevelXP}
            showPercentage={true}
          />

          <p className="xp-remaining">
            Faltam <strong>{xpRemaining} XP</strong> para o próximo nível!
          </p>
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
              onClick={handleAddHobbyClick}
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
            <div
              className={`category-filter-scroll ${isDragging ? 'dragging' : ''}`}
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
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

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="hobby-modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="edit-profile-modal" onClick={(e) => e.stopPropagation()}>
            <div className="edit-profile-header">
              <h3>Editar Perfil</h3>
              <button
                className="close-modal-btn"
                onClick={() => setShowEditModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="edit-profile-form">
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={editFormData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={editFormData.email}
                  onChange={handleInputChange}
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div className="form-group">
                <label htmlFor="avatar">URL da Foto de Perfil</label>
                <input
                  type="text"
                  id="avatar"
                  name="avatar"
                  value={editFormData.avatar || ''}
                  onChange={handleInputChange}
                  placeholder="https://exemplo.com/foto.jpg"
                />
              </div>

              <div className="edit-profile-actions">
                <button
                  className="cancel-edit-btn"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className="save-edit-btn"
                  onClick={handleSaveProfile}
                >
                  Salvar Alterações
                </button>
              </div>
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
