import Hero from "../components/sections/Hero";
import PersonaCard from "../components/ui/solution/PersonaCard";
import CenarioCard from "../components/ui/solution/CenarioCard";
import ModeloTarefas from "../components/ui/solution/ModeloTarefas";
import { PERSONAS } from "../data/personas";
import { CENARIOS_PROBLEMA } from "../data/cenarios";
import "./Solution.css";

const Solution = () => {
  return (
    <div className="solution-page">
      <Hero
        title="Nossa Proposta"
        subtitle="Uma plataforma integrada que conecta pessoas a atividades locais de forma simples e eficiente"
        showScrollIndicator={true}
      />

      <section className="section personas-section">
        <div className="container">
          <h2 className="section-title">Personas</h2>
          <p className="section-subtitle">
            Perfis baseados em pesquisa real com usuários para entender melhor as necessidades e desafios
          </p>

          {PERSONAS.map((persona) => (
            <PersonaCard key={persona.id} persona={persona} />
          ))}
        </div>
      </section>

      <section className="section cenarios-section">
        <div className="container">
          <h2 className="section-title">Cenários-problema</h2>
          <p className="section-subtitle">
            Situações reais que ilustram os principais desafios enfrentados por nossos usuários ao buscar hobbies e atividades locais
          </p>

          {CENARIOS_PROBLEMA.map((cenario, index) => (
            <CenarioCard key={cenario.id} cenario={cenario} index={index} />
          ))}
        </div>
      </section>

      <section className="section modelo-tarefas-section">
        <div className="container">
          <h2 className="section-title">Modelo de Tarefas</h2>
          <p className="section-subtitle">
            Análise hierárquica das tarefas realizadas pelos usuários no HobbyLocal
          </p>

          <ModeloTarefas miroEmbedUrl="https://miro.com/app/live-embed/uXjVJy8uSyo=/?embedMode=view_only_without_ui&moveToViewport=-1241,-284,4187,1990&embedId=148831402463" />
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
    </div>
  );
};

export default Solution;
