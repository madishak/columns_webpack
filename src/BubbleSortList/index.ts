import { SorterType } from '../types';
import { container } from '../BubbleSortListContainer';
import '../BubbleSortListItem/style.css';
import bubbleSortListItem from '../BubbleSortListItem';

const render = (sorters: SorterType[]): HTMLElement => {
  const app = document.getElementById('app') as HTMLElement;
  container.innerHTML = '';
  sorters.forEach((elem: SorterType) => bubbleSortListItem(elem.sorterId, elem.sorterArr));
  app.append(container);
  return container;
};

export default render;
