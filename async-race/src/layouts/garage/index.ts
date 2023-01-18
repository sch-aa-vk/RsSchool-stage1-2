import { Button } from '../../components/button/index';
import { Container } from '../../components/container/index';
// import { getCar } from '../../functions/getCar/index';
import { getCars } from '../../functions/getCars/index';
import { ICar } from '../../interfaces/ICar';
import { CarTrack } from '../../components/carTrack/index';
import { Form } from '../form/index';

import './style.css';

const garage: Array<ICar> = [];
getCars().then(responce => Object.assign(garage, responce));

export const Garage = () => {
  
  const title = document.createElement('h1');
  title.className = 'heading';
  title.textContent = `Garage (${garage.length})`;

  const page = document.createElement('h2');
  page.className = 'heading';
  page.textContent = `Page #${1}`;

  const titles = Container([title, page], 'column wrap')
  titles.classList.add('titles');

  const cars = Container([], 'column wrap');
  cars.classList.add('cars-track');
  for (let i = 0; i < garage.length; i++) {
    const track = CarTrack(garage[i]);
    cars.prepend(track);
  }

  const prevBtn = Button('previous', () => {});
  const nextBtn = Button('next', () => {});

  const pageBtns = Container([prevBtn, nextBtn], 'row wrap');

  const block = Container([Form(), titles, cars, pageBtns], 'column wrap');
  block.classList.add('garage');

  return block;
}