// getting required hour, minute, and second element from the document to update them in each 1 second interval
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateClock(){
  // getting the new data for each section of clock
  // new respective date for each section for real-time
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let ampm = "AM";

  
  if (hour > 12) {
      hour = hour - 12;
      ampm = "PM";
    }

    // setting two digit integer if the digit is less than 10
    hour = (hour<10) ? `0${hour}`: `${hour}`
    minute = (minute<10) ? `0${minute}`: `${minute}`
    second = (second<10) ? `0${second}`: `${second}`
    

  hourEl.innerHTML = hour;
  minuteEl.innerHTML = minute;
  secondEl.innerHTML = second;
  ampmEl.innerHTML = ampm;
  setInterval(updateClock, 1000);
};

updateClock();
