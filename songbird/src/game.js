import "./styles/index.css";
import {birdsData} from "./data.js";

const sectionQuestion = document.querySelector(".frame__question");
const sectionAnswers = document.querySelector(".frame__answers");
const sectionDescription = document.querySelector(".frame__description"); 
const navigation = document.querySelector(".questions_nav");

let count = 5;
let q = Math.round(Math.random() * 5);
let index = 0;
let data = "";
let name = "";

function createQuestion() {
  const question = document.createElement("div");
  const imgQuestion = document.createElement("img");
  const containerQuestion = document.createElement("div");
  const titleQuestion = document.createElement("h2");
  const audioQuestion = document.createElement("audio");
  const buttonNext = document.createElement("button");

  question.classList.add("question_wrapper");
  buttonNext.classList.add("btn-next");
  imgQuestion.classList.add("question-image");
  titleQuestion.classList.add("question-title");

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
    let answerLI = document.createElement("li");
    let answer = document.createElement("a");
    answer.textContent = arr[i];
    answerLI.append(answer);
    answerContainer.append(answerLI);
    answer.style.cursor = "pointer";
    answer.addEventListener("click", () => {
      let add = (answer.textContent == birdsData[index][q].name) ? "green" : "red";
      answer.classList.add(add);
      answer.style.color = add;

      if(answer.classList.contains("green")) {
        const score = document.querySelector(".p_score");
        if(!answer.hasAttribute("disabled", "disabled")) score.textContent = `${+score.textContent + count}`;
        answer.setAttribute("disabled", "disabled");
        count = 5;

        const nextBtn = document.querySelector(".btn-next");
        nextBtn.style.background = "green";
        nextBtn.addEventListener("click", () => {
          startGame(++index);
        })

        const img = document.querySelector(".question-image");
        const title = document.querySelector(".question-title");

        title.innerHTML = `Ответ: ${birdsData[index][q].name}`;
        img.setAttribute("src", `${birdsData[index][q].image}`);

        if(index == 5) {
          setTimeout(() => {
            name = prompt("Введите ваше имя!", "");
            data = document.querySelector(".p_score").textContent;
            localStorage.setItem(`name`, name);
            localStorage.setItem(`score`, data);
            window.location.href = "./results.html";
          }, 1000);
        }
      } else {
        if(!answer.hasAttribute("disabled", "disabled")) count--;
        answer.setAttribute("disabled", "disabled");
      }

      const description = document.querySelector(".frame__description");
      description.textContent = "";
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

  titleDesciption.textContent = `${birdsData[index][e].name}`;

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
  createDescription1();
}

function createDescription1() {
  const description = document.createElement("div");
  const textDescription = document.createElement("p");

  description.classList.add("desciption_wrapper");

  description.append(textDescription);
  sectionDescription.append(description);

  textDescription.textContent = "выберите вариант ответа чтобы узнать правильный ли это ответ";
}

window.addEventListener("load", () => {
  startGame(index);
})