import Sort from './sort';
import Draw from './draw';
// import renderCollection from "./renderCollection";
// import StateTransfer from "./stateTransfer";
import createElement from './createElement';
import { wrapper } from './columnsWrapper';
import button from './button';
import inputText from './input';

const bubbleSortApp = () => {
  // const wrapper = createElement({ tag: "div", class: "wrapper" });

  const form = createElement({ tag: 'form', class: 'form' });
  wrapper.appendChild(form);

  const input = inputText({
    type: 'text',
    class: 'form__input',
    id: 'input',
    placeholder: 'Enter numbers'
  });
  form.appendChild(input);

  const buttonsInner = createElement({
    tag: 'div',
    class: 'form__button-inner'
  });
  form.appendChild(buttonsInner);

  const startRender = button({
    type: 'button',
    class: 'form__button',
    text: 'Start render',
    id: 'start'
  });
  buttonsInner.appendChild(startRender);

  const strToArray = str => str.split('').map(element => Number(element));

  class StateTransfer {
    constructor() {
      this.state = [];
      this.container = createElement({ tag: 'div', class: 'wrapperColumns' });
      this.key = this.state.id;
    }

    setState(value) {
      this.state = [...this.state, value];
    }

    removeSorter(index) {
      this.state = this.state.reduce(
        (acc, elem) => (elem.id !== index ? (acc = [...acc, elem]) : acc),
        []
      );
    }

    render() {
      this.container.innerHTML = '';
      this.state.map(elem => renderCollection(elem.id, elem.arr));
      // console.log(this.container);
      wrapper.appendChild(this.container);
      return this.container;
    }
  }

  const render = new StateTransfer();

  let currentArrayId = 0;
  const renderCollection = (closeButtonId, inputValue) => {
    if (inputValue.length === 0) {
      return;
    }
    const sort = new Sort(inputValue);
    const draw = new Draw(inputValue);

    render.state.map(elem => (closeButtonId === elem.id ? (elem.arr = sort.arrCopy) : elem.arr));
    draw.drawArray();

    const closeButton = button({
      class: 'columns__close',
      text: '&times;'
    });

    closeButton.addEventListener('click', () => {
      render.removeSorter(closeButtonId);
      render.render();
    });

    draw.columnsCloseInner.prepend(closeButton);
    render.container.append(draw.columnsButtonsContainer);

    const buttonBack = button({
      class: 'columns__button',
      text: 'назад',
      id: 'dec'
    });

    const buttonNext = button({
      class: 'columns__button',
      text: 'вперед',
      id: 'inc'
    });

    buttonBack.addEventListener('click', () => draw.movement(sort.decreaseSort()));
    buttonNext.addEventListener('click', () => draw.movement(sort.increaseSort()));

    const buttonsInner = createElement({
      tag: 'div',
      class: 'columns__button-inner'
    });
    buttonsInner.append(buttonBack, buttonNext); //experimental technology "Node.append()"

    draw.columnsButtonsContainer.appendChild(buttonsInner);

    //wrapper.append(render.container);
  };

  input.addEventListener('input', evt => {
    input.value = evt.target.value.match(/\d+/g);
  });

  startRender.addEventListener('click', () => {
    const newArr = strToArray(input.value);
    render.setState({ id: currentArrayId++, arr: newArr });
    //console.log(render.state);
    render.render();
  });

  wrapper.appendChild(render.container);

  return wrapper;
};

export default bubbleSortApp;
