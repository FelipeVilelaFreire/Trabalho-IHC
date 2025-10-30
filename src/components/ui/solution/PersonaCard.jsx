import './PersonaCard.css';

const PersonaCard = ({ persona }) => {
  return (
    <div className="persona-card">
      <img
        src={persona.image}
        alt={persona.name}
        className="persona-image"
      />
    </div>
  );
};

export default PersonaCard;
