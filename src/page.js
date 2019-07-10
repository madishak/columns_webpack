import createElement from './ui/createElement.js';
import button from "./ui/button"
import inputText from "./ui/input"
import { linesWrapper } from "./ui/linesWrapper"

const renderHTML = () => {

    const wrapper = createElement('div', 'wrapper');
    document.body.appendChild(wrapper);

    const form = createElement('form', 'form');
    wrapper.appendChild(form);

    // const input = createElement('input', 'form__input');
    // input.type = "text";
    // input.id = 'input';
    // input.placeholder = 'Enter numbers';
    const input = inputText('', 'form__input', 'input', 'Enter numbers');
    form.appendChild(input);

    const buttonsInner = createElement('div', "form__button-inner");
    form.appendChild(buttonsInner);

    // const buttonBack = createElement('button', "form__button", "назад");
    // buttonBack.id = "dec";
    // buttonBack.type = "button";
    // buttonsInner.appendChild(buttonBack);
    //
    // const buttonNext = createElement('button', "form__button", "вперед");
    // buttonNext.id = "inc";
    // buttonNext.type = "button";
    // buttonsInner.appendChild(buttonNext);

    let deleteValue = button('form__button', 'удалить значение', 'del');
    buttonsInner.appendChild(deleteValue);

    const containerForColumns = createElement('div', 'columns__container');
    containerForColumns.appendChild(linesWrapper);
    document.body.appendChild(containerForColumns);

    // const linesWrapper = createElement('div', 'lines__wrapper');
    // document.body.appendChild(linesWrapper);

    return {
        "input": input,
        // "butBack": buttonBack,
        // "butNext": buttonNext,
        "delVal": deleteValue

    };
};


export default renderHTML;