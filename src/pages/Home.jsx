import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const pageCards = [
    {
      title: 'Imersão no Problema',
      description: 'Análise etnográfica e identificação dos desafios na descoberta de atividades locais.',
      icon: '🔍',
      link: '/problema',
      color: 'primary'
    },
    {
      title: 'Proposta de Solução',
      description: 'Desenvolvimento de protótipo baseado em princípios de IHC e design participativo.',
      icon: '💡',
      link: '/solucao',
      color: 'secondary'
    },
    {
      title: 'Metodologia e Resultados',
      description: 'Detalhamento do processo de pesquisa, métodos utilizados e análise dos dados coletados.',
      icon: '📊',
      link: '/pesquisa',
      color: 'accent'
    },
    {
      title: 'Equipe de Pesquisa',
      description: 'Apresentação dos pesquisadores e suas contribuições para o projeto.',
      icon: '👥',
      link: '/equipe',
      color: 'success'
    }
  ];

  return (
    <div className="home">
      <Hero 
        title="HobbyMap: Projeto de IHC"
        subtitle="Um estudo sobre descoberta e engajamento em atividades de lazer locais através de uma abordagem centrada no usuário"
        ctaText="Explorar Pesquisa"
        ctaLink="#about"
      />

      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">Sobre o Projeto</h2>
          <p className="section-subtitle">
            Este é um projeto acadêmico desenvolvido para a disciplina de Interação Humano-Computador, 
            focado em resolver o problema de descoberta e engajamento em hobbies e atividades locais.
          </p>
          
          <div className="about-content">
            <div className="about-text">
              <h3>Contexto da Pesquisa</h3>
              <p>
                Nossa investigação identificou que, apesar da abundância de recursos digitais, existe uma lacuna 
                significativa na descoberta e engajamento em atividades presenciais locais. Através de métodos 
                etnográficos e análise de comportamento, mapeamos as principais barreiras que impedem a 
                participação efetiva em hobbies e atividades comunitárias.
              </p>
            </div>
            
            <div className="about-visual">
              <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="100" height="100" rx="10" fill="var(--primary-100)"/>
                <rect x="250" y="50" width="100" height="100" rx="10" fill="var(--secondary)" opacity="0.2"/>
                <rect x="50" y="180" width="100" height="100" rx="10" fill="var(--accent)" opacity="0.2"/>
                <rect x="250" y="180" width="100" height="100" rx="10" fill="var(--success)" opacity="0.2"/>
                <circle cx="200" cy="150" r="80" stroke="var(--primary)" strokeWidth="3" strokeDasharray="5 5"/>
                <path d="M150 150 L250 150 M200 100 L200 200" stroke="var(--primary)" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section features-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title gradient-text">Metodologia do Projeto</h2>
          <div className="features-grid">
            <div className="feature-card glass-effect">
              <div className="feature-icon">📊</div>
              <h3>Pesquisa Empírica</h3>
              <p>Análise qualitativa e quantitativa para entender necessidades e comportamentos dos usuários.</p>
            </div>
            <div className="feature-card glass-effect">
              <div className="feature-icon">🎯</div>
              <h3>Design Centrado no Usuário</h3>
              <p>Aplicação de princípios de IHC e usabilidade em todas as etapas do desenvolvimento.</p>
            </div>
            <div className="feature-card glass-effect">
              <div className="feature-icon">🔬</div>
              <h3>Prototipação Iterativa</h3>
              <p>Desenvolvimento baseado em feedback contínuo e testes de usabilidade.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section explore-section">
        <div className="container">
          <h2 className="section-title">Estrutura da Pesquisa</h2>
          <p className="section-subtitle">
            Conheça as etapas do desenvolvimento deste projeto acadêmico
          </p>
          
          <div className="page-cards-grid">
            {pageCards.map((card, index) => (
              <Link key={index} to={card.link} className="page-card-link">
                <Card
                  icon={<span className="card-emoji">{card.icon}</span>}
                  title={card.title}
                  description={card.description}
                  color={card.color}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Contribua com Nossa Pesquisa Acadêmica</h2>
            <p className="cta-description">
              Este estudo faz parte de um projeto de Interação Humano-Computador da UFF. 
              Sua participação é voluntária e anônima, contribuindo para o avanço científico na área.
            </p>
            <Button 
              href="https://docs.google.com/document/d/1_4nttxDmjnHOAS4TnH5jiCjaZc4iv0lcnCACcAbHblo/edit?usp=sharing" 
              size="large" 
              variant="primary"
            >
              Participar do Estudo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;