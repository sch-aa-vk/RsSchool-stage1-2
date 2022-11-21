import "./styles/gallery.css";
import {birdsData} from "./data.js";

const sectionDescription = document.querySelector(".frame__description"); 

function createDescription(index, e) {
  const description = document.createElement("div");
  const descriptionContainer = document.createElement("div");
  const imgDesciption = document.createElement("img");
  const titleDesciption = document.createElement("h2");
  const speciesDesciption = document.createElement("p");
  const audioDesciption = document.createElement("audio");
  const textContainer = document.createElement("div");
  const textDescription = document.createElement("p");

  description.classList.add("desciption_wrapper");
  description.style.marginBottom = "20px";

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

for(let i = 0; i < birdsData.length; i++) {
  for(let j = 0; j < birdsData[i].length; j++) {
    createDescription(i, j);
  }
}