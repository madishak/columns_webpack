import Sort from "./sort";
import Draw from "./draw";
import createElement from "./createElement";
import button from "./button";
import inputText from "./input";
import { columnsWrapper } from "./columnsWrapper";

const bubbleSortApp = () => {
  const wrapper = createElement({ tag: "div", class: "wrapper" });

  const form = createElement({ tag: "form", class: "form" });
  wrapper.appendChild(form);

  const input = inputText({
    type: "text",
    class: "form__input",
    id: "input",
    placeholder: "Enter numbers"
  });
  form.appendChild(input);

  const buttonsInner = createElement({
    tag: "div",
    class: "form__button-inner"
  });
  form.appendChild(buttonsInner);

  const startRender = button({
    type: "button",
    class: "form__button",
    text: "Start render",
    id: "start"
  });
  buttonsInner.appendChild(startRender);

  const strToArray = str => str.split("").map(element => Number(element));

  class Render {
    constructor() {
      this.state = [];
      this.container = createElement({ tag: "div", class: "wrapperColumns" });
      this.key = this.state.id;
    }

    getState(value) {
      this.state = [...this.state, value];
    }

    removeSorter(index) {
      let acc = [];
      return this.state.filter((elem, ind) => {
        if (elem.id !== index) {
          acc = [...acc, elem];
        }
        this.state = acc;
        return this.state;
      });
    }

    render() {
      this.container.innerHTML = "";
      this.state.map(elem => renderCollection(elem.id, elem.arr));
      wrapper.appendChild(this.container);
      return this.container;
    }
  }

  const render = new Render();

  let currentArrayId = 0;

  const renderCollection = (closeButtonId, inputValue) => {
    if (inputValue.length === 0) {
      return;
    }

    let sort = new Sort(inputValue);
    let draw = new Draw(inputValue);

    render.state.map(elem => {
      if (closeButtonId === elem.id) {
        elem.arr = sort.arrCopy;
      }
    });

    draw.drawArray();
    render.container.append(draw.columnsButtonsContainer);

    const closeButton = button({
      class: "columns__close",
      text: "&times;",
      id: closeButtonId
    });

    closeButton.addEventListener("click", () => {
      render.removeSorter(Number(closeButton.id));
      render.render();
    });

    draw.columnsCloseInner.prepend(closeButton);

    const buttonBack = button({
      class: "columns__button",
      text: "назад",
      id: "dec"
    });

    const buttonNext = button({
      class: "columns__button",
      text: "вперед",
      id: "inc"
    });

    buttonBack.addEventListener("click", () =>
      draw.movement(sort.decreaseSort())
    );
    buttonNext.addEventListener("click", () =>
      draw.movement(sort.increaseSort())
    );

    const buttonsInner = createElement({
      tag: "div",
      class: "columns__button-inner"
    });
    buttonsInner.append(buttonBack, buttonNext); //experimental technology "Node.append()"

    draw.columnsButtonsContainer.appendChild(buttonsInner);
  };

  input.addEventListener("input", evt => {
    input.value = evt.target.value.match(/\d+/g);
  });

  startRender.addEventListener("click", () => {
    const newArr = strToArray(input.value);
    render.getState({ id: currentArrayId++, arr: newArr });
    //console.log(render.state);
    render.render();
  });

  return wrapper;
};

export default bubbleSortApp;
