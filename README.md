# Studio Ana Carvalho

Site profissional para designer de interiores desenvolvido em Next.js com TypeScript e Tailwind CSS.

## 🎨 Características

- **Design Responsivo**: Otimizado para todos os dispositivos
- **Animações Elegantes**: Transições suaves com Framer Motion
- **Paleta Minimalista**: Preto e branco com tons de cinza
- **Performance Otimizada**: Next.js 14 com App Router
- **TypeScript**: Tipagem completa para melhor desenvolvimento

## 📱 Páginas

- **Home**: Hero section com projetos em destaque
- **Sobre**: Biografia e filosofia da Ana Carvalho
- **Projetos**: Galeria completa de projetos realizados
- **Serviços**: Lista de serviços oferecidos
- **Contato**: Formulário de contato e informações

## 🚀 Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
src/
├── app/                 # App Router do Next.js
│   ├── globals.css     # Estilos globais
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página inicial
│   ├── sobre/          # Página sobre
│   ├── projetos/       # Páginas de projetos
│   ├── servicos/       # Página de serviços
│   └── contato/        # Página de contato
├── components/         # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Footer.tsx      # Rodapé
│   ├── Hero.tsx        # Seção hero da home
│   ├── FeaturedProjects.tsx # Projetos em destaque
│   ├── AboutPreview.tsx # Preview sobre
│   └── ContactForm.tsx # Formulário de contato
├── lib/                # Utilitários e dados
│   └── data.ts         # Dados dos projetos e serviços
└── types/              # Tipos TypeScript
    └── index.ts        # Interfaces
```

## 🎯 Funcionalidades

- **Navegação Fluida**: Menu responsivo com animações
- **Galeria de Projetos**: Visualização de projetos com imagens
- **Formulário de Contato**: Sistema de envio de mensagens
- **Integração Instagram**: Link para perfil social
- **SEO Otimizado**: Meta tags e estrutura semântica

## 📝 Personalização

Para adicionar novos projetos, edite o arquivo `src/lib/data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "novo-projeto",
    title: "Novo Projeto",
    description: "Descrição do projeto",
    category: "Residencial",
    year: "2024",
    location: "São Paulo, SP",
    mainImage: "url-da-imagem",
    images: ["url1", "url2", "url3"],
    featured: true,
  },
];
```

## 🎨 Logo

Para substituir o logo temporário pelo logo oficial do Studio Ana Carvalho:

1. Adicione o arquivo PNG na pasta `public/images/`
2. Atualize o componente `Header.tsx` para usar a imagem

## 📞 Contato

- **WhatsApp**: +55 41 9942-0724
- **Instagram**: @studio.anacarvalho
- **Localização**: Curitiba, PR

---

Desenvolvido com ❤️ para Studio Ana Carvalho
