/**
 * userData.js
 * Dados iniciais e configurações do usuário padrão do protótipo
 */

import { getHobbyById } from "./hobbiesData";

/**
 * Dados do usuário padrão
 */
export const defaultUser = {
  name: "Felipe Silva",
  email: "felipe.silva@email.com",
  avatar:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80",
  stats: {
    activities: 12,
    hours: 45,
  },
};

/**
 * Hobbies iniciais do usuário padrão
 * Estes hobbies são usados para gerar recomendações personalizadas
 * Carregados diretamente de hobbiesData.js para garantir consistência
 */
export const defaultUserHobbies = [
  // Esportes
  getHobbyById("futebol"),
  getHobbyById("natacao"),
  getHobbyById("ciclismo"),

  // Música
  getHobbyById("musica"),
  getHobbyById("violao"),

  // Arte
  getHobbyById("arte"),
  getHobbyById("fotografia"),
  getHobbyById("danca"),

  // Bem-estar
  getHobbyById("yoga"),
].filter((hobby) => hobby !== undefined); // Remove valores undefined caso algum ID não seja encontrado

/**
 * Localização padrão do usuário
 */
export const defaultLocation = {
  name: "Icaraí, Niterói",
  coordinates: {
    lat: -22.9064,
    lng: -43.1086,
  },
};

/**
 * Configurações padrão de notificações
 */
export const defaultNotificationSettings = {
  newActivities: true,
  reminders: true,
  messages: true,
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
  localStorage.removeItem("hobbylocal-favorites");
  localStorage.removeItem("hobbylocal-user-hobbies");
  console.log("Dados do usuário limpos com sucesso");
};

/**
 * Reseta os dados do usuário para os valores padrão
 */
export const resetUserData = () => {
  saveUserData("hobbylocal-favorites", []);
  saveUserData("hobbylocal-user-hobbies", defaultUserHobbies);
  console.log("Dados do usuário resetados para valores padrão");
};

/**
 * Carrega eventos agendados do localStorage
 * @returns {Array} Array de eventos agendados
 */
export const loadScheduledEvents = () => {
  return loadUserData("hobbylocal-scheduled-events", []);
};

/**
 * Salva eventos agendados no localStorage
 * @param {Array} events - Array de eventos agendados
 */
export const saveScheduledEvents = (events) => {
  saveUserData("hobbylocal-scheduled-events", events);
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
    status: "confirmed",
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
  const updatedEvents = currentEvents.filter((event) => event.id !== eventId);
  saveScheduledEventsForMode(updatedEvents);
  return updatedEvents;
};

/**
 * Salva dados da simulação do usuário
 * @param {Object} userData - Objeto com name e email do usuário
 */
export const saveSimulationUser = (userData) => {
  saveUserData("hobbylocal-simulation-user", userData);
};

/**
 * Carrega dados da simulação do usuário
 * @returns {Object|null} Dados do usuário simulado ou null
 */
export const loadSimulationUser = () => {
  return loadUserData("hobbylocal-simulation-user", null);
};

/**
 * Remove dados da simulação (volta ao modo padrão)
 */
export const clearSimulationUser = () => {
  localStorage.removeItem("hobbylocal-simulation-user");
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
    ? "hobbylocal-simulation-favorites"
    : "hobbylocal-favorites";
  return loadUserData(key, []);
};

/**
 * Salva favoritos (modo simulação ou padrão)
 * @param {Array} favorites - Array de IDs favoritos
 */
export const saveFavorites = (favorites) => {
  const key = isSimulationMode()
    ? "hobbylocal-simulation-favorites"
    : "hobbylocal-favorites";
  saveUserData(key, favorites);
};

/**
 * Carrega eventos agendados (modo simulação ou padrão)
 * @returns {Array} Array de eventos agendados
 */
export const loadScheduledEventsForMode = () => {
  const key = isSimulationMode()
    ? "hobbylocal-simulation-scheduled-events"
    : "hobbylocal-scheduled-events";
  return loadUserData(key, []);
};

/**
 * Salva eventos agendados (modo simulação ou padrão)
 * @param {Array} events - Array de eventos agendados
 */
export const saveScheduledEventsForMode = (events) => {
  const key = isSimulationMode()
    ? "hobbylocal-simulation-scheduled-events"
    : "hobbylocal-scheduled-events";
  saveUserData(key, events);
};

/**
 * Atualiza dados do perfil do usuário
 * @param {Object} profileData - Dados do perfil (name, email, avatar)
 */
export const updateUserProfile = (profileData) => {
  if (isSimulationMode()) {
    // Atualiza dados do usuário simulado
    const currentData = loadSimulationUser() || {};
    const updatedData = {
      ...currentData,
      ...profileData,
    };
    saveSimulationUser(updatedData);
  } else {
    // Atualiza dados do usuário padrão
    saveUserData("hobbylocal-user-profile", profileData);
  }
};

