import { createCar } from '../../services/createCar/index';
import { Button } from '../../components/button/index';
import { Container } from '../container/index';
import { clearPage, generateURL } from '../../utils/helpers';
import { garage } from '../../index';

import './style.css';
import { Garage } from '../../pages/garage/index';

export const InputContainer = (text: 'create' | 'update') => {
  const inputText = document.createElement('input');
  inputText.setAttribute('type', 'text');
  inputText.className = 'input-text';

  const inputColor = document.createElement('input');
  inputColor.setAttribute('type', 'color');
  inputColor.setAttribute('value', '#ffffff');
  inputColor.className = 'input-color';

  const button = Button(`${text}`, async (e) => {
    e?.preventDefault();
    garage.push(await createCar(generateURL('garage'), {name: inputText.value, color: inputColor.value}));
    clearPage();
    document.body.append(Garage(garage));
  });

  const block = Container([inputText, inputColor, button], 'row wrap')
  
  return block;
}