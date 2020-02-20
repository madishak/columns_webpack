import BubbleSort from './bubbleSort';
import DrawSorter from '../sorter/drawSorter';
import button from '../commonComponents/button';
import { getAllSorters, removeSorters, updateSorters } from './bubbleSortStateCommunication';
import { container } from './sorterContainer';
import { SorterType } from '../types';
import createElement from '../commonComponents/createElement';

const renderSorter = (sorterId: number, inputValue: number[]): void => {
  if (inputValue.length === 0) {
    return;
  }
  const bubbleSort = new BubbleSort(inputValue);
  const drawSorter = new DrawSorter(inputValue);

  drawSorter.drawArray();

  const closeButton = button({
    class: 'columns__close',
    text: '&times;',
    type: 'button'
  });

  closeButton.addEventListener('click', () => {
    removeSorters(sorterId);
  });

  drawSorter.columnsCloseInner.prepend(closeButton);
  container.append(drawSorter.columnsButtonsContainer);

  const buttonBack = button({
    class: 'columns__button',
    text: 'назад',
    id: 'dec',
    type: 'button'
  });

  const buttonNext = button({
    class: 'columns__button',
    text: 'вперед',
    id: 'inc',
    type: 'button'
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
    updateSorters(sorterId, bubbleSort.increaseSort());
    updateSorterAnimation(getAllSorters());
  });

  buttonBack.addEventListener('click', () => {
    updateSorters(sorterId, bubbleSort.decreaseSort());
    updateSorterAnimation(getAllSorters());
  });
  const buttonsInner = createElement({
    tag: 'div',
    class: 'columns__button-inner'
  });
  buttonsInner.append(buttonBack, buttonNext);
  drawSorter.columnsButtonsContainer.appendChild(buttonsInner);
};

export default renderSorter;
