import { Button } from '../../components/button/index';
import { Container } from '../../layouts/container/index';
import { ICar } from '../../interfaces/ICar';
import { CarTrack } from '../../layouts/carTrack/index';
import { Form } from '../../layouts/form/index';

import './style.css';
import { pageBlock } from '../../layouts/pageBlock/index';

export const Garage = (garage: Array<ICar>) => {
  
  const title = document.createElement('h1');
  title.className = 'heading';
  title.textContent = `Garage (${garage.length})`;

  const page = pageBlock(garage, 1);

  const block = Container([Form(), title, page], 'column wrap');
  block.classList.add('garage');

  return block;
}