import React, { useState } from 'react';
import BottomNav from '../shared/BottomNav';
import '../shared/Shared.css';
import './Notifications.css';
import { isSimulationMode } from '../../../../data/userData';

/**
 * Notifications Component
 * Displays user notifications with tabs for all and unread notifications
 *
 * @param {Object} props - Component props
 * @param {Function} props.setCurrentScreen - Function to navigate between screens
 */
const Notifications = ({ setCurrentScreen }) => {
  const [activeTab, setActiveTab] = useState('all');

  // Notificações padrão (modo normal)
  const defaultNotifications = [
    {
      id: 1,
      type: 'activity',
      icon: '🎨',
      title: 'Nova atividade disponível',
      message: 'Aula de Pintura em Aquarela está com vagas abertas!',
      time: '5 min atrás',
      isRead: false,
      color: '#EC4899'
    },
    {
      id: 2,
      type: 'reminder',
      icon: '⏰',
      title: 'Lembrete de atividade',
      message: 'Sua aula de Futebol no Parque começa em 2 horas',
      time: '1 hora atrás',
      isRead: false,
      color: '#F59E0B'
    },
    {
      id: 3,
      type: 'success',
      icon: '✅',
      title: 'Confirmação de participação',
      message: 'Você está confirmado para Yoga na Praia amanhã às 7h',
      time: '3 horas atrás',
      isRead: true,
      color: '#10B981'
    },
    {
      id: 4,
      type: 'social',
      icon: '👥',
      title: 'Novos participantes',
      message: '3 pessoas se juntaram à sua atividade de Futebol',
      time: '5 horas atrás',
      isRead: true,
      color: '#6366F1'
    },
    {
      id: 5,
      type: 'update',
      icon: '📝',
      title: 'Atualização de atividade',
      message: 'O local da Aula de Violão foi alterado para Sala 203',
      time: '1 dia atrás',
      isRead: true,
      color: '#8B5CF6'
    },
    {
      id: 6,
      type: 'achievement',
      icon: '🏆',
      title: 'Nova conquista desbloqueada',
      message: 'Parabéns! Você completou 10 atividades este mês',
      time: '2 dias atrás',
      isRead: true,
      color: '#F59E0B'
    }
  ];

  // No modo simulação, notificações começam vazias
  const notifications = isSimulationMode() ? [] : defaultNotifications;

  // Filter notifications based on active tab
  const filteredNotifications = activeTab === 'all'
    ? notifications
    : notifications.filter(n => !n.isRead);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="app-screen notifications-screen">
      {/* Header */}
      <div className="app-header notifications-header">
        <button className="back-btn" onClick={() => setCurrentScreen('home')}>
          ←
        </button>
        <h2>Notificações</h2>
      </div>

      {/* Tabs */}
      <div className="notifications-tabs">
        <button
          className={`notification-tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          Todas ({notifications.length})
        </button>
        <button
          className={`notification-tab ${activeTab === 'unread' ? 'active' : ''}`}
          onClick={() => setActiveTab('unread')}
        >
          Não lidas ({unreadCount})
        </button>
      </div>

      {/* Notifications Content */}
      <div
        className="notifications-content"
        style={filteredNotifications.length <= 4 ? { minHeight: '550px' } : {}}
      >
        {filteredNotifications.length === 0 ? (
          // Empty State
          <div className="empty-notifications">
            <div className="empty-icon">🔔</div>
            <h3>Nenhuma notificação</h3>
            <p>Você está em dia com todas as suas notificações!</p>
          </div>
        ) : (
          // Notifications List
          <div className="notifications-list">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}
              >
                <div
                  className="notification-icon"
                  style={{ '--notification-color': notification.color }}
                >
                  <span>{notification.icon}</span>
                </div>
                <div className="notification-content">
                  <div className="notification-header">
                    <h4>{notification.title}</h4>
                    {!notification.isRead && <span className="unread-badge"></span>}
                  </div>
                  <p className="notification-message">{notification.message}</p>
                  <span className="notification-time">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeScreen="" onNavigate={setCurrentScreen} />
    </div>
  );
};

export default Notifications;
