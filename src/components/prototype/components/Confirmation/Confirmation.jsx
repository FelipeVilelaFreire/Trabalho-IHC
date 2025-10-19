import React from 'react';
import './Confirmation.css';

/**
 * Confirmation Component
 *
 * This component displays a confirmation screen after a user successfully
 * registers for an activity. It shows:
 * - Success animation with checkmark
 * - Confirmation message
 * - Activity details card
 * - Action buttons (return home, email details)
 *
 * @param {Object} props - Component props
 * @param {Object} props.selectedActivity - The activity that was confirmed
 * @param {Function} props.setCurrentScreen - Function to change the current screen
 * @returns {JSX.Element} The confirmation screen UI
 */
const Confirmation = ({ selectedActivity, setCurrentScreen }) => {

  return (
    <div className="app-screen confirmation-screen">
      {/* Back Button */}
      <button className="confirmation-back-btn" onClick={() => setCurrentScreen('home')}>
        ←
      </button>

      <div className="confirmation-content">
        {/* Success Animation Section */}
        <div className="success-animation">
          <div className="checkmark">✓</div>
        </div>

        {/* Confirmation Message */}
        <h2>Participação Confirmada!</h2>
        <p>A atividade foi adicionada à sua agenda. Você receberá uma notificação 1 hora antes de começar.</p>

        {/* Confirmed Activity Card - Display selected activity details */}
        {selectedActivity && (
          <div className="confirmed-activity-card">
            <div className="confirmed-image">
              <img src={selectedActivity.image} alt={selectedActivity.title} />
            </div>
            <div className="confirmed-info">
              <h3>{selectedActivity.title}</h3>
              <p>📍 {selectedActivity.location}</p>
              <p>🕐 {selectedActivity.schedule}</p>
              <p className="confirmed-price">{selectedActivity.price}</p>
            </div>
          </div>
        )}

        {/* Action Buttons Section */}
        <div className="confirmation-actions">
          {/* Primary button - Navigate back to home screen */}
          <button className="btn-primary" onClick={() => setCurrentScreen('home')}>
            Voltar ao Início
          </button>

          {/* Secondary button - Navigate to agenda */}
          <button className="btn-secondary" onClick={() => setCurrentScreen('agenda')}>
            📅 Ver Agenda
          </button>

          {/* Secondary button - Email details (placeholder functionality) */}
          <button className="btn-secondary">
            📧 Receber Detalhes por Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
