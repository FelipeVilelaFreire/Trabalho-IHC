import { useState } from "react";
import Hero from "../components/sections/Hero";
import PersonaCard from "../components/ui/solution/PersonaCard";
import CenarioCard from "../components/ui/solution/CenarioCard";
import ModeloTarefas from "../components/ui/solution/ModeloTarefas";
import Crazy4Modal from "../components/ui/solution/Crazy4Modal";
import { PERSONAS } from "../data/personas";
import { CENARIOS_PROBLEMA } from "../data/cenarios";
import "./Solution.css";

const Solution = () => {
  const [isCrazy4ModalOpen, setIsCrazy4ModalOpen] = useState(false);

  const handleOpenCrazy4 = () => {
    setIsCrazy4ModalOpen(true);
  };

  const handleCloseCrazy4 = () => {
    setIsCrazy4ModalOpen(false);
  };

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

      <section className="section crazy4-section">
        <div className="container">
          <h2 className="section-title">Crazy 4</h2>
          <p className="section-subtitle">
            Durante a fase de ideação, aplicamos a técnica Crazy 4, uma adaptação do método Crazy 8.
            A dinâmica consistiu em gerar múltiplas ideias em tempo limitado, promovendo criatividade e
            explorando diferentes ângulos para abordar o problema identificado.
          </p>

          <div className="crazy4-content">
            <p className="crazy4-description">
              Cada integrante da equipe propôs quatro soluções sob diferentes perspectivas: uma solução elaborada
              e com alto investimento, uma alternativa simples e de rápida implementação, uma proposta baseada em
              elementos de gamificação, e uma solução tecnológica utilizando IoT.
            </p>

            <p className="crazy4-description">
              Após a etapa individual, reunimos as ideias do grupo e selecionamos os elementos mais promissores de cada proposta.
              Dentre as contribuições, Felipe e Ruan desenvolveram o conceito de gamificação que incorporamos ao projeto,
              incluindo funcionalidades como sistema de conquistas, missões progressivas e recompensas para aumentar o engajamento
              e retenção dos usuários na plataforma.
            </p>

            <div className="crazy4-card-wrapper">
              <div className="document-card crazy4-card">
                <div className="document-icon">🎨</div>
                <h4>Confira os detalhes das nossas ideias</h4>
                <p>Clique para visualizar as 4 propostas desenvolvidas</p>
                <button className="document-btn" onClick={handleOpenCrazy4}>
                  Ver Ideias
                </button>
              </div>
            </div>
          </div>
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

      <Crazy4Modal isOpen={isCrazy4ModalOpen} onClose={handleCloseCrazy4} />
    </div>
  );
};

export default Solution;
