import { garage } from "../../index";
import { CarTrack } from "../carTrack/index";
import { Container } from "../container/index";

import './style.css';

export const CarsBlock = (currentPage: number) => {
  
  const maxItems = garage.length - (currentPage - 1) * 7;
  const minItems = maxItems - 7;

  const min = minItems >= 0 ? minItems : 0; 

  const cars = Container([], 'column wrap');
  cars.classList.add('cars-track');

  if (garage.length === 0) {
    const title = document.createElement('h3');
    title.innerHTML = 'cars not found';
    title.className = 'not-found-title';
    cars.append(title);
  } else {
    for (let i = maxItems - 1; i >= min; i--) {
      const track = CarTrack(garage[i]);
      cars.append(track);
    }
  }

  return cars;
}