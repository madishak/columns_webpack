import renderHTML from './page.js';
import Sort from './sort';
import Draw from './draw';
import button from "./components/button"

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

const renderCollection = (inputValue) => {
    console.log(inputValue);

    const sort = new Sort(inputValue);
    const draw = new Draw(sort.arr);


    draw.drawArray();
    draw.movement(sort.arr);


    const buttonBack = button("form__button", "назад", 'dec');
    const buttonNext = button("form__button", "вперед", 'inc');

    buttonBack.addEventListener('click', () => draw.movement(sort.decreaseSort()));
    buttonNext.addEventListener('click', () => draw.movement(sort.increaseSort()));

    document.body.append(buttonBack, buttonNext);

    const deleteVal = document.getElementById('del');
    deleteVal.addEventListener('click',() => inputShow.value = "");
};

