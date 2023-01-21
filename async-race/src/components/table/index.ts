import { winners } from '../../index';
import { ICar } from '../../interfaces/ICar';
import { IWinners } from '../../interfaces/IWinners';
import { Container } from '../../layouts/container/index';
import { clear } from '../../utils/helpers';
import { Button } from '../button/index';
import './style.css';

export const Table = (items: Array<IWinners>, cars: Array<ICar>, n: number) => {

  const pageCount = Math.ceil(items.length / 10);
  let currentPage = n;
  localStorage['pageWinners'] = currentPage;

  const minItems = (currentPage - 1) * 10;
  const maxItems = minItems + 10;

  const title = document.createElement('h2');
  title.className = 'heading';
  title.textContent = `Page #${n}`;

  const table = document.createElement('table');
  table.className = 'table';
  
  const tr = document.createElement('tr');
  tr.innerHTML = `<th>Number</th><th>Car</th><th>Wins</th><th>Best Time (seconds)</th>`;
  tr.className = 'tr-headers';

  table.append(tr);

  for (let item of items.slice(minItems, maxItems)) {
    const index = items.indexOf(item);
    const car: ICar = cars.find(i => i.id === item.id)!;
    const tr = document.createElement('tr');
    tr.className = 'tr-lines';

    tr.innerHTML = `<td>${index + 1}</td><td>${car.name}</td><td>${item.wins}</td><td>${item.time.toFixed(2)}</td>`;

    table.append(tr);
  }

  const prevBtn = Button('previous', () => {});
  const nextBtn = Button('next', () => {});

  const pageBtns = Container([prevBtn], 'row wrap');
  for (let i = 1; i <= pageCount; i++) {
    const btn = Button(`${i}`, (e) => {
      e?.preventDefault();
      currentPage = i;
      clear('page-table');
      document.querySelector('.winners')?.append(Table(winners, cars, currentPage));
    });
    if (btn.innerHTML !== `${currentPage}`) {
      btn.classList.add('button-background-none');
    }
    pageBtns.append(btn);
  }
  pageBtns.append(nextBtn);
  pageBtns.style.marginTop = '20px';
  pageBtns.style.justifyContent = 'center';

  const page = Container([title, table, pageBtns], 'column wrap');
  page.classList.add('page-table');

  return page;
}