/**
 * missionsData.js
 * Sistema de missões e desafios do HobbyLocal
 * Missões adaptadas ao nível do usuário
 */

/**
 * Missões para iniciantes (Nível 1-2)
 */
const beginnerMissions = [
  {
    id: "beginner-1",
    title: "Primeiros Passos",
    description: "Confirme sua primeira atividade",
    icon: "🎯",
    color: "#10B981",
    type: "activities",
    target: 1,
    reward: {
      xp: 15,
      badge: "Primeira Atividade",
    },
    difficulty: "easy",
  },
  {
    id: "beginner-2",
    title: "Explorador Iniciante",
    description: "Favorite 3 atividades diferentes",
    icon: "⭐",
    color: "#F59E0B",
    type: "favorites",
    target: 3,
    reward: {
      xp: 20,
      badge: null,
    },
    difficulty: "easy",
  },
  // Comunidade - Comentado
  // {
  //   id: "beginner-3",
  //   title: "Voz Ativa",
  //   description: "Faça seu primeiro post na comunidade",
  //   icon: "📝",
  //   color: "#EC4899",
  //   type: "posts",
  //   target: 1,
  //   reward: {
  //     xp: 20,
  //     badge: "Primeira Postagem",
  //   },
  //   difficulty: "easy",
  // },
  {
    id: "beginner-0",
    title: "Primeira Participação",
    description: "Participe da sua primeira atividade",
    icon: "🎉",
    color: "#10B981",
    type: "custom", // Tipo customizado - não rastreado automaticamente
    target: 1,
    reward: {
      xp: 50,
      badge: "Primeira Participação",
    },
    difficulty: "easy",
  },
];

/**
 * Missões para intermediários (Nível 3-5)
 */
const intermediateMissions = [
  {
    id: "intermediate-1",
    title: "Ativista Semanal",
    description: "Complete 3 atividades esta semana",
    icon: "🏃",
    color: "#8B5CF6",
    type: "weekly-activities",
    target: 3,
    reward: {
      xp: 50,
      badge: null,
    },
    difficulty: "medium",
  },
  {
    id: "intermediate-2",
    title: "Diversidade é Tudo",
    description: "Experimente 3 categorias diferentes",
    icon: "🗺️",
    color: "#06B6D4",
    type: "categories",
    target: 3,
    reward: {
      xp: 40,
      badge: null,
    },
    difficulty: "medium",
  },
];

/**
 * Missões para avançados (Nível 6-9)
 */
const advancedMissions = [
  {
    id: "advanced-1",
    title: "Maratonista",
    description: "Complete 5 atividades esta semana",
    icon: "🏆",
    color: "#8B5CF6",
    type: "weekly-activities",
    target: 5,
    reward: {
      xp: 80,
      badge: null,
    },
    difficulty: "hard",
  },
  {
    id: "advanced-2",
    title: "Explorador Completo",
    description: "Experimente todas as 5 categorias",
    icon: "🗺️",
    color: "#06B6D4",
    type: "categories",
    target: 5,
    reward: {
      xp: 100,
      badge: "Explorador de Categorias",
    },
    difficulty: "hard",
  },
  // Comunidade - Comentado
  // {
  //   id: "advanced-4",
  //   title: "Influenciador",
  //   description: "Crie 3 posts na comunidade",
  //   icon: "📱",
  //   color: "#EC4899",
  //   type: "posts",
  //   target: 3,
  //   reward: {
  //     xp: 60,
  //     badge: null,
  //   },
  //   difficulty: "hard",
  // },
];

/**
 * Missões para especialistas (Nível 10+)
 */
const expertMissions = [
  {
    id: "expert-1",
    title: "Ultramaratonista",
    description: "Complete 10 atividades esta semana",
    icon: "👑",
    color: "#8B5CF6",
    type: "weekly-activities",
    target: 10,
    reward: {
      xp: 150,
      badge: null,
    },
    difficulty: "expert",
  },
  // Comunidade - Comentado
  // {
  //   id: "expert-3",
  //   title: "Líder Comunitário",
  //   description: "Receba 50 curtidas em seus posts",
  //   icon: "❤️",
  //   color: "#EF4444",
  //   type: "likes-received",
  //   target: 50,
  //   reward: {
  //     xp: 120,
  //     badge: null,
  //   },
  //   difficulty: "expert",
  // },
  // {
  //   id: "expert-4",
  //   title: "Mestre das Conversas",
  //   description: "Faça 20 comentários em posts",
  //   icon: "💬",
  //   color: "#EC4899",
  //   type: "comments",
  //   target: 20,
  //   reward: {
  //     xp: 100,
  //     badge: "Borboleta Social",
  //   },
  //   difficulty: "expert",
  // },
];

