import './PersonaCard.css';

const PersonaCard = ({ persona }) => {
  const {
    name,
    tagline,
    photo,
    personalInfo,
    quote,
    methods,
    objectives,
    frustrations,
    biography,
    criteria,
    hobbies
  } = persona;

  return (
    <div className="persona-card">
      {/* Header Banner */}
      <header className="persona-banner">
        <h3 className="persona-name">{name}</h3>
        <p className="persona-tagline">{tagline}</p>
      </header>

      {/* Layout de 3 colunas */}
      <div className="persona-layout">
        {/* COLUNA 1 - Informações Pessoais */}
        <div className="persona-column">
          <div className="persona-photo-container">
            <img
              src={photo}
              alt={name}
              className="persona-photo"
            />
          </div>

          <section className="column-section">
            <h4 className="column-title">Informações Pessoais</h4>
            <dl className="info-list">
              {Object.entries(personalInfo).map(([key, value]) => (
                <div key={key} className="info-item">
                  <dt>{key}:</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            {quote && (
              <div className="quote-box">
                <div className="quote-icon">💬</div>
                <p className="quote-text">{quote}</p>
              </div>
            )}
          </section>

          <section className="column-section">
            <h4 className="column-title">Métodos Utilizados</h4>
            <ul className="methods-list">
              {methods.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* COLUNA 2 - Objetivos, Frustrações e Biografia */}
        <div className="persona-column">
          <section className="column-section">
            <h4 className="column-title">📌 Objetivos</h4>
            <ul className="section-list">
              {objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </section>

          <section className="column-section">
            <h4 className="column-title">😔 Frustrações</h4>
            <ul className="section-list">
              {frustrations.map((frustration, index) => (
                <li key={index}>{frustration}</li>
              ))}
            </ul>
          </section>

          <section className="column-section">
            <h4 className="column-title">📖 Biografia</h4>
            <p className="section-text">{biography}</p>
          </section>
        </div>

        {/* COLUNA 3 - Critérios de Decisão */}
        <div className="persona-column">
          <section className="column-section criteria-section">
            <h4 className="column-title">🎯 Critérios de Decisão</h4>
            <div className="criteria-list-vertical">
              {criteria.map((criterion, index) => (
                <div key={index} className="criteria-box">
                  <div className="criteria-number">{index + 1}</div>
                  <div className="criteria-content">
                    <strong>{criterion.title}</strong>
                    <p>{criterion.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="column-section hobbies-section">
            <h4 className="column-title">Hobbies e Interesses</h4>
            <ul className="hobbies-simple-list">
              {hobbies.map((hobby, index) => (
                <li key={index}>
                  <span className="hobby-label-sidebar">{hobby.name}</span>
                  <div className="hobby-progress-sidebar">
                    <div
                      className="hobby-fill-sidebar"
                      style={{width: `${hobby.percentage}%`}}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;
