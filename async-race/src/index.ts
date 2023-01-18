import { Button } from "./components/button/index";
import { Container } from "./components/container/index";
import { clear } from "./functions/clear/index";
import { getCars } from "./functions/getCars/index";
import { getWinners } from "./functions/getWinners/index";
import { ICar } from "./interfaces/ICar";
import { IWinners } from "./interfaces/IWinners";
import { Garage } from "./layouts/garage/index";
import { Winners } from "./layouts/winners/index";

import './style.css';

const garage: Array<ICar> = [];
getCars().then(responce => Object.assign(garage, responce));

const winners: Array<IWinners> = [];
getWinners().then(responce => Object.assign(winners, responce));

const body = document.body;

const garageBtn = Button('to garage', () => {
  clear();
  body.append(Garage(garage));
})

const winnersBtn = Button('to winners', () => {
  clear();
  body.append(Winners(winners, garage));
})

const container = Container([garageBtn, winnersBtn], 'row wrap');

body.append(container);
setTimeout(() => {
  garageBtn.click();
}, 10);