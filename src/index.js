import renderHTML from './page.js';
import Sort from './sort';
import Draw from './draw';
import button from "./ui/button"
import createElement from "./ui/createElement"

import './style.css';

renderHTML();

const inputShow = document.getElementById('input');

const strToArray = (str) => {
    return str.split("").map(element => {
        Number(element);

        if (isNaN(element)) {
            console.log('Введите цифры, вместо букв');
            return element;
        }
        return element;

    });
};

inputShow.addEventListener('change', () => {
    const newArr = strToArray(inputShow.value);
    renderCollection(newArr);
});

const renderCollection = inputValue => {

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


    let deleteVal = document.querySelector('#del');
    deleteVal.addEventListener('click', () => (inputShow.value = ''));
};

