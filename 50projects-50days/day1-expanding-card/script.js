const panelEls = document.querySelectorAll('.panel');
console.log(panelEls);
panelEls.forEach(panel =>
  panel.addEventListener('click', () => {
    removeAllActive();
    // after removing active from each panel add to the clicked one.
    panel.classList.toggle('active');
  })
);

// remove active from all the panels where it reside
const removeAllActive = () => {
  panelEls.forEach(panel => panel.classList.remove('active'));
};
