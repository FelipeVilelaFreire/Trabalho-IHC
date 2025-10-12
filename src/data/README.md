# 📁 Pasta de Dados - HobbyLocal

Esta pasta contém todos os dados mockados utilizados no protótipo do HobbyLocal. A estrutura foi organizada para facilitar a futura implementação de funcionalidades de simulação e testes.

## 📋 Estrutura de Arquivos

```
/src/data/
├── activitiesData.js    # Dados de todas as atividades
├── categoriesData.js    # Categorias e mapeamentos
├── hobbiesData.js       # Lista completa de hobbies disponíveis
├── userData.js          # Dados padrão do usuário
└── README.md           # Este arquivo
```

## 📄 Descrição dos Arquivos

### `activitiesData.js`

**Propósito**: Contém todas as atividades disponíveis no aplicativo.

**Estrutura de uma atividade**:
```javascript
{
  id: number,              // ID único da atividade
  title: string,           // Nome da atividade
  category: string,        // Categoria (Arte, Esportes, Música, Bem-estar)
  location: string,        // Local da atividade
  distance: string,        // Distância do usuário
  price: string,           // Preço formatado (ex: "R$ 45" ou "Grátis")
  priceValue: number,      // Valor numérico do preço
  rating: string,          // Avaliação (ex: "4.8")
  reviews: number,         // Número de avaliações
  badge: string,           // Badge de destaque (ex: "Hoje", "Amanhã")
  emoji: string,           // Emoji representativo
  image: string,           // URL da imagem
  gradient: string,        // Gradiente de cor para cards
  description: string,     // Descrição completa
  instructor: string,      // Nome do instrutor/organizador
  instructorBio: string,   // Bio do instrutor
  participants: number,    // Participantes atuais
  maxParticipants: number, // Vagas totais
  schedule: string,        // Horário formatado
  duration: string,        // Duração da atividade
  difficulty: string,      // Nível de dificuldade
  whatToBring: string[],   // Lista do que trazer
  included: string[]       // Lista do que está incluso
}
```

**Funções auxiliares**:
- `getActivityById(id)` - Busca atividade por ID
- `getActivitiesByCategory(category)` - Filtra por categoria
- `getFreeActivities()` - Retorna apenas atividades gratuitas
- `getTopRatedActivities()` - Ordena por rating

### `categoriesData.js`

**Propósito**: Define categorias de atividades e mapeamento de hobbies.

**Conteúdo**:
- `categories` - Array com todas as categorias disponíveis
- `hobbyToCategoryMap` - Objeto que mapeia hobbies para categorias
- `getRecommendedCategories(userHobbies)` - Gera recomendações baseadas nos hobbies
- `isSpecialCategory(category)` - Verifica se é "Recomendados" ou "Todos"
- `getRegularCategories()` - Retorna categorias sem as especiais

### `hobbiesData.js`

**Propósito**: Lista completa de hobbies disponíveis para o usuário escolher.

**Estrutura de um hobby**:
```javascript
{
  id: string,      // ID único (ex: 'hobby-futebol')
  name: string,    // Nome do hobby
  emoji: string,   // Emoji representativo
  color: string,   // Cor associada (hex)
  category: string // Categoria (Esportes, Música, Arte, Bem-estar, Outros)
}
```

**Funções auxiliares**:
- `getHobbyByName(name)` - Busca hobby por nome
- `getHobbiesByCategory(category)` - Filtra por categoria
- `getCategories()` - Retorna lista de categorias únicas

### `userData.js`

**Propósito**: Dados padrão do usuário e funções de localStorage.

**Conteúdo**:
- `defaultUser` - Objeto com dados do usuário (nome, email, avatar, estatísticas)
- `defaultUserHobbies` - Array de hobbies iniciais
- `defaultLocation` - Localização padrão com coordenadas
- `defaultNotificationSettings` - Configurações de notificações

**Funções de persistência**:
- `loadUserData(key, defaultValue)` - Carrega do localStorage
- `saveUserData(key, value)` - Salva no localStorage
- `clearUserData()` - Limpa todos os dados
- `resetUserData()` - Reseta para valores padrão

## 🎯 Como Usar

### Importando dados em componentes:

```javascript
// Importar atividades
import { activities, getActivityById } from '../data/activitiesData';

// Importar categorias
import { categories, getRecommendedCategories } from '../data/categoriesData';

// Importar hobbies
import { availableHobbies, getHobbyByName } from '../data/hobbiesData';

// Importar dados do usuário
import { defaultUser, loadUserData, saveUserData } from '../data/userData';
```

### Exemplo de uso:

```javascript
// Buscar uma atividade específica
const activity = getActivityById(1);

// Obter recomendações baseadas nos hobbies do usuário
const userHobbies = loadUserData('hobbylocal-user-hobbies', defaultUserHobbies);
const recommendations = getRecommendedCategories(userHobbies);

// Filtrar atividades recomendadas
const recommendedActivities = activities.filter(
  act => recommendations.includes(act.category)
);
```

## 🔮 Futuras Implementações

### Botão de Simulação

Para implementar o botão de simulação que permita ao usuário testar diferentes cenários:

1. **Criar um componente de simulação** que permita:
   - Alternar entre diferentes perfis de usuário
   - Modificar hobbies do usuário
   - Alterar localização
   - Modificar favoritos
   - Resetar para estado padrão

2. **Estrutura sugerida**:
```javascript
// Exemplo de simulação
const simulationProfiles = {
  'Esportista': {
    hobbies: ['Futebol', 'Natação', 'Corrida'],
    favorites: [2, 5]
  },
  'Artista': {
    hobbies: ['Arte', 'Pintura', 'Fotografia'],
    favorites: [1, 6]
  },
  'Músico': {
    hobbies: ['Música', 'Violão', 'Canto'],
    favorites: [4]
  }
};
```

3. **Funcionalidades do botão de simulação**:
   - Dropdown para selecionar perfil
   - Botão para gerar dados aleatórios
   - Botão para resetar para padrão
   - Toggle para modo de demonstração

## 📝 Notas Importantes

- **localStorage**: Todos os dados do usuário são salvos automaticamente no localStorage
- **Chaves do localStorage**:
  - `hobbylocal-favorites` - IDs das atividades favoritas
  - `hobbylocal-user-hobbies` - Hobbies selecionados pelo usuário
- **Imagens**: Todas as URLs das imagens usam Unsplash
- **Dados mockados**: Todos os dados são fictícios para fins de demonstração

## 🔧 Manutenção

Para adicionar novos dados:

1. **Nova atividade**: Adicione no array `activities` em `activitiesData.js`
2. **Nova categoria**: Adicione no array `categories` em `categoriesData.js`
3. **Novo hobby**: Adicione no array `availableHobbies` em `hobbiesData.js`
4. **Atualizar mapeamento**: Adicione no objeto `hobbyToCategoryMap` em `categoriesData.js`

---

**Última atualização**: 2025-10-11
