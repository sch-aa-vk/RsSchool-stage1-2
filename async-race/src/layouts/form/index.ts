import { Button } from '../../components/button/index';
import { Container } from '../../components/container/index';
import { InputContainer } from '../../components/input-container/index';
import './style.css';

export const Form = () => {
  const form = document.createElement('form');
  form.className = 'form';

  const lineCreate = InputContainer('create');
  const lineUpdate = InputContainer('update');

  const buttonRace = Button('race', () => {});
  const buttonReset = Button('reset', () => {});
  const buttonGenCars = Button('generate cars', () => {});

  const block = Container([buttonRace, buttonReset, buttonGenCars], 'row wrap');

  form.append(lineCreate, lineUpdate, block);

  return form;
}