import { Button } from '../../components/button/index';
import { Container } from '../../components/container/index';
import { Table } from '../../components/table/index';
import { getCars } from '../../functions/getCars/index';
import { getWinners } from '../../functions/getWinners/index';
import { ICar } from '../../interfaces/ICar';
import { IWinners } from '../../interfaces/IWinners';

import './style.css';

export const Winners = (winners: Array<IWinners>, cars: Array<ICar>) => {

  const title = document.createElement('h1');
  title.className = 'heading';
  title.textContent = `Winners (${winners.length})`;

  const page = document.createElement('h2');
  page.className = 'heading';
  page.textContent = `Page #1`;

  const titles = Container([title, page], 'column wrap');

  const table = Table(winners, cars);

  const prevBtn = Button('previous', () => {});
  const nextBtn = Button('next', () => {});
  const pageBtns = Container([prevBtn, nextBtn], 'row wrap');

  const block = Container([titles, table, pageBtns], 'column wrap');
  block.classList.add('winners');

  return block;
}