'use strict';

const allModalEl = document.querySelectorAll('.show-modal');
const modalEl = document.querySelector('.modal');
const overLayEl = document.querySelector('.overlay');
const closeModalEl = document.querySelector('.close-modal');

// showing the modal by removing hidden class from the modal and overylay
const showModal = () => {
  modalEl.classList.remove('hidden');

  overLayEl.classList.remove('hidden');
};
const hideModal = () => {
  modalEl.classList.add('hidden');
  overLayEl.classList.add('hidden');
};

// create a loop to see if modal have been clicked
allModalEl.forEach(showModalEl => {
  // showing the modal
  showModalEl.addEventListener('click', () => {
    const modalTitle = showModalEl.textContent;
    modalEl.querySelector('.modal-title').textContent = modalTitle;
    showModal();
  });
  // hiding the modal
  closeModalEl.addEventListener('click', hideModal);
});

document.addEventListener('keydown', event => {
  if (event.key == 'Escape') {
    console.log(event.key);
    if (!overLayEl.classList.contains('hidden')) hideModal();
  }
});
