import { Project, Service, ContactInfo } from '@/types';

export const projects: Project[] = [
  {
    id: 'casa-moderna-sp',
    title: 'Casa Moderna SP',
    description: 'Projeto residencial contemporâneo com foco na integração entre ambientes internos e externos.',
    category: 'Residencial',
    year: '2024',
    location: 'Curitiba, PR',
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
    id: 'apartamento-rio',
    title: 'Apartamento Rio',
    description: 'Renovação completa de apartamento com design minimalista e funcional.',
    category: 'Residencial',
    year: '2024',
    location: 'Rio de Janeiro, RJ',
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
    id: 'loja-comercial',
    title: 'Loja Comercial',
    description: 'Projeto comercial com identidade visual marcante e layout otimizado para vendas.',
    category: 'Comercial',
    year: '2023',
    location: 'Curitiba, PR',
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
    id: 'casa-minimalista',
    title: 'Casa Minimalista',
    description: 'Design clean e funcional com foco na simplicidade e qualidade dos materiais.',
    category: 'Residencial',
    year: '2023',
    location: 'Belo Horizonte, MG',
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
    id: 'escritorio-corporativo',
    title: 'Escritório Corporativo',
    description: 'Ambiente de trabalho moderno e produtivo com design humanizado.',
    category: 'Comercial',
    year: '2023',
    location: 'Curitiba, PR',
    mainImage: 'https://picsum.photos/800/1000?random=22',
    images: [
      'https://picsum.photos/800/1000?random=22',
      'https://picsum.photos/800/1000?random=23',
      'https://picsum.photos/800/1000?random=24',
      'https://picsum.photos/800/1000?random=25',
      'https://picsum.photos/800/1000?random=26'
    ],
    featured: true
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