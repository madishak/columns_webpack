import createElement from './commonComponents/createElement';
import inputText from './commonComponents/input';
import button from './commonComponents/button';
import { addSorters } from './stateCommunication';

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
  input.addEventListener('input', (evt: Event) => {
    input.value = String((evt.target as HTMLInputElement).value.match(/\d+/g) || []);
  });

  startRender.addEventListener('click', () => {
    const newArr = strToArray(input.value);
    addSorters(newArr);
  });
  return form;
};

export default sorterInput;
