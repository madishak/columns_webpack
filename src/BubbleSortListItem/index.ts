import BubbleSort from '../BubbleSort';
import Draw from '../SorterDrawer';
import button from '../CommonComponents/button';
import { appContainer, getAllSorters } from '../SorterControllers/sortersController';
import container from '../BubbleSortListContainer';
import { SorterType } from '../types';
import createElement from '../CommonComponents/createElement';

// type Props0 = {
//   sorterId: string;
//   sorter: number[];
//   removeSorter: () => SorterType[];
//   incSorter: (id: string, arr: number[]) => SorterType[];
//   decSorter: (id: string, arr: number[]) => SorterType[];
// };

type Props = {
  sorterId: string;
  sorter: number[];
  removeSorter: () => SorterType[];
  incSorter: (id: string, arr: number[]) => SorterType[];
  decSorter: (id: string, arr: number[]) => SorterType[];
};

let virtualDom: string[] = [];

const bubbleSort = new BubbleSort();

// export const drawSort = (sorter: number[]) => new Draw(sorter);

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

  console.log('IDshki', virtualDom);

  // const drawSorter = new Draw();
  const drawSorter = new Draw(sorter);
  // if (!virtualDom.includes(sorterId)) {
  // virtualDom = [...virtualDom, sorterId];
  drawSorter.drawArray();
  // }

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
  // const updateSorterAnimation = (states: SorterType[]): void => {
  //   return states.forEach((elem: SorterType): number[] => {
  //     if (sorterId === elem.sorterId) {
  //       drawSorter.movement(elem.sorterArr);
  //       return elem.sorterArr;
  //     }
  //     return elem.sorterArr;
  //   });
  // };
  buttonNext.addEventListener('click', () => {
    // updateSorters(sorterId, bubbleSort.increaseSort());
    incSorter(sorterId, bubbleSort.increaseSort(sorterId, sorter));
    // updateSorterAnimation(getAllSorters());
    drawSorter.movement(sorter);
  });

  buttonBack.addEventListener('click', () => {
    // updateSorters(sorterId, bubbleSort.decreaseSort());
    decSorter(sorterId, bubbleSort.decreaseSort(sorterId, sorter));
    // updateSorterAnimation(getAllSorters());
    drawSorter.movement(sorter);
  });
  const buttonsInner = createElement({
    tag: 'div',
    class: 'columns__button-inner',
  });
  buttonsInner.append(buttonBack, buttonNext);
  drawSorter.columnsButtonsContainer.appendChild(buttonsInner);

  // const app = document.getElementById('app');
  // if (app === null) {
  //   throw new Error('App container is not found');
  // }
  // app.append(drawSorter.columnsButtonsContainer);
};

// export const bubbleSortListItemActions = ({
//   sorterId,
//   sorter,
//   removeSorter,
//   incSorter,
//   decSorter,
// }: Props) => {
//   if (sorter.length === 0) {
//     return;
//   }
//   const drawSorter = new Draw();
//   console.log(drawSorter.columnsButtonsContainer);
//   // const drawSorter = drawSort(sorter);
//   const closeButton = document.querySelector('.columns__close') || null;
//   const buttonNext = document.querySelector('#inc');
//   const buttonBack = document.querySelector('#dec');
//   if (closeButton === null) {
//     throw new Error('closeButton is not found');
//   }
//   if (buttonNext === null || buttonBack === null) {
//     throw new Error('buttonNext and buttonBack are not found');
//   }
//   closeButton.addEventListener('click', () => removeSorter());
//
//   buttonNext.addEventListener('click', () => {
//     // updateSorters(sorterId, bubbleSort.increaseSort());
//     incSorter(sorterId, bubbleSort.increaseSort(sorterId, sorter));
//     drawSorter.movement(sorter);
//   });
//
//   buttonBack.addEventListener('click', () => {
//     // updateSorters(sorterId, bubbleSort.decreaseSort());
//     decSorter(sorterId, bubbleSort.decreaseSort(sorterId, sorter));
//     // updateSorterAnimation(getAllSorters());
//     drawSorter.movement(sorter);
//   });
// };

export default bubbleSortListItem;
