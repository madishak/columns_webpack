import { StateTypes, ListTypes } from './interfaces';
import Sort from './sort';
import Draw from './draw';
import createElement from './createElement';
import wrapper from './columnsWrapper';
import button from './button';
import inputText from './input';
import bubbleSortStateLogger from './bubbleSortLogger';

class StateTransfer {
  state: StateTypes;
  container: HTMLElement;
  public constructor() {
    this.state = {
      list: []
    };
    this.container = createElement({ tag: 'div', class: 'wrapperColumns' });
  }

  public addState(value: ListTypes): StateTypes {
    this.state.list = [...this.state.list, value];
    return this.state;
  }

  public removeSorter(index: number): StateTypes {
    this.state.list = this.state.list.reduce(
      (acc: ListTypes[], elem: ListTypes) => (elem.id !== index ? [...acc, elem] : acc),
      []
    );
    return this.state;
  }

  public updateState(index: number, newState: number[]) {
    this.state.list.filter((elem: ListTypes): number[] => {
      if (index === elem.id) {
        elem.arr = newState;
        return elem.arr;
      }
      return elem.arr;
    });
  }

  renderCollection = (sorterId: number, inputValue: number[]): void => {
    // console.log(sorterId, inputValue);
    if (inputValue.length === 0) {
      return;
    }
    const sort = new Sort(inputValue);
    const draw = new Draw(inputValue);

    draw.drawArray();

    const closeButton = button({
      class: 'columns__close',
      text: '&times;',
      type: 'button'
    });

    closeButton.addEventListener('click', () => {
      this.removeSorter(sorterId);
      this.render(this.state.list);
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
    const updateSorterAnimation = (states: ListTypes[]) => {
      console.log(states);
      states.filter((elem: ListTypes): number[] => {
        if (sorterId === elem.id) {
          draw.movement(elem.arr);
          return elem.arr;
        }
        return elem.arr;
      });
    };
    buttonNext.addEventListener('click', () => {
      this.updateState(sorterId, sort.increaseSort());
      updateSorterAnimation(this.state.list);
      bubbleSortStateLogger(this.state.list);
    });

    buttonBack.addEventListener('click', () => {
      this.updateState(sorterId, sort.decreaseSort());
      updateSorterAnimation(this.state.list);
      bubbleSortStateLogger(this.state.list);
    });
    const buttonsInner = createElement({
      tag: 'div',
      class: 'columns__button-inner'
    });
    buttonsInner.append(buttonBack, buttonNext); // experimental technology "Node.append()"

    draw.columnsButtonsContainer.appendChild(buttonsInner);
  };
  public render(state: ListTypes[]): HTMLElement {
    // const state = new States();
    this.container.innerHTML = '';
    // console.log(state);
    state.map((elem: ListTypes) => this.renderCollection(elem.id, elem.arr));
    wrapper.appendChild(this.container);
    return this.container;
  }
}

const bubbleSortApp = (): HTMLElement => {
  const form = createElement({ tag: 'form', class: 'form' });
  wrapper.appendChild(form);

  const input = inputText({
    type: 'text',
    class: 'form__input',
    id: 'input',
    placeholder: 'Enter numbers'
  });
  form.appendChild(input);

  const buttonsInner = createElement({
    tag: 'div',
    class: 'form__button-inner'
  });
  form.appendChild(buttonsInner);

  const startRender = button({
    class: 'form__button',
    text: 'Start render',
    id: 'start',
    type: 'button'
  });
  buttonsInner.appendChild(startRender);

  const strToArray = (str: string): number[] =>
    str.split('').map((element: string) => Number(element));
  let currentArrayId = 0;
  const stateTransfer = new StateTransfer();
  input.addEventListener('input', (evt: Event) => {
    input.value = String((evt.target as HTMLInputElement).value.match(/\d+/g) || []);
  });

  startRender.addEventListener('click', () => {
    const newArr = strToArray(input.value);
    if (newArr.length) {
      stateTransfer.addState({ id: currentArrayId += 1, arr: newArr });
    }
    // console.log(state.state);
    stateTransfer.render(stateTransfer.state.list);
    bubbleSortStateLogger(stateTransfer.state.list);
  });

  wrapper.appendChild(stateTransfer.container);

  return wrapper;
};

export default bubbleSortApp;
