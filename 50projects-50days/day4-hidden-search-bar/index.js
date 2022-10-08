const btnEl = document.querySelector('.btn');
const spanEl = document.querySelector('span');
console.log(spanEl);
const containerEl = document.querySelector('.search');
const inputEl = document.querySelector('.input');

btnEl.addEventListener('click', () => {
  inputEl.focus();
  spanEl.classList.toggle('hide');
  containerEl.classList.toggle('active');
});
