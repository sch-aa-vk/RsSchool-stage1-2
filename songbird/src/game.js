import "./styles/index.css";
import {birdsData} from "./data.js";

let question;
let img;
let audioControls;
let audio;
let description;
let species;
const score = document.querySelector(".p_score");
let answerCollection;
const levelBtn = document.querySelector(".frame__button");
let navImg;
let navTitle;
let toolbar;
let checkboxCollection;
const time = document.querySelector(".time");
const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");

let l = 0;
let s;

game(l, s);
levelBtn.addEventListener("click", () => {
  removeStyle();
  game(++l);
  toolbar.forEach(element => {
    element.classList.remove("active");
    if(element.dataset.question == l) {
      element.classList.add("active");
    }
  })
})

function game(l) {
  navTitle = document.querySelector(".h2_nav");
  navImg = document.querySelector(".img_nav");
  question = document.querySelector(".h2_description");
  img = document.querySelector(".img_bird");
  audioControls = document.querySelector(".audio_description");
  audio = document.querySelector(".frame__audio");
  description = document.querySelector(".p_description");
  species = document.querySelector(".p_species");
  answerCollection = Array.from(document.querySelectorAll(".frame__form-label"));
  toolbar = Array.from(document.querySelectorAll(".li_toolbar"));
  let n = Math.round(Math.random() * 6);
  audio.setAttribute("src", birdsData[l][n]["audio"]);
  let i = 0;
  answerCollection.forEach(element => {
    element.insertAdjacentText("beforeend", ` ${birdsData[l][i]["name"]}`);
    i++;
    element.addEventListener("click", () => {
      element.setAttribute("checked", "checked");
      checkAnswer(element, n, l);
    })
  })
  
  console.log(birdsData[l][n]["name"]);
}

function removeStyle() {
  answerCollection.forEach(element => {
    element.style.pointerEvents = "all";
    element.removeAttribute("checked", "checked");
    element.innerHTML = `<input type="checkbox" class="frame__form-input">`;
  })
  levelBtn.style.pointerEvents = "none";
  navImg.setAttribute("src", "https://img.icons8.com/color/512/toucan.png");
  navTitle.textContent = `Угадай птицу`;
  img.setAttribute("src", "https://img.icons8.com/color/512/toucan.png");
  question.textContent = `****`;
  species.textContent = `****`;
  description.textContent = `****`;
  audioControls.removeAttribute("src");
  audioControls.style.display = "none";
  levelBtn.style.background = "#a2aeb5";
  btnPlay.style.display = "block";
  btnPause.style.display = "none";
}

function correctAns(index, l) {
  answerCollection.forEach(element => {
    element.style.pointerEvents = "none";
  })
  levelBtn.style.pointerEvents = "all";
  navQuestions(index, l);
  levelBtn.style.background = "green";
  lastQuestion();
}

function checkAnswer(element, n, l) {
  checkboxCollection = Array.from(document.querySelectorAll(".frame__form-input"));
  let name = element.textContent.trim();
  let index;
  for(let i = 0; i < 6; i++) {
    if(birdsData[l][i]["name"] == name) {
      index = i;
    }
  }
  if(name === birdsData[l][n]["name"]) {
    correctAns(index, l);
    checkboxCollection[index].style.background = "green";
  } else {
    checkboxCollection[index].style.background = "red";
    checkboxCollection[index].style.pointerEvents = "none";
  }

  checkboxCollection[index].style.pointerEvents = "none";
  img.setAttribute("src", birdsData[l][index]["image"]);
  question.textContent = `${birdsData[l][index]["name"]}`;
  species.textContent = `${birdsData[l][index]["species"]}`;
  description.textContent = `${birdsData[l][index]["description"]}`;
  audioControls.style.display = "block";
  audioControls.setAttribute("src", birdsData[l][index]["audio"]);
}

function navQuestions(index, l) {
  navImg.setAttribute("src", birdsData[l][index]["image"]);
  navTitle.textContent = `${birdsData[l][index]["name"]}`;
}

function lastQuestion() {
  if(toolbar[5].classList.contains("active")) {
    window.location.href = "./results.html";
  }
}

btnPlay.addEventListener("click", () => {
  audio.play();

  btnPause.style.display = "block";
  btnPlay.style.display = "none";
})

btnPause.addEventListener("click", () => {
  audio.pause();
  btnPlay.style.display = "block";
  btnPause.style.display = "none";
})
