# 🌸 Blog Pessoal - Programa Desenvolve - Grupo Boticário & Koru

Um blog pessoal desenvolvido como parte do **Programa Desenvolve** (Grupo Boticário & Koru), utilizando **Next.js 15**, **TypeScript** e **Tailwind CSS**.  
O projeto demonstra na prática os conceitos de **App Router**, **Server Components**, **Client Components** e tema **Claro/Escuro** com `next-themes`.

---

## 🚀 Funcionalidades

- **Página inicial** - Lista de posts do blog  
- **Posts individuais** - Roteamento dinâmico com `[slug]`  
- **Página sobre** - Informações pessoais com foto e contato  
- **Tema Claro/Escuro** - Alternância via `ThemeToggle`  
- **Botão de curtir** - Interatividade com Client Components  
- **Design responsivo** - Layout mobile-first com Tailwind CSS  

---

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** (App Router)  
- **TypeScript**  
- **Tailwind CSS**  
- **React**  
- **next-themes** (controle de tema)  

---

## 📁 Estrutura do Projeto

```
meu-blog/
├── app/
│ ├── about/
│ │ └── page.tsx # Página "Sobre"
│ ├── posts/
│ │ ├── [slug]/
│ │ │ └── page.tsx # Posts dinâmicos
│ ├── layout.tsx # Layout global
│ ├── page.tsx # Página inicial
│ ├── providers.tsx # Provider do tema (next-themes)
│ └── globals.css # Estilos globais
│
├── components/
│ ├── LikeButton.tsx # Botão de curtir (Client Component)
│ ├── PostCard.tsx # Card dos posts
│ └── ThemeToggle.tsx # Botão para tema claro/escuro
│
├── public/
│ └── favicon.ico # Ícone do site
│
├── package.json # Dependências e scripts
└── README.md # Documentação do projeto
```
---

## 🏃‍♀️ Como Executar

### Pré-requisitos
- Node.js 18+  
- npm ou yarn  

### Passos

```bash
# 1. Clonar ou extrair o projeto
cd meu-blog

# 2. Instalar dependências
npm install

# 3. Rodar em ambiente de desenvolvimento
npm run dev

# 4. Acessar no navegador
http://localhost:3000
🎯 Conceitos Demonstrados
App Router → Roteamento baseado em pastas

Server Components → Renderização no servidor

Client Components → Interatividade no cliente (useState, useEffect)

Tema Claro/Escuro → Usando next-themes

Roteamento Dinâmico → Páginas em /posts/[slug]

Responsividade → Mobile-first com Tailwind

🎨 Design
Mobile-first e responsivo

Paleta de cores adaptada ao tema Claro/Escuro

Transições suaves e hover effects

Tipografia otimizada para leitura

🚀 Deploy
Este projeto pode ser deployado facilmente no Vercel (recomendado), mas também funciona no Netlify ou até GitHub Pages com export estático.

Build de produção:

bash
Copiar código
npm run build
npm start

✨ Desenvolvido com dedicação por Bruna Santos Moreira ✨