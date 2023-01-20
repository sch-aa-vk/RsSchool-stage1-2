import { Button } from '../../components/button/index';
import { Container } from '../container/index';
import { InputContainer } from '../inputContainer/index';
import { machines } from '../../database/car';
import { colors } from '../../database/color';
import { createCar } from '../../services/createCar/index';
import { clearPage, generateURL, random } from '../../utils/helpers';
import './style.css';
import { garage } from '../../index';
import { Garage } from '../../pages/garage/index';
import { deleteCar } from '../../services/deleteCar/index';

export const Form = () => {
  const form = document.createElement('form');
  form.className = 'form';

  const lineCreate = InputContainer('create');
  const lineUpdate = InputContainer('update');

  const buttonRace = Button('race', () => {});
  const buttonReset = Button('reset', async (e) => {
    e?.preventDefault();
    for (let i = garage.length; i > garage.length - 100; i--) {
      await deleteCar(generateURL(`garage/${i}`));
    }
    garage.splice(garage.length - 100, 100);
    clearPage();
    document.body.append(Garage(garage));
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