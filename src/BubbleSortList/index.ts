import { SorterType } from '../types';
import container from '../BubbleSortListContainer';
import '../BubbleSortListItem/style.css';
import bubbleSortListItem from '../BubbleSortListItem';
import BubbleSort from '../BubbleSort';

type Props = {
  sorters: SorterType[];
  removeSorter: (id: number) => SorterType[];
  updateSorter: (id: number, sorter: number[]) => SorterType[];
  //  updateSorter: (id: number, sorter: number[]) => SorterType[];
};

type MappingDate = {
  inc: number[];
  dec: number[];
};

const sort = (arr: number[], selector: string) => {
  console.log(selector);
  const bubbleSort = new BubbleSort(arr);
  if (selector === 'inc') {
    return bubbleSort.increaseSort();
  }
  return bubbleSort.decreaseSort();
  // const mapping: MappingDate = {
  //   inc: bubbleSort.increaseSort(),
  //   dec: bubbleSort.decreaseSort()
  // };
  // return mapping['inc']();
};

const bubbleSortList = ({ sorters, removeSorter, updateSorter }: Props): HTMLElement => {
  container.innerHTML = '';
  // sorters.forEach((elem: SorterType) => bubbleSortListItem(elem.sorterId, elem.sorterArr));
  sorters.forEach((elem: SorterType) =>
    bubbleSortListItem({
      sorterId: elem.sorterId,
      sorter: elem.sorterArr,
      removeSorter: () => removeSorter(elem.sorterId),
      incSorter: () => updateSorter(elem.sorterId, sort(elem.sorterArr, 'inc')),
      decSorter: () => updateSorter(elem.sorterId, sort(elem.sorterArr, 'dec'))
    })
  );
  return container;
};

export default bubbleSortList;
