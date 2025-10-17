import React from 'react';
import BottomNav from '../shared/BottomNav';
import '../shared/Shared.css';
import './Favorites.css';

/**
 * Favorites - Tela de atividades favoritas
 * Mostra todas as atividades que o usuário marcou como favoritas
 *
 * @param {array} activities - Lista completa de atividades
 * @param {array} favorites - IDs das atividades favoritas
 * @param {function} toggleFavorite - Função para adicionar/remover favoritos
 * @param {function} handleActivityClick - Função para ir para detalhes
 * @param {function} setCurrentScreen - Função para navegação
 */
const Favorites = ({
  activities,
  favorites,
  toggleFavorite,
  handleActivityClick,
  setCurrentScreen
}) => {
  // Filtra apenas as atividades favoritas
  const favoriteActivities = activities.filter(activity =>
    favorites.includes(activity.id)
  );

  return (
    <div className="app-screen favorites-screen">
      {/* Header */}
      <div className="app-header">
        <button className="back-btn" onClick={() => setCurrentScreen('home')}>
          ←
        </button>
        <h2>Favoritos</h2>
        <div style={{ width: '40px' }}></div> {/* Spacer */}
      </div>

      {/* Content */}
      <div className="favorites-content">
        {favoriteActivities.length === 0 ? (
          // Empty State - Quando não há favoritos
          <div className="empty-favorites">
            <div className="empty-icon">💔</div>
            <h3>Nenhum favorito ainda</h3>
            <p>Adicione atividades aos favoritos para vê-las aqui</p>
            <button
              className="explore-btn"
              onClick={() => setCurrentScreen('home')}
            >
              Explorar Atividades
            </button>
          </div>
        ) : (
          // Lista de Favoritos
          <>
            <div className="favorites-header">
              <h3>{favoriteActivities.length} {favoriteActivities.length === 1 ? 'atividade' : 'atividades'}</h3>
              <p>Suas atividades favoritas</p>
            </div>

            <div className="favorites-list">
              {favoriteActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="favorite-card"
                  onClick={() => handleActivityClick(activity)}
                >
                  <div className="favorite-image">
                    <img src={activity.image} alt={activity.title} />
                    <button
                      className="unfavorite-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(activity.id);
                      }}
                    >
                      ❤️
                    </button>
                  </div>
                  <div className="favorite-info">
                    <div className="favorite-category">{activity.category}</div>
                    <h4>{activity.title}</h4>
                    <p className="favorite-location">📍 {activity.location}</p>
                    <div className="favorite-meta">
                      <span className="price">{activity.price}</span>
                      <span className="rating">⭐ {activity.rating}</span>
                      <span className="distance">{activity.distance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeScreen="favorites" onNavigate={setCurrentScreen} />
    </div>
  );
};

export default Favorites;
