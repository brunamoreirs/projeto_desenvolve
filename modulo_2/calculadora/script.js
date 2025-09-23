// script.js (carregado com defer)
const displayEl = document.getElementById('display');
const previousEl = document.getElementById('previous');
const keys = document.querySelectorAll('.key');

let current = '';
let previous = '';
let operation = null;

function updateUI() {
  displayEl.value = current === '' ? '0' : current;
  previousEl.innerText = previous ? `${previous} ${operation ?? ''}` : '';
}

function appendDigit(d) {
  if (d === '.' && current.includes('.')) return;
  // evitar "00" no início a não ser que o usuário digite "0."
  if (current === '0' && d !== '.') current = d;
  else current += d;
  updateUI();
}

function chooseOperator(op) {
  if (current === '' && previous === '') return;
  if (current === '' && previous !== '') {
    operation = op; // trocar operação
    updateUI();
    return;
  }
  if (previous !== '') {
    compute();
  }
  operation = op;
  previous = current;
  current = '';
  updateUI();
}

function compute() {
  const prevN = parseFloat(previous);
  const currN = parseFloat(current);
  if (isNaN(prevN) || isNaN(currN)) return;
  let res;
  switch (operation) {
    case '+': res = prevN + currN; break;
    case '-': res = prevN - currN; break;
    case '*': res = prevN * currN; break;
    case '/':
      if (currN === 0) { current = 'Erro'; previous = ''; operation = null; updateUI(); return; }
      res = prevN / currN; break;
    default: return;
  }
  // evitar problemas de ponto flutuante
  res = parseFloat(res.toFixed(10));
  current = String(res);
  previous = '';
  operation = null;
  updateUI();
}

function clearAll() {
  current = '';
  previous = '';
  operation = null;
  updateUI();
}

function deleteLast() {
  if (current === 'Erro') { current = ''; updateUI(); return; }
  current = current.slice(0, -1);
  updateUI();
}

/* Botões */
keys.forEach(k => {
  k.addEventListener('click', () => {
    const action = k.dataset.action;
    const val = k.dataset.value;
    if (action === 'digit') appendDigit(val);
    else if (action === 'operator') chooseOperator(val);
    else if (action === 'equals') compute();
    else if (action === 'clear') clearAll();
    else if (action === 'delete') deleteLast();
  });
});

/* Teclado */
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if ((key >= '0' && key <= '9') || key === '.') {
    appendDigit(key);
    return;
  }
  if (key === 'Enter' || key === '=') { e.preventDefault(); compute(); return; }
  if (key === 'Backspace') { deleteLast(); return; }
  if (key === 'Escape') { clearAll(); return; }
  if (['+','-','*','/'].includes(key)) { chooseOperator(key); return; }
});
