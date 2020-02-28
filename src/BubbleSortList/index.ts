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

// const sort = (arr: number[], selector: string) => {
//   const bubbleSort = new BubbleSort(arr);
//   const mapping: MappingDate = {
//     inc: bubbleSort.increaseSort(),
//     dec: bubbleSort.decreaseSort()
//   };
//   return mapping[selector]();
// };
// sort([2, 3, 4, 5, 6], 'inc');

const bubbleSortList = ({ sorters, removeSorter, updateSorter }: Props): HTMLElement => {
  container.innerHTML = '';
  // sorters.forEach((elem: SorterType) => bubbleSortListItem(elem.sorterId, elem.sorterArr));
  sorters.forEach((elem: SorterType) =>
    bubbleSortListItem({
      sorterId: elem.sorterId,
      sorter: elem.sorterArr,
      removeSorter: () => removeSorter(elem.sorterId),
      updateSorter: () => updateSorter(elem.sorterId, elem.sorterArr)
    })
  );
  return container;
};

export default bubbleSortList;
