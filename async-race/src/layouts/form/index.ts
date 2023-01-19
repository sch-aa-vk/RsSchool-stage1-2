import { Button } from '../../components/button/index';
import { Container } from '../../components/container/index';
import { InputContainer } from '../../components/inputContainer/index';
import { machines } from '../../database/car';
import { colors } from '../../database/color';
import { createCar } from '../../functions/createCar/index';
import { random } from '../../functions/random/index';
import './style.css';

export const Form = () => {
  const form = document.createElement('form');
  form.className = 'form';

  const lineCreate = InputContainer('create');
  const lineUpdate = InputContainer('update');

  const buttonRace = Button('race', () => {});
  const buttonReset = Button('reset', () => {});
  const buttonGenCars = Button('generate cars', (e) => {
    e?.preventDefault();
    for (let i = 0; i < 100; i++) {
     createCar('http://127.0.0.1:3000/garage', {name: machines[random(machines.length - 1)], color: colors[random(colors.length)]});
    }
  });

  const block = Container([buttonRace, buttonReset, buttonGenCars], 'row wrap');

  form.append(lineCreate, lineUpdate, block);

  return form;
}