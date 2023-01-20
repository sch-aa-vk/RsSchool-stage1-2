import { Button } from "../../components/button/index";
import { ICar } from "../../interfaces/ICar";
import { clear } from "../../utils/helpers";
import { CarsBlock } from "../carsBlock/index";
import { Container } from "../container/index";

export const pageBlock = (garage: Array<ICar>, n: number) => {

  const pageCount = Math.ceil(garage.length / 7);
  let currentPage = n;
  localStorage['page'] = currentPage;

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

  const page = Container([title, cars, pageBtns], 'column wrap');
  page.classList.add('page-block');

  return page;
}
