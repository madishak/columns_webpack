import createElement from '../CommonComponents/createElement';
import inputText from '../CommonComponents/input';
import button from '../CommonComponents/button';
import './style.css';

type SorterInputProps = {
  onClick: (arr: number[]) => number[];
  onTuck: () => void;
};

const strToArray = (str: string): number[] =>
  str.split('').map((element: string) => Number(element));

const sorterInput = ({ onClick, onTuck }: SorterInputProps): HTMLElement => {
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
  const startRender2 = button({
    class: 'form__button',
    text: 'Start render',
    id: 'start',
    type: 'button'
  });
  form.appendChild(startRender);
  form.appendChild(startRender2);
  input.addEventListener('input', (evt: Event) => {
    input.value = String((evt.target as HTMLInputElement).value.match(/\d+/g) || []);
  });

  startRender.addEventListener('click', () => {
    const newArr = strToArray(input.value);
    onClick(newArr);
  });
  startRender2.addEventListener('click', () => {
    onTuck();
  });
  return form;
};

export default sorterInput;
