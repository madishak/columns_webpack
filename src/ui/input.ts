import createElement from './createElement';

type inputAttributes = {
  class: string;
  type: string;
  id: string;
  placeholder: string;
};

const inputText = (attribute: inputAttributes): HTMLInputElement => {
  const input: HTMLInputElement = createElement({ tag: 'input', class: attribute.class });
  input.type = attribute.type;
  input.id = attribute.id;
  input.placeholder = attribute.placeholder;
  return input;
};

export default inputText;
