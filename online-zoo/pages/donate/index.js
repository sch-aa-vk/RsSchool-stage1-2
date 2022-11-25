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

const inputRadio = document.querySelectorAll(".moneybar-input");
const inputRadioText = document.querySelectorAll(".moneybar-input::before");
const inputNumber = document.querySelector(".input-number");

document.addEventListener("click", e => {
    for(let i = 0; i < inputRadio.length; i++) {
        if(inputRadio[0] == e.target || inputRadioText[0] == e.target) inputNumber.value = "5000";
        if(inputRadio[1] == e.target || inputRadioText[1] == e.target) inputNumber.value = "2000";
        if(inputRadio[2] == e.target || inputRadioText[2] == e.target) inputNumber.value = "1000";
        if(inputRadio[3] == e.target || inputRadioText[3] == e.target) inputNumber.value = "500";
        if(inputRadio[4] == e.target || inputRadioText[4] == e.target) inputNumber.value = "250";
        if(inputRadio[5] == e.target || inputRadioText[5] == e.target) inputNumber.value = "100";
        if(inputRadio[6] == e.target || inputRadioText[6] == e.target) inputNumber.value = "50";
        if(inputRadio[7] == e.target || inputRadioText[7] == e.target) inputNumber.value = "25";
    }
    if(header == e.target) {
        header.onclick(menu());
    }
})

function limit(element) {
    const max_chars = 4;
    if(element.value.length > max_chars) element.value = element.value.substr(0, max_chars);
    if(element.value == "5000") inputRadio[0].checked = true;
    else if(element.value == "2000") inputRadio[1].checked = true;
    else if(element.value == "1000") inputRadio[2].checked = true;
    else if(element.value == "500") inputRadio[3].checked = true;
    else if(element.value == "250") inputRadio[4].checked = true;
    else if(element.value == "100") inputRadio[5].checked = true;
    else if(element.value == "50") inputRadio[6].checked = true;
    else if(element.value == "25") inputRadio[7].checked = true;
    else {
        for(let j = 0; j < 8; j++) {
            inputRadio[j].checked = false;
        }
    }
}

limit(inputNumber);