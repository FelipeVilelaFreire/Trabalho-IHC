/**
 * Dados fictícios de cupons de desconto
 * Cupons são conquistados através de achievements e gamificação
 */

/**
 * Gera cupons baseados no perfil do usuário
 * @param {string} userName - Nome do usuário
 * @returns {Array} Array de cupons disponíveis
 */
export const getCuponsForUser = (userName) => {
  // Para Felipe Silva (usuário padrão com nível 3), retorna cupons de conquista
  if (userName === "Felipe Silva") {
    return [
      {
        id: 'cup-001',
        titulo: 'Desconto Iniciante',
        codigo: 'FELIPEINIT15',
        porcentagemDesconto: 15,
        conquistaVinculada: 'Por completar seu primeiro cadastro',
        expiraEm: '2025-12-31',
        status: 'ativo',
        emoji: '🎉'
      },
      {
        id: 'cup-002',
        titulo: 'Desconto Nível Pro',
        codigo: 'FELIPEPRO25',
        porcentagemDesconto: 25,
        conquistaVinculada: 'Por ter atingido o Nível 3',
        expiraEm: '2025-11-30',
        status: 'ativo',
        emoji: '⭐'
      },
      {
        id: 'cup-003',
        titulo: 'Desconto Participação',
        codigo: 'ATIVIDADE10',
        porcentagemDesconto: 20,
        conquistaVinculada: 'Por completar 10 atividades',
        expiraEm: '2025-10-25',
        status: 'usado',
        emoji: '🏆'
      },
      {
        id: 'cup-004',
        titulo: 'Desconto Madrugador',
        codigo: 'EARLYBIRD30',
        porcentagemDesconto: 30,
        conquistaVinculada: 'Por participar de 5 atividades matinais',
        expiraEm: '2025-09-15',
        status: 'expirado',
        emoji: '🌅'
      },
      {
        id: 'cup-005',
        titulo: 'Desconto Fidelidade',
        codigo: 'FIDELITY20',
        porcentagemDesconto: 20,
        conquistaVinculada: 'Por completar 3 meses no HobbyLocal',
        expiraEm: '2026-01-15',
        status: 'ativo',
        emoji: '💎'
      },
      {
        id: 'cup-006',
        titulo: 'Desconto Social',
        codigo: 'SOCIAL15',
        porcentagemDesconto: 15,
        conquistaVinculada: 'Por convidar 3 amigos para o app',
        expiraEm: '2025-12-20',
        status: 'ativo',
        emoji: '👥'
      },
      {
        id: 'cup-007',
        titulo: 'Desconto Weekend',
        codigo: 'WEEKEND25',
        porcentagemDesconto: 25,
        conquistaVinculada: 'Por participar de 5 atividades nos fins de semana',
        expiraEm: '2025-08-30',
        status: 'usado',
        emoji: '🎊'
      },
      {
        id: 'cup-008',
        titulo: 'Desconto Explorador',
        codigo: 'EXPLORER35',
        porcentagemDesconto: 35,
        conquistaVinculada: 'Por experimentar 5 categorias diferentes',
        expiraEm: '2026-02-28',
        status: 'ativo',
        emoji: '🗺️'
      }
    ];
  }

  // Para outros usuários (incluindo modo simulação), retorna apenas cupons básicos
  return [
    {
      id: 'cup-welcome',
      titulo: 'Boas-vindas',
      codigo: 'BEMVINDO10',
      porcentagemDesconto: 10,
      conquistaVinculada: 'Cupom de boas-vindas ao HobbyLocal',
      expiraEm: '2025-12-31',
      status: 'ativo',
      emoji: '🎁'
    },
    {
      id: 'cup-first',
      titulo: 'Primeira Atividade',
      codigo: 'PRIMEIRA15',
      porcentagemDesconto: 15,
      conquistaVinculada: 'Para usar na sua primeira atividade',
      expiraEm: '2026-01-31',
      status: 'ativo',
      emoji: '🎯'
    }
  ];
};

