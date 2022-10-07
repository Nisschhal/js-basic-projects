'use strict';

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

///////////////// SELECTING ELEMENT IN THE DOM TREE ///////////
/*
console.log(document); // get the pointer/Id to the document
console.log(document.documentElement); // select the entire HTML document
const header = document.querySelector('.header'); // selects the element with header className
console.log(document.querySelectorAll('.section')); // selects all the section in the DOM tree.
console.log(document.getElementById('section--1')); // selects the element with #section-1 id name
console.log(document.getElementsByTagName('button')); // selects all the button elements
console.log(document.getElementsByClassName('section')); // selects all the elements with seciton className

///////////////////// CREATING AND INSERTING ELEMENT ///////////

const divEl = document.createElement('div'); // creates the div element in dom but not visible yet.
divEl.classList.add('cookie-message'); // as element is in DOM, it has access to all its HTMLElement and parent methods and properties such as classList.add().
divEl.textContent =
  'We use cookies to improve funcationality and analytics<button class="btn btn--close-cookie">Got it!</button>'; // only helps to add text in the element

divEl.innerHTML =
  'We use cookies to improve funcationality and analytics<button class="btn btn--close-cookie">Got it!</button>'; // helps to add more inner HTML element along with text

header.prepend(divEl); // adds the element as first child of header
header.append(divEl); // adds the element as last child of header
header.before(divEl); // adds the element before the header as sibling
header.after(divEl); // adds the element after the header as sibling

/////////////////// STYLES, ATTRIBUTES, AND CLASS /////////////////

divEl.style.backgroundColor = '#000';
divEl.style.margin = '0 auto';
divEl.style.width = '90%';

console.log(divEl.style.width); // since we provided width above it give 90%
console.log(divEl.style.color); // only gives the inline style, as color is externally style
console.log(getComputedStyle(divEl).height); // to get the externally styled css use getComputedStyle(element)
const height = Number.parseFloat(getComputedStyle(divEl).height, 10); // convert '49px' to 49.0 with base 10
console.log(height);
divEl.style.height = height + 20 + 'px'; // add inline style of 49 + 20 = 69+'px' = 69px as height

// setting the style property in the root level element, document
document.documentElement.style.setProperty('--color-primary', 'orange');

/// ATTRIBUTES //////
console.log('....attributes....');
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non-Standard
*/

/*
const btnEl = document.querySelector('.btn--scroll-to');
const sectionEl = document.getElementById('section--1');

btnEl.addEventListener('click', () => {
  sectionEl.scrollIntoView({ behavior: 'smooth' });
});

const alertH1 = () => {
  alert('ok');
  btnEl.removeEventListener('click', alertH1);
};

btnEl.addEventListener('click', alertH1);

*/

/*
//////////// BUBBLIND, CAPTURING AND PROPAGATION /////////////////////
const ranInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () =>
  `rgb(${ranInt(0, 255)},${ranInt(0, 255)},${ranInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget, this.style);
  e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget, this.style);
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target, e.currentTarget, this.style);
  },
  true
);
*/
/*
///////////////// Page Navigation //////////////////////
document.querySelectorAll('.nav__link').forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
*/

// ///////////////////// DOM TRAVERSING ///////////////////////////
// const h1 = document.querySelector('h1');
// // Going downward: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes); // returns every node types, not that much used
// console.log(h1.children); // retuns live HTMLCollections
// console.log(h1.firstChild); // retuns the first text/item from h1 el
// console.log(h1.firstElementChild); // retuns the first element of h1 children, not the first text
// console.log(h1.lastChild); // retuns the last text/item from h1 el
// console.log(h1.lastElementChild); // retuns the last element of h1 children, not the first text

// // Going upward: parents
// console.log(h1.parentNode); // returns parent element/Node
// console.log(h1.parentElement); // returns parent element/Node
// h1.closest('.header').style.background = 'var(--gradient-secondary)'; // get the closest parent .header element, eventhough there are alot of them
// document.querySelector('#section--2').closest('.section').style.background =
//   'var(--gradient-secondary)'; // get the closest parent .section element, even though there are alot of them

// // Going Sideways: siblings
// console.log(h1.previousElementSibling); // returns all the up/previous sibling element
// console.log(h1.nextElementSibling); // returns the next sibling element

// console.log(h1.previousSibling); // returns the previous sibling
// console.log(h1.nextSibling); // returns the next sibling

// const children = h1.parentElement.children; // get all the sibling by traversing to parent and their children, // matching strategy to ignore the current child

// [...children].forEach(e => {
//   if (e !== h1) {
//     e.style.transform = 'scale(0.5)';
//     console.log(e);
//   }
// });

///////////// BUILDING A TABBED COMPONENT /////////////////////
const tabs = document.querySelector('.operations__tab-container');
const tabButtons = document.querySelectorAll('.operations__tab');
const tabContents = document.querySelectorAll('.operations__content');

tabs.addEventListener('click', e => {
  // e.preventDefault();
  // select the closest button tab from event triggered
  const clickedButton = e.target.closest('.operations__tab');
  console.log(clickedButton);
  // if the clicked event is no button then return//do nothing
  if (!clickedButton) return;
  // if its button then inactive all other tab and active the triggered button
  // remove active tab buttons
  tabButtons.forEach(e => e.classList.remove('operations__tab--active'));
  console.log(clickedButton.dataset.tab);
  // get the exact button using dataset.tab to get tab no. attribute
  clickedButton.classList.add('operations__tab--active');
  // remove the active operations__content and add clicked button's operations__content
  tabContents.forEach(e => e.classList.remove('operations__content--active'));
  // get the exact content using dataset.tab to get tab no. attribute
  document
    .querySelector(`.operations__content--${clickedButton.dataset.tab}`)
    .classList.add('operations__content--active');
});
