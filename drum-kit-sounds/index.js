const kits =['crash', 'kick', 'snare', 'tom'];

const containerEl = document.querySelector('.container');

kits.forEach(kit=> {
    const btnEl = document.createElement('button');
    btnEl.classList.add('btn');
    btnEl.style.backgroundImage 
    = `url(images/${kit}.png)`;
    btnEl.innerText = kit;

    containerEl.appendChild(btnEl)


    const audioEl = document.createElement('audio');
    audioEl.src = `sounds/${kit}.mp3`

    containerEl.appendChild(audioEl);

    btnEl.addEventListener('click', ()=> {
        audioEl.play()
    });

    window.addEventListener('keydown', (event) => {
        // console.log(event.key)
        if (event.key === kit.slice(0,1)){
            kit.slice(0,1);

            audioEl.play();
            btnEl.style.transform = 'scale(.9)';
            setTimeout(()=> {
                btnEl.style.transform = 'scale(1)';
            })
        }

    })
})


