import "./styles/index.css";
import {birdsData} from "./data.js";

const question = document.querySelector(".h2_description");
const img = document.querySelector(".img_bird");
const audioControls = document.querySelector(".audio_description");
const audio = document.querySelector(".frame__audio");
const description = document.querySelector(".p_description");
const species = document.querySelector(".p_species");
const score = document.querySelector(".p_score");
const answerCollection = Array.from(document.querySelectorAll(".frame__form-label"));
const levelBtn = document.querySelector(".frame__button");
const navImg = document.querySelector(".img_nav");
const navTitle = document.querySelector(".h2_nav");
const toolbar = Array.from(document.querySelectorAll(".li_toolbar"));

let l = 0;
let s = 5;
let count = 0;

document.addEventListener("load", game(l, s));
levelBtn.addEventListener("click", () => {
  removeStyle();
  game(++l);
  toolbar.forEach(element => {
    element.classList.remove("active");
    if(element.dataset.question == l) {
      element.classList.add("active");
    }
  })
  count = +score.textContent;
  s = 5 + l;
})

function game(l) {
  let n = Math.round(Math.random() * 6);
  audio.setAttribute("src", birdsData[l][n].audio);
  let i = 0;
  answerCollection.forEach(element => {
    element.innerHTML = `<input class="frame__form-input" type="checkbox"> ${birdsData[l][i].name}`;
    i++;
    element.addEventListener("click", () => {
      element.setAttribute("checked", "checked");
      checkAnswer(element, n, l);
    })
  })
  
  console.log(birdsData[l][n].name);
}

function removeStyle() {
  answerCollection.forEach(element => {
    element.style.pointerEvents = "all";
    element.removeAttribute("checked", "checked");
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
  let name = element.textContent.trim();
  let index;
  for(let i = 0; i < 6; i++) {
    if(birdsData[l][i].name == name) {
      index = i;
    }
  }
  if(name === birdsData[l][n].name) {
    correctAns(index, l);
    score.textContent = `${count + s}`;
  } else s -= 0.5;
  
  img.removeAttribute("src", birdsData[l][index].image);
  img.setAttribute("src", birdsData[l][index].image);
  question.textContent = `${birdsData[l][index].name}`;
  species.textContent = `${birdsData[l][index].species}`;
  description.textContent = `${birdsData[l][index].description}`;
  audioControls.style.display = "block";
  audioControls.removeAttribute("src", birdsData[l][index].audio);
  audioControls.setAttribute("src", birdsData[l][index].audio);
}

function navQuestions(index, l) {
  navImg.removeAttribute("src", birdsData[l][index].image);
  navImg.setAttribute("src", birdsData[l][index].image);
  navTitle.textContent = `${birdsData[l][index].name}`;
}

function lastQuestion() {
  if(toolbar[5].classList.contains("active")) {
    window.location.href = "./results.html";
  }
}


const time = document.querySelector(".time");
const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");

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