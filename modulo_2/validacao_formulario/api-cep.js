export async function buscarCEP(cep) {
  const num = cep.replace(/\D/g, "");
  if (num.length !== 8) return null;

  try {
    const resp = await fetch(`https://viacep.com.br/ws/${num}/json/`);
    const data = await resp.json();
    if (data.erro) return null;
    return data;
  } catch {
    return null;
  }
}
