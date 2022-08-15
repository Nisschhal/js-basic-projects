const imageContainerEl = document.querySelector('.image-container');


const btnEl = document.querySelector('.btn');


btnEl.addEventListener('click', ()=> {
    imageNum = 10;
    addNewImage();
})

const addNewImage = () => {
    for (let i =0; i< imageNum; i++){
        const newImage = document.createElement('img')
        newImage.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`;
        imageContainerEl.appendChild(newImage);
        
    }
}