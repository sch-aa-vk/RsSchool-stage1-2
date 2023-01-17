import { getCars } from '../../functions/getCar/index';
import { ICar } from '../../interfaces/ICar';
import { CarTrack } from '../car-track/index';
import { Form } from '../form/index';

import './style.css';

const garage: Array<ICar> = [];
getCars().then(responce => Object.assign(garage, responce));

export const Garage = () => {
  
  const block = document.createElement('div');
  block.className = 'garage';

  const title = document.createElement('h1');
  title.className = 'heading';
  title.textContent = `Garage (${garage.length})`;

  const cars = document.createElement('div');
  cars.className = 'cars-track';
  for (let i = 0; i < garage.length; i++) {
    const track = CarTrack(garage[i]);
    cars.prepend(track);
  }

  block.append(Form(), title, cars);

  return block;
}