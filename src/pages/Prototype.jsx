import React, { useState, useEffect } from 'react';
import PhoneMockup from '../components/prototype/PhoneMockup';
import Home from '../components/prototype/components/Home/Home';
import Search from '../components/prototype/components/Search/Search';
import Details from '../components/prototype/components/Details/Details';
import Confirmation from '../components/prototype/components/Confirmation/Confirmation';
import Map from '../components/prototype/components/Map/Map';
import Agenda from '../components/prototype/components/Agenda/Agenda';
import Profile from '../components/prototype/components/Profile/Profile';
import Favorites from '../components/prototype/components/Favorites/Favorites';
import Notifications from '../components/prototype/components/Notifications/Notifications';
import SignupScreen from '../components/prototype/components/Simule/SignupScreen';
import HobbySelection from '../components/prototype/components/Simule/HobbySelection';
import { activities } from '../data/activitiesData';
import { categories, getRecommendedCategories } from '../data/categoriesData';
import { defaultUserHobbies, loadUserData, saveUserData, addScheduledEvent, saveSimulationUser, loadFavorites, saveFavorites } from '../data/userData';
import { convertHobbyIdsToObjects } from '../data/hobbiesData';
import './Prototype.css';

/**
 * Prototype - Página principal do protótipo HobbyLocal
 * Gerencia o estado global e a navegação entre telas
 */
