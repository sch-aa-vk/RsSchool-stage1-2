import { CreateCar } from '../form/index';
import './style.css';

fetch('http://localhost:3000/garage')
.then(responce => responce.json())
.then(responce => console.log(responce));

export const Garage = () => {
  
  const block = document.createElement('div');
  block.className = 'garage';
  block.append(CreateCar());

  return block;
}