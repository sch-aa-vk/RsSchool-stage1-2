import './style.css';

export const Garage = () => {
  fetch('http://localhost:3000/garage')
  .then(responce => responce.json())
  .then(responce => console.log(responce));
}