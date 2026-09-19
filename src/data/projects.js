// VÍDEOS: em cada projeto, preenche o campo `video` e o vídeo aparece
// automaticamente no pop-up quando clicares em "Ver projeto".
//   - Ficheiro no site:  video: "/videos/caixapay.mp4"   (ficheiro em public/videos/)
//   - YouTube / Vimeo / Google Drive: cola o link normal, ex: "https://youtu.be/xxxxxxxxxxx"
//   - Vários vídeos:     video: ["/videos/demo1.mp4", "https://youtu.be/xxxxxxxxxxx"]
//   - Sem vídeo:         video: null

export const projects = [
  {
    number: "01",
    name: "CaixaPay",
    category: "Fintech · Mobile",
    description: "Sistema de Pagamento Inclusivo e Instantâneo para Cabo Verde.",
    objective:
      "Facilitar transferências person to person(P2P) instantâneas entre diferentes instituições financeiras, contribuindo para um sistema de pagamentos mais inclusivo.",
    tech: ["React Native", "Expo", "Spring Boot", "PostgreSQL", "JWT", "TLS", "RSA", "AES", "REST API"],
    contribution: [
      "Desenvolvimento do frontend mobile",
      "Desenvolvimento de interfaces",
      "Integração com APIs",
      "Desenvolvimento do painel administrativo",
      "Aplicação de boas práticas de segurança",
    ],
    security: ["JWT", "TLS", "RSA", "AES"],
    
    video: "/videos/demo_caixapay.mp4", // ex: "/videos/caixapay.mp4" ou link do YouTube/Vimeo/Drive
    status: null,
  },
  {
    number: "02",
    name: "Know-how Caixa",
    category: "Web · Gestão de conhecimento",
    description: "Plataforma interna para gestão e partilha de conhecimento.",
    objective: null,
    tech: ["React", "Python", "FastAPAI", "Postgresql", "JWT"],
    contribution: [
      "Participação no desenvolvimento da plataforma, com trabalho no frontend utilizando React e Vue.js e apoio na componente backend desenvolvida em Python.",
    ],
    security: [],
    results: null,
    visual: "web",
    video: "/video/demo_know_how_caixa.mp4",
    status: null,
  },
  {
    number: "03",
    name: "Gestão de Contatos",
    category: "Backend · Sistemas internos",
    description: "Aplicação para gestão de contactos institucionais.",
    objective: null,
    tech: ["Python", "FastAPI", "PostgreSQL", "HTML", "CSS", "JavaScript", "JWT"],
    contribution: [
      "Gestão de funcionários",
      "Departamentos",
      "Extensões",
      "Pesquisa",
      "Autenticação administrativa",
      "Operações CRUD",
      "API REST",
    ],
    security: [],
    results: null,
    visual: "backend",
    video: null,
    status: null,
  },
  {
    number: "04",
    name: "Infraestrutura OpenStack",
    category: "Cloud · Infraestrutura",
    description: "Experiência prática com ambientes de infraestrutura e virtualização, incluindo OpenStack, oVirt e KVM.",
    objective: null,
    tech: ["OpenStack", "oVirt", "KVM", "Linux", "Virtualização", "Redes", "Storage"],
    contribution: [],
    security: [],
    results: null,
    visual: "infra",
    video: null,
    status: null,
  },
  {
    number: "05",
    name: "Morabeza Senior",
    category: "E-commerce · Projeto",
    description:
      "Plataforma de comércio eletrónico para produtos e soluções destinados a idosos acamados e cuidadores em Cabo Verde.",
    objective: null,
    tech: ["React", "Vite", "TypeScript", "Material UI", "Spring Boot", "PostgreSQL", "JWT"],
    contribution: [
      "Loja online",
      "Produtos",
      "Carrinho",
      "Checkout",
      "Conta de utilizador",
      "Gestão de stock",
      "Gestão de encomendas",
      "Relatórios",
      "Painel administrativo",
    ],
    security: [],
    results: null,
    visual: "ecommerce",
    video: null,
    status: "Projeto/conceito em desenvolvimento",
  },
  
];
