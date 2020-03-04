import { SorterType } from '../types';
import container from '../BubbleSortListContainer';
import '../BubbleSortListItem/style.css';
import bubbleSortListItem from '../BubbleSortListItem';
import BubbleSort from '../BubbleSort';

type Props = {
  sorters: SorterType[];
  removeSorter: (id: number) => SorterType[];
  updateSorter: (id: number, arr: number[]) => SorterType[];
};

type MappingData = {
  inc: number[];
  dec: number[];
};

type C = {
  [selector: string]: number[];
};

const sort = (arr: number[], selector: C) => {
  console.log(selector);
  const bubbleSort = new BubbleSort(arr);
  if (selector === 'inc') {
    return bubbleSort.increaseSort();
  }
  // return bubbleSort.decreaseSort();
  const mapping: MappingData = {
    inc: bubbleSort.increaseSort(),
    dec: bubbleSort.decreaseSort()
  };
  return mapping[selector]();
};

const bubbleSortList = ({ sorters, removeSorter, updateSorter }: Props): HTMLElement => {
  container.innerHTML = '';
  // sorters.forEach((elem: SorterType) => bubbleSortListItem(elem.sorterId, elem.sorterArr));
  sorters.forEach((elem: SorterType) => {
    bubbleSortListItem({
      sorterId: elem.sorterId,
      sorter: elem.sorterArr,
      removeSorter: () => removeSorter(elem.sorterId),
      incSorter: () => updateSorter(elem.sorterId, elem.sorterArr),
      decSorter: () => updateSorter(elem.sorterId, elem.sorterArr)
    });
  });
  return container;
};

export default bubbleSortList;
