// Timer fields
const minutesElement = document.querySelector('.minutes')
const secondsElement = document.querySelector('.seconds')

// Buttons
const startButton = document.querySelector('.start')
const stopButton = document.querySelector('.stop')
const waitButton = document.querySelector('.wait')
const resetButton = document.querySelector('.reset')

//Listeners
startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

waitButton.addEventListener('click', () => {
    clearInterval(interval)
    setTimeout(function() {
              document.querySelector('.waitButton').click();
            }, 500);
})

stopButton.addEventListener('click', () =>  {
    clearInterval(interval)
    clearFields()
})

resetButton.addEventListener('click', () => {
    clearInterval(interval)
    clearFields()
    interval = setInterval(startTimer, 10)
})

// Variables
let minutes = 00,
    seconds = 00,
    interval

function startTimer() {
    seconds++
    if (seconds < 9) {
        secondsElement.innerText = "0" + seconds
    }
    if (seconds > 9) {
        secondsElement.innerText = seconds
    }
    if (seconds > 59) {
        minutes++
        minutesElement.innerText = "0" + minutes
        seconds = 0
        secondsElement.innerText = "0" + seconds
    }
} 

function clearFields() {
    minutes = 00
    seconds = 00
    minutesElement.textContent = "00"
    secondsElement.textContent = "00"
}

// window.onload = function() {
//     setTimeout(function() {
//       document.querySelector('.wait').click();
//     }, 500);
// };
