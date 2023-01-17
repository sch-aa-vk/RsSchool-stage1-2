import { IWinners } from '../../interfaces/IWinners';

import './style.css';

const winners: Array<IWinners> = [];

fetch('http://localhost:3000/winners')
.then(responce => responce.json())
.then(responce => Object.assign(winners, responce));

export const Winners = () => {
  const block = document.createElement('div');
  block.className = 'winners';

  block.append('fff');

  return block;
}