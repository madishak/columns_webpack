import renderHTML from './page.js';
import Sort from './sort';
import Draw from './draw';
import createElement from "./ui/createElement";
import button from "./ui/button"
import { linesWrapper }  from "./ui/linesWrapper"
import { buttonsInner} from "./ui/buttonsInner";

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

    //buttonsInner = createElement('div', "form__button-inner");
    buttonsInner.appendChild(buttonBack);
    buttonsInner.appendChild(buttonNext);
    linesWrapper.appendChild(buttonsInner);


    const deleteVal = document.getElementById('del');
    deleteVal.addEventListener('click',() => inputShow.value = "");
};

