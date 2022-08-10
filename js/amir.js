let button = document.querySelector(".main-third__button");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close");
button.addEventListener("click", function () {
    popup.classList.toggle("active");
    body.classList.add('lock');
});
popupClose.addEventListener("click", function () {
    popup.classList.remove("active");
    body.classList.remove('lock');
})















const burger = document.querySelector(".header__burger");
const body = document.querySelector('body');
const menu = document.querySelector(".header__menu");

burger.addEventListener('click', function () {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('lock');
});





let footerButton = document.querySelector(".footer__list-button");
let footerList = document.querySelector(".footer__list");

footerButton.addEventListener("click", function () {
    footerList.classList.toggle("active-1");
    footerButton.classList.toggle("active-1");
})





























