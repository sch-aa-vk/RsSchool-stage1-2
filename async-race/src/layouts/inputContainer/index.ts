
import { createCar } from '../../services/createCar/index';
import { Button } from '../../components/button/index';
import { Container } from '../container/index';
import './style.css';

export const InputContainer = (text: 'create' | 'update') => {
  const inputText = document.createElement('input');
  inputText.setAttribute('type', 'text');
  inputText.className = 'input-text';

  const inputColor = document.createElement('input');
  inputColor.setAttribute('type', 'color');
  inputColor.setAttribute('value', '#ffffff');
  inputColor.className = 'input-color';

  const button = Button(`${text}`, (e) => {
    e?.preventDefault();
    createCar('http://127.0.0.1:3000/garage', {name: inputText.value, color: inputColor.value});
  });

  const block = Container([inputText, inputColor, button], 'row wrap')
  
  return block;
}