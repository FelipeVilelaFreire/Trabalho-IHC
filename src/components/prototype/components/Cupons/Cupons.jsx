import React, { useState } from 'react';
import BottomNav from '../shared/BottomNav';
import '../shared/Shared.css';
import './Cupons.css';
import { getCuponsForUser, formatarDataExpiracao } from '../../../../data/cuponsData';
import { defaultUser, loadSimulationUser } from '../../../../data/userData';

/**
 * Cupons Component
 * Displays user's discount coupons earned through achievements
 *
 * @param {Object} props - Component props
 * @param {Function} props.setCurrentScreen - Function to navigate between screens
 */
const Cupons = ({ setCurrentScreen }) => {
  // Carrega dados do usuário (simulação ou padrão)
  const simulationUser = loadSimulationUser();
  const userData = simulationUser || defaultUser;

  // Carrega cupons do usuário
  const cupons = getCuponsForUser(userData.name);

  // State para controlar qual código foi copiado
  const [copiado, setCopiado] = useState(null);

  // State para filtro de status
  const [filtroStatus, setFiltroStatus] = useState('todos'); // 'todos', 'ativo', 'usado', 'expirado'

  // Função para copiar código do cupom
  const copiarCodigo = (codigo, cupomId) => {
    // Simula cópia para área de transferência
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(codigo)
        .then(() => {
          setCopiado(cupomId);
          setTimeout(() => setCopiado(null), 2000);
        })
        .catch(() => {
          // Fallback se clipboard API não estiver disponível
          setCopiado(cupomId);
          setTimeout(() => setCopiado(null), 2000);
        });
    } else {
      // Fallback visual apenas
      setCopiado(cupomId);
      setTimeout(() => setCopiado(null), 2000);
    }
  };

  // Filtra cupons baseado no filtro selecionado
  const cuponsFiltrados = filtroStatus === 'todos'
    ? cupons
    : cupons.filter(cupom => cupom.status === filtroStatus);

  // Conta cupons por status
  const contagemAtivos = cupons.filter(c => c.status === 'ativo').length;
  const contagemUsados = cupons.filter(c => c.status === 'usado').length;
  const contagemExpirados = cupons.filter(c => c.status === 'expirado').length;

  return (
    <div className="app-screen cupons-screen">
      {/* Header */}
      <div className="app-header">
        <button className="back-btn" onClick={() => setCurrentScreen('home')}>
          ←
        </button>
        <h2>Meus Cupons</h2>
        <div style={{ width: '40px' }}></div> {/* Spacer para centralizar */}
      </div>

      <div className="cupons-content">
        {/* Statistics Cards */}
        <div className="cupons-stats">
          <div className="cupons-stat-card">
            <span className="cupons-stat-number">{contagemAtivos}</span>
            <span className="cupons-stat-label">Ativos</span>
          </div>
          <div className="cupons-stat-card">
            <span className="cupons-stat-number">{contagemUsados}</span>
            <span className="cupons-stat-label">Usados</span>
          </div>
          <div className="cupons-stat-card">
            <span className="cupons-stat-number">{contagemExpirados}</span>
            <span className="cupons-stat-label">Expirados</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="cupons-filter-tabs">
          <button
            className={`filter-tab ${filtroStatus === 'todos' ? 'active' : ''}`}
            onClick={() => setFiltroStatus('todos')}
          >
            Todos
          </button>
          <button
            className={`filter-tab ${filtroStatus === 'ativo' ? 'active' : ''}`}
            onClick={() => setFiltroStatus('ativo')}
          >
            Ativos
          </button>
          <button
            className={`filter-tab ${filtroStatus === 'usado' ? 'active' : ''}`}
            onClick={() => setFiltroStatus('usado')}
          >
            Usados
          </button>
          <button
            className={`filter-tab ${filtroStatus === 'expirado' ? 'active' : ''}`}
            onClick={() => setFiltroStatus('expirado')}
          >
            Expirados
          </button>
        </div>

        {/* Cupons List */}
        <div className="cupons-list">
          {cuponsFiltrados.length > 0 ? (
            cuponsFiltrados.map((cupom) => (
              <div
                key={cupom.id}
                className={`cupom-card ${cupom.status}`}
              >
                {/* Status Badge */}
                <div className={`cupom-status-badge ${cupom.status}`}>
                  {cupom.status === 'ativo' && '✓ Ativo'}
                  {cupom.status === 'usado' && '✓ Usado'}
                  {cupom.status === 'expirado' && '✗ Expirado'}
                </div>

                {/* Cupom Header */}
                <div className="cupom-header">
                  <span className="cupom-emoji">{cupom.emoji}</span>
                  <div className="cupom-title-section">
                    <h3 className="cupom-titulo">{cupom.titulo}</h3>
                    <p className="cupom-conquista">{cupom.conquistaVinculada}</p>
                  </div>
                </div>

                {/* Desconto Badge */}
                <div className="cupom-desconto-badge">
                  <span className="desconto-valor">{cupom.porcentagemDesconto}%</span>
                  <span className="desconto-label">OFF</span>
                </div>

                {/* Cupom Code */}
                <div className="cupom-codigo-section">
                  <div className="codigo-container">
                    <span className="codigo-label">Código:</span>
                    <span className="codigo-valor">{cupom.codigo}</span>
                  </div>
                  <button
                    className={`copiar-btn ${copiado === cupom.id ? 'copiado' : ''}`}
                    onClick={() => copiarCodigo(cupom.codigo, cupom.id)}
                    disabled={cupom.status !== 'ativo'}
                  >
                    {copiado === cupom.id ? '✓ Copiado' : '📋 Copiar'}
                  </button>
                </div>

                {/* Expiration Info */}
                <div className="cupom-expiracao">
                  <span className="expiracao-icon">⏰</span>
                  <span className="expiracao-texto">
                    {formatarDataExpiracao(cupom.expiraEm)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-cupons">
              <div className="empty-icon">🎟️</div>
              <h3>Nenhum cupom encontrado</h3>
              <p>
                {filtroStatus === 'todos'
                  ? 'Você ainda não possui cupons'
                  : `Você não possui cupons ${filtroStatus}s`}
              </p>
            </div>
          )}
        </div>

        {/* Info Banner */}
        {contagemAtivos > 0 && (
          <div className="cupons-info-banner">
            <span className="info-icon">💡</span>
            <p>
              Complete atividades e conquiste níveis para ganhar mais cupons de desconto!
            </p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeScreen="" onNavigate={setCurrentScreen} />
    </div>
  );
};

export default Cupons;
