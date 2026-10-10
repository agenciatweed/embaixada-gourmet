export const moments = [
  {
    id: 'abrir',
    title: 'Abrir',
    situation: 'Você tem capital e uma ideia de casa, mas ainda não tem a operação.',
    body: 'Conceito, viabilidade, cardápio, fichas técnicas, fornecedores, equipe-chave, marca e inauguração, conduzidos como um projeto só.',
    product: 'Embaixada Abertura',
  },
  {
    id: 'ajustar',
    title: 'Ajustar',
    situation: 'O restaurante fatura, mas a margem não aparece.',
    body: 'CMV, cardápio, compras, estoque e o fluxo entre cozinha e salão revistos até a conta fechar.',
    product: 'Embaixada Operação',
  },
  {
    id: 'crescer',
    title: 'Crescer',
    situation: 'A operação está pronta. Faltam movimento, frequência e presença.',
    body: 'Conteúdo, Google, mídia paga e calendário comercial empurrando o que deixa lucro.',
    product: 'Presença ou Crescimento',
  },
];

export const fragmented = [
  { who: 'A agência', sells: 'vende demanda', misses: 'e anuncia o prato mais fotogênico.' },
  { who: 'A consultoria', sells: 'vende eficiência', misses: 'e acerta o CMV de um salão vazio.' },
  { who: 'O estúdio', sells: 'vende percepção', misses: 'e entrega uma marca sem cardápio por trás.' },
];

export const pillars = [
  {
    name: 'Negócio',
    items: ['Conceito e posicionamento', 'Viabilidade e ponto de equilíbrio', 'Prioridades comerciais'],
  },
  {
    name: 'Operação',
    items: ['Cardápio, mix e fichas técnicas', 'CMV, insumos e fornecedores', 'Equipe-chave e processos de cozinha e salão'],
  },
  {
    name: 'Marca',
    items: ['Naming e identidade', 'Cardápio visual, sinalização e site', 'Fotografia e vídeo'],
  },
  {
    name: 'Crescimento',
    items: ['Conteúdo e Google', 'Mídia paga e calendário comercial', 'Promoções com lógica de margem'],
  },
];

export const matrix = [
  { id: 'quebra-cabeca', name: 'Quebra-cabeça', margin: 'Margem alta', popularity: 'pouco pedido', action: 'Ganha campanha para ficar conhecido.' },
  { id: 'estrela', name: 'Estrela', margin: 'Margem alta', popularity: 'muito pedido', action: 'Recebe a verba de mídia.' },
  { id: 'abacaxi', name: 'Abacaxi', margin: 'Margem baixa', popularity: 'pouco pedido', action: 'Sai do cardápio.' },
  { id: 'burro-de-carga', name: 'Burro de carga', margin: 'Margem baixa', popularity: 'muito pedido', action: 'É reprecificado. Nunca é anunciado.' },
];

export type Product = {
  id: string;
  name: string;
  moment: string;
  setup: { label: string; value: string; note?: string };
  ongoing?: { label: string; value: string };
  term?: string;
  scope: string[];
  excludes?: string;
  featured?: boolean;
};

export const diagnostic = {
  name: 'Diagnóstico Embaixada',
  price: 'R$ 2.200',
  credit: '50% do valor é abatido se o contrato for assinado em até 30 dias.',
  duration: '2 a 3 semanas',
  scope: [
    'Entrevista com proprietários e gestores e visita técnica',
    'Leitura de conceito, posicionamento e jornada do cliente',
    'Cardápio, mix e lógica de preço',
    'Gargalos de cozinha, salão e equipe',
    'Canais de venda e presença digital: Google, Instagram, site e avaliações',
    'Prioridades para 30, 60 e 90 dias e o produto indicado',
  ],
};

