const createElement = property => {
  const element = document.createElement(property.tag);

  if (property.class) {
    element.classList.add(property.class);
  }

  if (property.text) {
    element.innerHTML = property.text;
  }

  return element;
};

export default createElement;
