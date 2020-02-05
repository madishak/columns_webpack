import createElement from './commonComponents/createElement';
import inputText from './commonComponents/input';
import button from './commonComponents/button';
import BubbleSortApp from './bubbleSortApp';
import State from './state';
import bubbleSortStateLogger from './bubbleSortLogger';
import _ from 'lodash';

const state = new State();
const startRenderHandler = (newArr: number[]): void => {
  if (newArr.length) {
    state.addSorter({ sorterId: _.uniqueId(), sorterArr: newArr });
  }
  // bubbleSortStateLogger(this.state.sorters);

  // return this.container;
};

const strToArray = (str: string): number[] =>
  str.split('').map((element: string) => Number(element));

const sorterInput = (): HTMLElement => {
  const form = createElement({ tag: 'form', class: 'form' });

  const input = inputText({
    type: 'text',
    class: 'form__input',
    id: 'input',
    placeholder: 'Enter numbers'
  });
  form.appendChild(input);

  const startRender = button({
    class: 'form__button',
    text: 'Start render',
    id: 'start',
    type: 'button'
  });
  form.appendChild(startRender);

  const bubbleSortApp = new BubbleSortApp();

  input.addEventListener('input', (evt: Event) => {
    input.value = String((evt.target as HTMLInputElement).value.match(/\d+/g) || []);
  });

  startRender.addEventListener('click', () => {
    const newArr = strToArray(input.value);
    startRenderHandler(newArr);
    state.addRef(bubbleSortApp.render);
    state.addRef(bubbleSortStateLogger);
    state.notification();
  });
  return form;
};

export default sorterInput;
