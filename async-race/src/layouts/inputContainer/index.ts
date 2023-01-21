import { createCar } from '../../services/createCar/index';
import { Button } from '../../components/button/index';
import { Container } from '../container/index';
import { clearPage, generateURL } from '../../utils/helpers';
import { garage } from '../../index';
import { Garage } from '../../pages/garage/index';
import { Car } from '../../components/car/index';

import './style.css';
import { updateCar } from '../../services/updateCar/index';

export const InputContainer = (text: 'create' | 'update') => {
  const inputText = document.createElement('input');
  inputText.setAttribute('type', 'text');
  inputText.className = 'input-text';
  if (text === 'update') {
    inputText.setAttribute('value', localStorage['currentCar'] ? JSON.parse(localStorage['currentCar']).name : '');
  }

  const inputColor = document.createElement('input');
  inputColor.setAttribute('type', 'color');
  inputColor.setAttribute('value', '#ffffff');
  inputColor.className = 'input-color';
  if (text === 'update') {
    inputColor.setAttribute('value', localStorage['currentCar'] ? JSON.parse(localStorage['currentCar']).color : '#ffffff');
  }

  const button = Button(`${text}`, async (e) => {
    e?.preventDefault();
    if (text === 'create') {
      garage.push(await createCar(generateURL('garage'), {name: inputText.value, color: inputColor.value}));
    } else if (text === 'update') {
      const car = localStorage['currentCar'] ? JSON.parse(localStorage['currentCar']) : null;
      await updateCar(generateURL(`garage/${car.id}`), {name: inputText.value, color: inputColor.value});
      garage.splice(car.id - 1, 1, {name: inputText.value, color: inputColor.value, id: car.id});
      localStorage.removeItem('currentCar');
    }
    clearPage();
    document.body.append(Garage(garage));
  });

  const block = Container([inputText, inputColor, button], 'row wrap')
  
  return block;
}