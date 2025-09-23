import { validaNome, validaEmail, validaSenha, confirmaSenha, validaCPF, validaCEP } from "./validators.js";
import { buscarCEP } from "./api-cep.js";
import { salvarDados, carregarDados, limparDados } from "./storage.js";

const form = document.getElementById("form-cadastro");
const msgSucesso = document.getElementById("mensagem-sucesso");
const btnLimpar = document.getElementById("limpar");

function mostraErro(campo, msg) {
  const el = document.getElementById(`erro-${campo}`);
  if (msg) {
    el.textContent = msg;
    return true;
  } else {
    el.textContent = "";
    return false;
  }
}

function pegaDados() {
  return {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value,
    confirmar: document.getElementById("confirmar").value,
    cpf: document.getElementById("cpf").value,
    cep: document.getElementById("cep").value,
    logradouro: document.getElementById("logradouro").value,
    bairro: document.getElementById("bairro").value,
    cidade: document.getElementById("cidade").value,
    uf: document.getElementById("uf").value,
    termos: document.getElementById("termos").checked
  };
}

window.addEventListener("DOMContentLoaded", () => {
  const dados = carregarDados();
  if (dados) {
    Object.keys(dados).forEach(k => {
      const input = document.getElementById(k);
      if (input) {
        if (input.type === "checkbox") input.checked = dados[k];
        else input.value = dados[k];
      }
    });
  }
});

form.addEventListener("input", () => {
  salvarDados(pegaDados());
});

document.getElementById("cep").addEventListener("blur", async () => {
  const cep = document.getElementById("cep").value;
  const erro = validaCEP(cep);
  mostraErro("cep", erro);
  if (!erro) {
    const data = await buscarCEP(cep);
    if (data) {
      document.getElementById("logradouro").value = data.logradouro || "";
      document.getElementById("bairro").value = data.bairro || "";
      document.getElementById("cidade").value = data.localidade || "";
      document.getElementById("uf").value = data.uf || "";
    }
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dados = pegaDados();
  let temErro = false;

  if (mostraErro("nome", validaNome(dados.nome))) temErro = true;
  if (mostraErro("email", validaEmail(dados.email))) temErro = true;
  if (mostraErro("senha", validaSenha(dados.senha))) temErro = true;
  if (mostraErro("confirmar", confirmaSenha(dados.senha, dados.confirmar))) temErro = true;
  if (mostraErro("cpf", validaCPF(dados.cpf))) temErro = true;
  if (mostraErro("cep", validaCEP(dados.cep))) temErro = true;

  if (!dados.termos) {
    mostraErro("termos", "Você deve aceitar os termos");
    temErro = true;
  } else {
    mostraErro("termos", null);
  }

  if (!temErro) {
    limparDados();
    form.reset();
    msgSucesso.hidden = false;
  } else {
    msgSucesso.hidden = true;
  }
});

btnLimpar.addEventListener("click", () => {
  form.reset();
  limparDados();
  msgSucesso.hidden = true;
  document.querySelectorAll(".erro").forEach(el => el.textContent = "");
});
