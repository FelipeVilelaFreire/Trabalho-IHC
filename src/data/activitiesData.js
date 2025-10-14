/**
 * activitiesData.js
 * Dados de todas as atividades disponíveis no HobbyLocal
 */

export const activities = [
  {
    id: 1,
    title: 'Aula de Pintura',
    category: 'Arte',
    location: 'Centro Cultural - Niterói',
    distance: '2.0 km',
    price: 'R$ 45',
    priceValue: 45,
    rating: '4.8',
    reviews: 124,
    badge: 'Hoje',
    emoji: '🎨',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    description: 'Aula de pintura em tela para todos os níveis. Materiais inclusos: tintas acrílicas, pincéis e tela. Aprenda técnicas de pintura com instrutora experiente.',
    instructor: 'Maria Silva',
    instructorBio: 'Artista plástica com 15 anos de experiência',
    participants: 8,
    maxParticipants: 12,
    schedule: 'Sábado, 15:00 - 17:00',
    duration: '2 horas',
    difficulty: 'Iniciante',
    whatToBring: ['Roupas confortáveis', 'Água'],
    included: ['Materiais de pintura', 'Café e biscoitos'],
    coordinates: { lat: -22.8956, lng: -43.1167 },
    mapX: 25,
    mapY: 20,
    link: 'aulasdepinturaniteroi.com.br',
    phone: '(21) 99876-5432',
    comments: [
      {
        id: 1,
        userName: 'Ana Carolina',
        userPhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
        comment: 'Aula incrível! A Maria é uma ótima instrutora, super paciente e ensina muito bem. Já fiz 3 aulas e estou amando!',
        date: '2 dias atrás'
      },
      {
        id: 2,
        userName: 'Pedro Santos',
        userPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        comment: 'Experiência maravilhosa! O ambiente é acolhedor e os materiais são de excelente qualidade. Recomendo!',
        date: '1 semana atrás'
      },
      {
        id: 3,
        userName: 'Juliana Oliveira',
        userPhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
        comment: 'Perfeito para iniciantes como eu! Consegui criar minha primeira obra de arte e fiquei muito satisfeita.',
        date: '2 semanas atrás'
      }
    ]
  },
  {
    id: 2,
    title: 'Futebol no Parque',
    category: 'Esportes',
    location: 'Parque da Cidade - Niterói',
    distance: '1.5 km',
    price: 'Grátis',
    priceValue: 0,
    rating: '4.9',
    reviews: 256,
    badge: 'Amanhã',
    emoji: '⚽',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    description: 'Racha de futebol aos domingos. Todos os níveis são bem-vindos! Venha fazer parte da nossa comunidade esportiva.',
    instructor: 'Grupo Local de Futebol',
    instructorBio: 'Grupo de amigos que se reúne há 5 anos',
    participants: 18,
    maxParticipants: 22,
    schedule: 'Domingo, 09:00 - 11:00',
    duration: '2 horas',
    difficulty: 'Todos os níveis',
    whatToBring: ['Chuteira', 'Água', 'Protetor solar'],
    included: ['Bola', 'Coletes'],
    coordinates: { lat: -22.9123, lng: -43.1089 },
    mapX: 40,
    mapY: 55,
    link: 'futebolnoparque.com.br',
    phone: '(21) 98765-4321',
    comments: [
      {
        id: 1,
        userName: 'Carlos Eduardo',
        userPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
        comment: 'Melhor racha da região! Pessoal super gente boa e o nível técnico é bom. Todo domingo estou aqui!',
        date: '3 dias atrás'
      },
      {
        id: 2,
        userName: 'Lucas Mendes',
        userPhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
        comment: 'Ambiente descontraído e inclusivo. Mesmo sendo iniciante me senti muito bem acolhido pelo grupo.',
        date: '5 dias atrás'
      }
    ]
  },
  {
    id: 3,
    title: 'Yoga na Praia',
    category: 'Bem-estar',
    location: 'Praia de Icaraí',
    distance: '3.0 km',
    price: 'R$ 35',
    priceValue: 35,
    rating: '4.7',
    reviews: 89,
    badge: 'Quinta',
    emoji: '🧘',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)',
    description: 'Yoga ao ar livre com vista para o mar. Traga seu tapete e venha relaxar! Prática guiada de Hatha Yoga.',
    instructor: 'Ana Paula Costa',
    instructorBio: 'Instrutora certificada de Yoga com 8 anos de prática',
    participants: 12,
    maxParticipants: 20,
    schedule: 'Quinta, 07:00 - 08:30',
    duration: '1h30min',
    difficulty: 'Intermediário',
    whatToBring: ['Tapete de yoga', 'Toalha', 'Água'],
    included: ['Meditação guiada'],
    coordinates: { lat: -22.9078, lng: -43.1023 },
    mapX: 38,
    mapY: 85,
    link: 'yogapraiaicarai.com.br',
    phone: '(21) 97654-3210',
    comments: [
      {
        id: 1,
        userName: 'Mariana Costa',
        userPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
        comment: 'A Ana Paula é uma instrutora excepcional! A prática ao ar livre com vista para o mar é simplesmente perfeita.',
        date: '1 dia atrás'
      },
      {
        id: 2,
        userName: 'Fernanda Lima',
        userPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
        comment: 'Comecei há um mês e já sinto diferença na minha flexibilidade e bem-estar. Recomendo muito!',
        date: '4 dias atrás'
      }
    ]
  },
  {
    id: 4,
    title: 'Aula de Violão',
    category: 'Música',
    location: 'Escola de Música - Centro',
    distance: '2.2 km',
    price: 'R$ 60',
    priceValue: 60,
    rating: '4.9',
    reviews: 178,
    badge: 'Terça',
    emoji: '🎸',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80',
    gradient: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
    description: 'Aprenda violão do zero com método prático. Instrumentos disponíveis para quem não tem. Aula em grupo pequeno.',
    instructor: 'João Pedro Santos',
    instructorBio: 'Músico profissional há 12 anos, professor de violão',
    participants: 6,
    maxParticipants: 10,
    schedule: 'Terça e Quinta, 18:00 - 19:30',
    duration: '1h30min',
    difficulty: 'Iniciante',
    whatToBring: ['Caderno para anotações'],
    included: ['Violão disponível', 'Material didático'],
    coordinates: { lat: -22.8934, lng: -43.1178 },
    mapX: 30,
    mapY: 35,
    link: 'aulaviolaocentro.com.br',
    phone: '(21) 96543-2109',
    comments: [
      {
        id: 1,
        userName: 'Ricardo Alves',
        userPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
        comment: 'Excelente professor! Nunca tinha tocado violão e em 2 meses já consigo tocar algumas músicas. Super recomendo!',
        date: '1 semana atrás'
      },
      {
        id: 2,
        userName: 'Beatriz Silva',
        userPhoto: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
        comment: 'Aulas dinâmicas e muito didáticas. O João tem um método ótimo de ensino, adapta para o ritmo de cada aluno.',
        date: '3 semanas atrás'
      }
    ]
  },
  {
    id: 5,
    title: 'Natação no Mar',
    category: 'Esportes',
    location: 'Praia de Itaipu',
    distance: '8.5 km',
    price: 'Grátis',
    priceValue: 0,
    rating: '4.8',
    reviews: 143,
    badge: 'Sábado',
    emoji: '🏊',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
    gradient: 'linear-gradient(135deg, #30cfd0, #330867)',
    description: 'Grupo de natação em águas abertas. Prática supervisionada por salva-vidas. Para nadadores intermediários.',
    instructor: 'Grupo Águas Abertas RJ',
    instructorBio: 'Grupo com 10 anos de experiência em natação',
    participants: 15,
    maxParticipants: 25,
    schedule: 'Sábado, 07:00 - 08:30',
    duration: '1h30min',
    difficulty: 'Intermediário/Avançado',
    whatToBring: ['Touca', 'Óculos', 'Maiô/Sunga'],
    included: ['Supervisão de salva-vidas'],
    coordinates: { lat: -22.9567, lng: -43.0434 },
    mapX: 62,
    mapY: 98,
    link: 'natacaomaritaipu.com.br',
    phone: '(21) 95432-1098',
    comments: [
      {
        id: 1,
        userName: 'Gabriel Ferreira',
        userPhoto: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&q=80',
        comment: 'Grupo muito organizado! A segurança é levada a sério e o pessoal é super receptivo. Ótimo para quem quer treinar em mar aberto.',
        date: '2 dias atrás'
      },
      {
        id: 2,
        userName: 'Patricia Rocha',
        userPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
        comment: 'Melhor experiência! Sempre quis nadar em águas abertas e esse grupo me deu toda a confiança necessária.',
        date: '1 semana atrás'
      },
      {
        id: 3,
        userName: 'Thiago Costa',
        userPhoto: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&q=80',
        comment: 'Treinos desafiadores mas sempre respeitando o limite de cada um. Ambiente motivador!',
        date: '2 semanas atrás'
      }
    ]
  },
  {
    id: 6,
    title: 'Aula de Dança',
    category: 'Arte',
    location: 'Studio de Dança - Icaraí',
    distance: '2.8 km',
    price: 'R$ 40',
    priceValue: 40,
    rating: '4.7',
    reviews: 92,
    badge: 'Sexta',
    emoji: '💃',
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80',
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    description: 'Aula de dança contemporânea para todos os níveis. Venha se divertir e fazer exercício!',
    instructor: 'Carla Mendes',
    instructorBio: 'Bailarina profissional e coreógrafa',
    participants: 14,
    maxParticipants: 20,
    schedule: 'Sexta, 19:00 - 20:30',
    duration: '1h30min',
    difficulty: 'Todos os níveis',
    whatToBring: ['Roupa confortável', 'Tênis'],
    included: ['Água gelada', 'Vestiário'],
    coordinates: { lat: -22.9045, lng: -43.1056 },
    mapX: 50,
    mapY: 25,
    link: 'dancacontemporanea.com.br',
    phone: '(21) 94321-0987',
    comments: [
      {
        id: 1,
        userName: 'Sofia Almeida',
        userPhoto: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&q=80',
        comment: 'Aulas maravilhosas! A Carla é uma excelente professora, super atenciosa e paciente. Aprendi muito nos últimos meses.',
        date: '1 dia atrás'
      },
      {
        id: 2,
        userName: 'Miguel Santos',
        userPhoto: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=80',
        comment: 'Sempre quis fazer dança mas tinha vergonha. O ambiente aqui é super acolhedor e ninguém julga ninguém. Virei fã!',
        date: '5 dias atrás'
      },
      {
        id: 3,
        userName: 'Larissa Ribeiro',
        userPhoto: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80',
        comment: 'Melhor aula de dança que já fiz! Além de ser um ótimo exercício, é super divertido. Recomendo muito!',
        date: '1 semana atrás'
      },
      {
        id: 4,
        userName: 'Diego Ferreira',
        userPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        comment: 'Ótimo para perder o medo de dançar e se expressar. A turma é incrível e já fizemos amizade com todo mundo!',
        date: '2 semanas atrás'
      }
    ]
  },
  {
    id: 7,
    title: 'Corrida em Grupo',
    category: 'Esportes',
    location: 'Aterro da Praia - Icaraí',
    distance: '2.5 km',
    price: 'Grátis',
    priceValue: 0,
    rating: '4.9',
    reviews: 213,
    badge: 'Terça',
    emoji: '🏃',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
    gradient: 'linear-gradient(135deg, #f77062, #fe5196)',
    description: 'Corrida leve às terças e quintas. Grupo acolhedor para todos os níveis. Percurso de 5km à beira-mar com alongamento final.',
    instructor: 'Runners Niterói',
    instructorBio: 'Grupo de corredores com mais de 200 membros ativos',
    participants: 28,
    maxParticipants: 40,
    schedule: 'Terça e Quinta, 06:30 - 07:30',
    duration: '1 hora',
    difficulty: 'Todos os níveis',
    whatToBring: ['Tênis de corrida', 'Água', 'Boné'],
    included: ['Percurso marcado', 'Alongamento guiado'],
    coordinates: { lat: -22.9067, lng: -43.1045 },
    mapX: 30,
    mapY: 80,
    link: 'corridaemgrupo.com.br',
    phone: '(21) 93210-9876',
    comments: [
      {
        id: 1,
        userName: 'Rodrigo Martins',
        userPhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
        comment: 'Comecei a correr há 3 meses com esse grupo e já perdi 8kg! Pessoal muito motivado e acolhedor.',
        date: '3 dias atrás'
      },
      {
        id: 2,
        userName: 'Amanda Souza',
        userPhoto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
        comment: 'Vista linda, percurso seguro e grupo energético. Não consigo mais viver sem essas corridas!',
        date: '1 semana atrás'
      }
    ]
  },
  {
    id: 8,
    title: 'Fotografia Urbana',
    category: 'Arte',
    location: 'Centro Histórico - Niterói',
    distance: '3.2 km',
    price: 'R$ 55',
    priceValue: 55,
    rating: '4.8',
    reviews: 67,
    badge: 'Domingo',
    emoji: '📷',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    description: 'Workshop de fotografia urbana e arquitetônica. Aprenda composição, luz e edição básica explorando o centro histórico.',
    instructor: 'Rafael Oliveira',
    instructorBio: 'Fotógrafo profissional especializado em urbano',
    participants: 7,
    maxParticipants: 12,
    schedule: 'Domingo, 08:00 - 12:00',
    duration: '4 horas',
    difficulty: 'Iniciante/Intermediário',
    whatToBring: ['Câmera ou celular', 'Bateria extra', 'Protetor solar'],
    included: ['Roteiro fotográfico', 'Dicas de edição'],
    coordinates: { lat: -22.8923, lng: -43.1234 },
    mapX: 20,
    mapY: 50,
    link: 'fotografiaurbana.com.br',
    phone: '(21) 92109-8765',
    comments: [
      {
        id: 1,
        userName: 'Helena Campos',
        userPhoto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80',
        comment: 'Workshop incrível! Aprendi muito sobre composição e iluminação. O Rafael tem um olhar único e ensina com muita paixão.',
        date: '3 dias atrás'
      }
    ]
  },
  {
    id: 9,
    title: 'Meditação Guiada',
    category: 'Bem-estar',
    location: 'Parque da Cidade',
    distance: '1.8 km',
    price: 'R$ 25',
    priceValue: 25,
    rating: '4.9',
    reviews: 156,
    badge: 'Hoje',
    emoji: '🧘‍♀️',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    description: 'Sessão de meditação mindfulness ao ar livre. Técnicas de respiração e relaxamento profundo em contato com a natureza.',
    instructor: 'Lucia Martins',
    instructorBio: 'Instrutora de meditação certificada há 10 anos',
    participants: 16,
    maxParticipants: 25,
    schedule: 'Quarta, 07:00 - 08:00',
    duration: '1 hora',
    difficulty: 'Iniciante',
    whatToBring: ['Tapete ou toalha', 'Água', 'Roupas leves'],
    included: ['Áudio guia de meditação', 'Música ambiente'],
    coordinates: { lat: -22.9145, lng: -43.1078 },
    mapX: 85,
    mapY: 30,
    link: 'meditacaoguiada.com.br',
    phone: '(21) 91098-7654',
    comments: [
      {
        id: 1,
        userName: 'Isabela Mendes',
        userPhoto: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=100&q=80',
        comment: 'A Lucia é uma instrutora incrível. Depois que comecei a meditar minha ansiedade diminuiu muito. Recomendo demais!',
        date: '4 dias atrás'
      },
      {
        id: 2,
        userName: 'Rafael Ribeiro',
        userPhoto: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&q=80',
        comment: 'Ambiente tranquilo e aulas muito bem guiadas. Perfeito para quem está começando a praticar meditação.',
        date: '2 semanas atrás'
      }
    ]
  },
  {
    id: 10,
    title: 'Workshop de DJ',
    category: 'Música',
    location: 'Studio Beat - São Francisco',
    distance: '4.1 km',
    price: 'R$ 80',
    priceValue: 80,
    rating: '4.7',
    reviews: 45,
    badge: 'Sábado',
    emoji: '🎧',
    image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80',
    gradient: 'linear-gradient(135deg, #fa8bff, #2bd2ff)',
    description: 'Aprenda técnicas básicas de DJ: mixagem, equalização e transições. Equipamento profissional disponível para prática.',
    instructor: 'DJ Marcus Vinícius',
    instructorBio: 'DJ profissional há 8 anos, toca em festas e eventos',
    participants: 5,
    maxParticipants: 8,
    schedule: 'Sábado, 14:00 - 17:00',
    duration: '3 horas',
    difficulty: 'Iniciante',
    whatToBring: ['Fone de ouvido (se tiver)'],
    included: ['Equipamento completo', 'Material didático', 'Coffee break'],
    coordinates: { lat: -22.9189, lng: -43.0923 },
    mapX: 60,
    mapY: 80,
    link: 'workshopdj.com.br',
    phone: '(21) 90987-6543',
    comments: [
      {
        id: 1,
        userName: 'Leonardo Silva',
        userPhoto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&q=80',
        comment: 'Sempre tive curiosidade sobre mixagem e esse workshop superou todas as expectativas! Equipamento top e professor muito didático.',
        date: '2 dias atrás'
      },
      {
        id: 2,
        userName: 'Vitória Nascimento',
        userPhoto: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80',
        comment: 'Adorei! Aprendi conceitos que eu nem imaginava que existiam. Já estou praticando em casa no meu notebook.',
        date: '1 semana atrás'
      },
      {
        id: 3,
        userName: 'André Costa',
        userPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
        comment: 'Workshop completo! Desde o básico até técnicas mais avançadas. O Marcus é fera demais, vale cada centavo!',
        date: '3 semanas atrás'
      }
    ]
  },
  {
    id: 11,
    title: 'Vôlei de Praia',
    category: 'Esportes',
    distance: '1.2 km',
    location: 'Praia de Icaraí',
    price: 'Grátis',
    priceValue: 0,
    rating: '4.8',
    reviews: 189,
    badge: 'Amanhã',
    emoji: '🏐',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80',
    gradient: 'linear-gradient(135deg, #fdbb2d, #22c1c3)',
    description: 'Vôlei de praia aos domingos pela manhã. Ambiente descontraído, formamos times na hora. Todos são bem-vindos!',
    instructor: 'Grupo Vôlei Icaraí',
    instructorBio: 'Grupo de vôlei recreativo há 3 anos',
    participants: 12,
    maxParticipants: 16,
    schedule: 'Domingo, 08:00 - 10:00',
    duration: '2 horas',
    difficulty: 'Todos os níveis',
    whatToBring: ['Roupa de banho', 'Protetor solar', 'Água'],
    included: ['Bola', 'Rede montada'],
    coordinates: { lat: -22.9089, lng: -43.1012 },
    mapX: 55,
    mapY: 92,
    link: 'voleipraia.com.br',
    phone: '(21) 99876-5432',
    comments: [
      {
        id: 1,
        userName: 'Bruno Tavares',
        userPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',
        comment: 'Grupo super animado! Nunca tinha jogado vôlei de praia e fui muito bem recebido. Já virou tradição dos meus domingos!',
        date: '5 dias atrás'
      },
      {
        id: 2,
        userName: 'Camila Duarte',
        userPhoto: 'https://images.unsplash.com/photo-1551069613-1904dbdcda11?w=100&q=80',
        comment: 'Excelente forma de fazer exercício e conhecer pessoas novas. Ambiente descontraído e muito divertido!',
        date: '2 semanas atrás'
      }
    ]
  },
  {
    id: 12,
    title: 'Teatro de Improviso',
    category: 'Arte',
    location: 'Teatro Municipal - Centro',
    distance: '3.5 km',
    price: 'R$ 50',
    priceValue: 50,
    rating: '4.9',
    reviews: 78,
    badge: 'Quinta',
    emoji: '🎭',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80',
    gradient: 'linear-gradient(135deg, #ff9a56, #ff6a95)',
    description: 'Aula de teatro de improviso para iniciantes. Desenvolva criatividade, espontaneidade e trabalho em equipe através de jogos teatrais.',
    instructor: 'Companhia Improv RJ',
    instructorBio: 'Grupo de teatro com 12 anos de experiência',
    participants: 9,
    maxParticipants: 15,
    schedule: 'Quinta, 19:30 - 21:30',
    duration: '2 horas',
    difficulty: 'Iniciante',
    whatToBring: ['Roupa confortável', 'Água'],
    included: ['Aquecimento vocal', 'Jogos teatrais', 'Certificado'],
    coordinates: { lat: -22.8912, lng: -43.1189 },
    mapX: 82,
    mapY: 33,
    link: 'teatroimproviso.com.br',
    phone: '(21) 98765-4321'
  }
];

/**
 * Obtém uma atividade por ID
 * @param {number} id - ID da atividade
 * @returns {Object|undefined} Atividade encontrada ou undefined
 */
export const getActivityById = (id) => {
  return activities.find(activity => activity.id === id);
};

/**
 * Obtém atividades por categoria
 * @param {string} category - Categoria das atividades
 * @returns {Array} Lista de atividades da categoria
 */
export const getActivitiesByCategory = (category) => {
  return activities.filter(activity => activity.category === category);
};

/**
 * Obtém atividades gratuitas
 * @returns {Array} Lista de atividades gratuitas
 */
export const getFreeActivities = () => {
  return activities.filter(activity => activity.priceValue === 0);
};

/**
 * Obtém atividades ordenadas por rating
 * @returns {Array} Lista de atividades ordenadas por rating (maior para menor)
 */
export const getTopRatedActivities = () => {
  return [...activities].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
};
