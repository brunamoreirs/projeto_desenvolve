// --------- Pega elementos
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

const chat = document.getElementById('chat');
const askForm = document.getElementById('askForm');
const userInput = document.getElementById('userInput');
const btnPergunta = document.getElementById('btnPergunta');
const charCount = document.getElementById('charCount');
const error = document.getElementById('error');

const apiKeyInput = document.getElementById('apiKey');
const modelSelect = document.getElementById('modelSelect');
const themeCheckbox = document.getElementById('toggleThemeCheckbox');

const spinnerTpl = document.getElementById('spinnerTpl');

// --------- Salva/carrega API Key
const savedKey = localStorage.getItem('apiKey');
if (savedKey) apiKeyInput.value = savedKey;
apiKeyInput.addEventListener('input', () => {
  localStorage.setItem('apiKey', apiKeyInput.value);
});

// --------- Tema (claro/escuro)
function aplicarTema(tema){
  if (tema === 'dark'){ document.body.classList.add('dark-mode'); themeCheckbox.checked = true; }
  else { document.body.classList.remove('dark-mode'); themeCheckbox.checked = false; }
}
aplicarTema(localStorage.getItem('tema') || 'light');
themeCheckbox.addEventListener('change', () => {
  const novo = themeCheckbox.checked ? 'dark' : 'light';
  localStorage.setItem('tema', novo);
  aplicarTema(novo);
});

// --------- Utilitários UI
function addMessage(text, who){
  const div = document.createElement('div');
  div.className = `message ${who}`;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
  return div;
}
function addSpinnerBubble(){
  const wrap = document.createElement('div');
  wrap.className = 'message bot';
  const clone = spinnerTpl.content.cloneNode(true);
  wrap.appendChild(clone);
  chat.appendChild(wrap);
  chat.scrollTop = chat.scrollHeight;
  return wrap;
}

// --------- Histórico
function loadHistory(){
  return JSON.parse(localStorage.getItem('historico') || '[]');
}
function saveHistoryItem(pergunta, resposta){
  const hist = loadHistory();
  hist.push({ pergunta, resposta, ts: Date.now() });
  localStorage.setItem('historico', JSON.stringify(hist));
}
function renderHistory(){
  const hist = loadHistory();
  historyList.innerHTML = '';
  hist.slice().reverse().forEach(item => {
    const li = document.createElement('li');
    li.className = 'history-item';
    li.textContent = item.pergunta;
    li.title = item.resposta;
    li.addEventListener('click', () => {
      // Ao clicar: mostra pergunta + resposta no chat
      addMessage(item.pergunta, 'user');
      addMessage(item.resposta, 'bot');
    });
    historyList.appendChild(li);
  });
}
renderHistory();

clearHistoryBtn?.addEventListener('click', () => {
  localStorage.removeItem('historico');
  renderHistory();
});

// --------- Contador de caracteres
userInput.addEventListener('input', () => {
  charCount.textContent = `${userInput.value.length} caracteres`;
});

// --------- Submit (Enter = envia com Shift pra quebra de linha)
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey){
    e.preventDefault();
    askForm.requestSubmit();
  }
});

// --------- Envio da pergunta
askForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const pergunta = userInput.value.trim();
  const apiKey = apiKeyInput.value.trim();
  const modelo = modelSelect.value;

  error.textContent = '';

  if (!apiKey){
    error.textContent = 'API Key é obrigatória.';
    return;
  }
  if (!pergunta){
    error.textContent = 'Digite uma mensagem.';
    return;
  }

  // Mostra pergunta no chat
  addMessage(pergunta, 'user');
  userInput.value = '';
  charCount.textContent = '0 caracteres';

  // Mostra "digitando..."
  const loader = addSpinnerBubble();

  btnPergunta.disabled = true;

  try{
    const resposta = await fetchIA(pergunta, apiKey, modelo);
    loader.remove();
    addMessage(resposta, 'bot');
    saveHistoryItem(pergunta, resposta);
    renderHistory();
  }catch(err){
    loader.remove();
    addMessage(`Erro: ${err.message}`, 'bot');
  }finally{
    btnPergunta.disabled = false;
  }
});

// --------- Chamada de IA (Gemini no navegador; OpenAI só com backend)
async function fetchGemini(pergunta, apiKey){
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const body = { contents: [{ role: "user", parts: [{ text: pergunta }] }] };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok){
    // tenta extrair mensagem detalhada
    let msg = 'Erro na API Gemini';
    try{ const j = await res.json(); msg = j.error?.message || msg; }catch{}
    throw new Error(msg);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Resposta vazia da API Gemini');
  return text;
}

async function fetchOpenAI(pergunta, apiKey, model){
  // ⚠️ IMPORTANTE: no navegador, isso vai falhar por CORS
  // Use apenas se mover a chamada para um backend.
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: pergunta }],
      temperature: 0.7
    })
  });

  if (!res.ok){
    let msg = 'Erro na API OpenAI (CORS no navegador). Use backend.';
    try{ const j = await res.json(); msg = j.error?.message || msg; }catch{}
    throw new Error(msg);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || '';
}

async function fetchIA(pergunta, apiKey, modelo){
  if (modelo.startsWith('gemini')) return fetchGemini(pergunta, apiKey);
  // OpenAI no navegador vai dar CORS — mantido aqui por compatibilidade
  return fetchOpenAI(pergunta, apiKey, modelo);
}
