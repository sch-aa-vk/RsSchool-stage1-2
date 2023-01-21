import { Button } from "../../components/button/index";
import { ICar } from "../../interfaces/ICar";
import { Garage } from "../../pages/garage/index";
import { clear, clearPage } from "../../utils/helpers";
import { CarsBlock } from "../carsBlock/index";
import { Container } from "../container/index";
import { Form } from "../form/index";

import './style.css';

export const pageBlock = (garage: Array<ICar>, n: number) => {

  const pageCount = Math.ceil(garage.length / 7);
  let currentPage = n;
  localStorage['pageGarage'] = currentPage;

  const title = document.createElement('h2');
  title.className = 'heading';
  title.textContent = `Page #${currentPage}`;

  let cars = CarsBlock(currentPage);

  const prevBtn = Button('previous', () => {});
  const nextBtn = Button('next', () => {});

  const pageBtns = Container([prevBtn], 'row wrap');
  for (let i = 1; i <= pageCount; i++) {
    const btn = Button(`${i}`, (e) => {
      e?.preventDefault();
      currentPage = i;
      clear('page-block');
      clear('form');
      document.querySelector('.garage')?.append(Form(currentPage));
      document.querySelector('.garage')?.append(pageBlock(garage, currentPage));
    });
    if (btn.innerHTML !== `${currentPage}`) {
      btn.classList.add('button-background-none');
    }
    pageBtns.append(btn);
  }
  pageBtns.append(nextBtn);
  pageBtns.style.marginTop = '20px';
  pageBtns.style.justifyContent = 'center';

  const text = document.createElement('h2');
  text.className = 'text-above';

  const page = Container([title, cars, pageBtns, text], 'column wrap');
  page.classList.add('page-block');

  return page;
}
