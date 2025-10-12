/**
 * categoriesData.js
 * Categorias e mapeamentos de hobbies para categorias
 */

/**
 * Lista de todas as categorias disponíveis
 */
export const categories = [
  'Recomendados',
  'Todos',
  'Arte',
  'Esportes',
  'Música',
  'Bem-estar'
];

/**
 * Mapeamento de hobbies para categorias de atividades
 * Usado para gerar recomendações personalizadas
 */
export const hobbyToCategoryMap = {
  // Esportes
  'Futebol': 'Esportes',
  'Basquete': 'Esportes',
  'Vôlei': 'Esportes',
  'Natação': 'Esportes',
  'Corrida': 'Esportes',
  'Ciclismo': 'Esportes',
  'Skate': 'Esportes',

  // Música
  'Música': 'Música',
  'Violão': 'Música',
  'Piano': 'Música',
  'Canto': 'Música',
  'Bateria': 'Música',
  'DJ': 'Música',

  // Arte
  'Arte': 'Arte',
  'Pintura': 'Arte',
  'Desenho': 'Arte',
  'Fotografia': 'Arte',
  'Dança': 'Arte',
  'Teatro': 'Arte',
  'Artesanato': 'Arte',

  // Bem-estar
  'Yoga': 'Bem-estar',
  'Meditação': 'Bem-estar',
  'Pilates': 'Bem-estar',
  'Academia': 'Bem-estar',
  'Caminhada': 'Bem-estar',

  // Outros
  'Culinária': 'Outros',
  'Leitura': 'Outros',
  'Games': 'Outros',
  'Jardinagem': 'Outros',
  'Viagens': 'Outros'
};

/**
 * Obtém categorias recomendadas baseadas nos hobbies do usuário
 * @param {Array} userHobbies - Array de objetos de hobbies do usuário
 * @returns {Array} Array de categorias únicas recomendadas
 */
export const getRecommendedCategories = (userHobbies) => {
  // Fallback seguro: se não houver hobbies ou for inválido, retorna array vazio
  if (!userHobbies || !Array.isArray(userHobbies) || userHobbies.length === 0) {
    return [];
  }

  return userHobbies
    .filter(hobby => hobby && hobby.name) // Filtra hobbies inválidos
    .map(hobby => hobbyToCategoryMap[hobby.name])
    .filter((category, index, self) => category && self.indexOf(category) === index);
};

/**
 * Verifica se uma categoria é uma categoria especial (Recomendados ou Todos)
 * @param {string} category - Nome da categoria
 * @returns {boolean} True se for categoria especial
 */
export const isSpecialCategory = (category) => {
  return category === 'Recomendados' || category === 'Todos';
};

/**
 * Obtém categorias regulares (sem Recomendados e Todos)
 * @returns {Array} Array de categorias regulares
 */
export const getRegularCategories = () => {
  return categories.filter(cat => !isSpecialCategory(cat));
};
