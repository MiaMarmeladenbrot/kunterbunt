const burgerMenu = document.querySelector(".burger-wrapper");
const offScreenMenu = document.querySelector(".off-screen-menu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("show");
  offScreenMenu.classList.toggle("show");
});
