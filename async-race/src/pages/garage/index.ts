import { Container } from '../../layouts/container/index';
import { ICar } from '../../interfaces/ICar';
import { Form } from '../../layouts/form/index';

import './style.css';
import { pageBlock } from '../../layouts/pageBlock/index';
import { garage } from '../../index';

export const Garage = () => {
  
  const title = document.createElement('h1');
  title.className = 'heading';
  title.textContent = `Garage (${garage.length})`;

  const currentPage = localStorage['pageGarage'] ? JSON.parse(localStorage['pageGarage']) : 1;
  const pageNumber = currentPage <= Math.ceil(garage.length / 7) ? currentPage : Math.ceil(garage.length / 7);

  const page = pageBlock(garage, pageNumber || 1);

  const block = Container([Form(), title, page], 'column wrap');
  block.classList.add('garage');

  return block;
}