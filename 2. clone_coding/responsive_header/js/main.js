const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");
const link = document.querySelector(".navbar_links");


toggleBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
    link.classList.toggle("active");
})
