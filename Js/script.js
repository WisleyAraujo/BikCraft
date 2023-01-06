//Ativar links do menu
const links = document.querySelectorAll(".header-menu a");
function ativarLink(e) {
  const url = location.href;
  const href = e.href;
  if (url.includes(href)) {
    e.classList.add("ativo");
  }
}
links.forEach(ativarLink);

//Ativar itens do Orçamento
const parametros = new URLSearchParams(location.search);
function ativarProduto(e) {
  const elemento = document.getElementById(e);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

// Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}
function eventosPerguntas(e) {
  e.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

//Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(e) {
  e.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// animaçao
if (window.SimpleAnime) {
  new SimpleAnime();
}