/**
 * Obtém missões baseadas no nível do usuário
 * @param {number} userLevel - Nível atual do usuário
 * @returns {Array} Array de missões apropriadas
 */
export const getMissionsByLevel = (userLevel) => {
  if (userLevel <= 2) {
    return beginnerMissions;
  } else if (userLevel <= 5) {
    return intermediateMissions;
  } else if (userLevel <= 9) {
    return advancedMissions;
  } else {
    return expertMissions;
  }
};

/**
 * Verifica se uma missão foi completada
 * @param {string} missionId - ID da missão
 * @param {Object} userProgress - Objeto com progresso do usuário
 * @returns {boolean} True se completada
 */
export const isMissionCompleted = (missionId, userProgress) => {
  const {
    activitiesCompleted = 0,
    weeklyActivitiesCompleted = 0,
    favoritesCount = 0,
    postsCreated = 0,
    commentsCreated = 0,
    categoriesExplored = 0,
    streak = 0,
    likesReceived = 0,
  } = userProgress;

  // Beginner missions
  if (missionId === "beginner-0") return false; // TODO: Configurar rastreamento depois
  if (missionId === "beginner-1") return activitiesCompleted >= 1;
  if (missionId === "beginner-2") return favoritesCount >= 3;
  // Comunidade - Comentado
  // if (missionId === "beginner-3") return postsCreated >= 1;

  // Intermediate missions
  if (missionId === "intermediate-1") return weeklyActivitiesCompleted >= 3;
  if (missionId === "intermediate-2") return categoriesExplored >= 3;
  if (missionId === "intermediate-3") return commentsCreated >= 5;

  // Advanced missions
  if (missionId === "advanced-1") return weeklyActivitiesCompleted >= 5;
  if (missionId === "advanced-2") return categoriesExplored >= 5;
  // Comunidade - Comentado
  // if (missionId === "advanced-4") return postsCreated >= 3;

  // Expert missions
  if (missionId === "expert-1") return weeklyActivitiesCompleted >= 10;
  // Comunidade - Comentado
  // if (missionId === "expert-3") return likesReceived >= 50;
  // if (missionId === "expert-4") return commentsCreated >= 20;

  return false;
};

/**
 * Calcula progresso de uma missão
 * @param {Object} mission - Objeto da missão
 * @param {Object} userProgress - Objeto com progresso do usuário
 * @returns {Object} { current, target, percentage }
 */
export const getMissionProgress = (mission, userProgress) => {
  const {
    activitiesCompleted = 0,
    weeklyActivitiesCompleted = 0,
    favoritesCount = 0,
    postsCreated = 0,
    commentsCreated = 0,
    categoriesExplored = 0,
    streak = 0,
    likesReceived = 0,
  } = userProgress;

  let current = 0;

  switch (mission.type) {
    case "activities":
      current = activitiesCompleted;
      break;
    case "weekly-activities":
      current = weeklyActivitiesCompleted;
      break;
    case "favorites":
      current = favoritesCount;
      break;
    case "posts":
      current = postsCreated;
      break;
    case "comments":
      current = commentsCreated;
      break;
    case "categories":
      current = categoriesExplored;
      break;
    case "streak":
      current = streak;
      break;
    case "likes-received":
      current = likesReceived;
      break;
    case "custom":
      // Tipo customizado - não rastreado automaticamente
      current = 0;
      break;
    default:
      current = 0;
      break;
  }

  return {
    current: Math.min(current, mission.target),
    target: mission.target,
    percentage: Math.min(100, Math.round((current / mission.target) * 100)),
  };
};

/**
 * Obtém cor da dificuldade
 * @param {string} difficulty - Dificuldade da missão
 * @returns {string} Cor hex
 */
export const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case "easy":
      return "#10B981";
    case "medium":
      return "#F59E0B";
    case "hard":
      return "#EF4444";
    case "expert":
      return "#8B5CF6";
    default:
      return "#6c757d";
  }
};

/**
 * Obtém nome traduzido da dificuldade
 * @param {string} difficulty - Dificuldade da missão
 * @returns {string} Nome traduzido
 */
export const getDifficultyName = (difficulty) => {
  switch (difficulty) {
    case "easy":
      return "Fácil";
    case "medium":
      return "Médio";
    case "hard":
      return "Difícil";
    case "expert":
      return "Especialista";
    default:
      return "Desconhecido";
  }
};
