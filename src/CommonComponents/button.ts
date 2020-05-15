import createElement from './createElement';
import { buttonAttributes } from '../types';

const button = (attribute: buttonAttributes): HTMLButtonElement => {
  const buttonElement: HTMLButtonElement = createElement({
    tag: 'button',
    class: attribute.class,
    text: attribute.text,
  }) as HTMLButtonElement;
  buttonElement.type = attribute.type;
  if (attribute.id) {
    buttonElement.id = attribute.id;
  }
  return buttonElement;
};

export default button;
