const queryString = window.location.search;
/* queryString é uma variavel e  ira receber os parametros */
/* Atributo que guarda tudo o que vier depois do ? da url */
/* location guarda os dados da sua localização, html, host, porta, */
/* window tem todas as funções basicas, objeto principal do js */
const page = new URLSearchParams(queryString).get("page");
console.log(page);
/* Ira printar algo no console, no caso seria o valor de page */
/* URLSearchParams separa todos os parametros */

function fetchPage(page) {
  /*fetchPage nome da função (parametros que quero receber (page))  */
  /* const cria uma constante (content) pode ser qualquer nome */
  const content = $("#mainContent");
  fetch(page)
    /* Função do js (pegar) */
    .then((resp) => resp.text())
    .then((rawPage) => content.html(rawPage)); /* pegar page */
}

switch (page) {
  /* switch é um if, mas seleciona para um valor fixo, que é uma variavel (page) */
  case "hardware": {
    fetchPage("../../pages/hardware.html");
    break;
  }
  case "home": {
    fetchPage("../../pages/home.html");
    break;
  }
  default: {
    fetchPage("../../pages/home.html");
  }
}
