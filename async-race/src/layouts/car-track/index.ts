import { Button } from '../../components/button/index';
import { Car } from '../../components/car/index';
import { Container } from '../../components/container/index';
import { ICar } from '../../interfaces/ICar';
import './style.css';

export const CarTrack = (car: ICar) => {
  const selectBtn = Button('select', () => {});
  const removeBtn = Button('remove', () => {});
  
  const name = document.createElement('p');
  name.className = 'car-name';
  name.innerHTML = car.name;

  const containerFirst = Container([selectBtn, removeBtn, name], 'row wrap');

  const startBtn = Button('a', () => {});
  const endBtn = Button('b', () => {});

  const containerSecond = Container([startBtn, endBtn], 'row wrap');
  containerSecond.classList.add('second-block');

  const carFigure = Car(car.color);
  carFigure.className = 'car';
  carFigure.style.left = '80px';

  const flag = document.createElement('div');
  flag.className = 'flag';

  const blockBottom = document.createElement('div');
  blockBottom.classList.add('bottom-block');
  blockBottom.append(containerSecond, carFigure, flag);
  
  const block = Container([containerFirst, blockBottom], 'column wrap')
  block.classList.add('overall-block');

  return block;
}