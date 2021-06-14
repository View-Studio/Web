function nextPage1() {
  document.querySelector('#one').style.display = 'none';
  document.querySelector('#two').style.display = 'block';
}

function nextPage2() {
  document.querySelector('#two').style.display = 'none';
  document.querySelector('#three').style.display = 'block';
}

function nextPage3() {
  document.querySelector('#three').style.display = 'none';
  document.querySelector('#four').style.display = 'block';
}

function nextPage4() {
  document.querySelector('#four').style.display = 'none';
  document.querySelector('.intro-wrap').style.display = 'none';
  document.querySelector('.select-wrap').style.display = 'block';
}
