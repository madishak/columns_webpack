import BubbleSort from '../BubbleSort/test';
import Draw from '../SorterDrawer';
import button from '../CommonComponents/button';
import { getAllSorters } from '../SorterControllers/sortersController';
import container from '../BubbleSortListContainer';
import { SorterType } from '../types';
import createElement from '../CommonComponents/createElement';

type Props = {
  sorterId: string;
  sorter: number[];
  removeSorter: () => SorterType[];
  incSorter: (id: string, arr: number[]) => SorterType[];
  decSorter: (id: string, arr: number[]) => SorterType[];
};

const bubbleSort = new BubbleSort();

const bubbleSortListItem = ({
  sorterId,
  sorter,
  removeSorter,
  incSorter,
  decSorter,
}: Props): void => {
  if (sorter.length === 0) {
    return;
  }

  const drawSorter = new Draw(sorter);

  drawSorter.drawArray();

  const closeButton = button({
    class: 'columns__close',
    text: '&times;',
    type: 'button',
  });

  closeButton.addEventListener('click', () => removeSorter());

  drawSorter.columnsCloseInner.prepend(closeButton);
  container.append(drawSorter.columnsButtonsContainer);

  const buttonBack = button({
    class: 'columns__button',
    text: 'назад',
    id: 'dec',
    type: 'button',
  });

  const buttonNext = button({
    class: 'columns__button',
    text: 'вперед',
    id: 'inc',
    type: 'button',
  });
  const updateSorterAnimation = (states: SorterType[]): void => {
    return states.forEach((elem: SorterType): number[] => {
      if (sorterId === elem.sorterId) {
        drawSorter.movement(elem.sorterArr);
        return elem.sorterArr;
      }
      return elem.sorterArr;
    });
  };
  buttonNext.addEventListener('click', () => {
    // updateSorters(sorterId, bubbleSort.increaseSort());
    incSorter(sorterId, bubbleSort.increaseSort(sorterId, sorter));
    updateSorterAnimation(getAllSorters());
  });

  buttonBack.addEventListener('click', () => {
    // updateSorters(sorterId, bubbleSort.decreaseSort());
    decSorter(sorterId, bubbleSort.decreaseSort(sorter));
    updateSorterAnimation(getAllSorters());
  });
  const buttonsInner = createElement({
    tag: 'div',
    class: 'columns__button-inner',
  });
  buttonsInner.append(buttonBack, buttonNext);
  drawSorter.columnsButtonsContainer.appendChild(buttonsInner);
};

export default bubbleSortListItem;
