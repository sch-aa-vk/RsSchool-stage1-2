import { Button } from '../../components/button/index';
import { Car } from '../../components/car/index';
import { Container } from '../container/index';
import { ICar } from '../../interfaces/ICar';
import { startEngine } from '../../services/startEngine/index';
import { IEngine } from '../../interfaces/IEngine';
import { animate } from '../../utils/animation';
import { deleteCar } from '../../services/deleteCar/index';
import { clearPage, generateURL } from '../../utils/helpers';
import { garage } from '../../index';
import { Garage } from '../../pages/garage/index';

import './style.css';

export const CarTrack = (car: ICar) => {
  const carFigure = Car(car);
  carFigure.className = 'car';

  const selectBtn = Button('select', (e) => {
    e?.preventDefault();
    const inputText = document.querySelectorAll('.input-text')[1] as HTMLElement;
    const inputColor = document.querySelectorAll('.input-color')[1] as HTMLElement;
    inputText.setAttribute('value', car.name);
    inputColor.setAttribute('value', car.color);
    localStorage['currentCar'] = JSON.stringify(car);
  });
  const removeBtn = Button('remove', async (e) => {
    e?.preventDefault();
    await deleteCar(generateURL(`garage/${car.id}`));
    const index = garage.findIndex((item) => item.id === car.id);
    garage.splice(index, 1);
    clearPage();
    document.body.append(Garage(garage));
  });
  
  const name = document.createElement('p');
  name.className = 'car-name';
  name.innerHTML = car.name;

  const containerFirst = Container([selectBtn, removeBtn, name], 'row wrap');

  const startBtn = Button('a', async (e) => {
    e?.preventDefault();
    startBtn.setAttribute('disabled', 'disabled');
    let data: IEngine = await fetch(generateURL(`engine?id=${car.id}&status=started`), {
      method: 'PATCH'
    }).then(responce => responce.json());
    carFigure.style.animation = `animate ${data.distance / (data.velocity * 1440)}s linear 1 forwards`;
    fetch(generateURL(`engine?id=${car.id}&status=drive`), {
      method: 'PATCH'
    }).then(responce => {
      if (!responce.ok) {
        carFigure.style.left = `${carFigure.getBoundingClientRect().left - 20}px`;
        carFigure.style.animation = '';
        endBtn.removeAttribute('disabled');
      }
    })
    setTimeout(() => {
      endBtn.removeAttribute('disabled');
    }, data.distance / (data.velocity * 1440) * 1000);
  });

  const endBtn = Button('b', async (e) => {
    e?.preventDefault();
    // carFigure.style.left = `80px`;
    // carFigure.style.animation = '';
    // startBtn.removeAttribute('disabled');
    // endBtn.setAttribute('disabled', 'disabled');
    await fetch(generateURL(`engine?id=${car.id}&status=stopped`), {
      method: 'PATCH',
    }).then(responce => responce.json());
    clearPage();
    document.body.append(Garage(garage));
  });
  endBtn.setAttribute('disabled', 'disabled');

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