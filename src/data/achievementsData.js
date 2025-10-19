/**
 * achievementsData.js
 * Sistema de conquistas e badges do HobbyLocal
 */

/**
 * Lista de todas as conquistas disponíveis
 */
export const achievements = [
  {
    id: "first-activity",
    name: "Primeira Atividade",
    description: "Confirme sua primeira atividade",
    icon: "🎯",
    color: "#10B981",
    category: "beginner",
    requirement: "Confirmar 1 atividade",
  },
  {
    id: "level-3",
    name: "Nível 3",
    description: "Alcance o nível 3",
    icon: "⭐",
    color: "#F59E0B",
    category: "level",
    requirement: "Atingir nível 3",
    rewardXP: 0,
  },
  {
    id: "level-5",
    name: "Nível 5",
    description: "Alcance o nível 5",
    icon: "🌟",
    color: "#F59E0B",
    category: "level",
    requirement: "Atingir nível 5",
    rewardXP: 100,
  },
  {
    id: "level-10",
    name: "Nível 10",
    description: "Alcance o nível 10",
    icon: "💫",
    color: "#F59E0B",
    category: "level",
    requirement: "Atingir nível 10",
    rewardXP: 250,
  },
  {
    id: "5-activities",
    name: "5 Atividades",
    description: "Complete 5 atividades",
    icon: "🏃",
    color: "#8B5CF6",
    category: "activities",
    requirement: "Completar 5 atividades",
    rewardXP: 50,
  },
  {
    id: "10-activities",
    name: "10 Atividades",
    description: "Complete 10 atividades",
    icon: "🏆",
    color: "#8B5CF6",
    category: "activities",
    requirement: "Completar 10 atividades",
    rewardXP: 100,
  },
  {
    id: "25-activities",
    name: "25 Atividades",
    description: "Complete 25 atividades",
    icon: "👑",
    color: "#8B5CF6",
    category: "activities",
    requirement: "Completar 25 atividades",
    rewardXP: 250,
  },
  {
    id: "category-explorer",
    name: "Explorador de Categorias",
    description: "Participe de 5 categorias diferentes de atividade",
    icon: "🗺️",
    color: "#06B6D4",
    category: "exploration",
    requirement: "Participar de 5 categorias",
    rewardXP: 100,
  },
  {
    id: "first-post",
    name: "Primeira Postagem",
    description: "Compartilhe seu primeiro post",
    icon: "📝",
    color: "#EC4899",
    category: "social",
    requirement: "Criar 1 post",
  },
];

/**
 * Verifica se uma conquista foi desbloqueada
 * @param {string} achievementId - ID da conquista
 * @param {Object} userProgress - Objeto com progresso do usuário
 * @returns {boolean} True se desbloqueada
 */
export const isAchievementUnlocked = (achievementId, userProgress) => {
  const {
    level = 1,
    activitiesCompleted = 0,
    categoriesExplored = 0,
    streak = 0,
    postsCreated = 0,
    commentsCreated = 0,
  } = userProgress;

  switch (achievementId) {
    case "first-activity":
      return activitiesCompleted >= 1;
    case "level-3":
      return level >= 3;
    case "level-5":
      return level >= 5;
    case "level-10":
      return level >= 10;
    case "5-activities":
      return activitiesCompleted >= 5;
    case "10-activities":
      return activitiesCompleted >= 10;
    case "25-activities":
      return activitiesCompleted >= 25;
    case "category-explorer":
      return categoriesExplored >= 5;
    case "first-post":
      return postsCreated >= 1;
    default:
      return false;
  }
};

/**
 * Calcula o progresso de uma conquista
 * @param {string} achievementId - ID da conquista
 * @param {Object} userProgress - Objeto com progresso do usuário
 * @returns {Object} { current, total, percentage }
 */
export const getAchievementProgress = (achievementId, userProgress) => {
  const {
    level = 1,
    activitiesCompleted = 0,
    categoriesExplored = 0,
    streak = 0,
    postsCreated = 0,
    commentsCreated = 0,
  } = userProgress;

  let current = 0;
  let total = 1;

  switch (achievementId) {
    case "first-activity":
      current = activitiesCompleted;
      total = 1;
      break;
    case "level-3":
      current = level;
      total = 3;
      break;
    case "level-5":
      current = level;
      total = 5;
      break;
    case "level-10":
      current = level;
      total = 10;
      break;
    case "5-activities":
      current = activitiesCompleted;
      total = 5;
      break;
    case "10-activities":
      current = activitiesCompleted;
      total = 10;
      break;
    case "25-activities":
      current = activitiesCompleted;
      total = 25;
      break;
    case "category-explorer":
      current = categoriesExplored;
      total = 5;
      break;
    case "first-post":
      current = postsCreated;
      total = 1;
      break;
  }

  return {
    current: Math.min(current, total),
    total,
    percentage: Math.min(100, Math.round((current / total) * 100)),
  };
};

/**
 * Obtém conquistas desbloqueadas do usuário
 * @param {Object} userProgress - Objeto com progresso do usuário
 * @returns {Array} Array de conquistas desbloqueadas
 */
export const getUnlockedAchievements = (userProgress) => {
  return achievements.filter((achievement) =>
    isAchievementUnlocked(achievement.id, userProgress)
  );
};

/**
 * Obtém conquistas bloqueadas do usuário
 * @param {Object} userProgress - Objeto com progresso do usuário
 * @returns {Array} Array de conquistas bloqueadas com progresso
 */
export const getLockedAchievements = (userProgress) => {
  return achievements
    .filter(
      (achievement) => !isAchievementUnlocked(achievement.id, userProgress)
    )
    .map((achievement) => ({
      ...achievement,
      progress: getAchievementProgress(achievement.id, userProgress),
    }));
};
