var containerEl = document.querySelector('.container');
console.log(containerEl);


// function to create random colors of #HEX decimal
const randomColor = () => {
    // chars to choose
    const chars = "0123456789abcdef";
    // hex color code length limit
    const colorCodeLength = 6;
    // no color at first
    let color = '';
    // looping through all the chars 6 times to create 6 random chars by generating 6 random number 
    for (let i = 0; i< colorCodeLength; i++){
        // creating random number 0-15;
        let randomNum = Math.floor(Math.random() * chars.length);
        // accessing the random color character using the randomNumber
        color+= chars[randomNum];
    }
    return color;
}

// creating 30 new color-container
for (let i =0 ;i < 30; i++){
    const colorContainerEl = document.createElement('div'); //creating the new element of div
    colorContainerEl.classList.add('color-container'); // adding the 'color-container' class into the created element
  
    containerEl.appendChild(colorContainerEl); // adding the new div element with its 'color-container' class into the container parent
} // creating 30 newColorContainers 


// getting all the color-container
const containerEls = document.querySelectorAll('.color-container');

// function to generate colors
const generateColors = () => {
    // creating new color for each color-container;
    containerEls.forEach(colorContainer => {
        const newColor = "#"+ randomColor();
        colorContainer.style.background = newColor
        colorContainer.innerText = newColor;
    })
}

// adding the color and color name in the color -container by calling function
generateColors();





console.log(randomColor())