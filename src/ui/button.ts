import createElement from './createElement';

type buttonAttributes = {
  class: string;
  text: string;
  type: string;
  id?: string;
};

const button = (attribute: buttonAttributes): HTMLButtonElement => {
  const buttonElement: HTMLButtonElement = createElement({
    tag: 'button',
    class: attribute.class,
    text: attribute.text
  });
  buttonElement.type = attribute.type;
  if (attribute.id) {
    buttonElement.id = attribute.id;
  }
  return buttonElement;
};

export default button;
