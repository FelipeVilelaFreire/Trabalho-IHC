import { useEffect } from 'react';
import './TCLEModal.css';

const TCLEModal = ({ isOpen, onClose }) => {
  // Previne scroll do body quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Fecha o modal quando pressiona ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="tcle-modal-overlay" onClick={onClose}>
      <div className="tcle-modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="tcle-modal-close" 
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <iframe 
          src="/docs/TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO (TCLE) - Documentos Google.pdf"
          style={{width: '100%', height: '100%'}}
          title="Termo de Consentimento Livre e Esclarecido"
        />
      </div>
    </div>
  );
};

export default TCLEModal;