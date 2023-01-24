import { garage, winners } from '../../index';
import { clear, clearPage } from '../../utils/helpers';
import { Table } from '../table/index';
import './style.css';

export const Sort = () => {

  const currentPage = localStorage['pageWinners'] ? JSON.parse(localStorage['pageWinners']) : 1;

  const select = document.createElement('select');
  select.className = 'select';

  const rm = document.createElement('option');
  rm.setAttribute('value', 'default');
  rm.innerHTML = 'select sorting method';

  const as = document.createElement('option');
  as.setAttribute('value', 'as');
  as.innerHTML = 'sort by time(↑)';

  const ds = document.createElement('option');
  ds.setAttribute('value', 'ds');
  ds.innerHTML = 'sort by time(↓)';

  const ast = document.createElement('option');
  ast.setAttribute('value', 'ast');
  ast.innerHTML = 'sort by wins(↑)';

  const dst = document.createElement('option');
  dst.setAttribute('value', 'dst');
  dst.innerHTML = 'sort by wins(↓)';

  select.append(rm, as, ds, ast, dst);

  select.addEventListener('change', function(e) {
    e.preventDefault();
    switch(this.value) {
      case 'as':
        winners.sort((a, b) => a.time - b.time);
        break;
      case 'ds':
        winners.sort((a, b) => b.time - a.time);
        break;
      case 'ast':
        winners.sort((a, b) => a.wins - b.wins);
        break;
      case 'dst':
        winners.sort((a, b) => b.wins - a.wins);
        break;
    }
    clear('page-table');
    document.querySelector('.winners')?.append(Table(currentPage));
  })

  return select;
}