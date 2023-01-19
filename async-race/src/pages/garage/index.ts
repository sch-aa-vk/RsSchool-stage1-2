import { Button } from '../../components/button/index';
import { Container } from '../../layouts/container/index';
import { ICar } from '../../interfaces/ICar';
import { CarTrack } from '../../layouts/carTrack/index';
import { Form } from '../../layouts/form/index';

import './style.css';

export const Garage = (garage: Array<ICar>) => {
  
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