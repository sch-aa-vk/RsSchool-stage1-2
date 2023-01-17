import { CreateCar } from '../form/index';

import './style.css';

const garage: Array<Object> = [];

fetch('http://localhost:3000/garage')
.then(responce => responce.json())
.then(responce => Object.assign(garage, responce));

export const Garage = () => {
  
  const block = document.createElement('div');
  block.className = 'garage';

  const title = document.createElement('h1');
  title.className = 'heading';
  title.textContent = `Garage (${garage.length})`;

  block.append(CreateCar(), title);

  return block;
}