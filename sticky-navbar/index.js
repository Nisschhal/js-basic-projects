const navEl = document.querySelector('.navbar');
const contentEl = document.querySelector('.content-section');

// CHECK FOR THE WINDOW SCROLL and IF THE SCROLL IS GREATER THAN 0 THEN TOGGLW 'window-scroll' into classlist
window.addEventListener('scroll', () => {
    navEl.classList.toggle('window-scroll', window.scrollY > 0);
})

// check for the e
window.addEventListener('scroll', () => {
    // analysis the scroll number of content-container and subtract the navbar and 50 margin of content-container
    if (window.scrollY > contentEl.offsetTop - (navEl.offsetHeight)){
        navEl.classList.add('active');
    } else {
        navEl.classList.remove('active');
    }
})



