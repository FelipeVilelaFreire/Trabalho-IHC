import React from 'react';
import '../shared/Shared.css';
import './Details.css';

/**
 * Details Component (DetailsScreen)
 *
 * This component displays detailed information about a selected activity.
 * It shows comprehensive details including:
 * - Hero image with back button and favorite toggle
 * - Activity title, category badge, and rating
 * - Quick info: location, schedule, and price
 * - Full description of the activity
 * - Instructor information and bio
 * - Participant count with visual progress bar
 * - Difficulty level
 * - What to bring list
 * - What's included list
 * - Confirmation button with price
 *
 * Props:
 * - selectedActivity: Object containing all activity details
 * - favorites: Array of favorite activity IDs
 * - toggleFavorite: Function to add/remove activities from favorites
 * - handleConfirm: Function to confirm participation
 * - setCurrentScreen: Function to navigate to different screens
 */
const Details = ({
  selectedActivity,
  favorites,
  toggleFavorite,
  handleConfirm,
  setCurrentScreen
}) => {
  // Handle case when no activity is selected
  if (!selectedActivity) return null;

  return (
    <div className="app-screen details-screen">
      {/* Header with Back Button */}
      <div className="details-header">
        <button className="details-back-btn" onClick={() => setCurrentScreen('home')}>
          ← Voltar
        </button>
        <button
          className={`details-favorite-btn ${favorites.includes(selectedActivity.id) ? 'active' : ''}`}
          onClick={() => toggleFavorite(selectedActivity.id)}
        >
          {favorites.includes(selectedActivity.id) ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="details-content">
        {/* Title and Rating Section */}
        <div className="details-title-section">
          {/* Hero Image Inside Card */}
          {selectedActivity.image && (
            <div className="details-hero-inside">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          )}

          <div className="title-with-category">
            <h2>{selectedActivity.title}</h2>
            <span className="category-badge">{selectedActivity.category}</span>
          </div>
          <div className="rating-section">
            <span className="rating-big">⭐ {selectedActivity.rating}</span>
            <span className="reviews-count">({selectedActivity.reviews} avaliações)</span>
          </div>
        </div>

        {/* Quick Info Section: Location, Time, Price */}
        <div className="details-quick-info">
          <div className="quick-info-item">
            <span className="icon">📍</span>
            <div>
              <strong>{selectedActivity.location}</strong>
              <p>{selectedActivity.distance}</p>
            </div>
          </div>
          <div className="quick-info-item">
            <span className="icon">🕐</span>
            <div>
              <strong>{selectedActivity.schedule}</strong>
              <p>Duração: {selectedActivity.duration}</p>
            </div>
          </div>
          <div className="quick-info-item">
            <span className="icon">💰</span>
            <div>
              <strong>{selectedActivity.price}</strong>
              <p>Por pessoa</p>
            </div>
          </div>
        </div>

        {/* Confirmation Button */}
        <div className="details-confirm-section">
          <button className="btn-confirm" onClick={handleConfirm}>
            <span>Confirmar Participação</span>
            <span className="btn-price">{selectedActivity.price}</span>
          </button>
        </div>

        {/* About Section */}
        <div className="details-section">
          <h3>Sobre a atividade</h3>
          <p>{selectedActivity.description}</p>
        </div>

        {/* Instructor Section */}
        <div className="details-section">
          <h3>Instrutor</h3>
          <div className="instructor-info">
            <div className="instructor-avatar">👨‍🏫</div>
            <div>
              <strong>{selectedActivity.instructor}</strong>
              <p>{selectedActivity.instructorBio}</p>
            </div>
          </div>
        </div>

        {/* Participants Section with Progress Bar */}
        <div className="details-section">
          <h3>Participantes</h3>
          <div className="participants-section">
            <div className="participants-bar">
              <div
                className="participants-fill"
                style={{
                  width: `${(selectedActivity.participants / selectedActivity.maxParticipants) * 100}%`
                }}
              ></div>
            </div>
            <p className="participants-text">
              {selectedActivity.participants} de {selectedActivity.maxParticipants} vagas preenchidas
            </p>
          </div>
        </div>

        {/* Difficulty Level Section */}
        <div className="details-section">
          <h3>Nível</h3>
          <span className="difficulty-badge">{selectedActivity.difficulty}</span>
        </div>

        {/* What to Bring Section */}
        <div className="details-section">
          <h3>O que trazer</h3>
          <ul className="items-list">
            {selectedActivity.whatToBring.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* What's Included Section */}
        <div className="details-section">
          <h3>O que está incluso</h3>
          <ul className="items-list included">
            {selectedActivity.included.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
