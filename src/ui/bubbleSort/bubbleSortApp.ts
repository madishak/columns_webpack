import { SorterType } from '../types';
import { container } from './sorterContainer';
import './style.css';
import renderSorter from './bubbleSortRender';

const render = (sorters: SorterType[]): HTMLElement => {
  const app = document.getElementById('app') as HTMLElement;
  container.innerHTML = '';
  sorters.forEach((elem: SorterType) => renderSorter(elem.sorterId, elem.sorterArr));
  app.append(container);
  return container;
};

export default render;
