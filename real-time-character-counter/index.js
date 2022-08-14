const textArea = document.getElementById("textarea");
const totalChar = document.getElementById('total-counter');
const remChar = document.getElementById('remaining-counter');

// getting the text value length and setting into the total character element
// 
textArea.addEventListener('keyup', ()=> {
    totalChar.innerText = textArea.value.length;

    remChar.innerText = textArea.getAttribute('maxlength') - textArea.value.length;

})

