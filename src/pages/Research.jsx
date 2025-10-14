import Hero from '../components/sections/Hero';
import TimelineResearch from '../components/ui/research/TimelineResearch';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { RESEARCH_METHODS } from '../utils/constants';
import './Research.css';

const Research = () => {
  const timelineItems = [
    {
      title: 'Definição do Problema',
      description: 'Identificação e delimitação do escopo do projeto',
      date: 'Semana 1-2',
      icon: '📋'
    },
    {
      title: 'Revisão Bibliográfica',
      description: 'Estudo de teorias e trabalhos relacionados',
      date: 'Semana 3-4',
      icon: '📚'
    },
    {
      title: 'Planejamento da Pesquisa',
      description: 'Definição de métodos e ferramentas',
      date: 'Semana 5',
      icon: '🎯'
    },
    {
      title: 'Coleta de Dados',
      description: 'Entrevistas e questionários com usuários',
      date: 'Semana 6-8',
      icon: '📊'
    },
    {
      title: 'Análise e Síntese',
      description: 'Processamento e interpretação dos dados',
      date: 'Semana 9-10',
      icon: '🔍'
    },
    {
      title: 'Prototipagem',
      description: 'Desenvolvimento da solução proposta',
      date: 'Semana 11-12',
      icon: '🎨'
    }
  ];

  return (
    <div className="research-page">
      <Hero 
        title="Metodologia de Pesquisa"
        subtitle="Entendendo as necessidades reais dos usuários através de métodos científicos"
        showScrollIndicator={true}
      />

      <section className="section methods-section">
        <div className="container">
          <h2 className="section-title">Métodos Utilizados</h2>
          <p className="section-subtitle">
            Combinamos diferentes abordagens para obter uma visão completa do problema
          </p>
          
          <div className="methods-grid">
            {RESEARCH_METHODS.map((method, index) => (
              <div key={index} className="method-card">
                <div className="method-header">
                  <h3 className="method-title">{method.title}</h3>
                  <div className="method-stats">
                    <span className="method-stat">
                      <strong>{method.participants}</strong> {method.duration === 'Online' ? 'respostas' : method.duration === 'Plataformas' ? 'analisadas' : 'participantes'}
                    </span>
                    {method.duration !== 'Online' && method.duration !== 'Plataformas' && (
                      <span className="method-stat">
                        <strong>{method.duration}</strong> cada
                      </span>
                    )}
                  </div>
                </div>
                <p className="method-description">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">Cronograma do Projeto</h2>
          <TimelineResearch items={timelineItems} />
        </div>
      </section>

      <section className="section findings-section">
        <div className="container">
          <h2 className="section-title">Principais Descobertas</h2>
          
          <div className="findings-grid">
            <div className="finding-card">
              <div className="finding-icon">🎯</div>
              <h3 className="finding-title">Necessidade de Centralização</h3>
              <p className="finding-text">
                Participantes relataram frustração com a dispersão de informações 
                em múltiplas plataformas.
              </p>
            </div>
            
            <div className="finding-card">
              <div className="finding-icon">🚧</div>
              <h3 className="finding-title">Barreiras para Iniciantes</h3>
              <p className="finding-text">
                Muitos sentem-se intimidados ao tentar participar de atividades novas 
                sem conhecer ninguém.
              </p>
            </div>
            
            <div className="finding-card">
              <div className="finding-icon">⏰</div>
              <h3 className="finding-title">Tempo Desperdiçado</h3>
              <p className="finding-text">
                Horas gastas procurando informações sobre atividades 
                de interesse sem sucesso.
              </p>
            </div>
            
            <div className="finding-card">
              <div className="finding-icon">💰</div>
              <h3 className="finding-title">Transparência de Custos</h3>
              <p className="finding-text">
                Falta de informações claras sobre preços e requisitos 
                é uma barreira significativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section participate-section">
        <div className="container text-center">
          <h2 className="section-title">Participe da Nossa Pesquisa</h2>
          <p className="section-subtitle">
            Sua opinião é fundamental para melhorarmos nossa solução. 
            O questionário leva apenas 5 minutos!
          </p>
          
          <div className="participate-buttons">
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSdcJsfhgdCOWDCbIlXJ0CVo-ryip9Tfv1PP2wQkX6xq720KHQ/viewform"
              size="large"
              variant="primary"
            >
              Responder Questionário
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;