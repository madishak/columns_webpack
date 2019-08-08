import Sort from './sort';
import Draw from './draw';
import createElement from "./ui/createElement"
import button from "./ui/button"
import inputText from "./ui/input";
import {linesWrapper} from "./ui/linesWrapper";

import './styles/css__reset.css';
import './styles/style.css';


const wrapper = createElement('div', 'wrapper');
document.body.appendChild(wrapper);

const form = createElement('form', 'form');
wrapper.appendChild(form);

const input = inputText('', 'form__input', 'input', 'Enter numbers');
form.appendChild(input);

const buttonsInner = createElement('div', "form__button-inner");
form.appendChild(buttonsInner);

const startRender = button('form__button', 'Start render', 'start');
buttonsInner.appendChild(startRender);

document.body.appendChild(linesWrapper);


let currentStates = [];

const strToArray = (str) => str.split("").map(element => Number(element));

const renderCollection = inputValue => {
    if (inputValue.length === 0) {
        return;
    }

    let sort = new Sort(inputValue);
    let draw = new Draw(inputValue);

    draw.drawArray();

    const buttonBack = button("lines__button", "назад", 'dec');

    const buttonNext = button("lines__button", "вперед", 'inc');


    buttonBack.addEventListener('click', () => draw.movement(sort.decreaseSort()));
    buttonNext.addEventListener('click', () => draw.movement(sort.increaseSort()));

    const buttonsInner = createElement('div', "lines__button-inner");
    buttonsInner.append(buttonBack, buttonNext); //experimental technology "Node.append()"


    draw.linesButtonsContainer.appendChild(buttonsInner);

};

input.addEventListener('input', (evt) => {
    input.value = evt.target.value.match(/\d+/g);
});


startRender.addEventListener('click', () => {
    const newArr = strToArray(input.value);
    currentStates = [...newArr];
    console.log(currentStates);
    renderCollection(newArr);
});