/**
 * Retorna todos os cupons disponíveis (para exibição geral)
 */
export const allCupons = [
  {
    id: 'cup-001',
    titulo: 'Desconto Iniciante',
    codigo: 'FELIPEINIT15',
    porcentagemDesconto: 15,
    conquistaVinculada: 'Por completar seu primeiro cadastro',
    expiraEm: '2025-12-31',
    status: 'ativo',
    emoji: '🎉'
  },
  {
    id: 'cup-002',
    titulo: 'Desconto Nível Pro',
    codigo: 'FELIPEPRO25',
    porcentagemDesconto: 25,
    conquistaVinculada: 'Por ter atingido o Nível 3',
    expiraEm: '2025-11-30',
    status: 'ativo',
    emoji: '⭐'
  },
  {
    id: 'cup-003',
    titulo: 'Desconto Participação',
    codigo: 'ATIVIDADE10',
    porcentagemDesconto: 20,
    conquistaVinculada: 'Por completar 10 atividades',
    expiraEm: '2025-10-25',
    status: 'usado',
    emoji: '🏆'
  },
  {
    id: 'cup-004',
    titulo: 'Desconto Madrugador',
    codigo: 'EARLYBIRD30',
    porcentagemDesconto: 30,
    conquistaVinculada: 'Por participar de 5 atividades matinais',
    expiraEm: '2025-09-15',
    status: 'expirado',
    emoji: '🌅'
  },
  {
    id: 'cup-005',
    titulo: 'Desconto Fidelidade',
    codigo: 'FIDELITY20',
    porcentagemDesconto: 20,
    conquistaVinculada: 'Por completar 3 meses no HobbyLocal',
    expiraEm: '2026-01-15',
    status: 'ativo',
    emoji: '💎'
  },
  {
    id: 'cup-006',
    titulo: 'Desconto Social',
    codigo: 'SOCIAL15',
    porcentagemDesconto: 15,
    conquistaVinculada: 'Por convidar 3 amigos para o app',
    expiraEm: '2025-12-20',
    status: 'ativo',
    emoji: '👥'
  },
  {
    id: 'cup-007',
    titulo: 'Desconto Weekend',
    codigo: 'WEEKEND25',
    porcentagemDesconto: 25,
    conquistaVinculada: 'Por participar de 5 atividades nos fins de semana',
    expiraEm: '2025-08-30',
    status: 'usado',
    emoji: '🎊'
  },
  {
    id: 'cup-008',
    titulo: 'Desconto Explorador',
    codigo: 'EXPLORER35',
    porcentagemDesconto: 35,
    conquistaVinculada: 'Por experimentar 5 categorias diferentes',
    expiraEm: '2026-02-28',
    status: 'ativo',
    emoji: '🗺️'
  }
];

/**
 * Formata a data de expiração para exibição
 * @param {string} dataExpiracao - Data no formato YYYY-MM-DD
 * @returns {string} Data formatada
 */
export const formatarDataExpiracao = (dataExpiracao) => {
  const data = new Date(dataExpiracao);
  const hoje = new Date();

  // Remove as horas para comparar apenas datas
  hoje.setHours(0, 0, 0, 0);
  data.setHours(0, 0, 0, 0);

  const diffTime = data - hoje;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return 'Expirado';
  } else if (diffDays === 0) {
    return 'Expira hoje';
  } else if (diffDays === 1) {
    return 'Expira amanhã';
  } else if (diffDays <= 7) {
    return `Expira em ${diffDays} dias`;
  } else if (diffDays <= 30) {
    const semanas = Math.floor(diffDays / 7);
    return `Expira em ${semanas} ${semanas === 1 ? 'semana' : 'semanas'}`;
  } else {
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return `Expira em ${data.getDate()} ${meses[data.getMonth()]} ${data.getFullYear()}`;
  }
};
