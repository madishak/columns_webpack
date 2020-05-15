import createElement from './createElement';
import { inputAttributes } from '../types';

const inputText = (attribute: inputAttributes): HTMLInputElement => {
  const input: HTMLInputElement = createElement({
    tag: 'input',
    class: attribute.class,
  }) as HTMLInputElement;
  input.type = attribute.type;
  input.id = attribute.id;
  input.placeholder = attribute.placeholder;
  return input;
};

export default inputText;
