import Sort from './sort';
import Draw from './draw';
import createElement from './createElement';
import { wrapper } from './columnsWrapper';
import button from './button';
import inputText from './input';

interface StateTypes {
  id: number;
  arr: number[];
}

class StateTransfer {
  state: StateTypes[];
  container: HTMLElement;

  public constructor() {
    this.state = [];
    this.container = createElement({ tag: 'div', class: 'wrapperColumns' });
  }

  public setState(value: StateTypes): StateTypes[] {
    this.state = [...this.state, value];
    return this.state;
  }

  removeSorter(index: number): StateTypes[] {
    this.state = this.state.reduce(
      (acc: StateTypes[], elem: StateTypes) => (elem.id !== index ? [...acc, elem] : acc),
      []
    );
    return this.state;
  }

  render(): HTMLElement {
    this.container.innerHTML = '';
    this.state.map(elem => renderCollection(elem.id, elem.arr));
    wrapper.appendChild(this.container);
    return this.container;
  }
}

const stateTransfer = new StateTransfer();

const renderCollection = (closeButtonId: number, inputValue: number[]): void => {
  if (inputValue.length === 0) {
    return;
  }
  const sort = new Sort(inputValue);
  const draw = new Draw(inputValue);

  stateTransfer.state.map((elem: StateTypes) =>
    closeButtonId === elem.id ? (elem.arr = sort.arrCopy) : elem.arr
  );
  draw.drawArray();

  const closeButton = button({
    class: 'columns__close',
    text: '&times;',
    type: 'button'
  });

  closeButton.addEventListener('click', () => {
    stateTransfer.removeSorter(closeButtonId);
    stateTransfer.render();
  });

  draw.columnsCloseInner.prepend(closeButton);
  stateTransfer.container.append(draw.columnsButtonsContainer);

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

  buttonBack.addEventListener('click', () => draw.movement(sort.decreaseSort()));
  buttonNext.addEventListener('click', () => draw.movement(sort.increaseSort()));

  const buttonsInner = createElement({
    tag: 'div',
    class: 'columns__button-inner'
  });
  buttonsInner.append(buttonBack, buttonNext); // experimental technology "Node.append()"

  draw.columnsButtonsContainer.appendChild(buttonsInner);
};

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

  input.addEventListener('input', (evt: Event) => {
    input.value = String(((evt.target as HTMLInputElement).value.match(/\d+/g)));
  });

  startRender.addEventListener('click', () => {
    const newArr = strToArray(input.value);
    stateTransfer.setState({ id: currentArrayId += 1, arr: newArr });
    stateTransfer.render();
  });

  wrapper.appendChild(stateTransfer.container);

  return wrapper;
};

export default bubbleSortApp;
