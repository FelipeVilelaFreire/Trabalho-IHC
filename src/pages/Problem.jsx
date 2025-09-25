import { useState } from "react";
import Hero from "../components/sections/Hero";
import TCLEModal from "../components/ui/TCLEModal";
import InterviewModal from "../components/ui/InterviewModal";
import Button from "../components/ui/Button";
import "./Problem.css";

const Problem = () => {
  const [isTCLEModalOpen, setIsTCLEModalOpen] = useState(false);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);

  const handleOpenTCLE = () => {
    setIsTCLEModalOpen(true);
  };

  const handleCloseTCLE = () => {
    setIsTCLEModalOpen(false);
  };

  const handleOpenInterview = () => {
    setIsInterviewModalOpen(true);
  };

  const handleCloseInterview = () => {
    setIsInterviewModalOpen(false);
  };
  return (
    <div className="problem-page">
      <Hero
        title="Imersão no Problema"
        subtitle="Processo de pesquisa e descoberta utilizando metodologias de IHC para compreender profundamente os desafios dos usuários"
        showScrollIndicator={true}
      />

      {/* How Might We Section */}
      <section className="research-section section-howmightwe">
        <div className="container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">01</span>
              <h2 className="section-title">
                <span className="section-icon">💡</span>
                How Might We
              </h2>
              <span className="section-status status-completed">Concluído</span>
            </div>

            <div className="section-body">
              <div className="section-description">
                <p className="lead-text" style={{fontSize: '1.15rem', fontWeight: '500'}}>
                  Como podemos criar uma solução que centralize informações
                  sobre hobbies e atividades locais, tornando mais fácil para as
                  pessoas descobrirem, escolherem e se engajarem em novas
                  experiências?
                </p>
              </div>

              <div className="insights-container">
                <h4>Questões Exploradas:</h4>
                <div className="insights-grid">
                  <div className="insight-item">
                    <span className="insight-icon">🔍</span>
                    <p>
                      Como facilitar a descoberta de atividades locais de forma
                      intuitiva?
                    </p>
                  </div>
                  <div className="insight-item">
                    <span className="insight-icon">🚪</span>
                    <p>
                      Como reduzir barreiras de entrada para iniciantes em novos
                      hobbies?
                    </p>
                  </div>
                  <div className="insight-item">
                    <span className="insight-icon">🤝</span>
                    <p>
                      Como conectar pessoas com interesses similares de forma
                      significativa?
                    </p>
                  </div>
                  <div className="insight-item">
                    <span className="insight-icon">📍</span>
                    <p>
                      Como promover atividades locais e fortalecer o senso de
                      comunidade?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desk Research Section */}
      <section className="research-section section-deskresearch">
        <div className="container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">02</span>
              <h2 className="section-title">
                <span className="section-icon">📚</span>
                Desk Research
              </h2>
              <span className="section-status status-completed">
                Concluído
              </span>
            </div>

            <div className="section-body">
              <div className="section-description">
                <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem'}}>Matriz CSD - Certezas, Suposições e Dúvidas</h3>
                <p className="lead-text" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem'}}>
                  A matriz CSD é uma ferramenta de síntese e análise utilizada em processos de design thinking e pesquisa de UX. 
                  Ela nos permite organizar sistematicamente os insights coletados em três categorias fundamentais.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '2rem',
                  marginBottom: '2.5rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    flex: '1',
                    minWidth: '200px',
                    maxWidth: '250px',
                    textAlign: 'center',
                    padding: '1.5rem',
                    backgroundColor: 'rgba(74, 144, 226, 0.08)',
                    borderRadius: '8px',
                    border: '2px solid rgba(74, 144, 226, 0.2)'
                  }}>
                    <h4 style={{fontSize: '1.1rem', fontWeight: '600', color: '#4A90E2', marginBottom: '0.5rem'}}>Certezas</h4>
                    <p style={{fontSize: '0.9rem', color: '#666', margin: 0}}>
                      Fatos comprovados e informações validadas através da pesquisa
                    </p>
                  </div>
                  <div style={{
                    flex: '1',
                    minWidth: '200px',
                    maxWidth: '250px',
                    textAlign: 'center',
                    padding: '1.5rem',
                    backgroundColor: 'rgba(255, 159, 64, 0.08)',
                    borderRadius: '8px',
                    border: '2px solid rgba(255, 159, 64, 0.2)'
                  }}>
                    <h4 style={{fontSize: '1.1rem', fontWeight: '600', color: '#FF9F40', marginBottom: '0.5rem'}}>Suposições</h4>
                    <p style={{fontSize: '0.9rem', color: '#666', margin: 0}}>
                      Hipóteses baseadas em indícios que precisam de validação
                    </p>
                  </div>
                  <div style={{
                    flex: '1',
                    minWidth: '200px',
                    maxWidth: '250px',
                    textAlign: 'center',
                    padding: '1.5rem',
                    backgroundColor: 'rgba(139, 69, 19, 0.08)',
                    borderRadius: '8px',
                    border: '2px solid rgba(139, 69, 19, 0.2)'
                  }}>
                    <h4 style={{fontSize: '1.1rem', fontWeight: '600', color: '#8B4513', marginBottom: '0.5rem'}}>Dúvidas</h4>
                    <p style={{fontSize: '0.9rem', color: '#666', margin: 0}}>
                      Questões em aberto que direcionam próximas investigações
                    </p>
                  </div>
                </div>
              </div>

              <div className="csd-matrix-container" style={{
                maxWidth: '1200px',
                margin: '0 auto'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginBottom: '1.5rem',
                  marginTop: '2rem'
                }}>Nossa Matriz CSD:</h4>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '80%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '12px',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                  backgroundColor: '#f5f5f5'
                }}>
                  <iframe 
                    src="https://miro.com/app/live-embed/uXjVJJzSn-o=/?embedMode=view_only_without_ui&moveToViewport=8480,283,9070,4464&embedId=111805068315"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0
                    }}
                    scrolling="no"
                    allow="fullscreen; clipboard-read; clipboard-write"
                    allowFullScreen
                  />
                </div>
                <p style={{marginTop: '1.2rem', fontSize: '0.9rem', color: '#888', textAlign: 'center', fontStyle: 'italic'}}>
                  Visualização interativa da análise estruturada dos insights coletados durante a pesquisa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis Section */}
      <section className="research-section section-competitive">
        <div className="container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">03</span>
              <h2 className="section-title">
                <span className="section-icon">🔍</span>
                Análise Competitiva
              </h2>
              <span className="section-status status-progress">
                Em Andamento
              </span>
            </div>

            <div className="section-body">
              <div className="section-description">
                <h3>Estudo Comparativo de Soluções Existentes</h3>
                <p className="lead-text">
                  Mapeamento e análise de plataformas similares, identificando
                  gaps e oportunidades de diferenciação no mercado brasileiro e
                  internacional.
                </p>
              </div>

              <div className="competitors-analysis">
                <div className="competitor-card">
                  <h4>Meetup</h4>
                  <div className="competitor-pros">
                    <p>✓ Grande base de usuários</p>
                    <p>✓ Interface conhecida</p>
                  </div>
                  <div className="competitor-cons">
                    <p>✗ Foco em eventos únicos</p>
                    <p>✗ Não suporta hobbies contínuos</p>
                  </div>
                </div>

                <div className="competitor-card">
                  <h4>Facebook Groups</h4>
                  <div className="competitor-pros">
                    <p>✓ Alcance massivo</p>
                    <p>✓ Gratuito</p>
                  </div>
                  <div className="competitor-cons">
                    <p>✗ Informação fragmentada</p>
                    <p>✗ Difícil descoberta</p>
                  </div>
                </div>

                <div className="competitor-card">
                  <h4>Apps Locais</h4>
                  <div className="competitor-pros">
                    <p>✓ Foco regional</p>
                    <p>✓ Conteúdo curado</p>
                  </div>
                  <div className="competitor-cons">
                    <p>✗ Escopo limitado</p>
                    <p>✗ Pouca integração</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questionnaire Section */}
      <section className="research-section section-questionnaire">
        <div className="container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">04</span>
              <h2 className="section-title">
                <span className="section-icon">📋</span>
                Questionário
              </h2>
              <span className="section-status status-planned">Planejado</span>
            </div>

            <div className="section-body">
              <div className="section-description">
                <h3>Coleta Quantitativa de Dados com Usuários Potenciais</h3>
                <p className="lead-text">
                  Aplicação de questionário estruturado para identificar padrões
                  de comportamento, preferências e necessidades do público-alvo.
                </p>
              </div>

              <div className="questionnaire-info">
                <div className="info-grid">
                  <div className="info-card">
                    <h4>Amostra</h4>
                    <p className="info-highlight">Em definição</p>
                    <p>Buscando diversidade demográfica</p>
                  </div>
                  <div className="info-card">
                    <h4>Estrutura</h4>
                    <p className="info-highlight">Questionário estruturado</p>
                    <p>Perguntas abertas e fechadas</p>
                  </div>
                  <div className="info-card">
                    <h4>Análise</h4>
                    <p className="info-highlight">Estatística descritiva</p>
                    <p>Identificação de personas</p>
                  </div>
                </div>

                <div className="questionnaire-preview">
                  <h4>Principais Áreas de Investigação:</h4>
                  <ul>
                    <li>Hábitos atuais de lazer e hobbies</li>
                    <li>Barreiras encontradas na descoberta de atividades</li>
                    <li>Preferências de comunicação e engajamento</li>
                    <li>Disponibilidade de tempo e investimento</li>
                    <li>Motivações e expectativas</li>
                  </ul>
                </div>
                
                <div className="questionnaire-cta">
                  <p>É possível acessar o formulário no link a seguir:</p>
                  <Button 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScKRJPdGVNJoN0y6bxGGXiJXwQUCr5xXnRTPiQGj6k9hT-Z_w/viewform"
                    variant="primary"
                    size="medium"
                  >
                    Acessar Formulário
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interviews Section */}
      <section className="research-section section-interviews">
        <div className="container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">05</span>
              <h2 className="section-title">
                <span className="section-icon">🎤</span>
                Entrevistas
              </h2>
              <span className="section-status status-planned">Planejado</span>
            </div>

            <div className="section-body">
              <div className="section-description">
                <h3>Entrevistas em Profundidade com Usuários</h3>
                <p className="lead-text">
                  Conversas estruturadas para compreender necessidades,
                  motivações, frustrações e expectativas dos usuários em relação
                  a hobbies e atividades locais.
                </p>
              </div>

              <div className="interviews-plan">
                <div className="plan-overview">
                  <div className="plan-item">
                    <span className="plan-icon">🎯</span>
                    <span className="plan-label">
                      Entrevistas em profundidade
                    </span>
                  </div>
                  <div className="plan-item">
                    <span className="plan-icon">⏱️</span>
                    <span className="plan-label">Sessões detalhadas</span>
                  </div>
                  <div className="plan-item">
                    <span className="plan-icon">👥</span>
                    <span className="plan-label">Perfis diversificados</span>
                  </div>
                </div>

                <div className="interview-structure">
                  <h4>Estrutura da Entrevista:</h4>
                  <div className="structure-timeline">
                    <div className="timeline-item">
                      <div className="timeline-card">
                        <span className="timeline-time">3 min</span>
                        <div className="timeline-content">
                          Aquecimento e contexto
                        </div>
                      </div>
                      <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-card">
                        <span className="timeline-time">7 min</span>
                        <div className="timeline-content">
                          Experiências atuais com hobbies
                        </div>
                      </div>
                      <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-card">
                        <span className="timeline-time">6 min</span>
                        <div className="timeline-content">
                          Desafios e frustrações
                        </div>
                      </div>
                      <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-card">
                        <span className="timeline-time">4 min</span>
                        <div className="timeline-content">
                          Ideação e expectativas
                        </div>
                      </div>
                      <div className="timeline-dot"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Documents Section */}
      <section className="research-section section-documents">
        <div className="container">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">06</span>
              <h2 className="section-title">
                <span className="section-icon">📄</span>
                Documentos da Entrevista
              </h2>
              <span className="section-status status-planned">Planejado</span>
            </div>

            <div className="section-body">
              <div className="section-description">
                <h3>Roteiros, Transcrições e Análises das Entrevistas</h3>
                <p className="lead-text">
                  Documentação completa do processo de entrevistas, garantindo
                  transparência, ética e rigor metodológico na pesquisa.
                </p>
              </div>

              <div className="documents-grid">
                <div className="document-card">
                  <div className="document-icon">📝</div>
                  <h4>Termo de Consentimento</h4>
                  <p>
                    Documento TCLE seguindo normas éticas de pesquisa acadêmica
                  </p>
                  <button
                    className="document-btn document-btn-active"
                    onClick={handleOpenTCLE}
                  >
                    Visualizar TCLE
                  </button>
                </div>

                <div className="document-card">
                  <div className="document-icon">📋</div>
                  <h4>Roteiro Entrevista</h4>
                  <p>
                    Script validado para condução das entrevistas
                    semi-estruturadas
                  </p>
                  <button
                    className="document-btn document-btn-active"
                    onClick={handleOpenInterview}
                  >
                    Visualizar Roteiro
                  </button>
                </div>

                <div className="document-card">
                  <div className="document-icon">💬</div>
                  <h4>Transcrições</h4>
                  <p>
                    Registro completo das conversas com participantes
                    anonimizados
                  </p>
                  <button className="document-btn" disabled>
                    Em Breve
                  </button>
                </div>

                <div className="document-card">
                  <div className="document-icon">📊</div>
                  <h4>Análise Temática</h4>
                  <p>Síntese dos principais insights e padrões identificados</p>
                  <button className="document-btn" disabled>
                    Em Breve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal do TCLE */}
      <TCLEModal isOpen={isTCLEModalOpen} onClose={handleCloseTCLE} />
      
      {/* Modal do Roteiro de Entrevista */}
      <InterviewModal isOpen={isInterviewModalOpen} onClose={handleCloseInterview} />
    </div>
  );
};

export default Problem;
