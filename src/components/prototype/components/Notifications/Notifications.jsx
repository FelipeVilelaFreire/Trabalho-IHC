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
      type: 'coupon',
      icon: '🎁',
      title: 'Novo cupom disponível!',
      message: 'Você ganhou 35% de desconto! Cupom "EXPLORER35" por experimentar 5 categorias diferentes.',
      time: '10 min atrás',
      isRead: false,
      color: '#10B981',
      action: 'cupons'
    },
    {
      id: 2,
      type: 'activity',
      icon: '🎨',
      title: 'Nova atividade disponível',
      message: 'Aula de Pintura em Aquarela está com vagas abertas!',
      time: '30 min atrás',
      isRead: false,
      color: '#EC4899'
    },
    {
      id: 3,
      type: 'coupon-expiring',
      icon: '⚠️',
      title: 'Cupom expirando em breve',
      message: 'Seu cupom "FELIPEPRO25" (25% off) expira em 30/11. Use antes que expire!',
      time: '1 hora atrás',
      isRead: false,
      color: '#F59E0B',
      action: 'cupons'
    },
    {
      id: 4,
      type: 'reminder',
      icon: '⏰',
      title: 'Lembrete de atividade',
      message: 'Sua aula de Futebol no Parque começa em 2 horas',
      time: '2 horas atrás',
      isRead: false,
      color: '#F59E0B'
    },
    {
      id: 5,
      type: 'success',
      icon: '✅',
      title: 'Confirmação de participação',
      message: 'Você está confirmado para Yoga na Praia amanhã às 7h',
      time: '3 horas atrás',
      isRead: true,
      color: '#10B981'
    },
    {
      id: 6,
      type: 'coupon-used',
      icon: '💎',
      title: 'Cupom utilizado com sucesso',
      message: 'Cupom "ATIVIDADE10" (20% off) aplicado na sua última atividade. Economia de R$ 9,00!',
      time: '4 horas atrás',
      isRead: true,
      color: '#8B5CF6',
      action: 'cupons'
    },
    {
      id: 7,
      type: 'social',
      icon: '👥',
      title: 'Novos participantes',
      message: '3 pessoas se juntaram à sua atividade de Futebol',
      time: '5 horas atrás',
      isRead: true,
      color: '#6366F1'
    },
    {
      id: 8,
      type: 'coupon-earned',
      icon: '🎊',
      title: 'Cupom conquistado!',
      message: 'Você ganhou 20% de desconto! Cupom "FIDELITY20" por completar 3 meses no HobbyLocal.',
      time: '1 dia atrás',
      isRead: true,
      color: '#EC4899',
      action: 'cupons'
    },
    {
      id: 9,
      type: 'update',
      icon: '📝',
      title: 'Atualização de atividade',
      message: 'O local da Aula de Violão foi alterado para Sala 203',
      time: '1 dia atrás',
      isRead: true,
      color: '#8B5CF6'
    },
    {
      id: 10,
      type: 'achievement',
      icon: '🏆',
      title: 'Nova conquista desbloqueada',
      message: 'Parabéns! Você completou 10 atividades este mês',
      time: '2 dias atrás',
      isRead: true,
      color: '#F59E0B'
    },
    {
      id: 11,
      type: 'coupon-available',
      icon: '🎯',
      title: 'Cupom de boas-vindas ativo',
      message: 'Use o cupom "FELIPEINIT15" (15% off) na sua próxima atividade!',
      time: '3 dias atrás',
      isRead: true,
      color: '#10B981',
      action: 'cupons'
    }
  ];

  // Notificações do modo demo (simulação)
  const demoNotifications = [
    {
      id: 1,
      type: 'xp-challenge',
      icon: '⭐',
      title: 'Ganhe XP com sua primeira atividade!',
      message: 'Confirme sua primeira atividade para ganhar 25 XP e evoluir no HobbyLocal. Acesse uma atividade e clique em "Confirmar Participação"!',
      time: 'Agora',
      isRead: false,
      color: '#F59E0B',
      action: 'home'
    },
    {
      id: 2,
      type: 'welcome',
      icon: '🎉',
      title: 'Bem-vindo ao HobbyLocal!',
      message: 'Explore atividades incríveis perto de você e conecte-se com pessoas que compartilham seus interesses!',
      time: '5 min atrás',
      isRead: false,
      color: '#667eea'
    },
    {
      id: 3,
      type: 'coupon',
      icon: '🎁',
      title: 'Cupom de boas-vindas liberado!',
      message: 'Você ganhou 10% de desconto! Use o cupom "BEMVINDO10" na sua primeira atividade.',
      time: '5 min atrás',
      isRead: false,
      color: '#10B981',
      action: 'cupons'
    },
    {
      id: 4,
      type: 'coupon-first',
      icon: '🎯',
      title: 'Cupom especial disponível!',
      message: 'Cupom "PRIMEIRA15" (15% off) pronto para usar! Válido para sua primeira atividade.',
      time: '10 min atrás',
      isRead: false,
      color: '#F59E0B',
      action: 'cupons'
    },
    {
      id: 5,
      type: 'tip',
      icon: '💡',
      title: 'Dica: Complete seu perfil',
      message: 'Adicione seus hobbies favoritos no perfil para receber recomendações personalizadas!',
      time: '15 min atrás',
      isRead: false,
      color: '#8B5CF6'
    },
    {
      id: 6,
      type: 'discovery',
      icon: '🔍',
      title: 'Descubra novas atividades',
      message: 'Explore mais de 12 atividades diferentes em Niterói. Da arte ao esporte, tem para todos!',
      time: '30 min atrás',
      isRead: true,
      color: '#EC4899'
    },
    {
      id: 7,
      type: 'community',
      icon: '👥',
      title: 'Junte-se à comunidade',
      message: 'Compartilhe suas conquistas e experiências no feed da comunidade HobbyLocal!',
      time: '1 hora atrás',
      isRead: true,
      color: '#06B6D4'
    }
  ];

  // No modo simulação usa notificações demo, caso contrário usa notificações padrão
  const notifications = isSimulationMode() ? demoNotifications : defaultNotifications;

  // Filter notifications based on active tab
  const filteredNotifications = activeTab === 'all'
    ? notifications
    : notifications.filter(n => !n.isRead);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  // Handler para clicar em uma notificação
  const handleNotificationClick = (notification) => {
    if (notification.action) {
      setCurrentScreen(notification.action);
    }
  };

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
        style={
          (activeTab === 'all' && filteredNotifications.length <= 4) ||
          (activeTab === 'unread' && unreadCount <= 4)
            ? { minHeight: '550px' }
            : {}
        }
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
                className={`notification-item ${notification.isRead ? 'read' : 'unread'} ${notification.action ? 'clickable' : ''}`}
                onClick={() => handleNotificationClick(notification)}
                style={{ cursor: notification.action ? 'pointer' : 'default' }}
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
                {notification.action && (
                  <div className="notification-action-arrow">→</div>
                )}
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
