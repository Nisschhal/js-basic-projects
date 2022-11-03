const boxes = document.querySelectorAll('.box');

function scrollBox() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  console.log(triggerBottom);
  boxes.forEach(box => {
    if (box.getBoundingClientRect().top < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

scrollBox();
window.addEventListener('scroll', scrollBox);
