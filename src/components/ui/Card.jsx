import './Card.css';

const Card = ({ 
  children, 
  title, 
  description, 
  icon, 
  color = 'default',
  hoverable = true,
  onClick,
  className = '',
  ...props 
}) => {
  const classes = [
    'card',
    `card-${color}`,
    hoverable && 'card-hoverable',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={classes} 
      onClick={onClick}
      {...props}
    >
      {icon && (
        <div className="card-icon">
          {icon}
        </div>
      )}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children && <div className="card-content">{children}</div>}
    </div>
  );
};

export default Card;