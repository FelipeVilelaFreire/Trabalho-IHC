/**
 * comunidadeData.js
 * Dados fictícios de posts da comunidade HobbyLocal
 * Reutiliza os mesmos usuários dos comentários das atividades
 */

/**
 * Posts da comunidade
 * Cada post representa uma conquista, experiência ou compartilhamento
 */
export const comunidadePosts = [
  {
    id: 1,
    usuario: {
      nome: 'Ana Carolina',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      nivel: 5
    },
    descricao: 'Acabei de atingir o Nível 5! 🎉 Foram 3 meses de dedicação e muito aprendizado. Gratidão a todos que fazem parte dessa jornada! #Nivel5 #Conquista',
    imagemUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    dataPostagem: '2025-10-16T14:30:00Z',
    curtidas: 234,
    curti: false,
    comentarios: [
      {
        id: 101,
        usuarioNome: 'Pedro Santos',
        usuarioAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        texto: 'Parabéns, Ana! Que inspiração! 👏',
        dataComentario: '2025-10-16T15:00:00Z'
      },
      {
        id: 102,
        usuarioNome: 'Mariana Costa',
        usuarioAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
        texto: 'Merecido demais! Você é um exemplo para todos nós! 💪',
        dataComentario: '2025-10-16T16:20:00Z'
      },
      {
        id: 103,
        usuarioNome: 'Carlos Eduardo',
        usuarioAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
        texto: 'Arrasou! Vamos junto rumo ao nível 10! 🚀',
        dataComentario: '2025-10-16T18:45:00Z'
      }
    ]
  },
  {
    id: 2,
    usuario: {
      nome: 'Carlos Eduardo',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
      nivel: 8
    },
    descricao: 'Completei minha 50ª atividade hoje! ⚽🏃🎨 O HobbyLocal mudou completamente minha rotina. Conheci pessoas incríveis e descobri hobbies que nem sabia que gostava! #50Atividades #Gratidao',
    imagemUrl: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
    dataPostagem: '2025-10-15T10:15:00Z',
    curtidas: 312,
    curti: false,
    comentarios: [
      {
        id: 201,
        usuarioNome: 'Juliana Oliveira',
        usuarioAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
        texto: 'Que jornada incrível! Me inspira muito ver seu progresso! 🌟',
        dataComentario: '2025-10-15T11:30:00Z'
      },
      {
        id: 202,
        usuarioNome: 'Lucas Mendes',
        usuarioAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
        texto: 'Monstro! Estou na minha 15ª ainda, mas vou chegar lá! 💪',
        dataComentario: '2025-10-15T13:00:00Z'
      }
    ]
  },
  {
    id: 3,
    usuario: {
      nome: 'Mariana Costa',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
      nivel: 4
    },
    descricao: 'Primeira vez fazendo Yoga na Praia e foi simplesmente mágico! 🧘‍♀️🌅 A sensação de paz e conexão com a natureza é indescritível. Obrigada Ana Paula pela aula incrível! #YogaNaPraia #Namaste',
    imagemUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    dataPostagem: '2025-10-14T08:45:00Z',
    curtidas: 189,
    curti: false,
    comentarios: [
      {
        id: 301,
        usuarioNome: 'Fernanda Lima',
        usuarioAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
        texto: 'Eu também faço essa aula! É maravilhosa mesmo! ☀️',
        dataComentario: '2025-10-14T09:00:00Z'
      },
      {
        id: 302,
        usuarioNome: 'Isabela Mendes',
        usuarioAvatar: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=100&q=80',
        texto: 'Adorei! Vou experimentar na próxima quinta! 🧘',
        dataComentario: '2025-10-14T10:30:00Z'
      }
    ]
  },
  {
    id: 4,
    usuario: {
      nome: 'Gabriel Ferreira',
      avatarUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&q=80',
      nivel: 7
    },
    descricao: 'Desbloqueei a conquista "Explorador de Categorias"! 🗺️ Experimentei 5 categorias diferentes em um mês: Esportes, Arte, Música, Bem-estar e Fotografia. Cada uma foi uma descoberta única! #Explorador #NovaExperiencia',
    imagemUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
    dataPostagem: '2025-10-13T16:20:00Z',
    curtidas: 156,
    curti: false,
    comentarios: [
      {
        id: 401,
        usuarioNome: 'Helena Campos',
        usuarioAvatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80',
        texto: 'Que legal! Qual categoria você mais curtiu?',
        dataComentario: '2025-10-13T17:00:00Z'
      },
      {
        id: 402,
        usuarioNome: 'Ricardo Alves',
        usuarioAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
        texto: 'Essa conquista é demais! Ainda estou tentando desbloquear! 🎯',
        dataComentario: '2025-10-13T19:15:00Z'
      }
    ]
  },
  {
    id: 5,
    usuario: {
      nome: 'Sofia Almeida',
      avatarUrl: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&q=80',
      nivel: 6
    },
    descricao: 'Minha primeira apresentação de dança! 💃✨ Há 3 meses eu tinha medo até de dançar em casa, e hoje subi no palco graças às aulas da Carla. Obrigada HobbyLocal por me ajudar a vencer meus limites! #DançaContemporanea #SuperandoLimites',
    imagemUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&q=80',
    dataPostagem: '2025-10-12T20:30:00Z',
    curtidas: 278,
    curti: false,
    comentarios: [
      {
        id: 501,
        usuarioNome: 'Miguel Santos',
        usuarioAvatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=80',
        texto: 'Vi sua apresentação! Foi incrível! Parabéns! 👏👏',
        dataComentario: '2025-10-12T21:00:00Z'
      },
      {
        id: 502,
        usuarioNome: 'Larissa Ribeiro',
        usuarioAvatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80',
        texto: 'Arrasou demais, Sofia! Você tem muito talento! 💜',
        dataComentario: '2025-10-12T21:45:00Z'
      },
      {
        id: 503,
        usuarioNome: 'Diego Ferreira',
        usuarioAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        texto: 'Que evolução! Me lembro quando você começou! 🌟',
        dataComentario: '2025-10-13T08:00:00Z'
      }
    ]
  },
  {
    id: 6,
    usuario: {
      nome: 'Rodrigo Martins',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
      nivel: 9
    },
    descricao: 'Sequência de 30 dias! 🏃‍♂️🔥 Um mês seguido participando de atividades. Perdi 10kg, fiz novos amigos e descobri que sou capaz de muito mais do que imaginava. Obrigado a todos que fazem parte dessa comunidade incrível! #30Dias #Transformacao',
    imagemUrl: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&q=80',
    dataPostagem: '2025-10-11T07:00:00Z',
    curtidas: 445,
    curti: false,
    comentarios: [
      {
        id: 601,
        usuarioNome: 'Amanda Souza',
        usuarioAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
        texto: 'Rodrigo, você é uma inspiração! Parabéns pela dedicação! 💪',
        dataComentario: '2025-10-11T08:30:00Z'
      },
      {
        id: 602,
        usuarioNome: 'Bruno Tavares',
        usuarioAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',
        texto: 'Cara, que transformação! Vamos manter essa energia! 🚀',
        dataComentario: '2025-10-11T10:15:00Z'
      },
      {
        id: 603,
        usuarioNome: 'Patricia Rocha',
        usuarioAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
        texto: 'Incrível! Me motiva muito a continuar firme também! 🌟',
        dataComentario: '2025-10-11T14:00:00Z'
      }
    ]
  },
  {
    id: 7,
    usuario: {
      nome: 'Leonardo Silva',
      avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&q=80',
      nivel: 3
    },
    descricao: 'Workshop de DJ foi demais! 🎧🔥 Sempre tive curiosidade e finalmente realizei esse sonho. Aprendi técnicas incríveis e já estou praticando em casa. Próximo passo: tocar na festa da comunidade! #DJ #MusicaEletronica',
    imagemUrl: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80',
    dataPostagem: '2025-10-10T18:45:00Z',
    curtidas: 167,
    curti: false,
    comentarios: [
      {
        id: 701,
        usuarioNome: 'Vitória Nascimento',
        usuarioAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80',
        texto: 'Esse workshop é sensacional mesmo! Vamos mixar juntos! 🎵',
        dataComentario: '2025-10-10T19:30:00Z'
      },
      {
        id: 702,
        usuarioNome: 'André Costa',
        usuarioAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
        texto: 'Mal posso esperar pra te ver tocando! Vai ser show! 🎉',
        dataComentario: '2025-10-10T21:00:00Z'
      }
    ]
  },
  {
    id: 8,
    usuario: {
      nome: 'Beatriz Silva',
      avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
      nivel: 4
    },
    descricao: 'Primeira música completa no violão! 🎸✨ Há 2 meses não sabia nem segurar o instrumento direito, e hoje toquei "Wonderwall" do começo ao fim. Gratidão ao professor João Pedro! O HobbyLocal realizou um sonho antigo meu! #Violao #PrimeiraMúsica',
    imagemUrl: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?w=800&q=80',
    dataPostagem: '2025-10-09T19:20:00Z',
    curtidas: 203,
    curti: false,
    comentarios: [
      {
        id: 801,
        usuarioNome: 'Ricardo Alves',
        usuarioAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
        texto: 'Bia, que legal! Lembro quando você começou! Parabéns! 🎶',
        dataComentario: '2025-10-09T20:00:00Z'
      },
      {
        id: 802,
        usuarioNome: 'Thiago Costa',
        usuarioAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&q=80',
        texto: 'Wonderwall é clássica! Próxima apresentação na roda de amigos? 😄',
        dataComentario: '2025-10-09T22:30:00Z'
      }
    ]
  }
];

