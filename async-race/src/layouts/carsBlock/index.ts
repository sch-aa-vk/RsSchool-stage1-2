import { garage } from "../../index";
import { CarTrack } from "../carTrack/index";
import { Container } from "../container/index";

export const CarsBlock = (currentPage: number) => {
  
  const minItems = ((currentPage - 1) * 7);
  const maxItems = currentPage * 7 <= garage.length ? currentPage * 7 : garage.length;

  const cars = Container([], 'column wrap');
  cars.classList.add('cars-track');

  for (let i = minItems; i < maxItems; i++) {
    const track = CarTrack(garage[i]);
    cars.prepend(track);
  }

  return cars
}