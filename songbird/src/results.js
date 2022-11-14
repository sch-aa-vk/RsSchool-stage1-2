import "./styles/results.css";
// import * as game from "./game.js";

let result = "--";
// let name = prompt("you're name?", "");
const tbody = document.querySelector(".frame__tbody");
const tr = document.createElement("tr");
tr.classList.add("frame__tr");

for(let i = 0; i < 3; i++) {
  const td = document.createElement("td");
  td.classList.add("frame__td");
  switch(i) {
    case 0:
      td.textContent = 1;
      break;
    case 1:
      td.textContent = "--";
      break;
    case 2:
      td.textContent = result;
      break;
    default:
      td.textContent = "";
      break;
  }
  tr.append(td);
}

tbody.append(tr);