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

  let currentStates = [];

  const strToArray = str => str.split("").map(element => Number(element));
  let ind = 0;

  class Render {
    constructor() {
      this.state = [];
      this.currentStates = [];
      this.elem = createElement({ tag: "div", class: "wrapperColumns" });
    }

    // getArray() {
    //     return this.state;
    // }
    //
    // currentStates() {
    //     this.currentStates = [...this.currentStates, this.state];
    //     return this.currentStates;
    // }

    render() {
      this.elem.innerHTML = "";
      // currentStates.map(elem => {
      //     renderCollection(elem);
      // }).forEach(value => this.elem.append(value));
      return this.elem;
    }
  }

  const renderAllCollection = value => {
    return currentStates.map(elem => renderCollection(elem));
  };

  const removeArray = (index, array) =>
    array.reduce((acc, elem, ind) => {
      if (ind !== index) {
        acc = [...acc, elem];
      }
      return acc;
    }, []);

  const rend = new Render();

  const renderCollection = inputValue => {
    //console.log(this.currentStates);
    // values.map(elem => {
    if (inputValue.length === 0) {
      return;
    }

    let sort = new Sort(inputValue);
    let draw = new Draw(inputValue);

    draw.drawArray();
    columnsWrapper.append(draw.columnsButtonsContainer);

    const closeButton = button({
      class: "columns__close",
      text: "&times;",
      id: ind++
    });

    closeButton.addEventListener("click", () => {
      console.log(closeButton.id);
      const newArr = removeArray(Number(closeButton.id), currentStates);

      console.log(removeArray(Number(closeButton.id), currentStates));

      rend.elem.append(draw.columnsButtonsContainer);
    });

    draw.columnsButtonsContainer.prepend(closeButton);

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

    currentStates = [...currentStates, newArr];

    rend.state = [newArr];

    renderCollection(newArr);

    rend.elem.innerHTML = "";
    rend.elem.append(columnsWrapper);

    wrapper.appendChild(rend.elem);
  });

  return wrapper;
};

export default bubbleSortApp;
