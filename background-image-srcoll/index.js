const bgImageEl = document.getElementById('bg-image');



window.addEventListener('scroll', ()=> {
    updateFixedImage();
});

const updateFixedImage = () => {
    bgImageEl.style.opacity = 1 - (window.pageYOffset/900);
    bgImageEl.style.backgroundSize = 180 - window.pageYOffset/10 +'%';
}
const containerEl = document.querySelector('.container');
