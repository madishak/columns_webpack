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

  const strToArray = str => str.split("").map(element => Number(element));

  const renderCollection = inputValue => {
    if (inputValue.length === 0) {
      return;
    }

    let currentStatesLength = currentStates.length - 1;

    let sort = new Sort(inputValue);
    let draw = new Draw(currentStates[currentStatesLength]);

    draw.drawArray();

    const closeButton = button({
      class: "columns__close",
      text: "&times;",
      id: "close"
    });

    // draw.columnsCloseInner.appendChild(closeButton);
    draw.columnsButtonsContainer.prepend(closeButton);

    closeButton.addEventListener("click", () => {
      currentStates.pop();
    });

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
    console.log(currentStates);
    renderCollection(newArr);
  });

  return wrapper;
};

export default bubbleSortApp;
