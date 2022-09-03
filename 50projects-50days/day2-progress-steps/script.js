const progressEl = document.getElementById('progress');
const prevButtonEl = document.getElementById('prev');
const nextButtonEl = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1; // for button disable look after

nextButtonEl.addEventListener('click', () => {
  currentActive++;

  currentActive > circles.length && (currentActive = circles.length); // checking the current active and setting limit if it excceds
  update();
});

prevButtonEl.addEventListener('click', () => {
  currentActive--;
  currentActive < 1 && (currentActive = 1); // checking the current active and setting limit if it excceds
  update();
});

const update = () => {
  circles.forEach((circle, i) => {
    i < currentActive
      ? circle.classList.add('active')
      : circle.classList.remove('active');
  });

  const activeCricles = document.querySelectorAll('.active');

  // increasing the progress according the active classes length
  progressEl.style.width =
    ((activeCricles.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prevButtonEl.disabled = true;
  } else if (currentActive === circles.length) {
    nextButtonEl.disabled = true;
  } else {
    prevButtonEl.disabled = false;
    nextButtonEl.disabled = false;
  }
};
