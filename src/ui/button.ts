import createElement from './createElement';

type buttonAttributes = {
  tag: string;
  class: string;
  text: string;
  type: string;
  id: string;
};

const button = (attribute: buttonAttributes): HTMLButtonElement => {
  const buttonElement = createElement({
    tag: 'button',
    class: attribute.class,
    text: attribute.text
  });
  buttonElement.type = attribute.type;
  buttonElement.id = attribute.id;
  return buttonElement;
};

export default button;
