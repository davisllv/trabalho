
const buttonNao = document.querySelector("#nao");
const buttonSim = document.querySelector("#sim");
const body = document.querySelector("body");

const modalContainer = document.querySelector(".modal__container");
const textoCasamento = document.querySelector("#texto__casamento");

let dataAtual = new Date();
const novaData = new Date(dataAtual.setDate(dataAtual.getDate() + 30))

const dia = novaData.getDate();
const mes = novaData.getMonth();
const ano = novaData.getFullYear();
const dataFormatada = `${dia}/${mes + 1}/${ano}`

buttonNao.addEventListener('mouseover', () => {
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

document.addEventListener('keydown', (event) => {
  console.log('event', event)
  if(event.key === 'Tab') event.preventDefault()
})
