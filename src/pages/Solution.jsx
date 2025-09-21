import Hero from "../components/sections/Hero";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { SOLUTION_FEATURES } from "../utils/constants";
import "./Solution.css";

const Solution = () => {
  const differentials = [
    {
      title: "Foco Hiperlocal",
      description: "Atividades do seu bairro e cidade",
      icon: "🎯",
    },
    {
      title: "Interface Intuitiva",
      description: "Design acessível para todos",
      icon: "🎨",
    },
    {
      title: "Calendário Integrado",
      description: "Sincronize com sua agenda",
      icon: "📅",
    },
    {
      title: "Gamificação",
      description: "Conquiste badges e níveis",
      icon: "🏆",
    },
  ];

  return (
    <div className="solution-page">
      <Hero
        title="Nossa Proposta"
        subtitle="Uma plataforma integrada que conecta pessoas a atividades locais de forma simples e eficiente"
        showScrollIndicator={true}
      />

      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Funcionalidades Principais</h2>
          <p className="section-subtitle">
            Recursos pensados para facilitar a descoberta e participação em
            atividades
          </p>

          <div className="features-grid">
            {SOLUTION_FEATURES.map((feature, index) => (
              <Card
                key={index}
                icon={<span className="feature-icon">{feature.icon}</span>}
                title={feature.title}
                description={feature.description}
                color={index < 3 ? "primary" : "secondary"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section mockup-section">
        <div className="container">
          <h2 className="section-title">Visualização da Plataforma</h2>

          <div className="mockup-container">
            <div className="mockup-device">
              <div className="mockup-notch"></div>
              <div className="mockup-screen">
                <div className="mockup-status-bar">
                  <span className="mockup-time">9:41</span>
                  <div className="mockup-status-icons">
                    <svg
                      width="17"
                      height="12"
                      viewBox="0 0 17 12"
                      fill="currentColor"
                    >
                      <path d="M1 4C0.447715 4 0 4.44772 0 5V9C0 9.55228 0.447715 10 1 10H2C2.55228 10 3 9.55228 3 9V5C3 4.44772 2.55228 4 2 4H1Z" />
                      <path d="M6 2C5.44772 2 5 2.44772 5 3V9C5 9.55228 5.44772 10 6 10H7C7.55228 10 8 9.55228 8 9V3C8 2.44772 7.55228 2 7 2H6Z" />
                      <path d="M11 0C10.4477 0 10 0.447715 10 1V9C10 9.55228 10.4477 10 11 10H12C12.5523 10 13 9.55228 13 9V1C13 0.447715 12.5523 0 12 0H11Z" />
                      <path
                        d="M16 0C15.4477 0 15 0.447715 15 1V9C15 9.55228 15.4477 10 16 10H17C17.5523 10 18 9.55228 18 9V1C18 0.447715 17.5523 0 17 0H16Z"
                        opacity="0.3"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="11"
                      viewBox="0 0 15 11"
                      fill="currentColor"
                    >
                      <path d="M13.5 1C14.3284 1 15 1.67157 15 2.5V8.5C15 9.32843 14.3284 10 13.5 10H1.5C0.671573 10 0 9.32843 0 8.5V2.5C0 1.67157 0.671573 1 1.5 1H13.5ZM14 3H12.5V8H14V3Z" />
                    </svg>
                  </div>
                </div>

                <div className="mockup-app-content">
                  <div className="mockup-header-app">
                    <h1 className="mockup-logo">🏃 HobbyLocal</h1>
                    <div className="mockup-header-icons">
                      <span className="mockup-notification">🔔</span>
                      <span className="mockup-profile">👤</span>
                    </div>
                  </div>

                  <div className="mockup-location-bar">
                    📍 Rio de Janeiro, RJ
                    <span className="mockup-change">Mudar</span>
                  </div>

                  <div className="mockup-search-bar">
                    <span className="mockup-search-icon">🔍</span>
                    <input
                      type="text"
                      placeholder="Buscar atividades..."
                      readOnly
                    />
                    <span className="mockup-filter">⚙️</span>
                  </div>

                  <div className="mockup-categories">
                    <div className="mockup-category active">🎨 Arte</div>
                    <div className="mockup-category">⚽ Esportes</div>
                    <div className="mockup-category">🎵 Música</div>
                    <div className="mockup-category">🍳 Culinária</div>
                  </div>

                  <div className="mockup-section-title">
                    <h3>Próximas de você</h3>
                    <span className="mockup-see-all">Ver todas →</span>
                  </div>

                  <div className="mockup-activity-cards">
                    <div className="mockup-activity-card">
                      <div className="mockup-activity-image">
                        <span className="mockup-activity-badge">Hoje</span>
                        <div className="mockup-activity-gradient">🎨</div>
                      </div>
                      <div className="mockup-activity-info">
                        <h4>Aula de Pintura</h4>
                        <p className="mockup-activity-location">
                          📍 Centro Cultural - 2km
                        </p>
                        <div className="mockup-activity-footer">
                          <span className="mockup-price">R$ 45</span>
                          <span className="mockup-rating">⭐ 4.8</span>
                        </div>
                      </div>
                    </div>

                    <div className="mockup-activity-card">
                      <div className="mockup-activity-image">
                        <span className="mockup-activity-badge">Amanhã</span>
                        <div
                          className="mockup-activity-gradient"
                          style={{
                            background:
                              "linear-gradient(135deg, #f093fb, #f5576c)",
                          }}
                        >
                          ⚽
                        </div>
                      </div>
                      <div className="mockup-activity-info">
                        <h4>Futebol no Parque</h4>
                        <p className="mockup-activity-location">
                          📍 Parque Municipal - 1.5km
                        </p>
                        <div className="mockup-activity-footer">
                          <span className="mockup-price">Grátis</span>
                          <span className="mockup-rating">⭐ 4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mockup-bottom-nav">
                    <div className="mockup-nav-item active">
                      <span>🏠</span>
                      <small>Início</small>
                    </div>
                    <div className="mockup-nav-item">
                      <span>🔍</span>
                      <small>Buscar</small>
                    </div>
                    <div className="mockup-nav-item">
                      <span>📅</span>
                      <small>Agenda</small>
                    </div>
                    <div className="mockup-nav-item">
                      <span>💬</span>
                      <small>Chat</small>
                    </div>
                    <div className="mockup-nav-item">
                      <span>👤</span>
                      <small>Perfil</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section differentials-section">
        <div className="container">
          <h2 className="section-title">Nossos Diferenciais</h2>

          <div className="differentials-grid">
            {differentials.map((diff, index) => (
              <div key={index} className="differential-item">
                <div className="differential-icon">{diff.icon}</div>
                <h3 className="differential-title">{diff.title}</h3>
                <p className="differential-desc">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
