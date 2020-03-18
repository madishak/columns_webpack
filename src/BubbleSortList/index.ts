import { SorterType } from '../types';
import container from '../BubbleSortListContainer';
import '../BubbleSortListItem/style.css';
import bubbleSortListItem from '../BubbleSortListItem';

type Props = {
  sorters: SorterType[];
  removeSorter: (id: string) => SorterType[];
  updateSorter: (id: string, arr: number[]) => SorterType[];
};

const bubbleSortList = ({ sorters, removeSorter, updateSorter }: Props): HTMLElement => {
  container.innerHTML = '';
  sorters.forEach((elem: SorterType) => {
    bubbleSortListItem({
      sorterId: elem.sorterId,
      sorter: elem.sorterArr,
      removeSorter: () => removeSorter(elem.sorterId),
      incSorter: (id: string, el: number[]) => updateSorter(elem.sorterId, el),
      decSorter: (id: string, el: number[]) => updateSorter(elem.sorterId, el)
    });
  });
  return container;
};

export default bubbleSortList;