/**
 * Carrega dados do perfil do usuário padrão
 * @returns {Object|null} Dados do perfil ou null
 */
export const loadUserProfile = () => {
  return loadUserData("hobbylocal-user-profile", null);
};

/**
 * Carrega XP do usuário (modo simulação ou padrão)
 * @returns {Object} Objeto com level, currentXP, nextLevelXP
 */
export const loadUserXP = () => {
  const key = isSimulationMode()
    ? "hobbylocal-simulation-xp"
    : "hobbylocal-user-xp";

  // Valores padrão diferentes para cada modo
  const defaultXP = isSimulationMode()
    ? { level: 1, currentXP: 0, nextLevelXP: 100 }
    : { level: 3, currentXP: 450, nextLevelXP: 600 };

  return loadUserData(key, defaultXP);
};

/**
 * Salva XP do usuário (modo simulação ou padrão)
 * @param {Object} xpData - Objeto com level, currentXP, nextLevelXP
 */
export const saveUserXP = (xpData) => {
  const key = isSimulationMode()
    ? "hobbylocal-simulation-xp"
    : "hobbylocal-user-xp";
  saveUserData(key, xpData);
};

/**
 * Adiciona XP ao usuário e calcula nível automaticamente
 * @param {number} amount - Quantidade de XP a adicionar
 * @returns {Object} Objeto atualizado com level, currentXP, nextLevelXP
 */
export const addUserXP = (amount) => {
  const currentXP = loadUserXP();
  let newXP = currentXP.currentXP + amount;
  let newLevel = currentXP.level;
  let nextLevelXP = currentXP.nextLevelXP;

  // Verifica se subiu de nível
  while (newXP >= nextLevelXP) {
    newXP -= nextLevelXP;
    newLevel++;
    nextLevelXP = newLevel * 100; // Cada nível requer 100 XP a mais
  }

  const updatedXP = {
    level: newLevel,
    currentXP: newXP,
    nextLevelXP: nextLevelXP,
  };

  saveUserXP(updatedXP);
  return updatedXP;
};

/**
 * Verifica se é a primeira confirmação do usuário (modo simulação apenas)
 * @returns {boolean} True se é a primeira confirmação
 */
export const isFirstConfirmation = () => {
  if (!isSimulationMode()) return false;

  // Verifica se a flag já foi marcada
  const firstConfirmationDone = loadUserData(
    "hobbylocal-simulation-first-confirmation",
    false
  );
  return !firstConfirmationDone; // Retorna true apenas se AINDA NÃO confirmou pela primeira vez
};

/**
 * Marca que o usuário já confirmou a primeira atividade
 */
export const markFirstConfirmationDone = () => {
  if (isSimulationMode()) {
    saveUserData("hobbylocal-simulation-first-confirmation", true);
  }
};

/**
 * Carrega streak do usuário (dias consecutivos)
 * @returns {number} Número de dias consecutivos
 */
export const loadUserStreak = () => {
  const key = isSimulationMode()
    ? "hobbylocal-simulation-streak"
    : "hobbylocal-user-streak";

  // Valores padrão diferentes para cada modo
  const defaultStreak = isSimulationMode() ? 0 : 15;

  return loadUserData(key, defaultStreak);
};

/**
 * Salva streak do usuário
 * @param {number} streak - Número de dias consecutivos
 */
export const saveUserStreak = (streak) => {
  const key = isSimulationMode()
    ? "hobbylocal-simulation-streak"
    : "hobbylocal-user-streak";
  saveUserData(key, streak);
};

/**
 * Carrega missões completadas (modo simulação ou padrão)
 * @returns {Array} Array de IDs de missões completadas
 */
export const loadCompletedMissions = () => {
  const key = isSimulationMode()
    ? "hobbylocal-simulation-completed-missions"
    : "hobbylocal-user-completed-missions";
  return loadUserData(key, []);
};

/**
 * Salva missões completadas (modo simulação ou padrão)
 * @param {Array} missions - Array de IDs de missões completadas
 */
export const saveCompletedMissions = (missions) => {
  const key = isSimulationMode()
    ? "hobbylocal-simulation-completed-missions"
    : "hobbylocal-user-completed-missions";
  saveUserData(key, missions);
};

/**
 * Marca uma missão como completada
 * @param {string} missionId - ID da missão
 * @returns {boolean} True se foi marcada agora (não estava completada antes)
 */
export const markMissionAsCompleted = (missionId) => {
  const completed = loadCompletedMissions();
  if (completed.includes(missionId)) {
    return false; // Já estava completada
  }
  completed.push(missionId);
  saveCompletedMissions(completed);
  return true; // Foi marcada agora
};

