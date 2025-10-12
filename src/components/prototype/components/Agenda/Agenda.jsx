import React, { useState, useEffect } from 'react';
import BottomNav from '../shared/BottomNav';
import '../shared/Shared.css';
import './Agenda.css';
import { loadScheduledEventsForMode, removeScheduledEvent, isSimulationMode } from '../../../../data/userData';

/**
 * Agenda Component
 * Displays user's scheduled activities with statistics
 *
 * @param {Object} props - Component props
 * @param {Array} props.activities - Array of activity objects available
 * @param {Function} props.setCurrentScreen - Function to navigate between screens
 * @param {Function} props.onRemoveEvent - Function to decrement participant count
 */
const Agenda = ({ activities, setCurrentScreen, onRemoveEvent }) => {
  const [scheduledActivities, setScheduledActivities] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [activeTab, setActiveTab] = useState('upcoming');

  // Atividades passadas (concluídas)
  const pastActivities = [
    {
      id: 'past-1',
      title: 'Yoga na Praia',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      location: 'Praia de Icaraí',
      date: 'Sex, 4 Out',
      time: '07:00',
      status: 'completed',
      emoji: '🧘'
    },
    {
      id: 'past-2',
      title: 'Futebol no Parque',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
      location: 'Parque da Cidade - Niterói',
      date: 'Dom, 6 Out',
      time: '09:00',
      status: 'completed',
      emoji: '⚽'
    },
    {
      id: 'past-3',
      title: 'Aula de Violão',
      image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80',
      location: 'Escola de Música - Centro',
      date: 'Ter, 8 Out',
      time: '18:00',
      status: 'completed',
      emoji: '🎸'
    }
  ];

  // Carrega eventos agendados do localStorage quando o componente monta
  useEffect(() => {
    const loadEvents = () => {
      const events = loadScheduledEventsForMode();
      setScheduledActivities(events);
    };

    loadEvents();

    // Recarrega eventos quando a aba se torna visível (usuário volta à tela)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        loadEvents();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Função para remover evento
  const handleRemoveEvent = (eventId) => {
    // Encontra o evento que está sendo removido
    const eventToRemove = scheduledActivities.find(event => event.id === eventId);

    // Remove do localStorage e do estado local
    removeScheduledEvent(eventId);
    setScheduledActivities(prev => prev.filter(event => event.id !== eventId));
    setSelectedEventId(null);

    // Decrementa o contador de participantes se temos o activityId e o handler
    if (eventToRemove && eventToRemove.activityId && onRemoveEvent) {
      onRemoveEvent(eventToRemove.activityId);
    }
  };

  // Atividades a serem exibidas baseado na aba ativa
  // No modo simulação, não mostra atividades passadas
  const displayedActivities = activeTab === 'upcoming'
    ? scheduledActivities
    : (isSimulationMode() ? [] : pastActivities);

  // Estatísticas - no modo simulação, concluídas e horas são 0
  const completedCount = isSimulationMode() ? 0 : 3;
  const totalHours = isSimulationMode() ? 0 : 5;

  return (
    <div className="app-screen agenda-screen">
      {/* Header */}
      <div className="app-header">
        <h2>Minha Agenda</h2>
        <button className="icon-btn">📅</button>
      </div>

      {/* Tabs for upcoming and past activities */}
      <div className="agenda-tabs">
        <button
          className={`agenda-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Próximas
        </button>
        <button
          className={`agenda-tab ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Passadas
        </button>
      </div>

      <div className="agenda-content">
        {/* Statistics cards */}
        <div className="agenda-stats">
          <div className="stat-card">
            <span className="stat-number">{scheduledActivities.length}</span>
            <span className="stat-label">Agendadas</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{completedCount}</span>
            <span className="stat-label">Concluídas</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{totalHours}</span>
            <span className="stat-label">Horas</span>
          </div>
        </div>

        {/* Activities list */}
        <div className="agenda-list">
          {displayedActivities.length > 0 ? (
            displayedActivities.map((activity) => (
              <div key={activity.id} className="agenda-item">
                {/* Date badge */}
                <div className={`agenda-date-badge ${activity.status === 'completed' ? 'completed' : ''}`}>
                  <span className="date-day">{activity.date.split(',')[0]}</span>
                  <span className="date-num">{activity.date.split(' ')[1]}</span>
                </div>

                {/* Activity image */}
                <div className="agenda-item-image">
                  <img src={activity.image} alt={activity.title} />
                </div>

                {/* Activity info */}
                <div className="agenda-item-info">
                  <h4>{activity.title}</h4>
                  <p className="agenda-time">🕐 {activity.time}</p>
                  <p className="agenda-location">📍 {activity.location}</p>
                  <span className={`status-badge ${activity.status}`}>
                    {activity.status === 'completed' ? '✓ Concluída' :
                     activity.status === 'confirmed' ? '✓ Confirmado' : '⏱ Pendente'}
                  </span>
                </div>

                {/* Options button - only for upcoming activities */}
                {activeTab === 'upcoming' && (
                  <button
                    className="agenda-options"
                    onClick={() => setSelectedEventId(activity.id)}
                  >
                    ⋮
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="empty-agenda">
              <div className="empty-icon">📅</div>
              <h3>
                {activeTab === 'upcoming'
                  ? 'Nenhuma atividade agendada'
                  : 'Nenhuma atividade concluída'}
              </h3>
              <p>
                {activeTab === 'upcoming'
                  ? 'Adicione atividades à sua agenda para vê-las aqui'
                  : 'As atividades que você completar aparecerão aqui'}
              </p>
            </div>
          )}
        </div>

        {/* Add activity button */}
        <button
          className="add-activity-btn"
          onClick={() => setCurrentScreen('home')}
        >
          <span>➕</span>
          <span>Adicionar à Agenda</span>
        </button>
      </div>

      {/* Remove Event Modal */}
      {selectedEventId && (
        <div className="agenda-modal-overlay" onClick={() => setSelectedEventId(null)}>
          <div className="agenda-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Remover Atividade</h3>
            <p>Deseja remover esta atividade da sua agenda?</p>
            <div className="agenda-modal-actions">
              <button
                className="agenda-cancel-btn"
                onClick={() => setSelectedEventId(null)}
              >
                Cancelar
              </button>
              <button
                className="agenda-remove-btn"
                onClick={() => handleRemoveEvent(selectedEventId)}
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav activeScreen="agenda" onNavigate={setCurrentScreen} />
    </div>
  );
};

export default Agenda;
