import createElement from './createElement';

const button = attribute => {
  const button = createElement({ tag: 'button', class: attribute.class, text: attribute.text });
  button.type = attribute.type;
  button.id = attribute.id;
  return button;
};

export default button;
