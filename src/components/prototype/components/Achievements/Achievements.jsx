import React, { useState, useEffect } from "react";
import BottomNav from "../shared/BottomNav";
import ProgressBar from "../../../ProgressBar";
import "../shared/Shared.css";
import "./Achievements.css";
import {
  getUnlockedAchievements,
  getLockedAchievements,
} from "../../../../data/achievementsData";
import {
  getMissionsByLevel,
  isMissionCompleted,
  getMissionProgress,
  getDifficultyName,
} from "../../../../data/missionsData";
import {
  loadUserXP,
  loadUserStreak,
  isSimulationMode,
} from "../../../../data/userData";
import { loadUserPosts } from "../../../../data/comunidadeData";
import {
  loadFavorites,
  loadScheduledEventsForMode,
} from "../../../../data/userData";

/**
 * Achievements Component
 * Tela de conquistas e missões com progresso do usuário
 *
 * @param {Object} props - Component props
 * @param {Function} props.setCurrentScreen - Function to navigate between screens
 * @param {string} props.initialTab - Tab inicial a ser exibida ('missions' ou 'achievements')
 */
const Achievements = ({ setCurrentScreen, initialTab = "missions" }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [missionsSubTab, setMissionsSubTab] = useState("available"); // 'available' ou 'completed'
  const lockedSectionRef = React.useRef(null);

  // Atualiza a tab quando initialTab mudar
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // Scroll to locked achievements section
  const scrollToLocked = () => {
    if (lockedSectionRef.current) {
      const achievementsScreen = document.querySelector(".achievements-screen");
      const targetPosition = lockedSectionRef.current.offsetTop;

      if (achievementsScreen) {
        achievementsScreen.scrollTo({
          top: targetPosition - 80, // Offset para compensar header
          behavior: "smooth",
        });
      }
    }
  };

  // Calcula progresso do usuário
  const calculateUserProgress = () => {
    const xpData = loadUserXP();
    const streak = loadUserStreak();
    const posts = loadUserPosts();
    const favorites = loadFavorites();
    const scheduledEvents = loadScheduledEventsForMode();

    // Modo simulação vs padrão tem dados diferentes
    const isDemo = isSimulationMode();

    // Dados para modo demo (Felipe da Silva - iniciante)
    if (isDemo) {
      return {
        level: xpData.level,
        activitiesCompleted: scheduledEvents.length, // Baseado em agenda
        weeklyActivitiesCompleted: 0,
        favoritesCount: favorites.length,
        postsCreated: posts.length,
        commentsCreated: 0, // Não rastreamos isso ainda
        categoriesExplored: 0, // Não rastreamos isso ainda
        streak: streak,
        likesReceived: 0, // Não rastreamos isso ainda
      };
    }

    // Dados para modo normal (Felipe Silva - avançado)
    return {
      level: xpData.level,
      activitiesCompleted: 12, // Valor fixo do usuário padrão
      weeklyActivitiesCompleted: 2, // 2/3 para missão "Ativista Semanal"
      favoritesCount: favorites.length,
      postsCreated: posts.length,
      commentsCreated: 3, // 3/5 para missão "Mestre Social"
      categoriesExplored: 1, // 1/3 para missão "Diversidade é Tudo"
      streak: streak,
      likesReceived: 45,
    };
  };

  const [userProgress, setUserProgress] = useState(calculateUserProgress());

  // Atualiza progresso quando muda de tela ou localStorage muda
  useEffect(() => {
    const updateProgress = () => {
      setUserProgress(calculateUserProgress());
    };

    updateProgress();
    window.addEventListener("storage", updateProgress);
    const interval = setInterval(updateProgress, 1000);

    return () => {
      window.removeEventListener("storage", updateProgress);
      clearInterval(interval);
    };
  }, []);

  // Conquistas desbloqueadas e bloqueadas
  const unlockedAchievements = getUnlockedAchievements(userProgress);
  const lockedAchievements = getLockedAchievements(userProgress);

  // Missões baseadas no nível
  const allMissions = getMissionsByLevel(userProgress.level);

  // Filtra missões disponíveis (não completadas) e completadas
  const availableMissions = allMissions.filter(mission => !isMissionCompleted(mission.id, userProgress));
  const completedMissions = allMissions.filter(mission => isMissionCompleted(mission.id, userProgress));

  // Escolhe qual lista mostrar baseado na tab
  const missions = missionsSubTab === "available" ? availableMissions : completedMissions;

  return (
    <div className="app-screen achievements-screen">
      {/* Header */}
      <div className="app-header">
        <button className="back-btn" onClick={() => setCurrentScreen("home")}>
          ←
        </button>
        <h2>Conquistas & Missões</h2>
        <div style={{ width: "40px" }}></div>
      </div>

      {/* Tabs */}
      <div className="achievements-tabs">
        <button
          className={`achievements-tab ${
            activeTab === "missions" ? "active" : ""
          }`}
          onClick={() => setActiveTab("missions")}
        >
          <span className="tab-icon">🎯</span>
          <span className="tab-text">Missões</span>
        </button>
        <button
          className={`achievements-tab ${
            activeTab === "achievements" ? "active" : ""
          }`}
          onClick={() => setActiveTab("achievements")}
        >
          <span className="tab-icon">🏆</span>
          <span className="tab-text">Conquistas</span>
        </button>
      </div>

      <div className="achievements-content">
        {/* TAB 1: CONQUISTAS */}
        {activeTab === "achievements" && (
          <>
            {/* Header Stats */}
            <div className="achievements-header-stats">
              <div className="header-stat">
                <span className="header-stat-value">
                  {unlockedAchievements.length}
                </span>
                <span className="header-stat-label">Desbloqueadas</span>
              </div>
              <div className="header-stat-divider"></div>
              <div className="header-stat">
                <span className="header-stat-value">
                  {lockedAchievements.length}
                </span>
                <div className="header-stat-label-with-btn">
                  <span className="header-stat-label">Bloqueadas</span>
                  {lockedAchievements.length > 0 && (
                    <button
                      className="view-locked-btn"
                      onClick={scrollToLocked}
                    >
                      Ver →
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Unlocked Achievements */}
            {unlockedAchievements.length > 0 && (
              <div className="achievements-section">
                <h3 className="section-title">
                  <span className="section-icon">✅</span>
                  Conquistas Desbloqueadas
                </h3>
                <div className="achievements-grid">
                  {unlockedAchievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="achievement-card unlocked"
                      style={{ "--achievement-color": achievement.color }}
                    >
                      <div className="achievement-icon-wrapper">
                        <span className="achievement-icon">
                          {achievement.icon}
                        </span>
                        <div className="achievement-glow"></div>
                      </div>
                      <div className="achievement-info">
                        <h4 className="achievement-name">{achievement.name}</h4>
                        <p className="achievement-description">
                          {achievement.description}
                        </p>
                        {achievement.rewardXP > 0 && (
                          <div className="achievement-reward">
                            <span className="reward-badge">
                              +{achievement.rewardXP} XP
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="achievement-checkmark">✓</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Locked Achievements */}
            {lockedAchievements.length > 0 && (
              <div className="achievements-section" ref={lockedSectionRef}>
                <h3 className="section-title">
                  <span className="section-icon">🔒</span>
                  Em Progresso
                </h3>
                <div className="achievements-grid">
                  {lockedAchievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="achievement-card locked"
                      style={{ "--achievement-color": achievement.color }}
                    >
                      <div className="achievement-icon-wrapper locked-icon">
                        <span className="achievement-icon">
                          {achievement.icon}
                        </span>
                      </div>
                      <div className="achievement-info">
                        <h4 className="achievement-name">{achievement.name}</h4>
                        <p className="achievement-description">
                          {achievement.description}
                        </p>
                        <div className="achievement-progress">
                          <div className="progress-text">
                            {achievement.progress.current} /{" "}
                            {achievement.progress.total}
                          </div>
                          <div className="progress-bar-mini">
                            <div
                              className="progress-bar-fill"
                              style={{
                                width: `${achievement.progress.percentage}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                        {achievement.rewardXP > 0 && (
                          <div className="achievement-reward locked-reward">
                            <span className="reward-badge">
                              +{achievement.rewardXP} XP
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {unlockedAchievements.length === 0 &&
              lockedAchievements.length === 0 && (
                <div className="empty-achievements">
                  <div className="empty-icon">🏆</div>
                  <h3>Nenhuma conquista encontrada</h3>
                  <p>Complete atividades para desbloquear conquistas!</p>
                </div>
              )}
          </>
        )}

        {/* TAB 2: MISSÕES */}
        {activeTab === "missions" && (
          <>
            {/* Level Info Banner */}
            <div className="missions-level-banner">
              <div className="level-banner-icon">⭐</div>
              <div className="level-banner-info">
                <h3>Nível {userProgress.level}</h3>
              </div>
            </div>

            {/* Missions Sub-Tabs */}
            <div className="missions-subtabs">
              <button
                className={`missions-subtab ${missionsSubTab === "available" ? "active" : ""}`}
                onClick={() => setMissionsSubTab("available")}
              >
                Disponíveis ({availableMissions.length})
              </button>
              <button
                className={`missions-subtab ${missionsSubTab === "completed" ? "active" : ""}`}
                onClick={() => setMissionsSubTab("completed")}
              >
                Concluídas ({completedMissions.length})
              </button>
            </div>

            {/* Missions List */}
            <div className="missions-section">
              {missions.length > 0 ? (
                <div className="missions-list">
                  {missions.map((mission) => {
                  const isCompleted = isMissionCompleted(
                    mission.id,
                    userProgress
                  );
                  const progress = getMissionProgress(mission, userProgress);

                  return (
                    <div
                      key={mission.id}
                      className={`mission-card ${
                        isCompleted ? "completed" : ""
                      }`}
                      style={{ "--mission-color": mission.color }}
                    >
                      <div className="mission-header">
                        <div className="mission-icon-wrapper">
                          <span className="mission-icon">{mission.icon}</span>
                        </div>
                        <div className="mission-main-info">
                          <h4 className="mission-title">{mission.title}</h4>
                          <p className="mission-description">
                            {mission.description}
                          </p>
                        </div>
                        {isCompleted && (
                          <div className="mission-completed-badge">✓</div>
                        )}
                      </div>

                      <div className="mission-progress-section">
                        <div className="mission-progress-text">
                          <span className="progress-current">
                            {progress.current}
                          </span>
                          <span className="progress-separator">/</span>
                          <span className="progress-target">
                            {progress.target}
                          </span>
                          <span className="progress-percentage">
                            ({progress.percentage}%)
                          </span>
                        </div>
                        <div className="mission-progress-bar-wrapper">
                          <div
                            className="mission-progress-bar-fill"
                            style={{
                              width: `${progress.percentage}%`,
                              backgroundColor: mission.color,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div className="mission-footer">
                        <div className="mission-difficulty">
                          <span
                            className="difficulty-dot"
                            style={{ backgroundColor: mission.color }}
                          ></span>
                          <span className="difficulty-text">
                            {getDifficultyName(mission.difficulty)}
                          </span>
                        </div>
                        <div className="mission-reward">
                          <span className="reward-icon">⭐</span>
                          <span className="reward-text">
                            +{mission.reward.xp} XP
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                  })}
                </div>
              ) : (
                <div className="empty-missions">
                  <div className="empty-icon">
                    {missionsSubTab === "available" ? "🎯" : "✅"}
                  </div>
                  <h3>
                    {missionsSubTab === "available"
                      ? "Nenhuma missão disponível"
                      : "Nenhuma missão concluída"}
                  </h3>
                  <p>
                    {missionsSubTab === "available"
                      ? "Você completou todas as missões deste nível!"
                      : "Complete missões para vê-las aqui!"}
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeScreen="" onNavigate={setCurrentScreen} />
    </div>
  );
};

export default Achievements;
