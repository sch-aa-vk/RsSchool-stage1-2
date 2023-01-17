import { getCars } from '../../functions/getCar/index';
import { Form } from '../form/index';

import './style.css';

const garage: Array<Object> = [];
getCars().then(responce => Object.assign(garage, responce));

export const Garage = () => {
  
  const block = document.createElement('div');
  block.className = 'garage';

  const title = document.createElement('h1');
  title.className = 'heading';
  title.textContent = `Garage (${garage.length})`;

  block.append(Form(), title);

  return block;
}