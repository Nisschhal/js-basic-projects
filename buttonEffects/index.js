const btnEl = document.querySelector(".btn");


btnEl.addEventListener('mouseover', (event)=> {
    const x = event.pageX - btnEl.offsetLeft; 
    const y = event.pageY - btnEl.offsetTop; 

    btnEl.style.setProperty('--xPos', x+'px'); // setting the css properties style in button Element; 
    btnEl.style.setProperty('--yPos', y+'px');
    console.log(x,y)

}); // give the poisition of button mouse hover location
// position start from the top-left of the document 