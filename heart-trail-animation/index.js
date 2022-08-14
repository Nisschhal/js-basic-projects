const bodyEl = document.querySelector('body');


bodyEl.addEventListener('mousemove', ()=> {
    // getting the event/mousemove offset cordinates of x,y
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    // creating the new span element for inserting the heart/icon
    const spanEl = document.createElement('span');
    // setting the position of the position left and top
    spanEl.style.left =`${xPos}px`;
    spanEl.style.top =`${yPos}px`; 
    const size = Math.random()*100; // 0-100 random width and height
    spanEl.style.width = `${size}px`  // setting random width into spanEl
    spanEl.style.height = `${size}px` // setting random height into spanEl
    bodyEl.appendChild(spanEl);

    setTimeout(()=> {
        spanEl.remove();
    }, 2000);
})