import _ from 'lodash';
import { SorterType, StateTypes } from './types';
import BubbleSort from './bubbleSort';
import DrawSorter from './drawSorter';
import bubbleSortStateLogger from './bubbleSortLogger';
import createElement from './commonComponents/createElement';
import button from './commonComponents/button';

class BubbleSortApp {
  //state: StateTypes;
  container: HTMLElement;
  public constructor() {
    // this.state = {
    //   sorters: []
    // };
    this.container = createElement({ tag: 'div', class: 'wrapperColumns' });
  }
  // public getSorter(): StateTypes {
  //   return this.state;
  // }
  // public addSorter(value: SorterType): StateTypes {
  //   this.state.sorters = [...this.state.sorters, value];
  //   return this.state;
  // }
  //
  // private removeSorter(index: number): StateTypes {
  //   this.state.sorters = this.state.sorters.filter((elem: SorterType) => elem.sorterId !== index);
  //   return this.state;
  // }
  //
  // private updateSorter(index: number, newState: number[]): SorterType[] {
  //   return this.state.sorters.filter((elem: SorterType): number[] => {
  //     if (index === elem.sorterId) {
  //       elem.sorterArr = newState;
  //       return elem.sorterArr;
  //     }
  //     return elem.sorterArr;
  //   });
  // }

  private renderSorter(sorterId: number, inputValue: number[]): void {
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
      // this.removeSorter(sorterId);
      // this.render();
    });

    drawSorter.columnsCloseInner.prepend(closeButton);
    this.container.append(drawSorter.columnsButtonsContainer);

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
    const updateSorterAnimation = (states: SorterType[]): SorterType[] => {
      return states.filter((elem: SorterType): number[] => {
        if (sorterId === elem.sorterId) {
          drawSorter.movement(elem.sorterArr);
          return elem.sorterArr;
        }
        return elem.sorterArr;
      });
    };
    buttonNext.addEventListener('click', () => {
      // this.updateSorter(sorterId, bubbleSort.increaseSort());
      // updateSorterAnimation(this.state.sorters);
      // bubbleSortStateLogger(this.state.sorters);
    });

    buttonBack.addEventListener('click', () => {
      // this.updateSorter(sorterId, bubbleSort.decreaseSort());
      // updateSorterAnimation(this.state.sorters);
      // bubbleSortStateLogger(this.state.sorters);
    });
    const buttonsInner = createElement({
      tag: 'div',
      class: 'columns__button-inner'
    });
    buttonsInner.append(buttonBack, buttonNext);
    drawSorter.columnsButtonsContainer.appendChild(buttonsInner);
  }
  public render(sorters: SorterType[]): HTMLElement {
    console.log('render!!!');
    const app = document.getElementById('app') as HTMLElement;
    this.container.innerHTML = '';
    //const { sorters } = this.state;
    sorters.forEach((elem: SorterType) => this.renderSorter(elem.sorterId, elem.sorterArr));
    app.append(this.container);
    return this.container;
  }
}

export default BubbleSortApp;
