import renderHTML from './ui/page.js';
import Sort from './sort';
import Draw from './draw';
import button from "./ui/button"
import createElement from "./ui/createElement"

import './style.css';

renderHTML();

const inputShow = document.getElementById('input');

let currentStates = [];

const strToArray = (str) => str.split("").map(element => Number(element));

const renderCollection = inputValue => {
    if (inputValue.length === 0) {
        return;
    }

    let sort = new Sort(inputValue);
    let draw = new Draw(inputValue);
    //sort.bubbleSort();
    draw.drawArray();


    //const errorMessage = createElement('div', 'error__message', 'Введите цифры, вместо букв');

    // inputValue.forEach(value => {
    //     //console.log(value);
    //     if (value === '') {
    //         return draw.linesButtonsContainer.appendChild(errorMessage);
    //
    //     }
    //
    //
    // });


    const buttonBack = button("lines__button", "назад", 'dec');

    const buttonNext = button("lines__button", "вперед", 'inc');


    buttonBack.addEventListener('click', () => draw.movement(sort.decreaseSort()));
    buttonNext.addEventListener('click', () => draw.movement(sort.increaseSort()));

    const buttonsInner = createElement('div', "lines__button-inner");
    buttonsInner.append(buttonBack, buttonNext); //experimental technology "Node.append()"


    draw.linesButtonsContainer.appendChild(buttonsInner);

};

inputShow.addEventListener('input', (evt) => {
    inputShow.value = evt.target.value.match(/\d+/g);
});

let startRender = document.querySelector('#start');
startRender.addEventListener('click', () => {
    const newArr = strToArray(inputShow.value);
    currentStates = [...newArr];
    console.log(currentStates);
    return renderCollection(newArr);
});