import React, { useState } from 'react';
import BottomNav from '../shared/BottomNav';
import '../shared/Shared.css';
import './Comunidade.css';
import { comunidadePosts, formatarTempoPostagem } from '../../../../data/comunidadeData';
import { defaultUser, loadSimulationUser } from '../../../../data/userData';

/**
 * Comunidade Component
 * Feed de posts da comunidade HobbyLocal
 * Exibe conquistas, experiências e interações dos usuários
 *
 * @param {Object} props - Component props
 * @param {Function} props.setCurrentScreen - Function to navigate between screens
 */
const Comunidade = ({ setCurrentScreen }) => {
  // Carrega dados do usuário (simulação ou padrão)
  const simulationUser = loadSimulationUser();
  const userData = simulationUser || defaultUser;

  // State para posts (permite curtir)
  const [posts, setPosts] = useState(comunidadePosts);

  // State para controlar comentários expandidos
  const [comentariosExpandidos, setComentariosExpandidos] = useState({});

  // State para novo comentário
  const [novoComentario, setNovoComentario] = useState({});

  // State para location tooltip
  const [showLocationTooltip, setShowLocationTooltip] = useState(false);

  // Handler para curtir/descurtir post
  const handleCurtir = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              curti: !post.curti,
              curtidas: post.curti ? post.curtidas - 1 : post.curtidas + 1
            }
          : post
      )
    );
  };

  // Handler para expandir/recolher comentários
  const toggleComentarios = (postId) => {
    setComentariosExpandidos(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  // Handler para input de comentário
  const handleComentarioChange = (postId, valor) => {
    setNovoComentario(prev => ({
      ...prev,
      [postId]: valor
    }));
  };

  // Handler para enviar comentário (simulado)
  const handleEnviarComentario = (postId) => {
    const textoComentario = novoComentario[postId];
    if (!textoComentario || textoComentario.trim() === '') return;

    // Determina avatar e nome do usuário atual
    // Se não tiver avatar (modo simulação), usa um placeholder especial
    const avatarUsuario = userData.avatar || null;
    const nomeUsuario = 'Você';

    // Simula adicionar comentário
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comentarios: [
                ...post.comentarios,
                {
                  id: Date.now(),
                  usuarioNome: nomeUsuario,
                  usuarioAvatar: avatarUsuario,
                  texto: textoComentario,
                  dataComentario: new Date().toISOString()
                }
              ]
            }
          : post
      )
    );

    // Limpa o input
    setNovoComentario(prev => ({
      ...prev,
      [postId]: ''
    }));

    // Expande os comentários se não estiverem expandidos
    if (!comentariosExpandidos[postId]) {
      toggleComentarios(postId);
    }
  };

  return (
    <div className="app-screen comunidade-screen">
      {/* Header */}
      <div className="app-header">
        <button className="back-btn" onClick={() => setCurrentScreen('home')}>
          ←
        </button>
        <h2>Comunidade</h2>
        <div style={{ width: '40px' }}></div> {/* Spacer */}
      </div>

      <div className="comunidade-content">
        {/* Location Bar */}
        <div
          className="comunidade-location-bar"
          onMouseEnter={() => setShowLocationTooltip(true)}
          onMouseLeave={() => setShowLocationTooltip(false)}
          style={{ position: 'relative' }}
        >
          <div className="location-info">
            <span className="location-icon">📍</span>
            <span className="location-text">Icaraí - Niterói</span>
          </div>
          {showLocationTooltip && (
            <div className="location-tooltip-comunidade">
              Localização filtrada para o protótipo
            </div>
          )}
        </div>

        {/* Feed Header */}
        <div className="feed-header">
          <div className="feed-header-content">
            <div className="feed-header-text">
              <h3>📣 Feed da Comunidade</h3>
              <p>Veja as conquistas e experiências dos membros</p>
            </div>
            <button
              className="upload-btn"
              onClick={() => setCurrentScreen('upload')}
              aria-label="Criar novo post"
            >
              <span className="upload-icon">➕</span>
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="posts-feed">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              {/* Post Header - Usuário */}
              <div className="post-header">
                <img
                  src={post.usuario.avatarUrl}
                  alt={post.usuario.nome}
                  className="post-user-avatar"
                />
                <div className="post-user-info">
                  <div className="post-user-name-row">
                    <strong className="post-user-name">{post.usuario.nome}</strong>
                    <span className="post-user-nivel">Nível {post.usuario.nivel}</span>
                  </div>
                  <span className="post-time">{formatarTempoPostagem(post.dataPostagem)}</span>
                </div>
              </div>

              {/* Post Descrição */}
              <p className="post-descricao">{post.descricao}</p>

              {/* Post Imagem */}
              {post.imagemUrl && (
                <div className="post-imagem-container">
                  <img src={post.imagemUrl} alt="Post" className="post-imagem" />
                </div>
              )}

              {/* Post Actions - Curtidas e Comentários */}
              <div className="post-stats">
                <span className="post-stat-item">
                  ❤️ {post.curtidas} {post.curtidas === 1 ? 'curtida' : 'curtidas'}
                </span>
                <span className="post-stat-item">
                  💬 {post.comentarios.length} {post.comentarios.length === 1 ? 'comentário' : 'comentários'}
                </span>
              </div>

              {/* Post Actions Buttons */}
              <div className="post-actions">
                <button
                  className={`post-action-btn ${post.curti ? 'active' : ''}`}
                  onClick={() => handleCurtir(post.id)}
                >
                  {post.curti ? '❤️' : '🤍'} Curtir
                </button>
                <button
                  className="post-action-btn"
                  onClick={() => toggleComentarios(post.id)}
                >
                  💬 Comentar
                </button>
              </div>

              {/* Comentários Section */}
              {comentariosExpandidos[post.id] && (
                <div className="comentarios-section">
                  {/* Lista de Comentários */}
                  <div className="comentarios-lista">
                    {post.comentarios.map((comentario) => (
                      <div key={comentario.id} className="comentario-item">
                        {comentario.usuarioAvatar ? (
                          <img
                            src={comentario.usuarioAvatar}
                            alt={comentario.usuarioNome}
                            className="comentario-avatar"
                          />
                        ) : (
                          <div className="comentario-avatar comentario-avatar-placeholder">
                            👤
                          </div>
                        )}
                        <div className="comentario-conteudo">
                          <div className="comentario-bubble">
                            <strong className="comentario-nome">{comentario.usuarioNome}</strong>
                            <p className="comentario-texto">{comentario.texto}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input para Novo Comentário */}
                  <div className="novo-comentario-container">
                    <input
                      type="text"
                      className="novo-comentario-input"
                      placeholder="Escreva um comentário..."
                      value={novoComentario[post.id] || ''}
                      onChange={(e) => handleComentarioChange(post.id, e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleEnviarComentario(post.id);
                        }
                      }}
                    />
                    <button
                      className="novo-comentario-btn"
                      onClick={() => handleEnviarComentario(post.id)}
                      disabled={!novoComentario[post.id] || novoComentario[post.id].trim() === ''}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="comunidade-info-banner">
          <span className="info-icon">💡</span>
          <p>
            Complete atividades e conquiste níveis para compartilhar suas realizações com a comunidade!
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeScreen="" onNavigate={setCurrentScreen} />
    </div>
  );
};

export default Comunidade;
