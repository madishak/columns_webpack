import renderHTML from './page.js';
import Sort from './sort';
import Draw from './draw';

import './style.css';

renderHTML();


const inputShow = document.getElementById('input');

inputShow.addEventListener('change', () => {
    //evt.preventDefault();
    //let linesWrapper = document.querySelector('.lines__wrapper');
    //document.body.appendChild(linesWrapper);
    renderCollection(inputShow.value);
});



const renderCollection = (inputValue) => {
    //let inputValue = document.querySelector('#input').value;
    console.log(inputValue);

    let sort = new Sort(inputValue);
    let draw = new Draw(sort.arr);



    draw.movement(sort.arr);
    draw.drawArray();


    let decrease = document.getElementById('dec');
    decrease.addEventListener('click', () => draw.movement(sort.decreaseSort()));

    let increase = document.getElementById('inc');
    increase.addEventListener('click', () => draw.movement(sort.increaseSort()));

    let deleteVal = document.getElementById('del');
    deleteVal.addEventListener('click',() => inputShow.value = "");
};

// let deleteVal = document.getElementById('del');
// deleteVal.addEventListener('click',() => {
//     return document.getElementById('input').value = "";
//
// });