let newDate = new Date("August 14, 2024 00:00:00 ").getTime();
let setDate = setInterval(function () {
  let currentDate = new Date().getTime();
  let distance = newDate - currentDate;
  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = day;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;

  if (distance < 0) {
    clearInterval(setDate)
    
  }
}, 1000);