export const products: Product[] = [
  {
    id: 'abertura',
    name: 'Embaixada Abertura',
    moment: 'Abrir',
    setup: { label: 'Implantação', value: 'R$ 4.000/mês', note: 'por 4 a 6 meses, mais o Projeto de Marca de Abertura a partir de R$ 18.000' },
    ongoing: { label: 'Continuidade', value: 'Migra para Crescimento ou 360, sem novo setup' },
    term: 'Implantação + 3 meses',
    scope: [
      'Conceito, público, viabilidade e ponto de equilíbrio',
      'Cardápio, fichas técnicas, insumos e fornecedores',
      'Equipamentos, louças, utensílios e cronograma',
      'Identidade, cardápio físico e digital, site, Google e redes',
      'Campanha de pré-lançamento e inauguração',
    ],
    excludes: 'Produção de foto e vídeo, verba de mídia, projeto arquitetônico, compras em nome do cliente.',
  },
  {
    id: 'operacao',
    name: 'Embaixada Operação',
    moment: 'Ajustar',
    setup: { label: 'Implantação', value: 'R$ 2.800/mês', note: 'por 3 meses' },
    ongoing: { label: 'Continuidade', value: 'R$ 1.600/mês' },
    term: '6 meses',
    scope: [
      'Fichas técnicas dos itens principais (até 30)',
      'CMV de partida e meta por categoria',
      'Revisão de cardápio, mix e mapa de fornecedores',
      'Rotinas de compra, estoque e recebimento',
      'Fluxo entre cozinha e salão nos horários de pico',
      'Na continuidade: reunião e visita técnica mensais e acompanhamento do CMV',
    ],
    excludes: 'Presença diária, compras em nome do cliente, controladoria terceirizada.',
  },
  {
    id: 'presenca',
    name: 'Embaixada Presença',
    moment: 'Crescer',
    setup: { label: 'Implantação', value: 'R$ 3.500', note: 'taxa única de setup' },
    ongoing: { label: 'Continuidade', value: 'R$ 2.400/mês' },
    term: '6 meses',
    scope: [
      'Posicionamento, linha editorial e sistema visual de conteúdo',
      'Perfil da Empresa no Google otimizado',
      'Instagram e Google: 8 publicações por mês e direcionamento de stories',
      'Resposta a avaliações e calendário de datas e campanhas',
      'Leitura trimestral do cardápio e das ofertas',
    ],
    excludes: 'Produção de imagens: vêm do banco do cliente ou de produção contratada à parte.',
  },
  {
    id: 'crescimento',
    name: 'Embaixada Crescimento',
    moment: 'Crescer',
    setup: { label: 'Implantação', value: 'R$ 4.500', note: 'taxa única de setup' },
    ongoing: { label: 'Continuidade', value: 'R$ 3.200/mês' },
    term: '6 meses',
    scope: [
      'Tudo do Presença',
      'Engenharia de cardápio inicial e sessão mensal de cardápio e mídia',
      'Gestão de mídia Meta e Google, até 2 campanhas simultâneas',
      'Campanhas para dias fracos, lançamentos e sazonais',
      'Recorrência, WhatsApp, reservas e relatório de conversão',
    ],
    excludes: 'Verba de mídia: paga pelo cliente direto às plataformas.',
  },
  {
    id: '360',
    name: 'Embaixada 360',
    moment: 'Ajustar + Crescer',
    setup: { label: 'Implantação', value: 'R$ 4.500 + R$ 6.000/mês', note: 'por 3 meses' },
    ongoing: { label: 'Continuidade', value: 'R$ 4.800/mês' },
    term: '9 meses',
    scope: [
      'Tudo do Operação e do Crescimento, sobre o mesmo plano',
      'Reunião mensal conjunta com toda a equipe da Embaixada',
      'Painel de indicadores: faturamento, ticket, CMV e custo por cliente',
      'Promoções desenhadas com lógica de margem',
      'Revisão trimestral de posicionamento e resultados',
    ],
    excludes: 'Branding completo, site, foto e vídeo, impressão, verba de mídia.',
    featured: true,
  },
];

export const projects = [
  'Engenharia de Cardápio',
  'Reposicionamento',
  'Branding Gastronômico',
  'Cardápio Visual',
  'Site e cardápio digital',
  'Produção Gastronômica (foto e vídeo)',
  'Lançamento de Menu',
  'Experiência e Serviço',
  'Chef e Equipe-Chave',
  'Fornecedores',
];

export const steps = [
  {
    name: 'Conversa de encaixe',
    detail: '45 minutos, gratuita.',
    body: 'Entendemos o momento da casa e se faz sentido trabalharmos juntos.',
  },
  {
    name: 'Diagnóstico',
    detail: '2 a 3 semanas, R$ 2.200.',
    body: 'Visita, análise e um plano de prioridades para 30, 60 e 90 dias.',
  },
  {
    name: 'Implantação',
    detail: 'Com começo e fim.',
    body: 'Constrói a base: cardápio, processos, marca ou estrutura de mídia.',
  },
  {
    name: 'Continuidade',
    detail: 'Mensal, com volume definido.',
    body: 'Acompanhamento, ajustes e crescimento medido em margem e custo por cliente.',
  },
];

export const rules = [
  { title: 'Desconto não existe.', body: 'Existe redução de escopo. Se o produto não cabe, descemos um degrau ou cortamos um entregável, nunca o preço do mesmo pacote.' },
  { title: 'Escopo escrito.', body: 'Volume definido em contrato. O que exceder vira projeto ou mudança de produto.' },
  { title: 'Verba de mídia é sua.', body: 'Paga direto às plataformas. Foto, vídeo, impressão e terceiros também ficam fora do fee.' },
  { title: 'Permanência mínima.', body: 'Para que a Embaixada não seja julgada por uma intervenção pela metade.' },
];

export const faq = [
  {
    q: 'Onde a Embaixada atende?',
    a: 'Em Porto Alegre e na Grande Porto Alegre. A Serra gaúcha entra no segundo semestre de 2027; Caxias do Sul e o Vale dos Sinos vêm depois.',
  },
  {
    q: 'Para que tipo de restaurante é?',
    a: 'Para casas já estruturadas, com equipe e faturamento recorrente, e para aberturas com capital definido. O que todas têm em comum é a disposição de implementar o que for recomendado.',
  },
  {
    q: 'O valor do Diagnóstico é abatido?',
    a: 'Sim. Metade do valor é creditada se o contrato for assinado em até 30 dias depois da apresentação.',
  },
  {
    q: 'A verba de mídia está incluída no preço?',
    a: 'Não. A verba é paga por você, direto às plataformas. Nossos produtos cobram a estratégia e a gestão.',
  },
  {
    q: 'Vocês fazem fotografia e vídeo?',
    a: 'Sim, como projeto sob demanda e orçado à parte. A produção nunca está embutida nos produtos mensais.',
  },
  {
    q: 'Vocês garantem resultado?',
    a: 'Não prometemos resultado garantido. Combinamos metas, medimos margem, custo por cliente e movimento, e ajustamos o plano todo mês com os seus números.',
  },
  {
    q: 'Quem está por trás da Embaixada?',
    a: 'Uma equipe de profissionais com mais de 20 anos de experiência em gastronomia e em marketing, trabalhando sobre o mesmo plano.',
  },
];
