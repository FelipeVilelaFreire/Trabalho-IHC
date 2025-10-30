import './CenarioCard.css';

const CenarioCard = ({ cenario, index }) => {
  const isImageLeft = index % 2 === 0; // Par = imagem esquerda, Ímpar = imagem direita

  return (
    <div className={`cenario-card ${isImageLeft ? 'image-left' : 'image-right'}`}>
      <div className="cenario-image-container">
        <img
          src={cenario.imagem}
          alt={cenario.titulo}
          className="cenario-image"
        />
      </div>

      <div className="cenario-content">
        <div className="cenario-header">
          <h3 className="cenario-titulo">{cenario.titulo}</h3>
          <p className="cenario-ator">
            <strong>Ator:</strong> {cenario.ator}, {cenario.idade}
          </p>
        </div>

        <div className="cenario-body">
          <p className="cenario-descricao">{cenario.descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default CenarioCard;
