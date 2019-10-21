import createElement from './createElement';

const inputText = attribute => {
  const input = createElement({ tag: 'input', class: attribute.class });
  input.type = attribute.type;
  input.id = attribute.id;
  input.placeholder = attribute.placeholder;
  return input;
};

export default inputText;
