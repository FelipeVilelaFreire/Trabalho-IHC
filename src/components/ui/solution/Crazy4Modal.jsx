import { useEffect, useState } from 'react';
import './Crazy4Modal.css';

const Crazy4Modal = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

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

  // Reset zoom quando abre nova imagem
  useEffect(() => {
    if (selectedImage) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [selectedImage]);

  // Fecha o modal quando pressiona ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose, selectedImage]);

  if (!isOpen) return null;

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleCloseImageModal = () => {
    setSelectedImage(null);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const crazy4Items = [
    {
      id: 1,
      name: 'Felipe',
      image: '/crazy4/felipe_image.jpg',
      type: 'image'
    },
    {
      id: 2,
      name: 'Guilherme',
      image: '/crazy4/guilherme_image.jpg',
      type: 'image'
    },
    {
      id: 3,
      name: 'João',
      image: '/crazy4/joao_image.jpg',
      type: 'image'
    },
    {
      id: 4,
      name: 'Ruan',
      image: '/crazy4/ruan_image.jpg',
      type: 'image'
    }
  ];

  return (
    <div className="crazy4-modal-overlay" onClick={onClose}>
      <div className="crazy4-modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="crazy4-modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="crazy4-modal-header">
          <h2>Crazy 4 - Ideação</h2>
          <p>Confira as ideias desenvolvidas durante o workshop</p>
        </div>

        <div className="crazy4-grid">
          {crazy4Items.map((item) => (
            <div
              key={item.id}
              className="crazy4-item"
              onClick={() => handleImageClick(item)}
            >
              <div className="crazy4-item-header">
                <span className="crazy4-item-name">{item.name}</span>
              </div>
              <img
                src={item.image}
                alt={`Crazy 4 - ${item.name}`}
                className="crazy4-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal de imagem expandida */}
      {selectedImage && (
        <div className="crazy4-image-modal-overlay" onClick={handleCloseImageModal}>
          <div className="crazy4-image-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="crazy4-image-modal-close"
              onClick={handleCloseImageModal}
              aria-label="Fechar imagem"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="crazy4-image-modal-header">
              <h3>{selectedImage.name}</h3>
              <div className="zoom-controls">
                <button onClick={handleZoomOut} className="zoom-btn" title="Diminuir zoom">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                <span className="zoom-level">{Math.round(zoom * 100)}%</span>
                <button onClick={handleZoomIn} className="zoom-btn" title="Aumentar zoom">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                <button onClick={handleResetZoom} className="zoom-btn zoom-reset" title="Resetar zoom">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div
              className="crazy4-image-modal-content"
              onWheel={handleWheel}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <img
                src={selectedImage.image}
                alt={`Crazy 4 - ${selectedImage.name}`}
                className="crazy4-image-expanded"
                style={{
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                  cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                }}
                onMouseDown={handleMouseDown}
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Crazy4Modal;
