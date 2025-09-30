import { Project, Service, ContactInfo } from '@/types';

export const projects: Project[] = [
  {
    id: 'casa-batel',
    title: 'Casa Batel',
    description: 'Projeto residencial contemporâneo no bairro Batel com foco na integração entre ambientes internos e externos, aproveitando a vista para a cidade.',
    category: 'Residencial',
    year: '2024',
    location: 'Batel, Curitiba - PR',
    mainImage: 'https://picsum.photos/800/1000?random=1',
    images: [
      'https://picsum.photos/800/1000?random=1',
      'https://picsum.photos/800/1000?random=2',
      'https://picsum.photos/800/1000?random=3',
      'https://picsum.photos/800/1000?random=4',
      'https://picsum.photos/800/1000?random=5',
      'https://picsum.photos/800/1000?random=6'
    ],
    featured: true
  },
  {
    id: 'apartamento-centro',
    title: 'Apartamento Centro',
    description: 'Renovação completa de apartamento no Centro Histórico de Curitiba, preservando elementos arquitetônicos originais com design moderno.',
    category: 'Residencial',
    year: '2024',
    location: 'Centro, Curitiba - PR',
    mainImage: 'https://picsum.photos/800/1000?random=7',
    images: [
      'https://picsum.photos/800/1000?random=7',
      'https://picsum.photos/800/1000?random=8',
      'https://picsum.photos/800/1000?random=9',
      'https://picsum.photos/800/1000?random=10',
      'https://picsum.photos/800/1000?random=11'
    ],
    featured: true
  },
  {
    id: 'loja-shopping-muller',
    title: 'Loja Shopping Müller',
    description: 'Projeto comercial no Shopping Müller com identidade visual marcante e layout otimizado para vendas, aproveitando o fluxo de clientes.',
    category: 'Comercial',
    year: '2023',
    location: 'Shopping Müller, Curitiba - PR',
    mainImage: 'https://picsum.photos/800/1000?random=12',
    images: [
      'https://picsum.photos/800/1000?random=12',
      'https://picsum.photos/800/1000?random=13',
      'https://picsum.photos/800/1000?random=14',
      'https://picsum.photos/800/1000?random=15',
      'https://picsum.photos/800/1000?random=16'
    ],
    featured: true
  },
  {
    id: 'casa-aguas-claras',
    title: 'Casa Águas Claras',
    description: 'Design clean e funcional em Águas Claras com foco na simplicidade e qualidade dos materiais, integrando natureza e arquitetura.',
    category: 'Residencial',
    year: '2023',
    location: 'Águas Claras, Pinhais - PR',
    mainImage: 'https://picsum.photos/800/1000?random=17',
    images: [
      'https://picsum.photos/800/1000?random=17',
      'https://picsum.photos/800/1000?random=18',
      'https://picsum.photos/800/1000?random=19',
      'https://picsum.photos/800/1000?random=20',
      'https://picsum.photos/800/1000?random=21'
    ],
    featured: true
  },
  {
    id: 'escritorio-batel',
    title: 'Escritório Batel',
    description: 'Ambiente de trabalho moderno no coração do Batel com design humanizado, criando espaços colaborativos e produtivos.',
    category: 'Comercial',
    year: '2023',
    location: 'Batel, Curitiba - PR',
    mainImage: 'https://picsum.photos/800/1000?random=22',
    images: [
      'https://picsum.photos/800/1000?random=22',
      'https://picsum.photos/800/1000?random=23',
      'https://picsum.photos/800/1000?random=24',
      'https://picsum.photos/800/1000?random=25',
      'https://picsum.photos/800/1000?random=26'
    ],
    featured: true
  },
  {
    id: 'casa-santa-felicidade',
    title: 'Casa Santa Felicidade',
    description: 'Projeto residencial em Santa Felicidade valorizando a tradição italiana do bairro com elementos contemporâneos e aconchegantes.',
    category: 'Residencial',
    year: '2022',
    location: 'Santa Felicidade, Curitiba - PR',
    mainImage: 'https://picsum.photos/800/1000?random=27',
    images: [
      'https://picsum.photos/800/1000?random=27',
      'https://picsum.photos/800/1000?random=28',
      'https://picsum.photos/800/1000?random=29',
      'https://picsum.photos/800/1000?random=30',
      'https://picsum.photos/800/1000?random=31'
    ],
    featured: true
  },
  {
    id: 'apartamento-cambui',
    title: 'Apartamento Cambuí',
    description: 'Renovação de apartamento no bairro Cambuí com design escandinavo, aproveitando a luz natural e criando ambientes acolhedores.',
    category: 'Residencial',
    year: '2022',
    location: 'Cambuí, Curitiba - PR',
    mainImage: 'https://picsum.photos/800/1000?random=32',
    images: [
      'https://picsum.photos/800/1000?random=32',
      'https://picsum.photos/800/1000?random=33',
      'https://picsum.photos/800/1000?random=34',
      'https://picsum.photos/800/1000?random=35',
      'https://picsum.photos/800/1000?random=36'
    ],
    featured: false
  },
  {
    id: 'clinica-medica-bom-retiro',
    title: 'Clínica Médica Bom Retiro',
    description: 'Projeto de clínica médica no Bom Retiro com design humanizado, criando ambientes acolhedores para pacientes e eficientes para profissionais.',
    category: 'Comercial',
    year: '2022',
    location: 'Bom Retiro, Curitiba - PR',
    mainImage: 'https://picsum.photos/800/1000?random=37',
    images: [
      'https://picsum.photos/800/1000?random=37',
      'https://picsum.photos/800/1000?random=38',
      'https://picsum.photos/800/1000?random=39',
      'https://picsum.photos/800/1000?random=40',
      'https://picsum.photos/800/1000?random=41'
    ],
    featured: false
  }
];

export const services: Service[] = [
  {
    id: 'design-interior',
    title: 'Design de Interiores',
    description: 'Projetos residenciais e comerciais com foco na funcionalidade e estética.'
  },
  {
    id: 'consultoria',
    title: 'Consultoria',
    description: 'Orientação especializada para transformar seus espaços com eficiência.'
  },
  {
    id: 'ambientacao',
    title: 'Ambientação',
    description: 'Criação de ambientes únicos que refletem sua personalidade e estilo.'
  },
  {
    id: 'reformas',
    title: 'Reformas',
    description: 'Gerenciamento completo de reformas com acompanhamento técnico especializado.'
  }
];

export const contactInfo: ContactInfo = {
  phone: '+55 41 9942-0724',
  email: '',
  address: 'Curitiba, PR',
  instagram: '@studio.anacarvalho'
};