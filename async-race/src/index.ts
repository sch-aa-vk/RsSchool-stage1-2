import { Button } from "./components/button/index";
import { Container } from "./components/container/index";
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
const container = Container([garageBtn, winnersBtn], 'row wrap');

body.append(container);