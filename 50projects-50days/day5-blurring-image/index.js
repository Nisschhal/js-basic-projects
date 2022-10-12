const bgEl = document.querySelector('.bg');
const loadTxtEl = document.querySelector('.loading-txt');

let load = 0;
console.log(loadTxtEl);

// map a range of number, load here, to required number, opacity here

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const blurringOut = () => {
  load++;
  if (load > 99) clearInterval(interval);
  loadTxtEl.innerHTML = `${load}%`;
  // make text disappear
  loadTxtEl.style.opacity = scale(load, 0, 100, 1, 0); // look after the load variable to see it between 0 to 100 and at the same time range it to produce output from 1 to 0 at the same pace of 0 to 100
  // make the picture/bg appear
  bgEl.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // look after the load to range between 0 to 100 and accordingly range 30 to 0
};

let interval = setInterval(blurringOut, 30);
