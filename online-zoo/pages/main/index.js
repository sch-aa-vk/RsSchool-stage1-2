// hamburger menu
const body = document.querySelector(".body");
const header = document.querySelector(".header");
const headerWrapper = document.querySelector(".header-wrapper");
const navMenu = document.querySelector(".header-nav");
const headerLogo = document.querySelector(".header-logo");
const hamburgerMenu = document.querySelector(".header-hamburger-menu");

function menu() {
    body.classList.toggle("active");
    header.classList.toggle("active");
    headerWrapper.classList.toggle("active");
    navMenu.classList.toggle("active");
    headerLogo.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
}
hamburgerMenu.addEventListener("click", menu);

const wrapperFeadback = document.querySelectorAll(".wrapper-feedback-out");
const feadback = document.querySelectorAll(".wrapper-feedback");
const cross = document.querySelector(".fourth-section-cross");
const crossSpan = cross.querySelectorAll("span");
const usertext = document.querySelectorAll(".user-feedback");
const fourthSectionFeadback = document.querySelector(".fourth-section-wrapper-feadback");


document.addEventListener("click", e => {
    if(window.innerWidth <= 640) {
        for(let i = 0; i < feadback.length; i++) {
            if(feadback[i] == e.target || wrapperFeadback[i] == e.target || usertext[i] == e.target) {
                feadback[i].classList.toggle("open");
                wrapperFeadback[i].classList.toggle("open");
                body.classList.toggle("open");
                header.classList.toggle("open");
                cross.classList.toggle("open");
            }
            if(cross == e.target || crossSpan[0] == e.target || crossSpan[1] == e.target) {
                feadback[i].classList.remove("open");
                wrapperFeadback[i].classList.remove("open");
                body.classList.remove("open");
                header.classList.remove("open");
                cross.classList.remove("open");
            }
            feadback[i].style.cursor = "pointer";
        }
    }
    if(header == e.target) {
        header.onclick(menu());
    }
})


const CARDS_WRAP = document.querySelectorAll(".second-section-wrapper-2");
const CAROUSEL = document.querySelectorAll(".carousel");
const CARDS = document.querySelectorAll(".wrapper-2-photo-card");
const BTN_LEFT = document.querySelector(".second-section-arrow.left");
const BTN_RIGHT = document.querySelector(".second-section-arrow.rigth");
const ITEM_LEFT = document.querySelectorAll("#item-left");
const ITEM_RIGHT = document.querySelectorAll("#item-right");
const ITEM_ACTIVE_LEFT = document.querySelectorAll("#item-active-left");
const ITEM_ACTIVE_RIGHT = document.querySelectorAll("#item-active-right");
const ITEM_ACTIVE_CENTER = document.querySelectorAll("#item-active-center");

const moveLeft = () => {
    CAROUSEL[0].classList.add("transition-left");
    CAROUSEL[1].classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
    CAROUSEL[0].classList.add("transition-right");
    CAROUSEL[1].classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

for(let i = 0; i < 2; i++) {
    CAROUSEL[i].addEventListener("animationend", (animationEvent) => {
        let changedItem;
        if (animationEvent.animationName === "move-left") {
            CAROUSEL[i].classList.remove("transition-left");
            changedItem = ITEM_LEFT[i];
            ITEM_ACTIVE_RIGHT[i].innerHTML = ITEM_ACTIVE_CENTER[i].innerHTML;
            ITEM_ACTIVE_CENTER[i].innerHTML = ITEM_ACTIVE_LEFT[i].innerHTML;
            ITEM_ACTIVE_LEFT[i].innerHTML = ITEM_LEFT[i].innerHTML;
        } else {
            CAROUSEL[i].classList.remove("transition-right");
            changedItem = ITEM_RIGHT[i];
            ITEM_ACTIVE_LEFT[i].innerHTML = ITEM_ACTIVE_CENTER[i].innerHTML;
            ITEM_ACTIVE_CENTER[i].innerHTML = ITEM_ACTIVE_RIGHT[i].innerHTML;
            ITEM_ACTIVE_RIGHT[i].innerHTML = ITEM_RIGHT[i].innerHTML;
        }
        
        let j = Math.floor(Math.random() * 7);
        changedItem.innerHTML = arr[j];
        
        BTN_LEFT.addEventListener("click", moveLeft);
        BTN_RIGHT.addEventListener("click", moveRight);
    })
}

let arr = ["<div class='block'><img class='photo-card-img' src='../../assets/images/pandas.jpg' alt='baby pandas'></div><h2>giant Pandas</h2><p>Native to Southwest China</p><img class='photo-card-icon' src='../../assets/icons/banana-bamboo_icon.svg' alt='vegetables icon' style='bottom: 11.75px; right: 12px;'>",
"<div class='block'><img class='photo-card-img' src='../../assets/images/eagle.jpg' alt='eagle'></div><h2>Eagles</h2><p>Native to South America</p><img class='photo-card-icon' src='../../assets/icons/meet-fish_icon.svg' alt='meet icon' style='bottom: 13px; right: 7px;'>",
"<div class='block'><img class='photo-card-img' src='../../assets/images/gorilla.jpg' alt='gorilla'></div><h2>Gorillas</h2><p>Native to Congo</p><img class='photo-card-icon' src='../../assets/icons/banana-bamboo_icon.svg' alt='vegetables icon' style='bottom: 11.75px; right: 12px;'>",
"<div class='block'><img class='photo-card-img' src='../../assets/images/koala.jpg' alt='lazy koala'></div><h2>Two-toed Sloth</h2><p>Mesoamerica, South America</p><img class='photo-card-icon' src='../../assets/icons/banana-bamboo_icon.svg' alt='vegetables icon' style='bottom: 11.75px; right: 12px;'>",
"<div class='block'><img class='photo-card-img' src='../../assets/images/cheetah.jpg' alt='cheetah'></div><h2>cheetahs</h2><p>Native to Africa</p><img class='photo-card-icon' src='../../assets/icons/meet-fish_icon.svg' alt='meet icon' style='bottom: 13px; right: 7px;'>",
"<div class='block'><img class='photo-card-img' src='../../assets/images/penguine.jpg' alt='penguine'></div><h2>penguine</h2><p>Native to Antarctica</p><img class='photo-card-icon' src='../../assets/icons/meet-fish_icon.svg' alt='meet icon' style='bottom: 13px; right: 7px;'>",
"<div class='block'><img class='photo-card-img' src='../../assets/images/alligator.jpg' alt='alligator'></div><h2>alligator</h2><p>Native to Southeastern United States</p><img class='photo-card-icon' src='../../assets/icons/meet-fish_icon.svg' alt='meet icon' style='bottom: 13px; right: 7px;'>",
]