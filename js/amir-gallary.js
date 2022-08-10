const burger = document.querySelector(".header__burger");
const Body = document.querySelector('body');
const menu = document.querySelector(".header__menu");
let lockPadding = document.querySelectorAll(".lock-padding");



burger.addEventListener('click', function () {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    Body.classList.toggle('lock');
});





let footerButton = document.querySelector(".footer__list-button");
let footerList = document.querySelector(".footer__list");

footerButton.addEventListener("click", function () {
    footerList.classList.toggle("active-1");
    footerButton.classList.toggle("active-1");
})























let closepopup1 = document.querySelector(".popup__close1");
let popup1 = document.querySelector(".popup1");
let imagepopup1 = document.querySelector(".main-third__tree");


imagepopup1.addEventListener('click', function () {
    popup1.classList.add("open");
   
    
})
closepopup1.addEventListener('click', function () {
    popupClose();
    body.classList.toggle('lock');
    

});
popup1.addEventListener("click", function (e) {
    if (!e.target.closest(".popup__row1")) {
        popupClose(e.target.closest(".popup1"));
    }
})

function popupClose() {
    popup1.classList.remove("open");
}




/************************************************* */

let closepopup2 = document.querySelector(".popup__close2");
let popup2 = document.querySelector(".popup2");
let mainBox2 = document.querySelector(".main-third__image");


mainBox2.addEventListener('click', function () {
    popup2.classList.add("open");
   
    
})
closepopup2.addEventListener('click', function () {
    popupClose2();
    body.classList.toggle('lock');
    

});
popup2.addEventListener("click", function (e) {
    if (!e.target.closest(".popup__row2")) {
        popupClose2(e.target.closest(".popup2"));
    }
})

function popupClose2() {
    popup2.classList.remove("open");
}
















let mainBox = document.querySelector(".main-third__tree");
let mainBoxafter = document.querySelector(".main-third__tree-after");


mainBox.addEventListener("mouseover", function (event) {
    mainBoxafter.style.cssText = `;
    position:absolute;
    transition:all 0.5s;
    transform: translate(0,20%);
    z-index: 0;
    opacity: 0;
    `;
});


mainBox.addEventListener("mouseout", function (event) {
    mainBoxafter.style.cssText = ` 
    `;
});


let mainBoxafter2 = document.querySelector(".main-third__image-after");


mainBox2.addEventListener("mouseover", function (event) {
    mainBoxafter2.style.cssText = `;
    position:absolute;
    transition:all 0.5s;
    transform: translate(0,20%);
    z-index: 0;
    opacity: 0;
    `;
});


mainBox2.addEventListener("mouseout", function (event) {
    mainBoxafter2.style.cssText = ` 
    `;
});












document.addEventListener('DOMContentLoaded', () => {
    const scrollItems = document.querySelectorAll('.scroll-items');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        console.log(windowCenter)
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 32);
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation-class');
            } else {
                if (!el.classList.contains("scroll-hide")) {
                    el.classList.remove('animation-class');
                };

            }
        });
    };




    scrollAnimation();
    window.addEventListener('scroll', () => {

        scrollAnimation();
    });
});