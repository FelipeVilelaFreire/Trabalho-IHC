import React, { useState } from 'react';
import BottomNav from '../shared/BottomNav';
import '../shared/Shared.css';
import './Upload.css';
import { defaultUser, loadSimulationUser } from '../../../../data/userData';

/**
 * Upload Component
 * Tela para criar e publicar novos posts na comunidade
 *
 * @param {Object} props - Component props
 * @param {Function} props.setCurrentScreen - Function to navigate between screens
 */
const Upload = ({ setCurrentScreen }) => {
  // Carrega dados do usuário
  const simulationUser = loadSimulationUser();
  const userData = simulationUser || defaultUser;

  // State para o formulário
  const [descricao, setDescricao] = useState('');
  const [imagemPreview, setImagemPreview] = useState(null);
  const [imagemFile, setImagemFile] = useState(null);

  // State para feedback
  const [showSuccess, setShowSuccess] = useState(false);

  // Templates de sugestões baseadas em atividades comuns
  const templates = [
    '🎉 Acabei de completar [atividade]! Foi incrível!',
    '🏆 Conquistei [objetivo]! Obrigado HobbyLocal!',
    '💪 [X] dias seguidos participando de atividades!',
    '⭐ Atingi o Nível [X]! Gratidão a todos!',
    '🎨 Primeira vez fazendo [atividade] e adorei!',
  ];

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

  // Handler para publicar post
  const handlePublicar = () => {
    if (!descricao.trim() && !imagemFile) {
      alert('Adicione uma descrição ou imagem para publicar!');
      return;
    }

    // Simula publicação
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

        {/* Descrição Input */}
        <div className="upload-descricao-container">
          <textarea
            className="upload-descricao-input"
            placeholder="Compartilhe sua conquista, experiência ou descoberta..."
            value={descricao}
            onChange={handleDescricaoChange}
            maxLength={500}
            rows={6}
          />
          <div className="descricao-counter">
            {descricao.length}/500
          </div>
        </div>

        {/* Templates Sugeridos */}
        {!descricao && (
          <div className="upload-templates">
            <h4>💡 Modelos de Post:</h4>
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
          </div>
        )}

        {/* Image Preview */}
        {imagemPreview && (
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

        {/* Upload Actions */}
        <div className="upload-actions">
          <label className="upload-image-btn">
            <input
              type="file"
              accept="image/*"
              onChange={handleImagemChange}
              style={{ display: 'none' }}
            />
            <span className="upload-action-icon">📷</span>
            <span className="upload-action-label">Adicionar Foto</span>
          </label>

          <button className="upload-emoji-btn">
            <span className="upload-action-icon">😊</span>
            <span className="upload-action-label">Emoji</span>
          </button>

          <button className="upload-location-btn">
            <span className="upload-action-icon">📍</span>
            <span className="upload-action-label">Localização</span>
          </button>
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
