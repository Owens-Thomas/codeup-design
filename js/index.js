const hamburgerMenu = document.querySelector(".hamburger");
const overlay = document.getElementById("menu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("opened");
  overlay.classList.toggle("overlay");
});
