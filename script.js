const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

let secCount = 0;
let minCount = 0;
let hourCount = 0;

function setDate() {
  const currentTime = new Date();
  const second = currentTime.getSeconds();
  const minute = currentTime.getMinutes();
  const hour = currentTime.getHours();
  if (second == 0) {
    secCount = secCount + 1;
  }
  if (minute == 0) {
    minCount = minCount + 1;
  }
  if (hour == 0) {
    hourCount = hourCount + 1;
  }
  const originDegree = 360;
  const secoundDegree = (second / 60) * 360 + 90 + secCount * originDegree;
  const minuteDegree = (minute / 60) * 360 + 90 + minCount * originDegree;
  const hourDegree = (hour / 12) * 360 + 90 + hourCount * originDegree;
  secondHand.style.transform = `rotate(${secoundDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
