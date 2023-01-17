import { Button } from '../../components/buttons/index';
import { ContainerHr } from '../../components/container-hr/index';
import { InputContainer } from '../../components/input-container/index';
import './style.css';

export const CreateCar = () => {
  const form = document.createElement('form');
  form.className = 'form';

  const lineCreate = InputContainer('create');
  const lineUpdate = InputContainer('update');

  const buttonRace = Button('race', () => {});
  const buttonReset = Button('reset', () => {});
  const buttonGenCars = Button('generate cars', () => {});

  const block = ContainerHr([buttonRace, buttonReset, buttonGenCars]);

  form.append(lineCreate, lineUpdate, block);

  return form;
}