# DevBoti – Assistente IA

Uma página simples (HTML, CSS e JS) para fazer perguntas a um modelo de IA.
Suporta **Gemini** no front-end (com chave do Google AI Studio) e mostra por que a **OpenAI** não funciona direto no navegador (CORS).

## Recursos
- Campo de pergunta com **contador de caracteres**
- **Histórico** salvo no `localStorage`
- **Cópia** da resposta em um clique
- **Tema claro/escuro**
- Suporte a **Gemini** no front-end (requisição REST)
- Aviso sobre **OpenAI** no front-end (CORS)

## Como rodar localmente
Basta abrir `index.html` no navegador.

> **Atenção**: Não compartilhe **chaves de API reais**. Este projeto pede a chave no navegador e a envia direto à API do Gemini, o que expõe a chave a qualquer pessoa que inspecione a página. Para produção, use um **backend/proxy** ou restrinja a chave por **HTTP referrer** (Google AI Studio).

## Publicação (GitHub Pages)
1. Faça o push deste repositório para o GitHub (veja o passo a passo no README do repositório ou na conversa).
2. Em **Settings ▸ Pages**, escolha **Deploy from a branch**, `main` e **/ (root)**. Salve.
3. Acesse sua página em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Estrutura
```
.
├─ index.html
├─ style.css
├─ script.js
├─ .gitignore
├─ .gitattributes
├─ .nojekyll
└─ LICENSE
```

## Licença
Este projeto está licenciado sob **MIT** (veja `LICENSE`).

---

> Projeto gerado para estudo/demonstração. Personalize como quiser. ✨