import React, { useEffect } from 'react';
import './Toast.css';

/**
 * Toast Component
 * Displays temporary notifications with animations
 *
 * @param {Object} props - Component props
 * @param {boolean} props.show - Whether to show the toast
 * @param {string} props.message - Message to display
 * @param {string} props.type - Type of toast (success, error, info, warning)
 * @param {Function} props.onClose - Callback when toast closes
 * @param {number} props.duration - Duration in ms (default: 3000)
 * @param {Function} props.onClick - Callback when toast is clicked (optional)
 */
const Toast = ({ show, message, type = 'success', onClose, duration = 3000, onClick }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      case 'xp':
        return '⭐';
      case 'mission':
        return '🎯';
      case 'achievement':
        return '🏆';
      default:
        return '✓';
    }
  };

  const handleToastClick = () => {
    if (onClick) {
      onClick();
      onClose(); // Close toast after clicking
    }
  };

  return (
    <div className={`toast-container ${show ? 'show' : ''}`}>
      <div
        className={`toast toast-${type} ${onClick ? 'toast-clickable' : ''}`}
        onClick={handleToastClick}
      >
        <div className="toast-icon">
          {getIcon()}
        </div>
        <div className="toast-content">
          <p className="toast-message">{message}</p>
        </div>
        <button
          className="toast-close"
          onClick={(e) => {
            e.stopPropagation(); // Prevent toast click when closing
            onClose();
          }}
          aria-label="Fechar"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;
