import { IWinners } from '../../interfaces/IWinners';
import { CreateCar } from '../form/index';

import './style.css';

const winners: Array<IWinners> = [];

fetch('http://localhost:3000/winners')
.then(responce => responce.json())
.then(responce => Object.assign(winners, responce));

export const Table = () => {

  const element = document.querySelector('.form') as HTMLFormElement;

  if (element) {
    element.remove();
  }

  document.body.append(CreateCar());
}