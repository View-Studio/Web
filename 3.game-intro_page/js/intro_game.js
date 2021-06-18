const triangle = document.querySelectorAll(".triangle");
const firstWrap = document.querySelector(".firstWrap");
const secondWrap = document.querySelector(".secondWrap");
const thirdWrap = document.querySelector(".thirdWrap");

// ====================

window.addEventListener("load", function() {
  triangle[0].style.bottom = "250px";
  triangle[0].style.right = "300px";
})

triangle[0].addEventListener("click", function() {
  firstWrap.style.display = "none";
  secondWrap.style.display = "block";
})

triangle[1].addEventListener("click", function() {
  secondWrap.style.display = "none";
  thirdWrap.style.display = "block";
})
