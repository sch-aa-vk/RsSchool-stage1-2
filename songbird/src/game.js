import "./styles/index.css";
import {birdsData} from "./data.js";

const sectionQuestion = document.querySelector(".frame__question");
const sectionAnswers = document.querySelector(".frame__answers");
const sectionDescription = document.querySelector(".frame__description"); 
const navigation = document.querySelector(".questions_nav");

let count = 5;
let q = Math.round(Math.random() * birdsData.length);
let index = 0;

function createQuestion() {
  const question = document.createElement("div");
  const imgQuestion = document.createElement("img");
  const containerQuestion = document.createElement("div");
  const titleQuestion = document.createElement("h2");
  const audioQuestion = document.createElement("audio");
  const buttonNext = document.createElement("button");

  question.classList.add("question_wrapper");
  buttonNext.classList.add("btn-next");

  question.append(imgQuestion);
  question.append(containerQuestion);
  containerQuestion.append(titleQuestion);
  containerQuestion.append(audioQuestion);
  containerQuestion.append(buttonNext);
  sectionQuestion.append(question);

  titleQuestion.textContent = "Угадай птицу";

  imgQuestion.setAttribute("src", "https://www.kindpng.com/picc/m/1-12754_bird-flight-bird-flight-silhouette-clip-art-black.png");
  imgQuestion.setAttribute("alt", "question image");

  audioQuestion.setAttribute("src", `${birdsData[index][q].audio}`);
  audioQuestion.setAttribute("controls", "");

  buttonNext.textContent = "Next Question";

  const arr = Array.from(navigation.querySelectorAll("li"));
  arr.forEach(element => {
    element.classList.remove("active");
    if(arr.indexOf(element) == index) element.classList.add("active");
  })
}

function createAnswers() {
  const arr = Array.from(birdsData[index]);
  arr.forEach(element => {
    arr[arr.indexOf(element)] = element.name;
  })

  const answerContainer = document.createElement("ul");
  
  for(let i = 0; i < arr.length; i++) {
    let answer = document.createElement("li");
    answer.textContent = arr[i];
    answerContainer.append(answer);
    answer.addEventListener("click", () => {
      answer.style.background =  (answer.textContent == birdsData[index][q].name) ? "green" : "red";

      if(answer.style.background == "green") {
        const block = document.createElement("div");
        block.style.position = "absolute";
        block.style.width = `${sectionAnswers.getBoundingClientRect().width}px`;
        block.style.height = `${sectionAnswers.getBoundingClientRect().height}px`;
        block.style.zIndex = "99";
        sectionAnswers.append(block);
        const score = document.querySelector(".p_score");
        score.textContent = `${+score.textContent + count}`;

        const nextBtn = document.querySelector(".btn-next");
        nextBtn.style.background = "green";
        nextBtn.addEventListener("click", () => {
          startGame(++index);
        })
      } else {
        if(answer.style.pointerEvents != "none") count--;
        answer.style.pointerEvents = "none";
      }

      const description = document.querySelector(".frame__description");
      description.textContent = "";
      console.log(i);
      createDescription(i);
    });
  }

  sectionAnswers.append(answerContainer);
}

function createDescription(e) {
  const description = document.createElement("div");
  const descriptionContainer = document.createElement("div");
  const imgDesciption = document.createElement("img");
  const titleDesciption = document.createElement("h2");
  const speciesDesciption = document.createElement("p");
  const audioDesciption = document.createElement("audio");
  const textContainer = document.createElement("div");
  const textDescription = document.createElement("p");

  description.classList.add("desciption_wrapper");

  descriptionContainer.append(imgDesciption);
  textContainer.append(titleDesciption);
  textContainer.append(speciesDesciption);
  textContainer.append(audioDesciption);
  description.append(descriptionContainer);
  descriptionContainer.append(textContainer);
  description.append(textDescription);
  sectionDescription.append(description);

  titleDesciption.textContent = "Угадай птицу";

  imgDesciption.setAttribute("src", `${birdsData[index][e].image}`);
  imgDesciption.setAttribute("alt", "question image");

  audioDesciption.setAttribute("src", `${birdsData[index][e].audio}`);
  audioDesciption.setAttribute("controls", "");

  textDescription.textContent = birdsData[index][e].description;

  speciesDesciption.textContent = birdsData[index][e].species;
}

function startGame(index) {
  const question = document.querySelector(".frame__question");
  const answers = document.querySelector(".frame__answers");
  const description = document.querySelector(".frame__description");
  question.textContent = "";
  answers.textContent = "";
  description.textContent = "";

  q = Math.round(Math.random() * birdsData.length);
  createQuestion();
  createAnswers();
}

window.addEventListener("load", () => {
  startGame(index);
})