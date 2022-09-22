const inputEmail = document.querySelector('#input-email-header');
const inputPassword = document.querySelector('#input-password');
const buttonLogin = document.querySelector('.button-login');
const buttonSubmit = document.querySelector('#submit-btn');
const buttonAgreement = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

buttonLogin.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

buttonAgreement.addEventListener('click', () => {
  if (buttonSubmit.disabled === true) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
});

textarea.oninput = function contador() {
  counter.innerHTML = (500 - this.value.length);
};
