import { Button } from '../../components/button/index';
import { Container } from '../container/index';
import { InputContainer } from '../inputContainer/index';
import { machines, machinesPt2 } from '../../database/car';
import { createCar } from '../../services/createCar/index';
import { clearPage, generateURL, random } from '../../utils/helpers';
import { garage, winners } from '../../index';
import { Garage } from '../../pages/garage/index';
import { ICar } from '../../interfaces/ICar';
import { IEngine } from '../../interfaces/IEngine';
import { createWinners } from '../../services/createWinner/index';

import './style.css';

export const Form = () => {
  const form = document.createElement('form');
  form.className = 'form';

  const lineCreate = InputContainer('create');
  const lineUpdate = InputContainer('update');

  const items: Array<ICar> = [];

  const buttonRace = Button('race', async (e) => {
    e?.preventDefault();
    const carItems = Array.from(document.querySelectorAll('.car')).map((item) => +item.id).sort((a, b) => a - b);
    Object.assign(items, garage.filter((item: ICar) => item.id <= carItems[carItems.length - 1] && item.id >= carItems[0]))
    const data: Array<IEngine> = [];
    const time: Array<{time: number, id: number}> = [];
    await Promise.all(items.map((car) => fetch(generateURL(`engine?id=${car.id}&status=started`), {
      method: 'PATCH'
    }).then(responce => responce.json())
    .then(responce => {
      data.push(responce);
    })));
    const cars: Array<HTMLElement> = Array.from(document.querySelectorAll('.car'));
    for (let i = 0; i < cars.length; i++) {
      cars[i].style.animation = `animate ${data[i].distance / (data[i].velocity * 1440)}s linear 1 forwards`;
      const startBtn = document.querySelectorAll('#a')[i];
      startBtn.classList.add('button-background-none');
      time.push({time: data[i].distance / (data[i].velocity * 1440), id: items[items.length - i - 1].id});
    }
    const buttons = document.querySelectorAll('.button-element');
    for (let button of buttons) {
      button.setAttribute('disabled', 'disabled');
    }
    buttonReset.removeAttribute('disabled');
    Promise.allSettled(items.map((car) => fetch(generateURL(`engine?id=${car.id}&status=drive`), {
      method: 'PATCH'
    }).then(responce => {
      const index = items.findIndex((item) => item.id === car.id);
      if (!responce.ok) {
        const elem = cars[index];
        elem.style.left = `${elem.getBoundingClientRect().left - 20}px`;
        elem.style.animation = '';
        if (elem.getBoundingClientRect().left !== window.innerWidth - 100) {
          const i = time.findIndex((item) => item.id === +elem.id);
          time.splice(i, 1);
        }
      }
    })));
    time.sort((a, b) => a.time - b.time);
    setTimeout(async () => {
      const text = document.querySelector('.text-above') as HTMLElement;
      const item = items.find(item => item.id === time[0].id)!;
      text.innerHTML = `Winner: ${item.name}!!`;
      const index = winners.findIndex((item) => item.id === time[0].id);
      switch(index) {
        case -1:
          await createWinners(generateURL('winners'), {id: time[0].id, wins: 1, time: time[0].time});
          winners.push({id: time[0].id, wins: 1, time: time[0].time});
          break;
        default:
          await fetch(generateURL(`winners/${time[0].id}`), {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({wins: winners[index]!.wins + 1, time: time[0].time})
          })
          winners.splice(index, 1, {id: time[0].id, wins: winners[index]!.wins + 1, time: time[0].time});
          break;
      }
      setTimeout(async () => {
        text.style.display = 'block';
        setInterval(() => {
          text.style.display = 'none';
        }, 2000);
        buttonReset.removeAttribute('disabled');
        await items.map((car) => fetch(generateURL(`engine?id=${car.id}&status=stopped`), {
          method: 'PATCH'
        }))
      }, 10);
    }, time[0].time * 1000)
  });

  const buttonReset = Button('reset', async (e) => {
    e?.preventDefault();
    const buttons = document.querySelectorAll('.button-element');
    for (let button of buttons) {
      button.removeAttribute('disabled');
    }
    clearPage();
    document.body.append(Garage());
  });
  buttonReset.setAttribute('disabled', 'disabled');
  const buttonGenCars = Button('generate cars', async (e) => {
    e?.preventDefault();
    const btn = document.querySelector('#generatecars') as HTMLElement;
    btn.innerHTML = 'loading';
    btn.setAttribute('disabled', 'disabled');
    for (let i = 0; i < 100; i++) {
      const carName =  machines[random(machines.length - 1)] + " " + machinesPt2[random(machinesPt2.length - 1)];
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      garage.push(await createCar(generateURL('garage'), {name: carName, color: `#${randomColor}`}));
    }
    clearPage();
    document.body.append(Garage());
  });

  const block = Container([buttonRace, buttonReset, buttonGenCars], 'row wrap');

  form.append(lineCreate, lineUpdate, block);

  return form;
}