/**
 * Formata a data de postagem para exibição
 * @param {string} dataISO - Data no formato ISO
 * @returns {string} Tempo relativo (ex: "2 horas atrás")
 */
export const formatarTempoPostagem = (dataISO) => {
  const agora = new Date();
  const dataPost = new Date(dataISO);
  const diffMs = agora - dataPost;
  const diffSeg = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSeg / 60);
  const diffHoras = Math.floor(diffMin / 60);
  const diffDias = Math.floor(diffHoras / 24);

  if (diffSeg < 60) {
    return 'Agora mesmo';
  } else if (diffMin < 60) {
    return `${diffMin} ${diffMin === 1 ? 'minuto' : 'minutos'} atrás`;
  } else if (diffHoras < 24) {
    return `${diffHoras} ${diffHoras === 1 ? 'hora' : 'horas'} atrás`;
  } else if (diffDias < 7) {
    return `${diffDias} ${diffDias === 1 ? 'dia' : 'dias'} atrás`;
  } else if (diffDias < 30) {
    const semanas = Math.floor(diffDias / 7);
    return `${semanas} ${semanas === 1 ? 'semana' : 'semanas'} atrás`;
  } else {
    const meses = Math.floor(diffDias / 30);
    return `${meses} ${meses === 1 ? 'mês' : 'meses'} atrás`;
  }
};

/**
 * Obtém posts ordenados por data (mais recentes primeiro)
 * @returns {Array} Posts ordenados
 */
export const getPostsOrdenados = () => {
  return [...comunidadePosts].sort((a, b) =>
    new Date(b.dataPostagem) - new Date(a.dataPostagem)
  );
};

/**
 * Obtém posts de um usuário específico
 * @param {string} nomeUsuario - Nome do usuário
 * @returns {Array} Posts do usuário
 */
export const getPostsPorUsuario = (nomeUsuario) => {
  return comunidadePosts.filter(post => post.usuario.nome === nomeUsuario);
};
