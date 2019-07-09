import renderHTML from './page.js';
import Sort from './sort';
import Draw from './draw';
import button from "./components/button"

import './style.css';

renderHTML();


const inputShow = document.getElementById('input');

inputShow.addEventListener('change', () => {
    renderCollection(inputShow.value);
});



const renderCollection = (inputValue) => {
    //let inputValue = document.querySelector('#input').value;
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