const Prototype = () => {
  // Estado global da aplicação
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activeCategories, setActiveCategories] = useState(['Recomendados']);

  // Estado para fluxo "Simule você aqui"
  const [simulationUserData, setSimulationUserData] = useState(null);

  // Carrega favoritos do localStorage na inicialização (detecta modo automático)
  const [favorites, setFavorites] = useState(() => loadFavorites());

  // Carrega hobbies do usuário do localStorage na inicialização
  const [userHobbies, setUserHobbies] = useState(() =>
    loadUserData('hobbylocal-user-hobbies', defaultUserHobbies)
  );

  // Estado para rastrear participantes dinâmicos por atividade
  const [activityParticipants, setActivityParticipants] = useState(() => {
    // Inicializa com os valores padrão das atividades
    const initialCounts = {};
    activities.forEach(activity => {
      initialCounts[activity.id] = activity.participants;
    });
    return initialCounts;
  });

  // Salva favoritos no localStorage sempre que mudar (detecta modo automático)
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  // Salva hobbies no localStorage sempre que mudar
  useEffect(() => {
    saveUserData('hobbylocal-user-hobbies', userHobbies);
  }, [userHobbies]);

  // Categorias recomendadas baseadas nos hobbies do usuário
  const recommendedCategories = getRecommendedCategories(userHobbies);

  // Fallback: se não houver categorias recomendadas, usa categorias padrão populares
  const safeRecommendedCategories = recommendedCategories.length > 0
    ? recommendedCategories
    : ['Esportes', 'Música', 'Arte', 'Bem-estar'];

  // Atividades com contadores dinâmicos de participantes
  const activitiesWithDynamicCounts = activities.map(activity => ({
    ...activity,
    participants: activityParticipants[activity.id] || activity.participants
  }));

  // Função para toggle de categorias (seleção múltipla)
  const toggleCategory = (category) => {
    // Se clicar em "Recomendados" ou "Todos", substitui todas as seleções
    if (category === 'Recomendados' || category === 'Todos') {
      setActiveCategories([category]);
    } else {
      // Remove "Recomendados" e "Todos" se estiverem presentes
      let newCategories = activeCategories.filter(
        cat => cat !== 'Recomendados' && cat !== 'Todos'
      );

      // Toggle a categoria
      if (newCategories.includes(category)) {
        newCategories = newCategories.filter(cat => cat !== category);
        // Se ficar vazio, volta para "Recomendados"
        if (newCategories.length === 0) {
          newCategories = ['Recomendados'];
        }
      } else {
        newCategories.push(category);
      }

      setActiveCategories(newCategories);
    }
  };

  // Filtra atividades por categorias selecionadas
  const filteredActivities = activeCategories.includes('Todos')
    ? activitiesWithDynamicCounts
    : activeCategories.includes('Recomendados')
    ? activitiesWithDynamicCounts.filter(act => safeRecommendedCategories.includes(act.category))
    : activitiesWithDynamicCounts.filter(act => activeCategories.includes(act.category));

  // Handlers
  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setCurrentScreen('details');
  };

  const handleConfirm = () => {
    if (!selectedActivity) return;

    // Parse do horário para extrair informações
    const scheduleText = selectedActivity.schedule;

    // Extrai o horário de início (ex: "15:00" de "Sábado, 15:00 - 17:00")
    const timeMatch = scheduleText.match(/(\d{1,2}):(\d{2})/);
    const time = timeMatch ? `${timeMatch[1]}:${timeMatch[2]}` : '10:00';

    // Extrai o dia da semana e cria uma data aproximada
    const daysMap = {
      'Segunda': 1, 'Terça': 2, 'Quarta': 3,
      'Quinta': 4, 'Sexta': 5, 'Sábado': 6, 'Domingo': 0
    };

    const now = new Date();
    let targetDay = now.getDay();

    // Tenta encontrar o dia da semana no schedule
    for (const [dayName, dayNum] of Object.entries(daysMap)) {
      if (scheduleText.includes(dayName)) {
        targetDay = dayNum;
        break;
      }
    }

    // Calcula a próxima ocorrência desse dia da semana
    const daysUntilTarget = (targetDay - now.getDay() + 7) % 7 || 7;
    const eventDate = new Date(now);
    eventDate.setDate(now.getDate() + daysUntilTarget);

    // Formata a data para exibição (ex: "Sáb, 12 Out")
    const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const formattedDate = `${dayNames[eventDate.getDay()]}, ${eventDate.getDate()} ${monthNames[eventDate.getMonth()]}`;

    // Cria o evento com todas as informações necessárias
    const event = {
      activityId: selectedActivity.id,
      title: selectedActivity.title,
      image: selectedActivity.image,
      location: selectedActivity.location,
      schedule: selectedActivity.schedule,
      date: formattedDate,
      time: time,
      price: selectedActivity.price,
      emoji: selectedActivity.emoji,
      category: selectedActivity.category
    };

    // Adiciona o evento à agenda automaticamente
    addScheduledEvent(event);

    // Incrementa o contador de participantes
    setActivityParticipants(prev => ({
      ...prev,
      [selectedActivity.id]: Math.min(
        prev[selectedActivity.id] + 1,
        selectedActivity.maxParticipants
      )
    }));

    // Vai para tela de confirmação
    setCurrentScreen('confirmation');
  };

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  // Handler para decrementar participantes quando remove da agenda
  const handleRemoveFromAgenda = (activityId) => {
    setActivityParticipants(prev => ({
      ...prev,
      [activityId]: Math.max(
        prev[activityId] - 1,
        activities.find(a => a.id === activityId)?.participants || 0
      )
    }));
  };

  // Handlers para fluxo "Simule você aqui"
  const handleSignupSubmit = (userData) => {
    setSimulationUserData(userData);
    setCurrentScreen('hobbySelection');
  };

  const handleHobbySelectionComplete = (completeUserData) => {
    // Atualiza os hobbies do usuário com as escolhas da simulação
    const selectedHobbyIds = completeUserData.hobbies;

    // Converte os IDs dos hobbies em objetos completos
    const selectedHobbyObjects = convertHobbyIdsToObjects(selectedHobbyIds);

    setUserHobbies(selectedHobbyObjects);

    // Salva os dados do usuário simulado (nome e email) no localStorage
    if (simulationUserData) {
      saveSimulationUser({
        name: simulationUserData.name,
        email: simulationUserData.email
      });
    }

    // Atualiza as categorias ativas para refletir as escolhas
    setActiveCategories(['Recomendados']);

    // Volta para a tela home com os filtros aplicados
    setCurrentScreen('home');
  };

  // Renderiza a tela correta baseado no estado
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <Home
            categories={categories}
            activeCategories={activeCategories}
            toggleCategory={toggleCategory}
            filteredActivities={filteredActivities}
            handleActivityClick={handleActivityClick}
            setCurrentScreen={setCurrentScreen}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        );

      case 'search':
        return (
          <Search
            categories={categories}
            activeCategories={activeCategories}
            toggleCategory={toggleCategory}
            filteredActivities={filteredActivities}
            handleActivityClick={handleActivityClick}
            setCurrentScreen={setCurrentScreen}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        );

      case 'details':
        return (
          <Details
            selectedActivity={selectedActivity}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            handleConfirm={handleConfirm}
            setCurrentScreen={setCurrentScreen}
          />
        );

      case 'confirmation':
        return (
          <Confirmation
            selectedActivity={selectedActivity}
            setCurrentScreen={setCurrentScreen}
          />
        );

      case 'map':
        return (
          <Map
            activities={activitiesWithDynamicCounts}
            handleActivityClick={handleActivityClick}
            setCurrentScreen={setCurrentScreen}
            userHobbies={userHobbies}
          />
        );

      case 'agenda':
        return (
          <Agenda
            activities={activitiesWithDynamicCounts}
            setCurrentScreen={setCurrentScreen}
            onRemoveEvent={handleRemoveFromAgenda}
          />
        );

      case 'profile':
        return (
          <Profile
            setCurrentScreen={setCurrentScreen}
            userHobbies={userHobbies}
            setUserHobbies={setUserHobbies}
          />
        );

      case 'favorites':
        return (
          <Favorites
            activities={activitiesWithDynamicCounts}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            handleActivityClick={handleActivityClick}
            setCurrentScreen={setCurrentScreen}
          />
        );

      case 'notifications':
        return (
          <Notifications
            setCurrentScreen={setCurrentScreen}
          />
        );

      case 'signup':
        return (
          <SignupScreen
            setCurrentScreen={setCurrentScreen}
            onSubmit={handleSignupSubmit}
          />
        );

      case 'hobbySelection':
        return (
          <HobbySelection
            userData={simulationUserData}
            setCurrentScreen={setCurrentScreen}
            onComplete={handleHobbySelectionComplete}
          />
        );

      default:
        return (
          <Home
            categories={categories}
            activeCategories={activeCategories}
            toggleCategory={toggleCategory}
            filteredActivities={filteredActivities}
            handleActivityClick={handleActivityClick}
            setCurrentScreen={setCurrentScreen}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        );
    }
  };

  return (
    <div className="prototype-page">
      {/* Seção de introdução */}
      <div className="prototype-intro">
        <h1>Protótipo Interativo - HobbyLocal</h1>
        <p>Navegue pelo aplicativo e explore as funcionalidades</p>
      </div>

      {/* Mockup do telefone com a tela renderizada */}
      <PhoneMockup>
        {renderScreen()}
      </PhoneMockup>

      {/* Botão Simule Você Aqui */}
      <div className="simulate-section">
        <button className="simulate-btn" onClick={() => setCurrentScreen('signup')}>
          ✨ Simule você aqui
        </button>
      </div>

      {/* Seção de funcionalidades demonstradas */}
      <div className="prototype-features">
        <h2>Funcionalidades Demonstradas</h2>
        <div className="features-grid-section">
          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h3>Descoberta Inteligente</h3>
            <p>Encontre atividades próximas baseadas em sua localização e preferências</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔍</span>
            <h3>Busca Avançada</h3>
            <p>Filtre por categoria, preço, distância e disponibilidade</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📋</span>
            <h3>Informações Completas</h3>
            <p>Veja todos os detalhes: instrutor, nível, o que trazer e muito mais</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">✨</span>
            <h3>Inscrição Rápida</h3>
            <p>Confirme sua participação em poucos segundos</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">❤️</span>
            <h3>Favoritos</h3>
            <p>Salve suas atividades preferidas para acessar rapidamente</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👥</span>
            <h3>Vagas em Tempo Real</h3>
            <p>Acompanhe quantas vagas estão disponíveis para cada atividade</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototype;
