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

  wrapper.appendChild(columnsWrapper);

  let currentStates = [];

  // const addArray = () =>
  //   currentStates.map(value => {
  //     console.log(value);
  //     //renderCollection(value);
  //   });

  // const removeArray = index => {
  //   return currentStates.filter((element, ind) => index !== ind);
  // };

  const strToArray = str => str.split("").map(element => Number(element));
  let ind = 0;

  // let newState = removeArray(closeButton.id);

  // const newState = removeArray(1);
  // const render = (values) => {

  class CurrentStates {
    constructor(value) {
      this.state = value;
      this.currentStates = [];
    }

    addArray() {
      this.currentStates = [...this.currentStates, this.state];
      return this.currentStates;
    }

    removeArray(index) {
      //const newState =  this.state.filter((element, ind) => index !== ind);
      this.state = 0;
      return this.state;
    }
  }

  const renderCollection = inputValue => {
    // inputValue.map(elem => {
    if (inputValue.length === 0) {
      return;
    }

    //let currentStatesLength = currentStates.length - 1;

    let sort = new Sort(inputValue);
    let draw = new Draw(inputValue);
    // let draw = new Draw(currentStates[currentStatesLength]);

    draw.drawArray();

    const setId = () => {};
    const closeButton = button({
      class: "columns__close",
      text: "&times;",
      id: ind++
    });

    closeButton.addEventListener("click", () => {
      //console.log(closeButton.id);
      // renderCollection();
      let currentStates = new CurrentStates(inputValue);

      currentStates.removeArray(closeButton.id);
      console.log(currentStates.currentStates);
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
    // });
    // return inputValues;
  };

  //   return values.map(arr => {
  //     renderCollection(arr);
  //   });
  //
  // };

  input.addEventListener("input", evt => {
    input.value = evt.target.value.match(/\d+/g);
  });

  startRender.addEventListener("click", () => {
    const newArr = strToArray(input.value);

    //console.log(currentStates);
    // addArray();
    let currentState = new CurrentStates(newArr);
    // console.log(currentState.addArray(newArr));
    currentStates = [...currentStates, currentState.state];
    // console.log(currentStates);
    renderCollection(currentState.state);
  });

  return wrapper;
};

export default bubbleSortApp;
