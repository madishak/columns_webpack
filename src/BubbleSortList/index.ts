import { SorterType } from '../types';
import container from '../BubbleSortListContainer';
import '../BubbleSortListItem/style.css';
import bubbleSortListItem from '../BubbleSortListItem';

type Props = {
  sorters: SorterType[];
  removeSorter: (id: string) => SorterType[];
  updateSorter: (id: string) => SorterType[];
};

const bubbleSortList = ({ sorters, removeSorter, updateSorter }: Props): HTMLElement => {
  container.innerHTML = '';
  sorters.forEach((elem: SorterType) => {
    bubbleSortListItem({
      sorterId: elem.sorterId,
      sorter: elem.sorterArr,
      removeSorter: () => removeSorter(elem.sorterId),
      incSorter: () => updateSorter(elem.sorterId),
      decSorter: () => updateSorter(elem.sorterId)
    });
  });
  return container;
};

export default bubbleSortList;
