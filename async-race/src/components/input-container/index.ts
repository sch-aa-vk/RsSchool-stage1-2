
import { Button } from '../button/index';
import './style.css';

export const InputContainer = (text: string) => {
  const block = document.createElement('div');
  block.className = 'input-container';

  const inputText = document.createElement('input');
  inputText.setAttribute('type', 'text');
  inputText.className = 'input-text';

  const inputColor = document.createElement('input');
  inputColor.setAttribute('type', 'color');
  inputColor.setAttribute('value', '#ffffff');
  inputColor.className = 'input-color';

  const button = Button(`${text}`, () => {});

  block.append(inputText, inputColor, button);
  
  return block;
}