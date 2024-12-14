const form = document.querySelector('.form');
const submit = document.querySelector('.form__submit');
const email = document.querySelector('.form__input');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const isEmailValid = emailRegex.test(email.value);

  if (!isEmailValid) form.classList.add('form--error');
  else form.classList.remove('form--error');
});
