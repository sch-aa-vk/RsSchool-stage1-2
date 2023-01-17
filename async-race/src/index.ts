import { Button } from "./components/buttons/index";
import { ContainerHr } from "./components/container-hr/index";
import { clear } from "./functions/clear/index";
import { Garage } from "./layouts/garage/index";
import { Winners } from "./layouts/winners/index";

import './style.css';

const body = document.body;

const garageBtn = Button('to garage', () => {
  clear();
  body.append(Garage());
})
const winnersBtn = Button('to winners', () => {
  clear();
  body.append(Winners());
})
const container = ContainerHr([garageBtn, winnersBtn]);

body.append(container);