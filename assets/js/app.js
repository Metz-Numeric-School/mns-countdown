const countdownElement = document.getElementById('countdown');
const hoursElement = countdownElement.querySelector('#hours');
const minutesElement = countdownElement.querySelector('#minutes');
const secondsElement = countdownElement.querySelector('#seconds');

// EVENT DATE
const endDate = new Date('2023-12-13 08:30:00');
let secondsLeft = (endDate.getTime() - new Date().getTime()) / 1000;

function updateCountdown() {
  secondsLeft -= 1;

  const hours = Math.floor((secondsLeft % 86400) / 3600);
  hoursElement.textContent = hours < 10 ? '0' + hours : hours;

  const minutes = Math.floor((secondsLeft % 3600) / 60);
  minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;

  const seconds = Math.floor(secondsLeft % 60);
  secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;


  if (secondsLeft <= 0) {
    const countdownContent = document.querySelector('.countdown-content');
    const countdownContentFinal = document.querySelector('.countdown-content-final');
    countdownContent.classList.add('d-none');
    countdownContentFinal.classList.add('d-flex');
  }
}

setInterval(updateCountdown, 1000);