export function validaNome(v) {
  return v.trim().length >= 3 ? null : "Nome precisa ter pelo menos 3 letras";
}

export function validaEmail(v) {
  return /\S+@\S+\.\S+/.test(v) ? null : "Email inválido";
}

export function validaSenha(v) {
  return v.length >= 6 ? null : "Senha precisa ter pelo menos 6 caracteres";
}

export function confirmaSenha(senha, confirmar) {
  return senha === confirmar ? null : "As senhas não conferem";
}

export function validaCPF(v) {
  const num = v.replace(/\D/g, "");
  return num.length === 11 ? null : "CPF inválido";
}

export function validaCEP(v) {
  const num = v.replace(/\D/g, "");
  return num.length === 8 ? null : "CEP inválido";
}
