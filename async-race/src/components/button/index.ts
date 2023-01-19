import './style.css';

export const Button = (name: string, fn: (e?: Event) => void) => {
  const btn = document.createElement('button');
  btn.id = `${name}`;
  btn.className = 'button-element';
  btn.innerHTML = name;
  btn.addEventListener('click', fn);

  return btn;
}