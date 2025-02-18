# Website do Psicólogo José Milton Gomes

Website profissional desenvolvido com React, TypeScript e Material-UI, com backend em Node.js e PostgreSQL.

## Características

- Design responsivo para todos os dispositivos
- Carrossel de imagens
- Formulário de contato
- SEO otimizado
- Backend com Node.js e PostgreSQL

## Requisitos

- Node.js 16+
- PostgreSQL
- npm ou yarn

## Configuração

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Copie o arquivo .env.example para .env e configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Configure o banco de dados PostgreSQL e execute a migração:
```bash
psql -U seu_usuario -d seu_banco -f server/db/migrations/001_create_contact_messages.sql
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

6. Em outro terminal, inicie o servidor backend:
```bash
npm run server
```

## Estrutura do Projeto

```
milton-psi/
├── src/
│   ├── components/      # Componentes React reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   └── App.tsx         # Componente principal
├── server/
│   ├── db/            # Migrações e configurações do banco de dados
│   └── index.ts       # Servidor Express
└── public/
    └── images/        # Imagens do site
```

## Deploy

1. Construa a aplicação:
```bash
npm run build
```

2. O código compilado estará na pasta `dist/`

## SEO

O site inclui meta tags otimizadas para SEO. Certifique-se de adicionar suas imagens do consultório na pasta `public/images/` e atualizar os caminhos no componente Home.
