import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  href, 
  fullWidth = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const classes = [
    'button',
    `button-${variant}`,
    `button-${size}`,
    fullWidth && 'button-fullWidth',
    disabled && 'button-disabled',
    className
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;