const btnEl = document.querySelector('.btn');
const containerEl = document.querySelector('.container');
console.log(containerEl)
const popupContainerEl = document.querySelector('.popup-container');

const closeIconEl = document.querySelector('.close-icon');


// making the popup container show by removing site active site;
btnEl.addEventListener('click', ()=>{
    containerEl.classList.add('active');
    popupContainerEl.classList.remove('active');
})

// making site active when close button is clicked
closeIconEl.addEventListener('click', ()=> {
    containerEl.classList.remove('active');
    popupContainerEl.classList.add('active');
})



