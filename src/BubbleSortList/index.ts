import { SorterType } from '../types';
import container from '../BubbleSortListContainer';
import '../BubbleSortListItem/style.css';
import bubbleSortListItem from '../BubbleSortListItem';

type Props = {
  sorters: SorterType[];
  removeSorter: (id: string) => SorterType[];
  updateSorter: (id: string, arr: number[], indexList: number[]) => SorterType[];
};

const bubbleSortList = ({ sorters, removeSorter, updateSorter }: Props): HTMLElement => {
  container.innerHTML = '';
  sorters.forEach((elem: SorterType) => {
    if (elem.indexList === undefined) {
      throw new Error('IndexList is undefined');
    }
    bubbleSortListItem({
      sorterId: elem.sorterId,
      sorter: elem.sorterArr,
      indexList: elem.indexList,
      removeSorter: () => removeSorter(elem.sorterId),
      incSorter: (id: string, el: number[], index: number[]) =>
        updateSorter(elem.sorterId, el, index),
      decSorter: (id: string, el: number[], index: number[]) =>
        updateSorter(elem.sorterId, el, index),
    });
  });
  return container;
};

export default bubbleSortList;
