const GAME_TIME = 9;
const GAME_SCORE = 0;

let score = GAME_SCORE;
let time = GAME_TIME;
let isPlaying = false;
let words = [];
let intervalId;
let cheakInterval;
let randomIndex;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score-point');
const timerDisplay = document.querySelector('.timer-point');
const button = document.querySelector('.start-btn');


init();


function init() {
  buttonChange('게임 로딩...')
  getWords();
  wordInput.addEventListener('input', wordMatch);
  button.addEventListener('click', run);
};

// 단어 불러오기
function getWords() {
  axios.get('https://random-word-api.herokuapp.com/word?number=100')
    .then(function (response) {
      // handle success
      response.data.forEach(word => {
        if (word.length < 10) {
          words.push(word);
        }
      })
      buttonChange('게임시작');
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
};

// 버튼 색 변경
function buttonChange(text) {
  button.innerText = text;
  text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');
};

// 게임 실행
function run() {
  if (isPlaying === true) {  return ; }
  isPlaying = true;
  time = GAME_TIME;
  score = GAME_SCORE;
  scoreDisplay.innerText = score;
  wordInput.focus();
  intervalId = setInterval(countDown, 1000);
  cheakInterval = setInterval(cheakStatus, 50);
  buttonChange('게임중...')
};

// 카운트 다운
function countDown() {
  time > 0 ? time-- : isPlaying = false;
  if (isPlaying !== true) {
    clearInterval(intervalId);
  };
  timerDisplay.innerText = time;
};

// 종료 여부 확인
function cheakStatus() {
  if (isPlaying !== true && time === 0) {
    buttonChange('게임시작');
    wordInput.blur();
    wordInput.value = "";
    clearInterval(cheakInterval);
  };
};

// 단어 일치 체크
function wordMatch() {
    if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
      wordInput.value = "";
      if (isPlaying !== true) {
        return;
      };
      time = GAME_TIME;
      randomIndex = Math.floor(Math.random() * words.length);
      wordDisplay.innerText = words[randomIndex];
      score++;
      scoreDisplay.innerText = score;
    };
};
