import { Button } from "./components/button/index";
import { Container } from "./layouts/container/index";
import { clearPage } from "./utils/helpers";
import { getCars } from "./services/getCars/index";
import { getWinners } from "./services/getWinners/index";
import { ICar } from "./interfaces/ICar";
import { IWinners } from "./interfaces/IWinners";
import { Garage } from "./pages/garage/index";
import { Winners } from "./pages/winners/index";

import './style.css';

const page = localStorage['page'] ? localStorage['page'] : "garage";

export const garage: Array<ICar> = [];
( async (arr) => {
  const collection = await getCars();
  return Object.assign(arr, collection);
})(garage)

export const winners: Array<IWinners> = [];
(async (arr) => {
  const collection = await getWinners();
  return Object.assign(arr, collection);
})(winners)

const body = document.body;

const garageBtn = Button('to garage', () => {
  clearPage();
  localStorage['page'] = "garage";
  body.append(Garage());
})

const winnersBtn = Button('to winners', () => {
  clearPage();
  localStorage['page'] = "winners";
  body.append(Winners());
})

const container = Container([garageBtn, winnersBtn], 'row wrap');

setTimeout(() => {
  switch(page) {
    case "garage":
      body.append(container);
      garageBtn.click();
      break;
    case "winners":
      body.append(container);
      winnersBtn.click();
      break;
  }
}, 100);