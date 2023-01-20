import { Container } from '../../layouts/container/index';
import { ICar } from '../../interfaces/ICar';
import { Form } from '../../layouts/form/index';

import './style.css';
import { pageBlock } from '../../layouts/pageBlock/index';

export const Garage = (garage: Array<ICar>) => {
  
  const title = document.createElement('h1');
  title.className = 'heading';
  title.textContent = `Garage (${garage.length})`;

  const currentPage = localStorage['page'] ? JSON.parse(localStorage['page']) : 1;

  const page = pageBlock(garage, currentPage);

  const block = Container([Form(), title, page], 'column wrap');
  block.classList.add('garage');

  return block;
}