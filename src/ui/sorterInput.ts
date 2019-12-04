import createElement from './commonComponents/createElement';
import wrapper from './commonComponents/columnsWrapper';
import inputText from './commonComponents/input';
import button from './commonComponents/button';
import bubbleSortStateLogger from './bubbleSortLogger';
import StateTransfer from './bubbleSortApp';
import State from './states';

const sorterInput = (): HTMLElement => {
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
  const state = new State();
  input.addEventListener('input', (evt: Event) => {
    input.value = String((evt.target as HTMLInputElement).value.match(/\d+/g) || []);
  });

  startRender.addEventListener('click', () => {
    const newArr = strToArray(input.value);
    if (newArr.length) {
      state.addState({ sorterId: currentArrayId += 1, sorterArr: newArr });
    }
    stateTransfer.render(state.state.sorters);
    bubbleSortStateLogger(state.state.sorters);
  });

  wrapper.appendChild(stateTransfer.container);

  return wrapper;
};

export default sorterInput;
