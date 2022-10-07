const closeEl = document.querySelector(' #close');
const openEl = document.querySelector(' #open');
const containerEl = document.querySelector('.container');

openEl.addEventListener('click', () => {
  containerEl.classList.add('show-nav');
});
closeEl.addEventListener('click', () => {
  containerEl.classList.remove('show-nav');
});
