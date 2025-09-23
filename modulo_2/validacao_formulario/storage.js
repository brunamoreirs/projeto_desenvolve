const KEY = "formCadastro";

export function salvarDados(dados) {
  localStorage.setItem(KEY, JSON.stringify(dados));
}

export function carregarDados() {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
}

export function limparDados() {
  localStorage.removeItem(KEY);
}
