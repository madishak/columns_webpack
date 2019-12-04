import { SorterType } from './interfaces';
import Sort from './sort';
import Draw from './draw';
import createElement from './commonComponents/createElement';
import wrapper from './commonComponents/columnsWrapper';
import button from './commonComponents/button';
import bubbleSortStateLogger from './bubbleSortLogger';
import State from './states';

class StateTransfer {
  // state: StateTypes;
  container: HTMLElement;
  public constructor() {
    // this.state = {
    //   list: []
    // };

    this.container = createElement({ tag: 'div', class: 'wrapperColumns' });
  }

  // public addState(value: ListTypes): StateTypes {
  //   this.state.list = [...this.state.list, value];
  //   return this.state;
  // }
  //
  // public removeSorter(index: number): StateTypes {
  //   this.state.list = this.state.list.reduce(
  //     (acc: ListTypes[], elem: ListTypes) => (elem.id !== index ? [...acc, elem] : acc),
  //     []
  //   );
  //   return this.state;
  // }
  //
  // public updateState(index: number, newState: number[]) {
  //   this.state.list.filter((elem: ListTypes): number[] => {
  //     if (index === elem.id) {
  //       elem.arr = newState;
  //       return elem.arr;
  //     }
  //     return elem.arr;
  //   });
  // }

  renderCollection = (sorterId: number, inputValue: number[]): void => {
    console.log(sorterId, inputValue);
    if (inputValue.length === 0) {
      return;
    }
    const state = new State();
    const sort = new Sort(inputValue);
    const draw = new Draw(inputValue);

    draw.drawArray();

    const closeButton = button({
      class: 'columns__close',
      text: '&times;',
      type: 'button'
    });

    closeButton.addEventListener('click', () => {
      state.removeSorter(sorterId);
      this.render(state.state.sorters);
    });

    draw.columnsCloseInner.prepend(closeButton);
    this.container.append(draw.columnsButtonsContainer);

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
    const updateSorterAnimation = (states: SorterType[]) => {
      console.log(states);
      states.filter((elem: SorterType): number[] => {
        if (sorterId === elem.sorterId) {
          draw.movement(elem.sorterArr);
          return elem.sorterArr;
        }
        return elem.sorterArr;
      });
    };
    buttonNext.addEventListener('click', () => {
      state.updateState(sorterId, sort.increaseSort());
      updateSorterAnimation(state.state.sorters);
      bubbleSortStateLogger(state.state.sorters);
    });

    buttonBack.addEventListener('click', () => {
      state.updateState(sorterId, sort.decreaseSort());
      updateSorterAnimation(state.state.sorters);
      bubbleSortStateLogger(state.state.sorters);
    });
    const buttonsInner = createElement({
      tag: 'div',
      class: 'columns__button-inner'
    });
    buttonsInner.append(buttonBack, buttonNext); // experimental technology "Node.append()"

    draw.columnsButtonsContainer.appendChild(buttonsInner);
  };
  public render(state: SorterType[]): HTMLElement {
    this.container.innerHTML = '';
    state.forEach((elem: SorterType) => this.renderCollection(elem.sorterId, elem.sorterArr));
    wrapper.appendChild(this.container);
    return this.container;
  }
}

export default StateTransfer;
