const imageContainerEl = document.querySelector('.image-container');
 
const prevEl = document.querySelector('.prev');
const nextEl = document.querySelector('.next');

const imageList = document.querySelectorAll('img');
console.log(imageList.length)

currentImage = 1;
let timeout;

prevEl.addEventListener('click', ()=>{
    currentImage--;
    clearTimeout(timeout);
    updateImage();

})

nextEl.addEventListener('click', ()=>{
    currentImage++;
    clearTimeout(timeout);
    updateImage();
})


const updateImage = () => {
    if (currentImage > imageList.length){
        currentImage = 1;
    } else if(currentImage < 1) {
        currentImage = imageList.length

    }
    imageContainerEl.style.transform = `translateX(-${(currentImage-1)*500}px)`;
    timeout = setTimeout(() => {
        currentImage++;
        updateImage();
    }, 3000);
}

updateImage();
