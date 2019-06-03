import renderHTML from './page.js';
import Sort from './sort';
import Draw from './draw';

import './style.css';

renderHTML();
// console.log(t.butBack.id);

let inputValue = document.querySelector('input').value;
console.log(inputValue);
let sort = new Sort(inputValue);

let draw = new Draw(sort.arr);


draw.movement(sort.arr);

const inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => draw.drawArray());


let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => draw.movement(sort.decreaseSort()));

let increase = document.getElementById('inc');
increase.addEventListener('click', () => draw.movement(sort.increaseSort()));


