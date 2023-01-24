import { garage, winners } from '../../index';
import { ICar } from '../../interfaces/ICar';
import { Container } from '../container/index';
import { clear } from '../../utils/helpers';
import { Button } from '../../components/button/index';
import './style.css';
import { Sort } from '../sort/index';
import { Car } from '../../components/car/index';

export const Table = (n: number) => {

  const pageCount = Math.ceil(winners.length / 10);
  let currentPage = n;
  localStorage['pageWinners'] = currentPage;

  const minItems = (currentPage - 1) * 10;
  const maxItems = minItems + 10;

  const title = document.createElement('h2');
  title.className = 'heading';
  title.textContent = `Page #${n}`;

  const select = Sort();

  const table = document.createElement('table');
  table.className = 'table';
  
  const tr = document.createElement('tr');
  tr.innerHTML = `<th>Number</th><th>Car Name</th><th>Car Color</th><th>Wins</th><th>Best Time (seconds)</th>`;
  tr.className = 'tr-headers';

  table.append(tr);

  for (let item of winners.slice(minItems, maxItems)) {
    const index = winners.indexOf(item);
    const car: ICar = garage.find(i => i.id === item.id)!;
    if (car !== undefined) {
      const tr = document.createElement('tr');
      tr.className = 'tr-lines';
      
      const tdNumber = document.createElement('td');
      tdNumber.innerHTML = `${index + 1}`;

      const tdName = document.createElement('td');
      tdName.innerHTML = `${car.name}`;

      const tdCar = document.createElement('td');
      tdCar.append(Car(car));

      const tdWins = document.createElement('td');
      tdWins.innerHTML = `${item.wins}`;

      const tdTime = document.createElement('td');
      tdTime.innerHTML = `${item.time.toFixed(2)}`;

      tr.append(tdNumber, tdName, tdCar, tdWins, tdTime);
  
      table.append(tr);
    }
  }

  const prevBtn = Button('previous', () => {
    if (currentPage !== 1) currentPage--;
    clear('page-table');
    document.querySelector('.winners')?.append(Table(currentPage));
  });
  const nextBtn = Button('next', () => {
    if (currentPage !== pageCount) currentPage++;
    clear('page-table');
    document.querySelector('.winners')?.append(Table(currentPage));
  });

  const pageBtns = Container([prevBtn], 'row wrap');
  for (let i = 1; i <= pageCount; i++) {
    const btn = Button(`${i}`, (e) => {
      e?.preventDefault();
      currentPage = i;
      clear('page-table');
      document.querySelector('.winners')?.append(Table(currentPage));
    });
    if (btn.innerHTML !== `${currentPage}`) {
      btn.classList.add('button-background-none');
    }
    pageBtns.append(btn);
  }
  pageBtns.append(nextBtn);
  pageBtns.style.marginTop = '20px';
  pageBtns.style.justifyContent = 'center';

  const page = Container([title, select, table, pageBtns], 'column wrap');
  page.classList.add('page-table');

  return page;
}