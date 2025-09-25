import Hero from "../components/sections/Hero";
import { TEAM_MEMBERS } from "../utils/constants";
import "./Team.css";

const Team = () => {
  return (
    <div className="team-page">
      <Hero
        title="Nossa Equipe"
        subtitle="Estudantes de IHC comprometidos com a solução"
        showScrollIndicator={false}
      />

      <section className="section team-members-section">
        <div className="container">
          <h2 className="section-title">Conheça os Integrantes</h2>

          <div className="team-grid">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-avatar">{member.avatar}</div>
                <h3 className="member-name">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section project-info-section">
        <div className="container">
          <h2 className="section-title">Informações do Projeto</h2>

          <div className="info-cards">
            <div className="info-card">
              <h3 className="info-title">Disciplina</h3>
              <p className="info-content">Interação Humano-Computador</p>
              <p className="info-detail">2025.2</p>
            </div>

            <div className="info-card">
              <h3 className="info-title">Professora</h3>
              <p className="info-content">Prof.ª Daniela Gorski Trevisan</p>
              <p className="info-detail">Interação Humano-Computador</p>
            </div>

            <div className="info-card">
              <h3 className="info-title">Instituição</h3>
              <p className="info-content">Universidade Federal Fluminense</p>
              <p className="info-detail">Instituto de Computação</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section acknowledgments-section">
        <div className="container text-center">
          <h2 className="section-title">Agradecimentos</h2>
          <p className="acknowledgments-text">
            Agradecemos a todos os participantes da pesquisa que dedicaram seu
            tempo para compartilhar suas experiências e necessidades. Sua
            contribuição foi fundamental para o desenvolvimento deste projeto.
          </p>
          <p className="acknowledgments-text">
            Agradecemos também ao professor pela orientação e suporte durante
            todo o processo de desenvolvimento.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Team;
