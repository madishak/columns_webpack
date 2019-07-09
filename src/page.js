import createElement from './components/createElement.js';
import button from "./components/button"


const renderHTML = () => {

    const wrapper = createElement('div', 'wrapper');
    document.body.appendChild(wrapper);

    const form = createElement('form', 'form');
    wrapper.appendChild(form);

    const input = createElement('input', 'form__input');
    input.type = "text";
    input.id = 'input';
    input.placeholder = 'Enter numbers';
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

    const linesWrapper = createElement('div', 'lines__wrapper');
    document.body.appendChild(linesWrapper);

    return {
        "input": input,
        // "butBack": buttonBack,
        // "butNext": buttonNext,
        "delVal": deleteValue

    };
};


export default renderHTML;