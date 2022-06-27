const email = 'tryber@teste.com';
const pword = '123456';
const theForm = document.querySelector('#evaluation-form');
const agreementCheck = document.querySelector('#agreement');
const sendButton = document.querySelector('#submit-btn');
const loginButton = document.querySelector('#button-login');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const conteudos = document.querySelectorAll('.lessonItem');
const familia = document.querySelectorAll('[name="family"]');
const notaAvaliacao = document.querySelectorAll('[name="rate"]');
const userEmail = document.querySelector('#email');
const userPassword = document.querySelector('#password');
const nome = document.querySelector('#input-name');
const sobreNome = document.querySelector('#input-lastname');
const formEmail = document.querySelector('#input-email');
const casa = document.querySelector('#house');

loginButton.addEventListener('click', () => (userEmail.value === email
&& userPassword.value === pword ? alert('Olá, Tryber!') : alert('Email ou senha inválidos.')));

textArea.addEventListener('input', () => {
  counter.innerText = `Restam 
${500 - textArea.value.length} caracteres`;
});

function choosenFamily() {
  let familiaEscolhida = '';
  for (let i = 0; i < familia.length; i += 1) {
    if (familia[i].checked) {
      familiaEscolhida = familia[i].value;
    }
  }
  return familiaEscolhida;
}

function checkedLessons() {
  const conteudosChecados = [];
  for (let i = 0; i < conteudos.length; i += 1) {
    if (conteudos[i].checked) {
      conteudosChecados.push(conteudos[i].value);
    }
  }
  const novaString = conteudosChecados.join();
  const newNovaString = novaString.replace(/,/g, ', ');
  return newNovaString;
}

function avaliation() {
  let avaliacao = '';
  for (let i = 0; i < notaAvaliacao.length; i += 1) {
    if (notaAvaliacao[i].checked) {
      avaliacao = notaAvaliacao[i].value;
    }
  }
  return avaliacao;
}

sendButton.addEventListener('click', () => {
  theForm.innerText = `
    Nome: ${nome.value} ${sobreNome.value}
    Email: ${formEmail.value}
    Casa: ${casa.value}
    Família: ${choosenFamily()}
    Matérias: ${checkedLessons()}
    Avaliação: ${avaliation()}
    Observações: ${textArea.value}
    `;
});

/* Função para selecionar o botão login e fazer com que ele selecione a classe de login e mostre/esconda a mesma */
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const login = document.getElementById('login');
  login.classList.toggle('active');
  const active = login.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Login');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Login');
  }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/* Função para fazer o botão ser habilitado após click no checkbox */

function enabledButton() {
  if (agreementCheck.checked === true) {
    sendButton.disabled = sendButton.enabled;
  }
  if (agreementCheck.checked === false) {
    sendButton.disabled = true;
  }
}

agreementCheck.addEventListener('click', enabledButton);
