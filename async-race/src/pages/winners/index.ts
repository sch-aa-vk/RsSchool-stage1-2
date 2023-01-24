import { Container } from '../../layouts/container/index';
import { Table } from '../../layouts/table/index';

import './style.css';
import { garage, winners } from '../../index';

export const Winners = () => {

  const title = document.createElement('h1');
  title.className = 'heading';
  title.textContent = `Winners (${winners.length})`;

  const page = localStorage['pageWinners'] ? JSON.parse(localStorage['pageWinners']) : 1;

  const table = Table(page);

  const block = Container([title, table], 'column wrap');
  block.classList.add('winners');

  return block;
}