import Sort from './sort';
import Draw from './draw';
import createElement from "./ui/createElement"
import button from "./ui/button"
import inputText from "./ui/input";
import {columnsWrapper} from "./ui/columnsWrapper";

import './styles/css__reset.css';
import './styles/style.css';



const wrapper = createElement({tag:'div', class:'wrapper'});
document.body.appendChild(wrapper);

const form = createElement({tag:'form', class:'form'});
wrapper.appendChild(form);

const input = inputText({type: 'text', class:'form__input', id:'input', placeholder:'Enter numbers'});
form.appendChild(input);

const buttonsInner = createElement({tag:'div', class:"form__button-inner"});
form.appendChild(buttonsInner);

const startRender = button({type:'button', class:'form__button', text:'Start render', id:'start'});
buttonsInner.appendChild(startRender);

document.body.appendChild(columnsWrapper);


let currentStates = [];

const strToArray = (str) => str.split("").map(element => Number(element));

const renderCollection = inputValue => {
    if (inputValue.length === 0) {
        return;
    }

    let sort = new Sort(inputValue);
    let draw = new Draw(inputValue);

    draw.drawArray();

    const buttonBack = button({class:"columns__button", text:"назад", id:'dec'});

    const buttonNext = button({class:"columns__button", text:"вперед", id:'inc'});


    buttonBack.addEventListener('click', () => draw.movement(sort.decreaseSort()));
    buttonNext.addEventListener('click', () => draw.movement(sort.increaseSort()));

    const buttonsInner = createElement({tag:'div', class:"columns__button-inner"});
    buttonsInner.append(buttonBack, buttonNext); //experimental technology "Node.append()"


    draw.columnsButtonsContainer.appendChild(buttonsInner);

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