/**
 * Verifica se uma missão foi completada
 * @param {string} missionId - ID da missão
 * @returns {boolean} True se a missão foi completada
 */
export const isMissionAlreadyCompleted = (missionId) => {
  const completed = loadCompletedMissions();
  return completed.includes(missionId);
};

/**
 * Rastreia categorias exploradas pelo usuário (modo simulação ou padrão)
 * @param {string} category - Nome da categoria
 */
export const trackCategoryExplored = (category) => {
  const key = isSimulationMode()
    ? "hobbylocal-simulation-categories-explored"
    : "hobbylocal-user-categories-explored";

  const categories = loadUserData(key, []);
  if (!categories.includes(category)) {
    categories.push(category);
    saveUserData(key, categories);
  }
};

/**
 * Carrega categorias exploradas pelo usuário
 * @returns {Array} Array de categorias exploradas
 */
export const loadCategoriesExplored = () => {
  const key = isSimulationMode()
    ? "hobbylocal-simulation-categories-explored"
    : "hobbylocal-user-categories-explored";
  return loadUserData(key, []);
};

/**
 * Carrega conquistas desbloqueadas (modo simulação ou padrão)
 * @returns {Array} Array de IDs de conquistas desbloqueadas
 */
export const loadUnlockedAchievements = () => {
  const key = isSimulationMode()
    ? "hobbylocal-simulation-unlocked-achievements"
    : "hobbylocal-user-unlocked-achievements";
  return loadUserData(key, []);
};

/**
 * Salva conquistas desbloqueadas (modo simulação ou padrão)
 * @param {Array} achievements - Array de IDs de conquistas desbloqueadas
 */
export const saveUnlockedAchievements = (achievements) => {
  const key = isSimulationMode()
    ? "hobbylocal-simulation-unlocked-achievements"
    : "hobbylocal-user-unlocked-achievements";
  saveUserData(key, achievements);
};

/**
 * Marca uma conquista como desbloqueada
 * @param {string} achievementId - ID da conquista
 * @returns {boolean} True se foi marcada agora (não estava desbloqueada antes)
 */
export const markAchievementAsUnlocked = (achievementId) => {
  const unlocked = loadUnlockedAchievements();
  if (unlocked.includes(achievementId)) {
    return false; // Já estava desbloqueada
  }
  unlocked.push(achievementId);
  saveUnlockedAchievements(unlocked);
  return true; // Foi marcada agora
};

/**
 * Verifica se uma conquista foi desbloqueada
 * @param {string} achievementId - ID da conquista
 * @returns {boolean} True se a conquista foi desbloqueada
 */
export const isAchievementAlreadyUnlocked = (achievementId) => {
  const unlocked = loadUnlockedAchievements();
  return unlocked.includes(achievementId);
};

/**
 * Inicializa dados de demonstração para o modo simulação
 * Adiciona alguns dados iniciais para mostrar o sistema funcionando
 */
export const initializeDemoData = () => {
  // Começa sem favoritos (progresso 0/3)
  saveUserData("hobbylocal-simulation-favorites", []);

  console.log("✨ Dados de demonstração inicializados!");
};

/**
 * Reseta todos os dados da simulação
 * Remove todos os dados salvos no localStorage relacionados à simulação
 */
export const resetSimulationData = () => {
  // Remove dados do usuário simulado
  localStorage.removeItem("hobbylocal-simulation-user");

  // Remove XP da simulação
  localStorage.removeItem("hobbylocal-simulation-xp");

  // Remove favoritos da simulação
  localStorage.removeItem("hobbylocal-simulation-favorites");

  // Remove eventos agendados da simulação
  localStorage.removeItem("hobbylocal-simulation-scheduled-events");

  // Remove marca de primeira confirmação
  localStorage.removeItem("hobbylocal-simulation-first-confirmation");

  // Remove hobbies do usuário (volta para vazio ou default)
  localStorage.removeItem("hobbylocal-user-hobbies");

  // Remove posts do usuário simulado
  localStorage.removeItem("hobbylocal-user-posts");

  // Remove streak da simulação
  localStorage.removeItem("hobbylocal-simulation-streak");

  // Remove missões completadas da simulação
  localStorage.removeItem("hobbylocal-simulation-completed-missions");

  // Remove categorias exploradas da simulação
  localStorage.removeItem("hobbylocal-simulation-categories-explored");

  // Remove conquistas desbloqueadas da simulação
  localStorage.removeItem("hobbylocal-simulation-unlocked-achievements");

  console.log("✅ Todos os dados da simulação foram resetados!");

  // Inicializa dados de demonstração
  initializeDemoData();
};
