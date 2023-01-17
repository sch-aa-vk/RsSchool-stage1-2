
import { Button } from '../button/index';
import { Container } from '../container/index';
import './style.css';

export const InputContainer = (text: string) => {
  const inputText = document.createElement('input');
  inputText.setAttribute('type', 'text');
  inputText.className = 'input-text';

  const inputColor = document.createElement('input');
  inputColor.setAttribute('type', 'color');
  inputColor.setAttribute('value', '#ffffff');
  inputColor.className = 'input-color';

  const button = Button(`${text}`, () => {});

  const block = Container([inputText, inputColor, button], 'row wrap')
  
  return block;
}