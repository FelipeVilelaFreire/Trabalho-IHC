import React, { useState, useEffect } from 'react';
import './PhoneMockup.css';

const PhoneMockup = ({ children }) => {
  // Estado para armazenar o horário atual
  const [currentTime, setCurrentTime] = useState('');

  // Atualiza o horário a cada minuto
  useEffect(() => {
    // Função para atualizar o horário
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    // Atualiza imediatamente
    updateTime();

    // Atualiza a cada minuto
    const interval = setInterval(updateTime, 60000);

    // Cleanup: remove o interval quando o componente desmontar
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="phone-mockup-wrapper">
      <div className="phone-device">
        <div className="phone-notch"></div>
        <div className="phone-screen-container">
          <div className="phone-status-bar">
            <span className="status-time">{currentTime}</span>
            <div className="status-icons">
              <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
                <path d="M1 4C0.447715 4 0 4.44772 0 5V9C0 9.55228 0.447715 10 1 10H2C2.55228 10 3 9.55228 3 9V5C3 4.44772 2.55228 4 2 4H1Z" />
                <path d="M6 2C5.44772 2 5 2.44772 5 3V9C5 9.55228 5.44772 10 6 10H7C7.55228 10 8 9.55228 8 9V3C8 2.44772 7.55228 2 7 2H6Z" />
                <path d="M11 0C10.4477 0 10 0.447715 10 1V9C10 9.55228 10.4477 10 11 10H12C12.5523 10 13 9.55228 13 9V1C13 0.447715 12.5523 0 12 0H11Z" />
                <path d="M16 0C15.4477 0 15 0.447715 15 1V9C15 9.55228 15.4477 10 16 10H17C17.5523 10 18 9.55228 18 9V1C18 0.447715 17.5523 0 17 0H16Z" opacity="0.3" />
              </svg>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
                <path d="M13.5 1C14.3284 1 15 1.67157 15 2.5V8.5C15 9.32843 14.3284 10 13.5 10H1.5C0.671573 10 0 9.32843 0 8.5V2.5C0 1.67157 0.671573 1 1.5 1H13.5ZM14 3H12.5V8H14V3Z" />
              </svg>
            </div>
          </div>

          <div className="phone-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
