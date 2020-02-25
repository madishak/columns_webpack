import { SorterType } from '../types';
import container from '../BubbleSortListContainer';
import '../BubbleSortListItem/style.css';
import bubbleSortListItem from '../BubbleSortListItem';

type Props = {
  sorters: SorterType[];
  removeSorter: (id: number) => SorterType[];
};

const bubbleSortList = ({ sorters, removeSorter }: Props): HTMLElement => {
  container.innerHTML = '';
  // sorters.forEach((elem: SorterType) => bubbleSortListItem(elem.sorterId, elem.sorterArr));
  sorters.forEach((elem: SorterType) =>
    bubbleSortListItem({
      sorter: elem.sorterArr,
      removeSorter: () => removeSorter(elem.sorterId)
    })
  );
  return container;
};

export default bubbleSortList;
