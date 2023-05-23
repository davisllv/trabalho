
const buttonNao = document.querySelector("#nao");
const buttonSim = document.querySelector("#sim");
const body = document.querySelector("body");

const modalContainer = document.querySelector(".modal__container");
const textoCasamento = document.querySelector("#texto__casamento");

let dataAtual = new Date();
const novaData = dataAtual.setDate(dataAtual.getDate() + 30)
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth();
const ano = dataAtual.getFullYear();
const dataFormatada = `${dia}/${mes}/${ano}`

buttonNao.addEventListener('mouseover', (ev) => {
  const alturaAleatoria = Math.floor(Math.random() * ((body.clientHeight - 50) - 1 + 1) + 1);
  const larguraAleatoria = Math.floor(Math.random() * ((body.clientWidth - 60) - 1 + 1) + 1);

  buttonNao.style.position = 'absolute';
  buttonNao.style.top = `${alturaAleatoria}px`;
  buttonNao.style.left = `${larguraAleatoria}px`;

})

buttonSim.addEventListener('click', () => {
  buttonNao.style.display = 'none';
  modalContainer.style.display = 'flex';
  textoCasamento.textContent = `Nosso Casamento Está Marcado para o Dia ${dataFormatada}, esperarei você, vida!`
})