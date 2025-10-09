import { useState } from "react";
import Hero from "../components/sections/Hero";
import TCLEModal from "../components/ui/TCLEModal";
import InterviewModal from "../components/ui/InterviewModal";
import TranscriptionModal from "../components/ui/TranscriptionModal";
import Button from "../components/ui/Button";
import "./Problem.css";

const Problem = () => {
  const [isTCLEModalOpen, setIsTCLEModalOpen] = useState(false);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [isTranscriptionModalOpen, setIsTranscriptionModalOpen] = useState(false);

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

  const handleOpenTranscription = () => {
    setIsTranscriptionModalOpen(true);
  };

  const handleCloseTranscription = () => {
    setIsTranscriptionModalOpen(false);
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
              <span className="section-status status-completed">
                Concluído
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

              <div className="competitive-tables">
                <h4 className="table-category-title">Competidores Diretos</h4>
                <div className="table-responsive">
                  <table className="competitive-table">
                    <thead>
                      <tr>
                        <th>Serviço</th>
                        <th>Breve Descrição</th>
                        <th>Pontos Positivos</th>
                        <th>Pontos Negativos</th>
                        <th>Recursos Oferecidos</th>
                        <th>Acessibilidade</th>
                        <th>Opiniões dos Usuários</th>
                        <th>Ideias a Aproveitar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="service-name">Sympla</td>
                        <td>Plataforma brasileira de ingressos e eventos locais</td>
                        <td>Interface simples, grande variedade eventos, integração com redes sociais</td>
                        <td>Pouca personalização de recomendações, foco maior em eventos pagos</td>
                        <td>Busca por data, local, categoria; compra de ingressos online</td>
                        <td>Layout responsivo, opções de contraste no navegador</td>
                        <td>"Prático para comprar ingressos, mas falta descobrir eventos gratuitos ou pequenos"</td>
                        <td>Facilidade de uso da plataforma, o grande alcance de público por ser um marketplace estabelecido e a gestão completa que oferece, incluindo antecipação de repasse e controle financeiro</td>
                      </tr>
                      <tr>
                        <td className="service-name">Meetup</td>
                        <td>Conecta pessoas a grupos de interesses e atividades locais</td>
                        <td>Foco em comunidade, grupos variados, bom para networking</td>
                        <td>Forte presença em cidades grandes. Baixa adesão em locais pequenos</td>
                        <td>Criação de grupos de eventos recorrentes, chat entre membros</td>
                        <td>Funciona com leitor de tela; tradução automática via navegador</td>
                        <td>"Ótimo para conhecer pessoas, mas às vezes tem poucos grupos ativos na minha cidade."</td>
                        <td>Forte construção de comunidade baseada em interesses, o que facilita o networking segmentado e gera autoridade para o organizador. É ideal para encontros informais, troca de conhecimento e visibilidade da marca perante um público engajado</td>
                      </tr>
                      <tr>
                        <td className="service-name">Eventbrite</td>
                        <td>Plataforma global de gerenciamento de eventos</td>
                        <td>Diversidade de eventos, integração com calendários, tickets digitais</td>
                        <td>Experiência confusa em mobile, taxas altas para organizadores</td>
                        <td>Busca, filtros por preço/local, calendário integrado</td>
                        <td>Suporte a leitores de tela; botões grandes</td>
                        <td>"Bom para grandes eventos, mas falta personalização de acordo com meus interesses."</td>
                        <td>Plataforma completa e fácil de usar, ideal para todos os tamanhos de eventos, oferecendo recursos como reserva de lugares, vendas com parcelamento no cartão e um aplicativo organizador robusto para credenciamento com QR Code</td>
                      </tr>
                      <tr>
                        <td className="service-name">Get In</td>
                        <td>App brasileiro focado em eventos culturais e sociais</td>
                        <td>Design moderno, eventos segmentados, integração com WhatsApp</td>
                        <td>Ainda pouco conhecido fora de capitais, catálogo limitado</td>
                        <td>Filtros, compra integrada, notificações</td>
                        <td>Funciona em Android/iOS com acessibilidade padrão</td>
                        <td>"Aplicativo bonito, mas não encontro tantas opções na minha cidade."</td>
                        <td>Oferece soluções de acesso e cashless (pagamento sem dinheiro) no local, além de integrações robustas com sistemas de controle de público e bilhetagem, garantindo maior eficiência operacional na porta</td>
                      </tr>
                      <tr>
                        <td className="service-name">Culturadoria</td>
                        <td>Guia cultural de eventos em algumas cidades brasileiras</td>
                        <td>Conteúdo editorial, curadoria de qualidade</td>
                        <td>Restrito a algumas regiões, foco mais cultural que esportivo</td>
                        <td>Agenda cultural, matérias, resenhas</td>
                        <td>Website responsivo</td>
                        <td>"Bom para quem busca cultura, mas falta esporte e lazer."</td>
                        <td>Proporciona visibilidade para eventos artísticos e de lazer. Possui um público-alvo engajado em cultura, o que facilita a divulgação para um nicho específico</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="table-category-title" style={{marginTop: '3rem'}}>Competidores Indiretos</h4>
                <div className="table-responsive">
                  <table className="competitive-table">
                    <thead>
                      <tr>
                        <th>Serviço</th>
                        <th>Breve Descrição</th>
                        <th>Pontos Positivos</th>
                        <th>Pontos Negativos</th>
                        <th>Recursos Oferecidos</th>
                        <th>Acessibilidade</th>
                        <th>Opiniões dos Usuários</th>
                        <th>Ideias a Aproveitar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="service-name">Tinder</td>
                        <td>App de relacionamentos baseado em matching</td>
                        <td>Algoritmo de match eficiente, gamificação</td>
                        <td>Percepção superficial do swipe, uso fora do foco original</td>
                        <td>Matching por perfil, geolocalização</td>
                        <td>Acessível em mobiles com leitores de tela</td>
                        <td>"Interface rápida, mas viciante e limitada."</td>
                        <td>Oferece enorme base de usuários e reconhecimento global para a busca de conexões. Utiliza um sistema de matching simples e rápido (swipe) para facilitar a interação imediata</td>
                      </tr>
                      <tr>
                        <td className="service-name">Spotify</td>
                        <td>Streaming com recomendações personalizadas</td>
                        <td>Sugestões inteligentes</td>
                        <td>Publicidade na versão free, pode repetir sugestões</td>
                        <td>Recomendação baseada em perfil e hábitos</td>
                        <td>Ajustes de fonte, contraste, comandos por voz</td>
                        <td>"As recomendações me fazem descobrir músicas novas sem esforço."</td>
                        <td>Possui um vasto catálogo de músicas e podcasts e algoritmos de recomendação extremamente precisos. Oferece acesso offline e uma plataforma central para a descoberta de conteúdo</td>
                      </tr>
                    </tbody>
                  </table>
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
              <span className="section-status status-completed">Concluído</span>
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
                <div className="info-section-wrapper">
                  <div className="info-grid">
                    <div className="info-card">
                      <h4>Amostra</h4>
                      <p className="info-highlight">38</p>
                      <p>Respondentes</p>
                    </div>
                    <div className="info-card">
                      <h4>Estrutura</h4>
                      <p className="info-highlight">3 Seções</p>
                      <p>Termo, Demográfico e Hobbies</p>
                    </div>
                    <div className="info-card">
                      <h4>Análise</h4>
                      <p className="info-highlight">Concluída</p>
                      <p>Insights identificados</p>
                    </div>
                  </div>
                </div>

                {/* Texto informativo */}
                <div className="questionnaire-text">
                  <p>1. <strong>Aceite dos Termos:</strong> Antes de prosseguir, todos os participantes precisaram ler e aceitar os termos de participação descritos.</p>
                  <p>2. <strong>Coleta de Dados Demográficos:</strong> Nesta seção, coletamos informações básicas que consideramos relevantes para enriquecer a análise, como idade, gênero e frequência de busca por lazer.</p>
                  <p>3. <strong>Perguntas sobre o Tema:</strong> Por último, apresentamos questões específicas relacionadas a preferências e motivações relacionadas a hobbies dos participantes.</p>
                  <p>A pesquisa foi divulgada ao público-alvo, composto por pessoas que buscam por hobbies ou já possuem hobbies, e permaneceu aberta por 2 dias. Nesse período, conseguimos coletar 38 respostas, o que consideramos uma amostra significativa para a análise proposta.</p>
                  <p>Os participantes foram divididos em um quesito: a forma como jovens adultos e adultos jovens lidam com hobbies. Comparamos dois grupos: um formado por jovens adultos que possuem hobbies e outro composto por adultos que possuem e buscam hobbies.</p>
                  <p>A escolha desses perfis foi estratégica para investigar como cada grupo lida com o processo de busca e manutenção de seus hobbies.</p>
                </div>

                <div className="questionnaire-results">
                  <div className="results-intro-section">
                    <div className="results-intro-icon">📊</div>
                    <h4 className="results-intro-title">Dados Obtidos no Questionário</h4>
                    <p className="results-intro-text">Temos aqui alguns dados obtidos no questionário:</p>
                  </div>

                  <div className="results-image-container">
                    <img
                      src="/docs/graficos-resultados.png"
                      alt="Gráficos dos Resultados do Questionário - 38 respostas mostrando dados sobre conhecimento de hobbies, frequência de mudança, barreiras e preferências"
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '12px',
                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  </div>

                  {/* Insights */}
                  <div className="questionnaire-insights-section">
                    <h4 className="insights-section-title">Principais Insights</h4>
                    <p className="insights-section-intro">Abaixo, destacamos alguns dos principais insights obtidos a partir das respostas:</p>

                    <div className="insights-grid">
                      <div className="insight-card">
                        <div className="insight-icon-wrapper">
                          <span className="insight-icon">👥</span>
                        </div>
                        <div className="insight-content">
                          <h5 className="insight-title">Personalidade e Interação Social</h5>
                          <p className="insight-description">
                            Extrovertidos tendem a preferir atividades que possuem interação social. Introvertidos tendem a não querer hobbies que envolvam outras pessoas.
                          </p>
                        </div>
                      </div>

                      <div className="insight-card">
                        <div className="insight-icon-wrapper">
                          <span className="insight-icon">✨</span>
                        </div>
                        <div className="insight-content">
                          <h5 className="insight-title">Identidade e Autenticidade</h5>
                          <p className="insight-description">
                            Muitos entrevistados relataram que o hobby precisa refletir quem são e estar alinhado à personalidade.
                          </p>
                        </div>
                      </div>

                      <div className="insight-card">
                        <div className="insight-icon-wrapper">
                          <span className="insight-icon">🚧</span>
                        </div>
                        <div className="insight-content">
                          <h5 className="insight-title">Barreiras de Acesso</h5>
                          <p className="insight-description">
                            As maiores dificuldades relatadas foram falta de tempo, distância e preço — reforçando a importância da acessibilidade geográfica e econômica.
                          </p>
                        </div>
                      </div>

                      <div className="insight-card">
                        <div className="insight-icon-wrapper">
                          <span className="insight-icon">💚</span>
                        </div>
                        <div className="insight-content">
                          <h5 className="insight-title">Bem-Estar e Saúde Mental</h5>
                          <p className="insight-description">
                            Hobbies são percebidos como válvula de escape da rotina e um fator de saúde emocional.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
              <span className="section-status status-completed">Concluído</span>
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
              <span className="section-status status-completed">Concluído</span>
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
                  <button
                    className="document-btn document-btn-active"
                    onClick={handleOpenTranscription}
                  >
                    Visualizar Transcrição
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

      {/* Modal das Transcrições */}
      <TranscriptionModal isOpen={isTranscriptionModalOpen} onClose={handleCloseTranscription} />
    </div>
  );
};

export default Problem;
