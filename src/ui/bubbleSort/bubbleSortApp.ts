import { SorterType } from '../types';
import BubbleSort from './bubbleSort';
import DrawSorter from '../sorter/drawSorter';
import createElement from '../commonComponents/createElement';
import button from '../commonComponents/button';
import { getAllSorters, removeSorters, updateSorters } from './bubbleSortStateCommunication';
import './style.css';

const container = createElement({ tag: 'div', class: 'wrapperColumns' });

const renderSorter = (sorterId: string, inputValue: number[]): void => {
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

const render = (sorters: SorterType[]): HTMLElement => {
  const app = document.getElementById('app') as HTMLElement;
  container.innerHTML = '';
  sorters.forEach((elem: SorterType) => renderSorter(elem.sorterId, elem.sorterArr));
  app.append(container);
  return container;
};

export default render;
