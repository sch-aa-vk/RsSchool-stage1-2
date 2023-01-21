import { Button } from '../../components/button/index';
import { Container } from '../../layouts/container/index';
import { Table } from '../../layouts/table/index';
import { ICar } from '../../interfaces/ICar';
import { IWinners } from '../../interfaces/IWinners';

import './style.css';

export const Winners = (winners: Array<IWinners>, cars: Array<ICar>) => {

  const title = document.createElement('h1');
  title.className = 'heading';
  title.textContent = `Winners (${winners.length})`;

  const page = localStorage['pageWinners'] ? JSON.parse(localStorage['pageWinners']) : 1;

  const table = Table(winners, cars, page);

  const block = Container([title, table], 'column wrap');
  block.classList.add('winners');

  return block;
}