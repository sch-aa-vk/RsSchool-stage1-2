import { Button } from '../button/index';
import { Car } from '../car/index';
import { Container } from '../container/index';
import { ICar } from '../../interfaces/ICar';
import './style.css';
import { startEngine } from '../../functions/startEngine/index';
import { IEngine } from '../../interfaces/IEngine';
import { animate } from '../../functions/animation/index';

export const CarTrack = (car: ICar) => {
  const carFigure = Car(car.color);
  carFigure.className = 'car';
  carFigure.style.left = '80px';

  const selectBtn = Button('select', () => {});
  const removeBtn = Button('remove', () => {});
  
  const name = document.createElement('p');
  name.className = 'car-name';
  name.innerHTML = car.name;

  const containerFirst = Container([selectBtn, removeBtn, name], 'row wrap');

  const startBtn = Button('a', async () => {
    const data: IEngine = await startEngine(`http://127.0.0.1:3000/engine?id=${car.id}&status=started`).then(responce => responce);
    return animate(carFigure, data.distance / data.velocity);
  });
  const endBtn = Button('b', async () => {});

  const containerSecond = Container([startBtn, endBtn], 'row wrap');
  containerSecond.classList.add('second-block');

  const flag = document.createElement('div');
  flag.className = 'flag';

  const blockBottom = document.createElement('div');
  blockBottom.classList.add('bottom-block');
  blockBottom.append(containerSecond, carFigure, flag);
  
  const block = Container([containerFirst, blockBottom], 'column wrap')
  block.classList.add('overall-block');

  return block;
}