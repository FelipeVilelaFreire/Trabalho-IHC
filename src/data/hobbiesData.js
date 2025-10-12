/**
 * hobbiesData.js
 * Lista de todos os hobbies disponíveis organizados por categoria
 */

export const availableHobbies = [
  // Esportes
  { id: 'hobby-futebol', name: 'Futebol', emoji: '⚽', color: '#F59E0B', category: 'Esportes' },
  { id: 'hobby-basquete', name: 'Basquete', emoji: '🏀', color: '#F97316', category: 'Esportes' },
  { id: 'hobby-volei', name: 'Vôlei', emoji: '🏐', color: '#FB923C', category: 'Esportes' },
  { id: 'hobby-natacao', name: 'Natação', emoji: '🏊', color: '#06B6D4', category: 'Esportes' },
  { id: 'hobby-corrida', name: 'Corrida', emoji: '🏃', color: '#0EA5E9', category: 'Esportes' },
  { id: 'hobby-ciclismo', name: 'Ciclismo', emoji: '🚴', color: '#14B8A6', category: 'Esportes' },
  { id: 'hobby-skate', name: 'Skate', emoji: '🛹', color: '#22D3EE', category: 'Esportes' },

  // Música
  { id: 'hobby-musica', name: 'Música', emoji: '🎵', color: '#8B5CF6', category: 'Música' },
  { id: 'hobby-violao', name: 'Violão', emoji: '🎸', color: '#A855F7', category: 'Música' },
  { id: 'hobby-piano', name: 'Piano', emoji: '🎹', color: '#9333EA', category: 'Música' },
  { id: 'hobby-canto', name: 'Canto', emoji: '🎤', color: '#7C3AED', category: 'Música' },
  { id: 'hobby-bateria', name: 'Bateria', emoji: '🥁', color: '#6D28D9', category: 'Música' },
  { id: 'hobby-dj', name: 'DJ', emoji: '🎧', color: '#5B21B6', category: 'Música' },

  // Arte
  { id: 'hobby-arte', name: 'Arte', emoji: '🎨', color: '#EC4899', category: 'Arte' },
  { id: 'hobby-pintura', name: 'Pintura', emoji: '🖌️', color: '#DB2777', category: 'Arte' },
  { id: 'hobby-desenho', name: 'Desenho', emoji: '✏️', color: '#BE185D', category: 'Arte' },
  { id: 'hobby-fotografia', name: 'Fotografia', emoji: '📷', color: '#06B6D4', category: 'Arte' },
  { id: 'hobby-danca', name: 'Dança', emoji: '💃', color: '#F472B6', category: 'Arte' },
  { id: 'hobby-teatro', name: 'Teatro', emoji: '🎭', color: '#E879F9', category: 'Arte' },
  { id: 'hobby-artesanato', name: 'Artesanato', emoji: '🧶', color: '#C026D3', category: 'Arte' },

  // Bem-estar
  { id: 'hobby-yoga', name: 'Yoga', emoji: '🧘', color: '#10B981', category: 'Bem-estar' },
  { id: 'hobby-meditacao', name: 'Meditação', emoji: '🧘‍♀️', color: '#059669', category: 'Bem-estar' },
  { id: 'hobby-pilates', name: 'Pilates', emoji: '🤸', color: '#047857', category: 'Bem-estar' },
  { id: 'hobby-academia', name: 'Academia', emoji: '💪', color: '#065F46', category: 'Bem-estar' },
  { id: 'hobby-caminhada', name: 'Caminhada', emoji: '🚶', color: '#34D399', category: 'Bem-estar' },

  // Outros
  { id: 'hobby-culinaria', name: 'Culinária', emoji: '👨‍🍳', color: '#EF4444', category: 'Outros' },
  { id: 'hobby-leitura', name: 'Leitura', emoji: '📚', color: '#3B82F6', category: 'Outros' },
  { id: 'hobby-games', name: 'Games', emoji: '🎮', color: '#8B5CF6', category: 'Outros' },
  { id: 'hobby-jardinagem', name: 'Jardinagem', emoji: '🌱', color: '#22C55E', category: 'Outros' },
  { id: 'hobby-viagem', name: 'Viagens', emoji: '✈️', color: '#0EA5E9', category: 'Outros' },
];

/**
 * Obtém um hobby pelo nome
 * @param {string} name - Nome do hobby
 * @returns {Object|undefined} Hobby encontrado ou undefined
 */
export const getHobbyByName = (name) => {
  return availableHobbies.find(hobby => hobby.name === name);
};

/**
 * Obtém um hobby pelo ID (com ou sem prefixo 'hobby-')
 * @param {string} id - ID do hobby
 * @returns {Object|undefined} Hobby encontrado ou undefined
 */
export const getHobbyById = (id) => {
  // Tenta encontrar com o ID exato
  let hobby = availableHobbies.find(h => h.id === id);

  // Se não encontrar, tenta adicionar o prefixo 'hobby-'
  if (!hobby && !id.startsWith('hobby-')) {
    hobby = availableHobbies.find(h => h.id === `hobby-${id}`);
  }

  return hobby;
};

/**
 * Converte um array de IDs em array de objetos de hobbies completos
 * @param {Array<string>} hobbyIds - Array de IDs de hobbies
 * @returns {Array} Array de objetos de hobbies
 */
export const convertHobbyIdsToObjects = (hobbyIds) => {
  if (!hobbyIds || !Array.isArray(hobbyIds)) {
    return [];
  }

  return hobbyIds
    .map(id => getHobbyById(id))
    .filter(hobby => hobby !== undefined); // Remove valores undefined
};

/**
 * Obtém hobbies por categoria
 * @param {string} category - Categoria dos hobbies
 * @returns {Array} Lista de hobbies da categoria
 */
export const getHobbiesByCategory = (category) => {
  return availableHobbies.filter(hobby => hobby.category === category);
};

/**
 * Obtém todas as categorias únicas
 * @returns {Array} Lista de categorias
 */
export const getCategories = () => {
  return [...new Set(availableHobbies.map(hobby => hobby.category))];
};
