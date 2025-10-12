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

      <section className="section prototype-cta-section">
        <div className="container">
          <div className="prototype-cta-content">
            <h2 className="cta-title">Veja o Protótipo em Ação</h2>
            <p className="cta-description">
              Navegue pelo aplicativo completo com imagens reais e funcionalidades interativas
            </p>
            <a href="/prototipo" className="cta-button">
              Acessar Protótipo
            </a>
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
