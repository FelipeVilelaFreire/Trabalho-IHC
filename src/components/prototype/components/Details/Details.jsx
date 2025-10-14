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
  setCurrentScreen,
  isConfirmed = false
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
            {selectedActivity.comments && selectedActivity.comments.length > 0 && (
              <button
                className="comments-icon-btn"
                onClick={() => {
                  const commentsSection = document.getElementById('comments-section');
                  if (commentsSection) {
                    commentsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                title="Ver comentários"
              >
                💬 {selectedActivity.comments.length}
              </button>
            )}
          </div>
        </div>

        {/* Quick Info Section: Location, Time, Price, Link, Phone */}
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
          {selectedActivity.link && (
            <div className="quick-info-item">
              <span className="icon">🔗</span>
              <div>
                <strong>Site</strong>
                <p>
                  <a
                    href={`https://${selectedActivity.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#667eea', textDecoration: 'none', fontSize: '11px' }}
                  >
                    {selectedActivity.link}
                  </a>
                </p>
              </div>
            </div>
          )}
          {selectedActivity.phone && (
            <div className="quick-info-item">
              <span className="icon">📞</span>
              <div>
                <strong>Telefone</strong>
                <p>
                  <a
                    href={`tel:${selectedActivity.phone.replace(/\D/g, '')}`}
                    style={{ color: '#667eea', textDecoration: 'none' }}
                  >
                    {selectedActivity.phone}
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Confirmation Button */}
        <div className="details-confirm-section">
          <button
            className={`btn-confirm ${isConfirmed ? 'confirmed' : ''}`}
            onClick={handleConfirm}
          >
            <span>{isConfirmed ? '✓ Confirmado' : 'Confirmar Participação'}</span>
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

        {/* Comments Section */}
        {selectedActivity.comments && selectedActivity.comments.length > 0 && (
          <div className="details-section comments-section" id="comments-section">
            <h3>Comentários dos usuários</h3>
            <div className="comments-list">
              {selectedActivity.comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <div className="comment-header">
                    <img
                      src={comment.userPhoto}
                      alt={comment.userName}
                      className="comment-user-photo"
                    />
                    <div className="comment-user-info">
                      <strong className="comment-user-name">{comment.userName}</strong>
                      <span className="comment-date">{comment.date}</span>
                    </div>
                  </div>
                  <p className="comment-text">{comment.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
