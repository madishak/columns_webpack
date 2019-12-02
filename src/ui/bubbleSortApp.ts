import { StateTypes, ListTypes } from './interfaces';
import States from './state';
import Sort from './sort';
import Draw from './draw';
import createElement from './createElement';
import wrapper from './columnsWrapper';
import button from './button';
import inputText from './input';
import bubbleSortStateLogger from './bubbleSortLogger';

class StateTransfer {
  container: HTMLElement;
  public constructor() {
    this.container = createElement({ tag: 'div', class: 'wrapperColumns' });
  }

  renderCollection = (sorterId: number, inputValue: number[]): void => {
    // console.log(sorterId, inputValue);
    if (inputValue.length === 0) {
      return;
    }
    const state = new States();
    const sort = new Sort(inputValue);
    const draw = new Draw(inputValue);

    // this.state.list.map((elem: ListTypes): number[] => {
    //   if (sorterId === elem.id) {
    //     elem.arr = sort.arrCopy;
    //     return elem.arr;
    //   }
    //   return elem.arr;
    // });
    draw.drawArray();

    const closeButton = button({
      class: 'columns__close',
      text: '&times;',
      type: 'button'
    });

    closeButton.addEventListener('click', () => {
      state.removeSorter(sorterId);
      this.render(state.state.list);
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
      state.updateState(sorterId, sort.increaseSort());
      updateSorterAnimation(state.state.list);
      bubbleSortStateLogger(state.state.list);
    });

    buttonBack.addEventListener('click', () => {
      state.updateState(sorterId, sort.decreaseSort());
      updateSorterAnimation(state.state.list);
      bubbleSortStateLogger(state.state.list);
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
  const state = new States();
  const stateTransfer = new StateTransfer();
  input.addEventListener('input', (evt: Event) => {
    input.value = String((evt.target as HTMLInputElement).value.match(/\d+/g) || []);
  });

  startRender.addEventListener('click', () => {
    const newArr = strToArray(input.value);
    if (newArr.length) {
      state.addState({ id: currentArrayId += 1, arr: newArr });
    }
    // console.log(state.state);
    stateTransfer.render(state.state.list);
    bubbleSortStateLogger(state.state.list);
  });

  wrapper.appendChild(stateTransfer.container);

  return wrapper;
};

export default bubbleSortApp;
