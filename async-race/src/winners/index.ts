import './style.css';

export const Winners = () => {
  fetch('http://localhost:3000/winners')
  .then(responce => responce.json())
  .then(responce => console.log(responce));
}