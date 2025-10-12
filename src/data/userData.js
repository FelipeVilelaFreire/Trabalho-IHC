/**
 * userData.js
 * Dados iniciais e configurações do usuário padrão do protótipo
 */

import { getHobbyById } from './hobbiesData';

/**
 * Dados do usuário padrão
 */
export const defaultUser = {
  name: 'Felipe Silva',
  email: 'felipe.silva@email.com',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80',
  stats: {
    activities: 12,
    hours: 45
  }
};

/**
 * Hobbies iniciais do usuário padrão
 * Estes hobbies são usados para gerar recomendações personalizadas
 * Carregados diretamente de hobbiesData.js para garantir consistência
 */
export const defaultUserHobbies = [
  // Esportes
  getHobbyById('futebol'),
  getHobbyById('natacao'),
  getHobbyById('ciclismo'),

  // Música
  getHobbyById('musica'),
  getHobbyById('violao'),

  // Arte
  getHobbyById('arte'),
  getHobbyById('fotografia'),
  getHobbyById('danca'),

  // Bem-estar
  getHobbyById('yoga')
].filter(hobby => hobby !== undefined); // Remove valores undefined caso algum ID não seja encontrado

/**
 * Localização padrão do usuário
 */
export const defaultLocation = {
  name: 'Icaraí, Niterói',
  coordinates: {
    lat: -22.9064,
    lng: -43.1086
  }
};

/**
 * Configurações padrão de notificações
 */
export const defaultNotificationSettings = {
  newActivities: true,
  reminders: true,
  messages: true
};

/**
 * Carrega dados do usuário do localStorage ou retorna dados padrão
 * @param {string} key - Chave do localStorage
 * @param {any} defaultValue - Valor padrão caso não exista no localStorage
 * @returns {any} Dados carregados ou valor padrão
 */
export const loadUserData = (key, defaultValue) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  } catch (error) {
    console.error(`Erro ao carregar ${key}:`, error);
    return defaultValue;
  }
};

/**
 * Salva dados do usuário no localStorage
 * @param {string} key - Chave do localStorage
 * @param {any} value - Valor a ser salvo
 */
export const saveUserData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Erro ao salvar ${key}:`, error);
  }
};

/**
 * Limpa todos os dados do usuário do localStorage
 */
export const clearUserData = () => {
  localStorage.removeItem('hobbylocal-favorites');
  localStorage.removeItem('hobbylocal-user-hobbies');
  console.log('Dados do usuário limpos com sucesso');
};

/**
 * Reseta os dados do usuário para os valores padrão
 */
export const resetUserData = () => {
  saveUserData('hobbylocal-favorites', []);
  saveUserData('hobbylocal-user-hobbies', defaultUserHobbies);
  console.log('Dados do usuário resetados para valores padrão');
};

/**
 * Carrega eventos agendados do localStorage
 * @returns {Array} Array de eventos agendados
 */
export const loadScheduledEvents = () => {
  return loadUserData('hobbylocal-scheduled-events', []);
};

/**
 * Salva eventos agendados no localStorage
 * @param {Array} events - Array de eventos agendados
 */
export const saveScheduledEvents = (events) => {
  saveUserData('hobbylocal-scheduled-events', events);
};

/**
 * Adiciona um novo evento agendado (detecta modo automaticamente)
 * @param {Object} event - Objeto do evento com dados da atividade
 * @returns {Array} Array atualizado de eventos
 */
export const addScheduledEvent = (event) => {
  const currentEvents = loadScheduledEventsForMode();
  const newEvent = {
    ...event,
    id: Date.now(), // ID único baseado em timestamp
    scheduledAt: new Date().toISOString(),
    status: 'confirmed'
  };
  const updatedEvents = [...currentEvents, newEvent];
  saveScheduledEventsForMode(updatedEvents);
  return updatedEvents;
};

/**
 * Remove um evento agendado (detecta modo automaticamente)
 * @param {number} eventId - ID do evento a ser removido
 * @returns {Array} Array atualizado de eventos
 */
export const removeScheduledEvent = (eventId) => {
  const currentEvents = loadScheduledEventsForMode();
  const updatedEvents = currentEvents.filter(event => event.id !== eventId);
  saveScheduledEventsForMode(updatedEvents);
  return updatedEvents;
};

/**
 * Salva dados da simulação do usuário
 * @param {Object} userData - Objeto com name e email do usuário
 */
export const saveSimulationUser = (userData) => {
  saveUserData('hobbylocal-simulation-user', userData);
};

/**
 * Carrega dados da simulação do usuário
 * @returns {Object|null} Dados do usuário simulado ou null
 */
export const loadSimulationUser = () => {
  return loadUserData('hobbylocal-simulation-user', null);
};

/**
 * Remove dados da simulação (volta ao modo padrão)
 */
export const clearSimulationUser = () => {
  localStorage.removeItem('hobbylocal-simulation-user');
};

/**
 * Verifica se está em modo simulação
 * @returns {boolean} True se estiver em modo simulação
 */
export const isSimulationMode = () => {
  return loadSimulationUser() !== null;
};

/**
 * Carrega favoritos (modo simulação ou padrão)
 * @returns {Array} Array de IDs favoritos
 */
export const loadFavorites = () => {
  const key = isSimulationMode()
    ? 'hobbylocal-simulation-favorites'
    : 'hobbylocal-favorites';
  return loadUserData(key, []);
};

/**
 * Salva favoritos (modo simulação ou padrão)
 * @param {Array} favorites - Array de IDs favoritos
 */
export const saveFavorites = (favorites) => {
  const key = isSimulationMode()
    ? 'hobbylocal-simulation-favorites'
    : 'hobbylocal-favorites';
  saveUserData(key, favorites);
};

/**
 * Carrega eventos agendados (modo simulação ou padrão)
 * @returns {Array} Array de eventos agendados
 */
export const loadScheduledEventsForMode = () => {
  const key = isSimulationMode()
    ? 'hobbylocal-simulation-scheduled-events'
    : 'hobbylocal-scheduled-events';
  return loadUserData(key, []);
};

/**
 * Salva eventos agendados (modo simulação ou padrão)
 * @param {Array} events - Array de eventos agendados
 */
export const saveScheduledEventsForMode = (events) => {
  const key = isSimulationMode()
    ? 'hobbylocal-simulation-scheduled-events'
    : 'hobbylocal-scheduled-events';
  saveUserData(key, events);
};
