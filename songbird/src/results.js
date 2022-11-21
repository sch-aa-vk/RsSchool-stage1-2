import "./styles/results.css";

const tbody = document.querySelector(".frame__tbody");
const tr = document.createElement("tr");
tr.classList.add("frame__tr");

let name = localStorage.getItem(`name`);
let score = localStorage.getItem(`score`);

const winText = document.querySelector(".win_text");

for(let j = 0; j < 3; j++) {
  const td = document.createElement("td");
  td.classList.add("frame__td");
  switch(j) {
    case 0:
      td.textContent = 1;
      break;
    case 1:
      td.innerHTML = name;
      break;
    case 2:
      td.innerHTML = score;
      break;
    default:
      td.innerHTML = "";
      break;
  }
  tr.append(td);
  tbody.append(tr);
}

if(score == 30) {
  winText.style.display = "none";
}

const restartBtn = document.querySelector(".frame__button");

restartBtn.addEventListener("click", () => {
  window.location.href = "./game.html";
})