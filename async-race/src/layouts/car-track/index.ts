import { Button } from '../../components/button/index';
import { Car } from '../../components/car/index';
import { ContainerHr } from '../../components/container-hr/index';
import { ICar } from '../../interfaces/ICar';
import './style.css';

export const CarTrack = (car: ICar) => {
  const selectBtn = Button('select', () => {});
  const removeBtn = Button('remove', () => {});
  
  const name = document.createElement('p');
  name.className = 'car-name';
  name.innerHTML = car.name;

  const containerFirst = ContainerHr([selectBtn, removeBtn, name]);

  const startBtn = Button('a', () => {});
  const endBtn = Button('b', () => {});

  const containerSecond = ContainerHr([startBtn, endBtn]);
  containerSecond.classList.add('second-block');

  const carFigure = Car(car.color);
  carFigure.className = 'car';
  carFigure.style.left = '80px';

  const flag = document.createElement('div');
  flag.className = 'flag';

  const blockBottom = document.createElement('div');
  blockBottom.className = 'bottom-block';
  blockBottom.append(containerSecond, carFigure, flag);
  
  const block = document.createElement('div');
  block.className = 'overall-block';
  block.append(containerFirst, blockBottom);

  return block;
}