
// getting required elements
const btnEl = document.querySelector('.btn');

const closeIconEl = document.querySelector('.close-icon');

const trailerEl = document.querySelector('.trailer-container');


const videoEl = document.querySelector('video');

// when button is clicked remove the active class which indicates that site is not active for other things rather for video only
btnEl.addEventListener('click', () => {
    trailerEl.classList.remove('active');
    
})


/// when close-icon is clicked add the active class which hides the visibility of video-trailer and state site is active for other things
closeIconEl.addEventListener('click', () => {
    trailerEl.classList.add('active');
    // video pause when video is close and then set current time to 0 for the next time 'watch video'
    videoEl.pause();
    // setting current time 0;
    videoEl.currentTime= 0;
})