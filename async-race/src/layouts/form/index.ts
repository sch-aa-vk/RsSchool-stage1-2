import { Button } from '../../components/button/index';
import { Container } from '../container/index';
import { InputContainer } from '../inputContainer/index';
import { machines } from '../../database/car';
import { colors } from '../../database/color';
import { createCar } from '../../services/createCar/index';
import { clearPage, generateURL, random } from '../../utils/helpers';
import { garage } from '../../index';
import { Garage } from '../../pages/garage/index';
import { ICar } from '../../interfaces/ICar';
import { IEngine } from '../../interfaces/IEngine';

import './style.css';

export const Form = () => {
  const form = document.createElement('form');
  form.className = 'form';

  const lineCreate = InputContainer('create');
  const lineUpdate = InputContainer('update');

  const currentPage = localStorage['page'] ? JSON.parse(localStorage['page']) : 1;
  const maxItems = garage.length - (currentPage - 1) * 7;
  const minItems = maxItems - 7;

  const min = minItems >= 0 ? minItems : 0; 

  const items: Array<ICar> = garage.filter((item: ICar) => item.id <= maxItems && item.id > min);

  const buttonRace = Button('race', async (e) => {
    e?.preventDefault();
    const data: Array<IEngine> = [];
    await Promise.allSettled(items.map((car) => fetch(generateURL(`engine?id=${car.id}&status=started`), {
      method: 'PATCH'
    }).then(responce => responce.json()).then(responce => data.push(responce))));
    const cars: Array<HTMLElement> = Array.from(document.querySelectorAll('.car'));
    for (let i = 0; i < cars.length; i++) {
      cars[i].style.animation = `animate ${data[i].distance / (data[i].velocity * window.innerWidth)}s linear 1 forwards`;
      const startBtn = document.querySelectorAll('#a')[i];
      startBtn.classList.add('button-background-none');
    }
    await Promise.allSettled(items.map((car) => fetch(generateURL(`engine?id=${car.id}&status=drive`), {
      method: 'PATCH'
    }).then(responce => {
      if (!responce.ok) {
        const elem = cars[items.findIndex((item) => item.id === car.id)];
        elem.style.left = `${elem.getBoundingClientRect().left - 20}px`;
        elem.style.animation = '';
      }
    })));
  });
  const buttonReset = Button('reset', async (e) => {
    e?.preventDefault();
    const cars: Array<HTMLElement> = Array.from(document.querySelectorAll('.car'));
    cars.forEach((car) => {
      car.style.left = '80px';
      car.style.animation = '';
    })
  });
  const buttonGenCars = Button('generate cars', async (e) => {
    e?.preventDefault();
    const btn = document.querySelector('#generatecars') as HTMLElement;
    btn.innerHTML = 'loading';
    btn.setAttribute('disabled', 'disabled');
    for (let i = 0; i < 100; i++) {
      garage.push(await createCar(generateURL('garage'), {name: machines[random(machines.length - 1)], color: colors[random(colors.length)] || '#FFFFFF'}));
    }
    clearPage();
    document.body.append(Garage(garage));
  });

  const block = Container([buttonRace, buttonReset, buttonGenCars], 'row wrap');

  form.append(lineCreate, lineUpdate, block);

  return form;
}