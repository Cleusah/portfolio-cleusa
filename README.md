# Cleusa Lopes — Portfólio

Portfólio profissional 

## Estrutura do projeto

```
cleusa-portfolio/
├── public/
│   └── COLOCAR-CV-AQUI.txt      # coloca aqui o CV-Cleusa-Lopes.pdf
├── src/
│   ├── components/              # Navbar, Footer, cartões, modal, etc.
│   ├── data/                    # experiência, projetos, competências, formação, config do site
│   ├── hooks/                   # useReveal (animação ao fazer scroll)
│   ├── sections/                # Hero, Sobre, Experiência, Projetos, Competências, Formação, Contacto
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## 1. Instalar

Precisas de [Node.js](https://nodejs.org) 18+ instalado. Depois, na pasta do projeto:

```bash
npm install
```

## 2. Executar localmente

```bash
npm run dev
```

Abre o link que aparece no terminal (normalmente `http://localhost:5173`).

## 3. Build de produção

```bash
npm run build
```

Isto cria a pasta `dist/` com o site já otimizado. Para pré-visualizar esse build:

```bash
npm run preview
```

## 4. Publicar

### Netlify Drop (mais rápida, sem conta nem Git)
1. Corre `npm run build` para gerar a pasta `dist/`.
2. Abre [app.netlify.com/drop](https://app.netlify.com/drop) e arrasta a pasta `dist/` para lá.
3. Em segundos recebes um link público (ex: `nome-aleatorio.netlify.app`).
4. Cria conta gratuita no Netlify para o link não expirar e poderes personalizar o nome em *Site settings → Change site name*.


## Tecnologias usadas

React, Vite, CSS puro (sem Bootstrap, sem framework de UI), `lucide-react` para ícones, `qrcode.react` para o QR Code.