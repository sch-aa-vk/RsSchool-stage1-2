import './style.css';

export const Car = (color: string) => {
  const car = document.createElement('div');
  car.className = 'car';

  car.style.background = `${color}`;

  return car;
}