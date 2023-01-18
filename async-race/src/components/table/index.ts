import { ICar } from '../../interfaces/ICar';
import { IWinners } from '../../interfaces/IWinners';
import './style.css';

export const Table = (items: Array<IWinners>, cars: Array<ICar>) => {
  const table = document.createElement('table');
  table.className = 'table';
  
  const tr = document.createElement('tr');
  tr.innerHTML = `<th>Number</th><th>Car</th><th>Wins</th><th>Best Time (seconds)</th>`;
  tr.className = 'tr-headers';

  table.append(tr);

  for (let item of items) {
    const car: ICar = cars.find(i => i.id === item.id)!;
    const tr = document.createElement('tr');
    tr.className = 'tr-lines';

    tr.innerHTML = `<td>${item.id}</td><td>${car.name}</td><td>${item.wins}</td><td>${item.time}</td>`;

    table.append(tr);
  }

  return table;
}