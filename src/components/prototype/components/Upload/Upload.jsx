import React, { useState, useRef, useEffect } from 'react';
import BottomNav from '../shared/BottomNav';
import '../shared/Shared.css';
import './Upload.css';
import { defaultUser, loadSimulationUser, loadUserProfile } from '../../../../data/userData';
import { addUserPost } from '../../../../data/comunidadeData';

/**
 * Upload Component
 * Tela para criar e publicar novos posts na comunidade
 *
 * @param {Object} props - Component props
 * @param {Function} props.setCurrentScreen - Function to navigate between screens
 */
const Upload = ({ setCurrentScreen }) => {
  // Carrega dados do usuário (com perfil atualizado)
  const simulationUser = loadSimulationUser();
  const savedProfile = loadUserProfile();

  const userData = simulationUser
    ? { ...defaultUser, ...simulationUser }
    : { ...defaultUser, ...(savedProfile || {}) };

  // State para o formulário
  const [descricao, setDescricao] = useState('');
  const [imagemPreview, setImagemPreview] = useState(null);
  const [imagemFile, setImagemFile] = useState(null);

  // State para feedback
  const [showSuccess, setShowSuccess] = useState(false);

  // State para tooltip de localização
  const [showLocationTooltip, setShowLocationTooltip] = useState(false);

  // State para drag & drop
  const [isDragging, setIsDragging] = useState(false);

  // State para accordion de templates
  const [showTemplates, setShowTemplates] = useState(false);

  // Ref para o textarea
  const textareaRef = useRef(null);

  // Templates de sugestões baseadas em atividades comuns
  const templates = [
    '🎉 Acabei de completar [atividade]! Foi incrível!',
    '🏆 Conquistei [objetivo]! Obrigado HobbyLocal!',
    '💪 [X] dias seguidos participando de atividades!',
    '⭐ Atingi o Nível [X]! Gratidão a todos!',
    '🎨 Primeira vez fazendo [atividade] e adorei!',
  ];

  // Função para ajustar altura do textarea
  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  // Effect para ajustar altura quando descricao muda
  useEffect(() => {
    adjustTextareaHeight();
  }, [descricao]);

  // Handler para mudança na descrição
  const handleDescricaoChange = (e) => {
    setDescricao(e.target.value);
  };

  // Handler para usar um template
  const handleUsarTemplate = (template) => {
    setDescricao(template);
  };

  // Handler para upload de imagem
  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagemFile(file);

      // Cria preview da imagem
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler para remover imagem
  const handleRemoverImagem = () => {
    setImagemFile(null);
    setImagemPreview(null);
  };

  // Handlers para drag & drop
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        setImagemFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
          setImagemPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  // Handler para publicar post
  const handlePublicar = () => {
    if (!descricao.trim() && !imagemFile) {
      alert('Adicione uma descrição ou imagem para publicar!');
      return;
    }

    // Calcula o nível do usuário (simulado baseado em XP ou valor padrão)
    const userLevel = userData.level || 3;

    // Cria o post
    const postData = {
      usuario: {
        nome: userData.name,
        avatarUrl: userData.avatar || null,
        nivel: userLevel
      },
      descricao: descricao.trim(),
      imagemUrl: imagemPreview // Usa o preview da imagem
    };

    // Salva o post no localStorage
    addUserPost(postData);

    // Mostra mensagem de sucesso
    setShowSuccess(true);

    // Após 2 segundos, volta para a comunidade
    setTimeout(() => {
      setShowSuccess(false);
      setDescricao('');
      setImagemFile(null);
      setImagemPreview(null);
      setCurrentScreen('comunidade');
    }, 2000);
  };

  return (
    <div className="app-screen upload-screen">
      {/* Header */}
      <div className="app-header">
        <button className="back-btn" onClick={() => setCurrentScreen('comunidade')}>
          ←
        </button>
        <h2>Criar Post</h2>
        <div style={{ width: '40px' }}></div> {/* Spacer */}
      </div>

      <div className="upload-content">
        {/* User Info */}
        <div className="upload-user-info">
          <div className="upload-user-avatar">
            {userData.avatar ? (
              <img src={userData.avatar} alt={userData.name} />
            ) : (
              <div className="avatar-placeholder">👤</div>
            )}
          </div>
          <div className="upload-user-details">
            <strong className="upload-user-name">{userData.name}</strong>
            <span className="upload-visibility">🌍 Público</span>
          </div>
        </div>

        {/* Upload Image Container */}
        {!imagemPreview ? (
          <label
            htmlFor="upload-file-input"
            className={`upload-image-container ${isDragging ? 'dragging' : ''}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              id="upload-file-input"
              type="file"
              accept="image/*"
              onChange={handleImagemChange}
              style={{ display: 'none' }}
            />
            <div className="upload-image-box">
              <span className="upload-image-icon">📷</span>
              <p className="upload-image-text">
                {isDragging ? 'Solte a imagem aqui' : 'Clique ou arraste uma foto aqui'}
              </p>
            </div>
          </label>
        ) : (
          <div className="upload-image-preview-container">
            <img src={imagemPreview} alt="Preview" className="upload-image-preview" />
            <button
              className="remove-image-btn"
              onClick={handleRemoverImagem}
              aria-label="Remover imagem"
            >
              ✕
            </button>
          </div>
        )}

        {/* Descrição Input */}
        <div className="upload-descricao-container">
          <textarea
            ref={textareaRef}
            className="upload-descricao-input"
            placeholder="Compartilhe sua conquista, experiência ou descoberta..."
            value={descricao}
            onChange={handleDescricaoChange}
            maxLength={500}
            rows={1}
          />
          <div className="descricao-counter">
            {descricao.length}/500
          </div>
        </div>

        {/* Templates Sugeridos */}
        {!descricao && (
          <div className="upload-templates">
            <button
              className="templates-header"
              onClick={() => setShowTemplates(!showTemplates)}
            >
              <span>💡 Modelos de Post:</span>
              <span className="templates-arrow">{showTemplates ? '▲' : '▼'}</span>
            </button>
            {showTemplates && (
              <div className="templates-list">
                {templates.map((template, index) => (
                  <button
                    key={index}
                    className="template-btn"
                    onClick={() => handleUsarTemplate(template)}
                  >
                    {template}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Location Bar */}
        <div
          className="upload-location-bar"
          onMouseEnter={() => setShowLocationTooltip(true)}
          onMouseLeave={() => setShowLocationTooltip(false)}
          style={{ position: 'relative' }}
        >
          <div className="upload-location-content">
            <span className="upload-location-icon">📍</span>
            <span className="upload-location-text">Icaraí - Niterói</span>
          </div>
          {showLocationTooltip && (
            <div className="location-tooltip-upload">
              Localização filtrada para o protótipo
            </div>
          )}
        </div>

        {/* Publish Button */}
        <button
          className="publicar-btn"
          onClick={handlePublicar}
          disabled={!descricao.trim() && !imagemFile}
        >
          Publicar
        </button>

        {/* Success Message */}
        {showSuccess && (
          <div className="success-message">
            <span className="success-icon">✓</span>
            <p>Post publicado com sucesso!</p>
          </div>
        )}

        {/* Tips */}
        <div className="upload-tips">
          <h4>💡 Dicas para um bom post:</h4>
          <ul>
            <li>Compartilhe conquistas relacionadas às suas atividades</li>
            <li>Use hashtags para facilitar a busca (#Nivel5, #Yoga, etc)</li>
            <li>Adicione fotos para tornar seu post mais atraente</li>
            <li>Seja autêntico e inspire outros membros!</li>
          </ul>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeScreen="" onNavigate={setCurrentScreen} />
    </div>
  );
};

export default Upload;
