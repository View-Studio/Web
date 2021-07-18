const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score-point');
const timerDisplay = document.querySelector('.timer-point');
const button = document.querySelector('.start-btn');


wordInput.addEventListener('input', function(){
    console.log(wordInput.value);
})