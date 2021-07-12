const triangle = document.querySelectorAll(".triangle");
const firstWrap = document.querySelector(".firstWrap");
const secondWrap = document.querySelector(".secondWrap");
const thirdWrap = document.querySelector(".thirdWrap");
const forthWrap = document.querySelector(".forthWrap");

// ====================

window.addEventListener("load", function() {
  triangle[0].style.bottom = "250px";
  triangle[0].style.right = "300px";
})

for (let i = 0; i < triangle.length; i++) {
  if (i == 2n & i != 0) {
    triangle[i].style.bottom = "40px";
    triangle[i].style.left = "60px";
  } else {
    triangle[i].style.bottom = "40px";
    triangle[i].style.right = "60px";
  }
}

triangle[0].addEventListener("click", function() {
  firstWrap.style.display = "none";
  secondWrap.style.display = "block";
})

triangle[1].addEventListener("click", function() {
  secondWrap.style.display = "none";
  thirdWrap.style.display = "block";
})

triangle[2].addEventListener("click", function() {
  thirdWrap.style.display = "none";
  forthWrap.style.display = "block";
})
